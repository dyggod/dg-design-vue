import type { ExtractPropTypes } from 'vue';
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '#/event';

export enum SwitchDgFun {
  // 灯
  Light = 'light',
}

export const switchProps = {
  modelValue: {
    type: Boolean,
    default: false,
  },
  value: {
    type: Boolean,
    default: false,
  },
  activeColor: {
    type: String,
    default: '#1e88e5',
  },
  inactiveColor: {
    type: String,
    default: '#909399',
  },
  disabled: {
    type: Boolean,
    default: false,
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

export const switchEmits = [UPDATE_MODEL_EVENT, CHANGE_EVENT];

export type SwitchProps = ExtractPropTypes<typeof switchProps>
