import useShoppingcartCustomization from '@sqwiro/app/customization/useShoppingcartCustomization';
import React from 'react';

const ComponentsCustomizationProvider = ({ children }: { children: any }) => {
  useShoppingcartCustomization();

  return <>{children}</>;
};

export default ComponentsCustomizationProvider;
