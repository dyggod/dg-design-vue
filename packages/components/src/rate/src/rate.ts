import type { ExtractPropTypes } from 'vue';
import { isNumber } from '@dg-ui/utils';
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '#/event';

export const rateProps = {
  modelValue: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 5,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  showText: {
    type: Boolean,
    default: false,
  },
  texts: {
    type: Array,
    default: () => ['极差', '失望', '一般', '满意', '惊喜'],
  },
  allowClear: {
    type: Boolean,
    default: false,
  },
};

export const rateEmits = {
  [CHANGE_EVENT]: (value: number) => isNumber(value),
  [UPDATE_MODEL_EVENT]: (value: number) => isNumber(value),
};

export type RateProps = ExtractPropTypes<typeof rateProps>
