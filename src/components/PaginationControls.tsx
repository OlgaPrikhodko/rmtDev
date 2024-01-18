import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

type PaginationControlsProps = {
  onChangePage: (direction: "next" | "previous") => void;
  previousPage: number;
  nextPage: number;
};

export default function PaginationControls({
  onChangePage,
  previousPage,
  nextPage,
}: PaginationControlsProps) {
  return (
    <section className="pagination">
      {previousPage > 0 && (
        <PaginationButton
          direction="previous"
          onClick={onChangePage}
          currentPage={previousPage}
        />
      )}
      <PaginationButton
        direction="next"
        onClick={onChangePage}
        currentPage={nextPage}
      />
    </section>
  );
}

type PaginationButtonProps = {
  direction: "previous" | "next";
  onClick: (direction: "next" | "previous") => void;
  currentPage: number;
};

function PaginationButton({
  direction,
  onClick,
  currentPage,
}: PaginationButtonProps) {
  return (
    <button
      onClick={() => onClick(direction)}
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
