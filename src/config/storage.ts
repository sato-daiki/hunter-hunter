export const StorageKey = {
  jenny: 'jenny',
  hightScore: 'hightScore',
} as const;

export type StorageKeyType = {
  [key: string]: any;
};
