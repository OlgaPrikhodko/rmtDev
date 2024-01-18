import { useState } from "react";
import Background from "./Background";
import Container from "./Container";
import Footer from "./Footer";
import Header, { HeaderTop } from "./Header";
import { useDebounce, useJobItems } from "../lib/hooks";
import JobItemContent from "./JobItemContent";
import Sidebar, { SidebarTop } from "./Sidebar";
import JobList from "./JobList";
import PaginationControls from "./PaginationControls";
import ResultsCount from "./ResultsCount";
import SortingControls from "./SortingControls";
import BookmarksButton from "./BookmarksButton";
import Logo from "./Logo";
import SearchForm from "./SearchForm";
import { Toaster } from "react-hot-toast";
import { COUNT_ON_PAGE } from "../lib/constants";
import { TPaginationDirection, TSortBy } from "../lib/types";

function App() {
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const debouncedSearchText = useDebounce(searchText, 500);
  const { jobItems, isLoading } = useJobItems(debouncedSearchText);
  const [sortBy, setSortBy] = useState<TSortBy>("relevant");

  const totalNumberOfResults = jobItems?.length || 0;
  const totalNumberOfPages = totalNumberOfResults / COUNT_ON_PAGE;

  const jobItemsSorted = [...(jobItems || [])]?.sort((a, b) => {
    if (sortBy === "relevant") {
      return b.relevanceScore - a.relevanceScore;
    }
    if (sortBy === "recent") {
      return a.daysAgo - b.daysAgo;
    }
    return -1;
  });

  const jobItemSortedAndSliced = jobItemsSorted?.slice(
    (currentPage - 1) * COUNT_ON_PAGE,
    currentPage * COUNT_ON_PAGE
  );

  const handleChangeSortBy = (newSortBy: TSortBy) => {
    setSortBy(newSortBy);
    setCurrentPage(1);
  };

  const handleChangePage = (direction: TPaginationDirection) => {
    if (direction === "next") {
      setCurrentPage((prev) => prev + 1);
    } else if (direction === "previous") {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <>
      <Background />
      <Header>
        <HeaderTop>
          <Logo />
          <BookmarksButton />
        </HeaderTop>

        <SearchForm searchText={searchText} setSearchText={setSearchText} />
      </Header>

      <Container>
        <Sidebar>
          <SidebarTop>
            <ResultsCount totalNumberOfResults={totalNumberOfResults} />
            <SortingControls onClick={handleChangeSortBy} sortBy={sortBy} />
          </SidebarTop>

          <JobList jobItems={jobItemSortedAndSliced} isLoading={isLoading} />

          <PaginationControls
            currentPage={currentPage}
            onChangePage={handleChangePage}
            totalNumberOfPages={totalNumberOfPages}
          />
        </Sidebar>

        <JobItemContent />
      </Container>

      <Footer />

      <Toaster position="top-right" />
    </>
  );
}

export default App;
