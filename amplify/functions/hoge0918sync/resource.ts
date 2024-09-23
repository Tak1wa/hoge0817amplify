import { defineFunction } from '@aws-amplify/backend';

export const hoge0918sync = defineFunction({
  name: 'hoge0918sync',
  entry: './handler.ts',
  timeoutSeconds: 100,
});