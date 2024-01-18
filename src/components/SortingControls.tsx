import { TSortBy } from "../lib/types";

type SortingControlsProps = {
  onClick: (newSortBy: TSortBy) => void;
  sortBy: TSortBy;
};

export default function SortingControls({
  onClick,
  sortBy,
}: SortingControlsProps) {
  return (
    <section className="sorting">
      <i className="fa-solid fa-arrow-down-short-wide"></i>

      <SortingButton
        onClick={onClick}
        sortBy="relevant"
        isActive={"relevant" === sortBy}
      />
      <SortingButton
        onClick={onClick}
        sortBy="recent"
        isActive={"recent" === sortBy}
      />
    </section>
  );
}

type SortingButtonProps = SortingControlsProps & {
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
