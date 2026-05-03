import useAppNavigationContext from '@sqwiro/appcore/context/useAppNavigationContext';

const useAppProvider = () => {
  const { dispatch } = useAppNavigationContext();

  // React.useEffect(() => {
  //   dispatch((state) => ({
  //     ...state,
  //     appNavigationContext: {
  //       ...state.appNavigationContext,
  //       defaultUserApp: 'vumawalletApp',
  //     },
  //   }));
  // }, []);
};

export default useAppProvider;
