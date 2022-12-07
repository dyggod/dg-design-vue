import type { ExtractPropTypes } from 'vue';

export const mgCardProps = {
  text: {
    type: String,
    default: '',
  },
};

export type MagicCardProps = ExtractPropTypes<typeof mgCardProps>
