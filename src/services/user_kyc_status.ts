import { prismaClient } from '../prisma';
import { WebHookCreated, WebHookOnHold, WebHookPending, WebHookReset, WebHookReviewed } from '../types/sumsub_webhook';
import { UserKycStatus } from '../types/user_kyc_status';

export async function confirmUserKycStatus(created: WebHookCreated, tx?: any): Promise<boolean> {
  const userAddress = created.externalUserId.toLowerCase();

  const createdTime: number = new Date(created.createdAtMs).getTime();
  const createdAt = createdTime;
  const updatedAt = createdTime;
  const levelName = created.levelName;
  const reviewStatus = created.reviewStatus || 'init';

  // db fields are not null, so provide defaults
  const defaultReviewAnswer = '';
  const defaultRejectedType = '';

  try {
    await (tx || prismaClient).userKycStatus.upsert({
      where: {
        userAddress: userAddress,
      },
      update: {
        applicantId: created.applicantId,
        levelName: levelName,
        reviewStatus: reviewStatus,
        reviewAnswer: defaultReviewAnswer, // Reset answer on new application
        rejectedType: defaultRejectedType, // Reset rejected type on new application
        updatedAt: updatedAt,
      },
      create: {
        userAddress: userAddress,
        applicantId: created.applicantId,
        levelName: levelName,
        reviewStatus: reviewStatus,
        reviewAnswer: defaultReviewAnswer,
        rejectedType: defaultRejectedType,
        updatedAt: updatedAt,
        createdAt: createdAt,
      },
    });
    console.log(`User KYC status confirmed for address: ${userAddress}`);
    return true;
  } catch (error) {
    console.error('Error confirming user KYC status:', error);
    throw error;
  }
}

export async function updateUserKycStatusByPending(pending: WebHookPending, tx?: any): Promise<boolean> {
  const userAddress = pending.externalUserId.toLowerCase();
  const webhookTime = new Date(pending.createdAtMs).getTime();
  const reviewStatus = pending.reviewStatus;

  // db fields are not null, so provide defaults
  const defaultReviewAnswer = '';
  const defaultRejectedType = '';

  const prisma = tx || prismaClient;

  try {
    const existingRecord = await prisma.userKycStatus.findUnique({
      where: { userAddress: userAddress },
    });

    if (!existingRecord) {
      console.log(`User KYC status (pending) skipped: User not found for address ${userAddress}`);
      return false;
    }

    const dbUpdatedAt = Number(existingRecord.updatedAt);

    if (webhookTime < dbUpdatedAt) {
      console.log(
        `User KYC status (pending) skipped: Webhook time (${webhookTime}) is older than DB time (${dbUpdatedAt}) for address ${userAddress}`,
      );
      return false;
    }

    await prisma.userKycStatus.update({
      where: {
        userAddress: userAddress,
      },
      data: {
        applicantId: pending.applicantId,
        levelName: pending.levelName,
        reviewStatus: reviewStatus,
        reviewAnswer: defaultReviewAnswer, // Reset answer on new application
        rejectedType: defaultRejectedType, // Reset rejected type on new application
        updatedAt: webhookTime,
      },
    });
    console.log(`User KYC status updated (pending) for address: ${userAddress}`);
    return true;
  } catch (error) {
    console.error('Error updating user KYC status (pending):', error);
    throw error;
  }
}

export async function updateUserKycStatusByReview(review: WebHookReviewed, tx?: any): Promise<boolean> {
  const userAddress = review.externalUserId.toLowerCase();
  const webhookTime = new Date(review.createdAtMs).getTime();
  const reviewStatus = review.reviewStatus;

  // Extract review result details safely
  const reviewResult = review.reviewResult || {};
  const reviewAnswer = reviewResult.reviewAnswer || '';
  const rejectedType = reviewResult.reviewRejectType || '';

  const prisma = tx || prismaClient;

  try {
    const existingRecord = await prisma.userKycStatus.findUnique({
      where: { userAddress: userAddress },
    });

    if (!existingRecord) {
      console.log(`User KYC status (review) skipped: User not found for address ${userAddress}`);
      return false;
    }

    const dbUpdatedAt = Number(existingRecord.updatedAt);

    if (webhookTime < dbUpdatedAt) {
      console.log(
        `User KYC status (review) skipped: Webhook time (${webhookTime}) is older than DB time (${dbUpdatedAt}) for address ${userAddress}`,
      );
      return false;
    }

    await prisma.userKycStatus.update({
      where: {
        userAddress: userAddress,
      },
      data: {
        applicantId: review.applicantId,
        levelName: review.levelName,
        reviewStatus: reviewStatus,
        reviewAnswer: reviewAnswer,
        rejectedType: rejectedType,
        updatedAt: webhookTime,
      },
    });
    console.log(`User KYC status updated (review) for address: ${userAddress}`);
    return true;
  } catch (error) {
    console.error('Error updating user KYC status (review):', error);
    throw error;
  }
}

