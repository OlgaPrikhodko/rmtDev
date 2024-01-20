import {
  ReactNode,
  createContext,
  useCallback,
  useMemo,
  useState,
} from "react";
import { TJobItem, TPaginationDirection, TSortBy } from "../lib/types";
import { useSearchQuery } from "../hooks/useSearchQuery";
import { COUNT_ON_PAGE } from "../lib/constants";
import { useSearchTextContext } from "../hooks/useSearchTextContex";

type JobItemsContextType = {
  jobItems: TJobItem[] | undefined;
  jobItemsSortedAndSliced: TJobItem[] | undefined;
  isLoading: boolean;
  totalNumberOfPages: number;
  totalNumberOfResults: number;
  currentPage: number;
  sortBy: TSortBy;
  handleChangePage: (direction: TPaginationDirection) => void;
  handleChangeSortBy: (newSortBy: TSortBy) => void;
};

export const JobItemsContext = createContext<JobItemsContextType | null>(null);

export default function JobItemsContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { debouncedSearchText } = useSearchTextContext();

  const { jobItems, isLoading } = useSearchQuery(debouncedSearchText);
  const [currentPage, setCurrentPage] = useState(1);

  const [sortBy, setSortBy] = useState<TSortBy>("relevant");

  const totalNumberOfResults = jobItems?.length || 0;
  const totalNumberOfPages = totalNumberOfResults / COUNT_ON_PAGE;

  const jobItemsSorted = useMemo(
    () =>
      [...(jobItems || [])]?.sort((a, b) => {
        if (sortBy === "relevant") {
          return b.relevanceScore - a.relevanceScore;
        }
        if (sortBy === "recent") {
          return a.daysAgo - b.daysAgo;
        }
        return -1;
      }),
    [sortBy, jobItems]
  );

  const jobItemsSortedAndSliced = useMemo(
    () =>
      jobItemsSorted?.slice(
        (currentPage - 1) * COUNT_ON_PAGE,
        currentPage * COUNT_ON_PAGE
      ),
    [currentPage, jobItemsSorted]
  );

  const handleChangeSortBy = useCallback((newSortBy: TSortBy) => {
    setSortBy(newSortBy);
    setCurrentPage(1);
  }, []);

  const handleChangePage = useCallback((direction: TPaginationDirection) => {
    if (direction === "next") {
      setCurrentPage((prev) => prev + 1);
    } else if (direction === "previous") {
      setCurrentPage((prev) => prev - 1);
    }
  }, []);

  const contextValue = useMemo(
    () => ({
      jobItems,
      jobItemsSortedAndSliced,
      isLoading,
      totalNumberOfPages,
      totalNumberOfResults,
      currentPage,
      sortBy,
      handleChangePage,
      handleChangeSortBy,
    }),
    [
      jobItems,
      jobItemsSortedAndSliced,
      isLoading,
      totalNumberOfPages,
      totalNumberOfResults,
      currentPage,
      sortBy,
      handleChangePage,
      handleChangeSortBy,
    ]
  );

  return (
    <JobItemsContext.Provider value={contextValue}>
      {children}
    </JobItemsContext.Provider>
  );
}
