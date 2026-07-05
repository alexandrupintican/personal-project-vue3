export type Technologies = {
  stack: TechnologyStack[];
  inProgress: TechnologyStack[];
};

export type TechnologyStack = {
  name: string;
  confidence: number;
};
