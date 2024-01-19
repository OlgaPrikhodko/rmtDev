import { ReactNode, createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { useJobItems } from "../hooks/useJobItems";
import { TJobItem } from "../lib/types";

type BookmarksContextType = {
  bookmarkedIds: number[];
  bookmarkedJobItems: TJobItem[];
  handleToggleBookmark: (id: number) => void;
  isLoading: boolean;
};

export const BookmarksContext = createContext<BookmarksContextType | null>(
  null
);

export default function BookmarkContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [bookmarkedIds, setBookmarkedIds] = useLocalStorage<number[]>(
    "bookmarkedIds",
    []
  );

  const { jobItems: bookmarkedJobItems, isLoading } =
    useJobItems(bookmarkedIds);

  const handleToggleBookmark = (id: number) => {
    if (bookmarkedIds.includes(id))
      setBookmarkedIds((prev) =>
        prev.filter((bookmarkedId) => bookmarkedId !== id)
      );
    else setBookmarkedIds((prev) => [...prev, id]);
  };

  return (
    <BookmarksContext.Provider
      value={{
        bookmarkedIds,
        bookmarkedJobItems,
        isLoading,
        handleToggleBookmark,
      }}
    >
      {children}
    </BookmarksContext.Provider>
  );
}
