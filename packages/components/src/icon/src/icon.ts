import type { ExtractPropTypes, PropType } from 'vue';

type IconName = 'check' | 'close' | 'loading';

export const iconProps = {
  name: {
    type: String as PropType<IconName>,
    default: '',
  },
  dgFun: {
    type: String,
    default: '',
  },
};

export type IconProps = ExtractPropTypes<typeof iconProps>
