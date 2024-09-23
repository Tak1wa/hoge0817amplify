import type { Schema } from '../../data/resource';
import { setTimeout } from "timers/promises";

export const handler: Schema["hoge0918async"]["functionHandler"] = async () => {
  await setTimeout(5000);
  return;
};