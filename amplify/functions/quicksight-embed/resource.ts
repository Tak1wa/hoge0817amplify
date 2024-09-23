import { defineFunction } from '@aws-amplify/backend';

export const quicksightEmbed = defineFunction({
  name: 'quicksight-embed',
  entry: './handler.ts',
});