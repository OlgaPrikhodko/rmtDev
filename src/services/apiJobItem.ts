import { BASE_URL } from "../lib/constants";
import { TJobItemDetails } from "../lib/types";

type JobItemApiResponse = {
  public: boolean;
  jobItem: TJobItemDetails;
};

export const fetchJobItem = async (id: number): Promise<JobItemApiResponse> => {
  const response = await fetch(`${BASE_URL}/${id}`);
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.description);
  }
  const data = await response.json();

  return data;
};
