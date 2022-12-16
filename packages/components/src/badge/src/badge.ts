import type { ExtractPropTypes } from 'vue';

export const badgeTypes = [
  'primary',
  'success',
  'warning',
  'info',
  'danger',
];

export const badgeProps = {
  type: {
    type: String,
    default: 'danger',
  },
  value: {
    type: [String, Number],
    default: '',
  },
  max: {
    type: Number,
    default: 99,
  },
  isDot: {
    type: Boolean,
    default: false,
  },
};

export type BadgeProps = ExtractPropTypes<typeof badgeProps>
