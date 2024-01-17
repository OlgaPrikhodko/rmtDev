import { useEffect, useState } from "react";
import { TJobItem } from "./types";

const BASE_URL = "https://bytegrad.com/course-assets/projects/rmtdev/api/data";

export function useJobItems(searchText: string) {
  const [jobItems, setJobItems] = useState<TJobItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const jobItemsSliced = jobItems.slice(0, 7);

  useEffect(() => {
    if (!searchText) return;

    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(`${BASE_URL}?search=${searchText}`);
      const data = await response.json();
      setIsLoading(false);
      setJobItems(data.jobItems);
    };

    fetchData();
  }, [searchText]);

  return { isLoading, jobItems: jobItemsSliced };
}
