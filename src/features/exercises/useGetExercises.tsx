import { useQuery } from "@tanstack/react-query";
import { getExercises } from "../../services/apiExercise";
import { useSearchParams } from "react-router-dom";

export function useGetExercises() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [searchParams] = useSearchParams();

  //Filter
  const currentFilter = searchParams.get("category");
  const filter =
    !currentFilter || currentFilter === "all" ? null : { field: "category", value: currentFilter };

  const { data: exercises, isLoading } = useQuery({
    queryFn: () => getExercises(filter),
    queryKey: ["exercises", currentFilter],
  });

  return { exercises, isLoading };
}
