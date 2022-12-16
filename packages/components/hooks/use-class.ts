const componentPrefix = 'dg';

type ComponentName = 'button' | 'badge';

type ComponentClassSpace = {
  [key in ComponentName]: (props: any) => void;
}

export function useClassSpace(componentName: ComponentName, options?: any) {
  const componentClass = `${componentPrefix}-${componentName}`;
  const componentClassPrefix = `${componentClass}-`;

  function button() {
    return '';
  }

  function badge(badgeProps: any) {
    return {
      badge: `${componentClass}`,
      badgeContent: `
        ${componentClassPrefix}content 
        ${badgeProps.isDot ? `${componentClassPrefix}content-dot` : ''} 
        ${badgeProps.type ? `${componentClassPrefix}content-${badgeProps.type}` : ''}`,
    };
  }

  const componentClassSpace: ComponentClassSpace = {
    button,
    badge,
  };

  return componentClassSpace[componentName](options);
}

export default useClassSpace;
