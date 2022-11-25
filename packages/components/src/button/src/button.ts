import type { ExtractPropTypes } from 'vue';

export const buttonTypes = [
  'default',
  'primary',
  'success',
  'warning',
  'info',
  'danger',
];

export enum ButtonDgFun {
  Run = 'run',
}

export const buttonProps = {
  type: {
    type: String,
    default: 'default',
  },
  size: {
    type: String,
    default: 'medium',
  },
  dgFun: {
    type: String,
    default: '',
  },
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
