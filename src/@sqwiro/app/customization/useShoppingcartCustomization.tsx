import useShoppingcartAppContext from '@sqwiro/userapps/shoppingcart/context/useShoppingcartAppContext';
// import BrowseCoursesButton from '@sqwiro/userapps/smartlearner/components/BrowseCoursesButton';
import React from 'react';

function useShoppingcartCustomization() {
  const { dispatch } = useShoppingcartAppContext();
  React.useEffect(() => {
    dispatch((state) => {
      return {
        shoppingcartAppContext: {
          ...state.shoppingcartAppContext,
          // ProductsBrowserButton: BrowseCoursesButton,
        },
      };
    });
  }, []);
}

export default useShoppingcartCustomization;
