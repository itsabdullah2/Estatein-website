import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface AppStateContextType {
  isBannerOpen: boolean;
  setIsBannerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleCloseBanner: () => void;
  activePage: string;
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
  isDropDown: boolean;
  setIsDropDown: React.Dispatch<React.SetStateAction<boolean>>;
  handleDropDown: () => void;
}

const AppStateContext = createContext<AppStateContextType | null>(null);

export const AppStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const location = useLocation();
  const [isBannerOpen, setIsBannerOpen] = useState<boolean>(true);
  const [activePage, setActivePage] = useState<string>("/");
  const [isDropDown, setIsDropDown] = useState<boolean>(false);

  const handleCloseBanner = (): void => {
    setIsBannerOpen(false);
  };
  const handleDropDown = (): void => {
    setIsDropDown((prev: boolean): boolean => !prev);
  };

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location.pathname]);

  const values: AppStateContextType = {
    isBannerOpen,
    setIsBannerOpen,
    handleCloseBanner,
    activePage,
    setActivePage,
    isDropDown,
    setIsDropDown,
    handleDropDown,
  };

  return (
    <AppStateContext.Provider value={values}>
      {children}
    </AppStateContext.Provider>
  );
};
export const useAppState = () => {
  const context = useContext(AppStateContext); // Get the context value
  if (context === null) {
    throw new Error("useAppState must be used within an AppStateProvider");
  }
  return context; // Return the context value (which is of type AppStateContextType)
};
