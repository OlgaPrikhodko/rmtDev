import { useBookmarkContext } from "../hooks/useBookmarkContext";
import JobList from "./JobList";

export default function BookmarksPopover() {
  const { bookmarkedJobItems } = useBookmarkContext();

  return (
    <div className="bookmarks-popover">
      <JobList jobItems={bookmarkedJobItems} isLoading={false} />
    </div>
  );
}
