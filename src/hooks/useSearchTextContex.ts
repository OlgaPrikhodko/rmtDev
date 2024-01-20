import { useContext } from "react";
import { SearchTextContext } from "../contexts/SearchTextContextProvider";

export function useSearchTextContext() {
  const context = useContext(SearchTextContext);

  if (!context) {
    throw new Error(
      `SearchTextContext was used outside of the SearchTextContextProvider`
    );
  }

  return context;
}
