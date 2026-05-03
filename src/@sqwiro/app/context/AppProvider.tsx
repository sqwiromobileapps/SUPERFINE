import React from 'react';

import useAppProvider from './useAppProvider';

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  useAppProvider();

  return <>{children}</>;
};

export default AppProvider;
