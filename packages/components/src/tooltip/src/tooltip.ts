import type { ExtractPropTypes } from 'vue';
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '#/event';

export enum TooltipPlacement {
  Top = 'top',
  Left = 'left',
  Right = 'right',
  Bottom = 'bottom',
}

export enum TooltipTrigger {
  Click = 'click',
  Hover = 'hover',
  Focus = 'focus',
  Contextmenu = 'contextmenu',
}

export const tooltipProps = {
  modelValue: {
    type: Boolean,
    default: false,
  },
  visible: {
    type: Boolean,
    default: false,
  },
  content: {
    type: String,
    default: '',
  },
  // content 中的内容是否作为 html 处理
  rawContent: {
    type: Boolean,
    default: false,
  },
  placement: {
    type: String,
    default: TooltipPlacement.Top,
  },
  trigger: {
    type: String,
    default: TooltipTrigger.Hover,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  hideAfter: {
    type: Number,
    default: 200,
  },
};

export const tooltipEmits = [UPDATE_MODEL_EVENT];

export type TooltipProps = ExtractPropTypes<typeof tooltipProps>
