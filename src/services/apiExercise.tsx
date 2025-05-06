/* eslint-disable @typescript-eslint/no-explicit-any */
import { Exercise } from "../features/exercises/types/Exercise";
import { supabase } from "./supabase";

export async function getExercises() {
  const { data, error } = await supabase.from("exercises").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function createExercise(newExercise: Exercise) {
  const { data, error } = await supabase
    .from("exercises")
    .insert([{ ...newExercise }])
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function updateExercise({
  newExercise,
  id,
}: {
  newExercise: Exercise;
  id: number;
}) {
  const { data, error } = await supabase
    .from("exercises")
    .update(newExercise)
    .eq("id", id)
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function deleteExercise(id: number) {
  const { error } = await supabase.from("exercises").delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
}
