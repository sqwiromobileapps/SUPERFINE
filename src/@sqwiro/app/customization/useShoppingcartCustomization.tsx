// import BrowseCoursesButton from '@sqwiro/userapps/smartlearner/components/BrowseCoursesButton';
import useSmartshoppingcartAppContext from '@sqwiro/ecommerceapps/smartshoppingcart/context/useSmartshoppingcartAppContext';
import React from 'react';

function useShoppingcartCustomization() {
  const { dispatch } = useSmartshoppingcartAppContext();
  React.useEffect(() => {
    dispatch((state) => {
      return {
        smartshoppingcartAppContext: {
          ...state.smartshoppingcartAppContext,
          // ProductsBrowserButton: BrowseCoursesButton,
        },
      };
    });
  }, []);
}

export default useShoppingcartCustomization;
