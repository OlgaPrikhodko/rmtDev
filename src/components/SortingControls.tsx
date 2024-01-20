import { useJobItemsContext } from "../hooks/useJobItemsContext";
import { TSortBy } from "../lib/types";

export default function SortingControls() {
  const { sortBy, handleChangeSortBy } = useJobItemsContext();

  return (
    <section className="sorting">
      <i className="fa-solid fa-arrow-down-short-wide"></i>

      <SortingButton
        onClick={handleChangeSortBy}
        sortBy="relevant"
        isActive={"relevant" === sortBy}
      />
      <SortingButton
        onClick={handleChangeSortBy}
        sortBy="recent"
        isActive={"recent" === sortBy}
      />
    </section>
  );
}

type SortingButtonProps = {
  onClick: (newSortBy: TSortBy) => void;
  sortBy: TSortBy;
  isActive: boolean;
};

function SortingButton({ onClick, sortBy, isActive }: SortingButtonProps) {
  return (
    <button
      onClick={() => onClick(sortBy)}
      className={`sorting__button sorting__button--${sortBy} ${
        isActive ? "sorting__button--active" : ""
      }`}
    >
      {sortBy}
    </button>
  );
}
