import { useQuery } from "@tanstack/react-query";
import { getExercises } from "../../services/apiExercise";

export function useGetExercises() {
  const { data: exercises, isLoading } = useQuery({
    queryFn: getExercises,
    queryKey: ["exercises"],
  });

  return { exercises, isLoading };
}
