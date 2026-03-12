type WebHookBase = {
  applicantId: string;
  inspectionId: string;
  correlationId: string;
  levelName: string;
  externalUserId: string;
  type: string;
  reviewStatus: string;
  createdAtMs: string;
};

export type SumSubWebHookType =
  | 'applicantCreated'
  | 'applicantPending'
  | 'applicantReviewed'
  | 'applicantOnHold'
  | 'applicantReset';

export type WebHookCreated = WebHookBase & {
  type: 'applicantCreated';
};

export type WebHookPending = WebHookBase & {
  type: 'applicantPending';
};

export type WebHookReviewed = WebHookBase & {
  type: 'applicantReviewed';
  reviewResult: {
    reviewAnswer: 'GREEN' | 'RED';
    reviewRejectType?: 'FINAL' | 'RETRY';
    moderationComment?: string;
    clientComment?: string;
  };
};

export type WebHookOnHold = WebHookBase & {
  type: 'applicantOnHold';
  reviewResult: {
    reviewAnswer: 'GREEN' | 'RED';
  };
};

export type WebHookReset = WebHookBase & {
  type: 'applicantReset';
  reviewResult: {
    reviewAnswer: 'GREEN' | 'RED';
  };
};

export type SumsubWebHook = WebHookCreated | WebHookPending | WebHookReviewed | WebHookOnHold | WebHookReset;