export async function updateUserKycStatusByOnHold(review: WebHookOnHold, tx?: any): Promise<boolean> {
  const userAddress = review.externalUserId.toLowerCase();
  const webhookTime = new Date(review.createdAtMs).getTime();
  const reviewStatus = review.reviewStatus;

  // Extract review result details safely
  const reviewResult = review.reviewResult || {};
  const reviewAnswer = reviewResult.reviewAnswer || '';
  // OnHold usually doesn't have a final rejected type, so we reset it or keep empty
  const rejectedType = '';

  const prisma = tx || prismaClient;

  try {
    const existingRecord = await prisma.userKycStatus.findUnique({
      where: { userAddress: userAddress },
    });

    if (!existingRecord) {
      console.log(`User KYC status (onHold) skipped: User not found for address ${userAddress}`);
      return false;
    }

    const dbUpdatedAt = Number(existingRecord.updatedAt);

    if (webhookTime < dbUpdatedAt) {
      console.log(
        `User KYC status (onHold) skipped: Webhook time (${webhookTime}) is older than DB time (${dbUpdatedAt}) for address ${userAddress}`,
      );
      return false;
    }

    await prisma.userKycStatus.update({
      where: {
        userAddress: userAddress,
      },
      data: {
        applicantId: review.applicantId,
        levelName: review.levelName,
        reviewStatus: reviewStatus,
        reviewAnswer: reviewAnswer,
        rejectedType: rejectedType,
        updatedAt: webhookTime,
      },
    });
    console.log(`User KYC status updated (onHold) for address: ${userAddress}`);
    return true;
  } catch (error) {
    console.error('Error updating user KYC status (onHold):', error);
    throw error;
  }
}

export async function updateUserKycStatusByReset(reset: WebHookReset, tx?: any): Promise<boolean> {
  const userAddress = reset.externalUserId.toLowerCase();
  const webhookTime = new Date(reset.createdAtMs).getTime();
  const reviewStatus = reset.reviewStatus;

  // Extract review result details safely
  const reviewResult = reset.reviewResult || {};
  const reviewAnswer = reviewResult.reviewAnswer || '';
  // Reset usually clears rejection type
  const rejectedType = '';

  const prisma = tx || prismaClient;

  try {
    const existingRecord = await prisma.userKycStatus.findUnique({
      where: { userAddress: userAddress },
    });

    if (!existingRecord) {
      console.log(`User KYC status (reset) skipped: User not found for address ${userAddress}`);
      return false;
    }

    const dbUpdatedAt = Number(existingRecord.updatedAt);

    if (webhookTime < dbUpdatedAt) {
      console.log(
        `User KYC status (reset) skipped: Webhook time (${webhookTime}) is older than DB time (${dbUpdatedAt}) for address ${userAddress}`,
      );
      return false;
    }

    await prisma.userKycStatus.update({
      where: {
        userAddress: userAddress,
      },
      data: {
        applicantId: reset.applicantId,
        levelName: reset.levelName,
        reviewStatus: reviewStatus,
        reviewAnswer: reviewAnswer,
        rejectedType: rejectedType,
        updatedAt: webhookTime,
      },
    });
    console.log(`User KYC status updated (reset) for address: ${userAddress}`);
    return true;
  } catch (error) {
    console.error('Error updating user KYC status (reset):', error);
    throw error;
  }
}

export async function queryUserKycStatusByAddress(userAddress: string): Promise<UserKycStatus | null> {
  try {
    const record = await prismaClient.userKycStatus.findUnique({ where: { userAddress: userAddress } });
    if (!record) {
      return null;
    }

    return {
      id: String(record.id),
      userAddress: record.userAddress,
      applicantId: record.applicantId,
      levelName: record.levelName,
      reviewStatus: record.reviewStatus,
      reviewAnswer: record.reviewAnswer,
      rejectedType: record.rejectedType,
      updatedAt: record.updatedAt.toString(),
      createdAt: record.createdAt.toString(),
    };
  } catch (error) {
    return null;
  }
}
