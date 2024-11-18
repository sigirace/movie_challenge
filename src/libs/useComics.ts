import { useQuery } from "@tanstack/react-query";
import { listComics } from "../api";
import { ComicsResponse } from "../types";

const useComics = () => {
  const { isLoading, data, isError } = useQuery<ComicsResponse>({
    queryKey: ["comics"],
    queryFn: listComics,
    retry: false,
  });

  return { isLoading, data, isError };
};

export default useComics;
