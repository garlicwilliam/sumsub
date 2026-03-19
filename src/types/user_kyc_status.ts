export type UserKycStatus = {
  id: string;
  userAddress: string;
  applicantId: string;
  levelName: string;
  reviewStatus: string;
  reviewAnswer: string;
  rejectedType: string;
  updatedAt: string;
  createdAt: string;
};

export type UserKycStatusRes = {
  userAddress: string;
  reviewStatus: string;
  reviewAnswer: string;
  rejectedType: string;
  applicantId: string;
};
