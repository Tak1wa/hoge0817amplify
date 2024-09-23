import { defineFunction } from '@aws-amplify/backend';

export const hoge0918async = defineFunction({
  name: 'hoge0918async',
  entry: './handler.ts',
  timeoutSeconds: 100,
});