import {
  PROJECT_NAME,
  applyReputationVote,
  calculateReadingReward,
  createGenesisBlock,
  estimatePublishingCost,
} from '@decentralized-chat/shared';

const welcomeBlock = createGenesisBlock({
  roomId: 'general',
  topic: 'Bootstrap the network',
});

const readingReward = calculateReadingReward(18.4);
const reputation = applyReputationVote(12, 'up');
const anonymousCost = estimatePublishingCost(12, true);

console.log(`🤖 ${PROJECT_NAME} bot node starting...`);
console.log('Genesis room block:', welcomeBlock);
console.log('Sample reading reward:', readingReward);
console.log('Updated reputation:', reputation.nextScore);
console.log('Anonymous publishing cost:', anonymousCost);
