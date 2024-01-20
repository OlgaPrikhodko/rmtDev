import { useActiveIdContext } from "../hooks/useActiveIdContext";
import { useJobItemsContext } from "../hooks/useJobItemsContext";
import JobListItem from "./JobListItem";
import Spinner from "./Spinner";

export function JobList() {
  const { activeId } = useActiveIdContext();
  const { jobItemsSortedAndSliced: jobItems, isLoading } = useJobItemsContext();

  return (
    <ul className="job-list">
      {isLoading && <Spinner />}

      {!isLoading &&
        jobItems &&
        jobItems.map((jobItem) => (
          <JobListItem
            jobItem={jobItem}
            key={jobItem.id}
            isActive={jobItem.id === activeId}
          />
        ))}
    </ul>
  );
}

export default JobList;
