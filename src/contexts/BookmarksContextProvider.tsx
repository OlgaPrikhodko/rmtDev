import { ReactNode, createContext, useEffect, useState } from "react";

type BookmarksContextType = {
  bookmarkedIds: number[];
  handleToggleBookmark: (id: number) => void;
};

export const BookmarksContext = createContext<BookmarksContextType | null>(
  null
);

export default function BookmarkContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>(() => {
    return JSON.parse(localStorage.getItem("bookmarkedIds") || "[]");
  });

  const handleToggleBookmark = (id: number) => {
    if (bookmarkedIds.includes(id))
      setBookmarkedIds((prev) =>
        prev.filter((bookmarkedId) => bookmarkedId !== id)
      );
    else setBookmarkedIds((prev) => [...prev, id]);
  };

  useEffect(() => {
    localStorage.setItem("bookmarkedIds", JSON.stringify(bookmarkedIds));
  }, [bookmarkedIds]);

  return (
    <BookmarksContext.Provider value={{ bookmarkedIds, handleToggleBookmark }}>
      {children}
    </BookmarksContext.Provider>
  );
}
