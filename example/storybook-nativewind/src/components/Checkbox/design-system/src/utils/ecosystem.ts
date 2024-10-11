export type EcosystemItem = {
  id: string;
  name: string;
  question: string;
  description: string;
  link: string;
  icon: string;
  tag?: string;
  ossTag?: string;
  linearGradient: string;
};

export type DataKey =
  | 'ui'
  | 'style'
  | 'bolt'
  | 'gluestack'
  | 'framework'
  | 'pro'
  | 'starter-kit';
