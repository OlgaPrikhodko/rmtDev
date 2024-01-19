import { useContext } from "react";
import { ActiveIdContext } from "../contexts/ActiveIdContextProvider";

export function useActiveIdContext() {
  const context = useContext(ActiveIdContext);

  if (!context) {
    throw new Error(
      `ActiveIdContext was used outside of the ActiveIdContextProvider`
    );
  }

  return context;
}
