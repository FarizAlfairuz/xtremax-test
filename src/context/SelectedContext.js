import { createContext, useContext, useState } from "react";

const defaultValue = null;

const SelectedContext = createContext();

const SelectedContextProvider = ({ children }) => {
  const [selected, setSelected] = useState(defaultValue);
  const [selectedMenu, setSelectedMenu] = useState(defaultValue)

  return (
    <SelectedContext.Provider
      value={{
        selected,
        setSelected,
        selectedMenu,
        setSelectedMenu
      }}
    >
      {children}
    </SelectedContext.Provider>
  );
};

const useSelectedContext = () => {
  const context = useContext(SelectedContext);

  return context;
};

export { SelectedContextProvider, useSelectedContext };
