export const colors = {
  grayBackground: '#272522',
  titles: '#F09D51',
  mainText: '#FCF3D9',
  black: '#272522',
  footer: 'rgba(255,255,255,0.4)',
  white: '#FFFFFF',
  menuBorder: 'rgba(255, 255, 255, 0.2)',
  lightOrange: '#F4E5C2',
};

export const questions = [
  {
    id: 1,
    question: 'What is an “idle game”?',
    answer:
      'An idle game is a genre of games that doesn’t require constant attention of a player. The game can play itself in background, accumulating resources and rewards. A game session usually is very short and focused around distribution of accumulated resources and upgrading production tools.',
    answerRows: 4,
    answerRowsMobile: 7,
  },

  {
    id: 2,
    question: 'What is the goal of the game?',
    answer:
      'The goal of the game is to expand your island, gather resources, optimise production and ultimately accumulate the most precious assets that can be exchanged for real money. The game has a long progression chain, lots of upgrades to purchase and technologies to explore to make this process as fun as possible.',
    answerRows: 4,
    answerRowsMobile: 7,
  },

  {
    id: 3,
    question: 'Can I play with my friends?',
    answer:
      'The game supports several social features, including a Leaderboard, integrations with social media and sharing in-game resources with friends.',
    answerRows: 2,
    answerRowsMobile: 4,
  },

  {
    id: 4,
    question: 'Can I decorate and customise Hamsterville?',
    answer:
      'Hamsterpunk allows you to decorate your settlement, rearrange the buildings, change skins of structures and characters.',
    answerRows: 2,
    answerRowsMobile: 3,
  },

  {
    id: 5,
    question: 'How do I earn?',
    answer:
      'Even though the game is free to play, the “play to earn” mechanics become available only when a player does in-game purchases. Hamsterpunk utilises the funds for yield farming and returns earned funds back to the users, granting up to 30% of APY.',
    answerRows: 3,
    answerRowsMobile: 6,
  },

  {
    id: 6,
    question: 'How do I learn crypto?',
    answer:
      'Hamsterpunk allows players to accumulate a rare in-game resource that can be exchanged for real money. Actual exchange happens using crypto wallet and L1 solution. The game teaches the user how to create and secure a wallet, how to get a public address, claim the rewards and utilise them for yield farming.',
    answerRows: 4,
    answerRowsMobile: 7,
  },

  {
    id: 7,
    question: 'How AI is used in the game?',
    answer:
      'AI is used to generate content for the game, including AI generated random events, quests and in-game encounters, as well as art and graphic assets for them.',
    answerRows: 2,
    answerRowsMobile: 4,
  },
];

export const menuValue = [
  { value: 'HOME', to: '#home', id: 1 },
  { value: 'TRAILER', to: '#trailer', id: 2 },
  { value: 'DETAILS', to: '#details', id: 3 },
  { value: 'FAQ', to: '#faq', id: 4 },
];

export const mediaBreakpoints = {
  sm: 768,
  md: 1024,
  lg: 1440,
};
