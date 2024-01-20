import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { TPaginationDirection } from "../lib/types";
import { useJobItemsContext } from "../hooks/useJobItemsContext";

export default function PaginationControls() {
  const { currentPage, handleChangePage, totalNumberOfPages } =
    useJobItemsContext();

  return (
    <section className="pagination">
      {currentPage > 1 && (
        <PaginationButton
          direction="previous"
          onClick={handleChangePage}
          currentPage={currentPage - 1}
        />
      )}

      {currentPage < totalNumberOfPages && (
        <PaginationButton
          direction="next"
          onClick={handleChangePage}
          currentPage={currentPage + 1}
        />
      )}
    </section>
  );
}

type PaginationButtonProps = {
  direction: TPaginationDirection;
  onClick: (direction: TPaginationDirection) => void;
  currentPage: number;
};

function PaginationButton({
  direction,
  onClick,
  currentPage,
}: PaginationButtonProps) {
  return (
    <button
      onClick={(e) => {
        onClick(direction);
        e.currentTarget.blur();
      }}
      className={`pagination__button pagination__button--${direction}`}
    >
      {direction === "previous" && (
        <ArrowLeftIcon className="pagination--icon" />
      )}
      Page {currentPage}
      {direction === "next" && <ArrowRightIcon className="pagination--icon" />}
    </button>
  );
}
