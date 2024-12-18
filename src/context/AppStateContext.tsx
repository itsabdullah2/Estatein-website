import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { useLocation } from "react-router-dom";
import house1 from "../assets/images/house-1.jpg";

interface AppStateContextType {
  isBannerOpen: boolean;
  setIsBannerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleCloseBanner: () => void;
  activePage: string;
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
  isMenu: boolean;
  setIsMenu: React.Dispatch<React.SetStateAction<boolean>>;
  handleMenu: () => void;
  isFilterItemActive: string;
  handleFilterItem: (filter: string) => void;
  isImgActive: string;
  handleActiveImg: (img: string) => void;
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
  const [isMenu, setIsMenu] = useState<boolean>(false);
  // const [isDropDown, setIsDropDown] = useState<boolean>(false);
  const [isFilterItemActive, setIsFilterItemActive] = useState<string>("All");
  const [isImgActive, setIsImgActive] = useState<string>(house1);

  const handleCloseBanner = (): void => {
    setIsBannerOpen(false);
  };
  const handleMenu = (): void => {
    setIsMenu((prev: boolean): boolean => !prev);
  };

  const handleFilterItem = useCallback((filterItem: string): void => {
    setIsFilterItemActive(filterItem);
  }, []);
  const handleActiveImg = (img: string): void => {
    setIsImgActive(img);
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
    isMenu,
    setIsMenu,
    handleMenu,
    isFilterItemActive,
    handleFilterItem,
    isImgActive,
    handleActiveImg,
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
