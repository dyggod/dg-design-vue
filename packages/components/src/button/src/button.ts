import type { ExtractPropTypes } from 'vue';

export const buttonTypes = [
  'default',
  'primary',
  'success',
  'warning',
  'info',
  'danger',
];

export const buttonProps = {
  type: {
    type: String,
    default: 'default',
  },
  size: {
    type: String,
    default: 'medium',
  },
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>