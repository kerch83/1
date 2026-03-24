export type ReputationVote = 'up' | 'down';

export interface Message {
  authorId: string;
  body: string;
  readSeconds: number;
  timestamp: string;
}

export interface Block<TPayload> {
  index: number;
  previousHash: string;
  hash: string;
  createdAt: string;
  payload: TPayload;
}

export interface ReputationChange {
  delta: number;
  nextScore: number;
}

export const PROJECT_NAME = 'Decentralized P2P Chat';
export const TIME_BUDGET_PER_DAY = 86_400;
export const ANONYMOUS_POST_MULTIPLIER = 3;

export function createGenesisBlock<TPayload>(payload: TPayload): Block<TPayload> {
  return {
    index: 0,
    previousHash: 'GENESIS',
    hash: 'GENESIS-0',
    createdAt: new Date().toISOString(),
    payload,
  };
}

export function calculateReadingReward(readSeconds: number): number {
  if (readSeconds <= 0) {
    return 0;
  }

  return Math.min(Math.round(readSeconds), TIME_BUDGET_PER_DAY);
}

export function applyReputationVote(currentScore: number, vote: ReputationVote): ReputationChange {
  const delta = vote === 'up' ? 1 : -1;

  return {
    delta,
    nextScore: currentScore + delta,
  };
}

export function estimatePublishingCost(readSeconds: number, anonymous = false): number {
  const baseCost = Math.max(5, calculateReadingReward(readSeconds));

  return anonymous ? baseCost * ANONYMOUS_POST_MULTIPLIER : baseCost;
}
