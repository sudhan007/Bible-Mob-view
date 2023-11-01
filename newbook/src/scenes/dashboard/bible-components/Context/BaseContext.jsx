import { useContext, createContext } from "react";

const BMViewContext = createContext({
  BMState: {},
  setBMState: () => {},
  BibleState: {},
  setBibleState: () => {},
  MessageState: {},
  setMessageState: () => {},
});

const BaseDashboardContext = () => useContext(BMViewContext);

export { BMViewContext, BaseDashboardContext };
