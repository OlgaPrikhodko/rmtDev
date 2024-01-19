import { useQueries } from "@tanstack/react-query";
import { fetchJobItem } from "../services/apiJobItem";
import { handleError } from "../lib/utils";
import { TJobItemDetails } from "../lib/types";

export function useJobItems(ids: number[]) {
  const results = useQueries({
    queries: ids.map((id) => ({
      queryKey: ["job-item", id],
      queryFn: () => fetchJobItem(id),

      staleTime: 1000 * 60 * 60, // 1 hour
      refetchOnWindowFocus: false,
      retry: false,
      enabled: Boolean(id),
      onError: handleError,
    })),
  });

  const jobItems = results
    .map((result) => result.data?.jobItem)
    .filter((jobItem) => jobItem !== undefined) as TJobItemDetails[];

  const isLoading = results.some((result) => result.isLoading);

  return { jobItems, isLoading };
}
