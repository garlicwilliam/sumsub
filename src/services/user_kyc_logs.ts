import { SumsubWebHook } from '../types/sumsub_webhook';
import { prismaClient } from '../prisma';

export async function insertUserKycLog(webhook: SumsubWebHook, tx?: any): Promise<boolean> {
  const prisma = tx || prismaClient;
  const correlationId = webhook.correlationId;

  // 1. Check if correlationId already exists
  const existingLog = await prisma.userKycLogs.findFirst({
    where: { correlationId: correlationId },
  });

  if (existingLog) {
    throw new Error(`User KYC log skipped: correlationId ${correlationId} already exists`);
  }

  // 2. Extract values based on webhook type
  let reviewAnswer: string | undefined;
  let rejectedType: string | undefined;
  let moderationComment: string | undefined;
  let clientComment: string | undefined;

  if ('reviewResult' in webhook) {
    // These fields exist in WebHookReviewed, WebHookOnHold, WebHookReset
    const result: any = webhook.reviewResult;
    reviewAnswer = result.reviewAnswer;
    rejectedType = result.reviewRejectType;
    moderationComment = result.moderationComment;
    clientComment = result.clientComment;
  }

  try {
    const createdAt = new Date(webhook.createdAtMs).getTime();
    await prisma.userKycLogs.create({
      data: {
        createdAt: createdAt,
        correlationId: correlationId,
        applicantId: webhook.applicantId,
        userAddress: webhook.externalUserId.toLowerCase(),
        levelName: webhook.levelName,
        type: webhook.type,
        reviewStatus: webhook.reviewStatus,
        reviewAnswer: reviewAnswer,
        rejectedType: rejectedType,
        clientComment: clientComment,
        moderationComment: moderationComment,
      },
    });
    console.log(`User KYC log inserted for correlationId: ${correlationId}`);
    return true;
  } catch (error) {
    throw error;
  }
}
