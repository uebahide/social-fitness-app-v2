/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { categories } from "./categories";
import Button from "../../ui/Button";
import { Exercise } from "./types/Exercise";
import { useUpdateExercise } from "./useUpdateExercise";
import { useCreateExercise } from "./useCreateExercise";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import Error from "../../ui/Error";
import Select from "../../ui/Select";
import ModalForm from "../../ui/ModalForm";

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 20rem 20rem 5rem 1fr;
  align-items: center;
  padding: 1.5rem 0;
  gap: 2rem;
  border-bottom: 1px solid var(--color-grey-200);
`;

const Textarea = styled.textarea`
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--color-grey-300);
  height: 8rem;
  padding: 1rem 1rem;
`;

const Buttons = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: right;
  gap: 1rem;
`;

export default function ExerciseUpdateForm({
  onCloseModal,
  exercise,
}: {
  onCloseModal?: () => void;
  exercise?: Exercise;
}) {
  const { category, duration, distance, reps, sets, weight, notes } =
    exercise || {};
  const isUpdateSession = exercise !== null;
  const {
    register,
    handleSubmit,
    watch,
    reset,
    getValues,
    formState: { errors },
  } = useForm<Exercise>({
    defaultValues: {
      category,
      duration,
      distance,
      reps,
      sets,
      weight,
      notes,
    },
  });
  const units = categories.filter(
    (category) => category.name === watch("category"),
  )[0]?.units;
  const { isUpdating, updateExercise } = useUpdateExercise();
  const { isCreating, createExercise } = useCreateExercise();
  const isWorking = isUpdating || isCreating;

  //set back values of unit to null whenever category is changed
  function onChangeCategory() {
    reset({
      ...getValues(),
      distance: null,
      reps: null,
      sets: null,
      weight: null,
    });
  }

  function onSubmit(data: Exercise) {
    const newExercise = {
      ...data,
      distance: data.distance || null,
      reps: data.reps || null,
      sets: data.sets || null,
      weight: data.weight || null,
    };
    if (isUpdateSession && exercise) {
      updateExercise(
        { newExercise, id: exercise.id },
        {
          onSuccess: onCloseModal,
        },
      );
    } else {
      createExercise(newExercise, {
        onSuccess: onCloseModal,
      });
    }
  }
  return (
    <ModalForm onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <Label>Category</Label>
        <Select
          id="category"
          {...register("category", { onChange: onChangeCategory })}
          disabled={isWorking}
        >
          {categories.map(({ name }) => (
            <option value={name} key={name}>
              {name}
            </option>
          ))}
        </Select>
      </FormRow>

      <FormRow>
        <Label>Duration</Label>
        <Input
          id="duration"
          type="number"
          disabled={isWorking}
          {...register("duration", {
            required: { value: true, message: "This field is required" },
            min: {
              value: 1,
              message: "Duration should be at least more than 1 min",
            },
          })}
        />
        <Label>min</Label>
        <Error>{errors?.duration?.message}</Error>
      </FormRow>

      {units?.map(({ name, unit }) => (
        <FormRow key={name}>
          <Label>{name}</Label>
          <Input
            type="number"
            key={name}
            disabled={isWorking}
            {...register(name, {
              min: {
                value: 1,
                message: "Duration should be at least more than 1 min",
              },
            })}
          />
          <Label>{unit}</Label>
          <Error>{errors[name]?.message}</Error>
        </FormRow>
      ))}

      <FormRow>
        <Label>Notes</Label>
        <Textarea id="notes" {...register("notes")} disabled={isWorking} />
      </FormRow>

      <Buttons>
        <Button
          size="medium"
          variation="secondary"
          type="reset"
          onClick={onCloseModal}
          disabled={isWorking}
        >
          Cancel
        </Button>
        <Button size="medium" variation="primary" disabled={isWorking}>
          {isUpdateSession ? "Update" : "Create"}
        </Button>
      </Buttons>
    </ModalForm>
  );
}
