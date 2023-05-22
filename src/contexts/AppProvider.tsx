import React, { useCallback, useState } from "react";
import { createContext } from "react";

interface IAppContext {
  spinLoading: boolean;
  startSpinLoading: () => void;
  stopSpinLoading: () => void;
}

const defaultState = {
  spinLoading: false,
  startSpinLoading: () => {
    return;
  },
  stopSpinLoading: () => {
    return;
  },
};

export const AppContext = createContext<IAppContext>(defaultState);

export default function AppProvider({ children }: { children: JSX.Element }) {
  const [spinLoading, setSpinLoading] = useState<boolean>(false);
  const startSpinLoading = useCallback(() => {
    setSpinLoading(true);
  }, []);
  const stopSpinLoading = useCallback(() => {
    setSpinLoading(false);
  }, []);

  return (
    <AppContext.Provider
      value={{
        spinLoading: spinLoading,
        startSpinLoading: startSpinLoading,
        stopSpinLoading: stopSpinLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
