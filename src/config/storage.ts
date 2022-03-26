export const StorageKey = {
  hightScore: 'hightScore',
} as const;

export type StorageKeyType = {
  [key: string]: any;
};
