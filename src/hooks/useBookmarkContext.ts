import { useContext } from "react";
import { BookmarksContext } from "../contexts/BookmarksContextProvider";

export function useBookmarkContext() {
  const context = useContext(BookmarksContext);

  if (!context) {
    throw new Error(
      `BookmarksContext was used outside of the BookmarksContextProvider`
    );
  }

  return context;
}
