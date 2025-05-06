import Button from "../../ui/Button";
import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import ExerciseRow from "./ExerciseRow";
import { useGetExercises } from "./useGetExercises";

// export const fakeExercises: Exercise[] = [
//   {
//     id: 1,
//     user_id: 101,
//     exercise_type: "Running",
//     duration_minutes: 30,
//     distance_km: 5.0,
//     calories_burned: 300,
//     note: "Morning jog in the park",
//     created_at: "Apr 30",
//     updated_at: "Apr 30",
//   },
//   {
//     id: 2,
//     user_id: 102,
//     exercise_type: "Push-ups",
//     duration_minutes: 15,
//     reps: 50,
//     sets: 3,
//     note: "Struggled with last set",
//     created_at: "Apr 30",
//     updated_at: "Apr 30",
//   },
//   {
//     id: 3,
//     user_id: 103,
//     exercise_type: "Cycling",
//     duration_minutes: 45,
//     distance_km: 12.4,
//     calories_burned: 450,
//     created_at: "Apr 30",
//     updated_at: "Apr 30",
//   },
//   {
//     id: 4,
//     user_id: 101,
//     exercise_type: "Squats",
//     duration_minutes: 20,
//     reps: 30,
//     sets: 4,
//     weight_kg: 40,
//     note: "Increased weight from last week",
//     created_at: "Apr 30",
//     updated_at: "Apr 30",
//   },
//   {
//     id: 5,
//     user_id: 104,
//     exercise_type: "Yoga",
//     duration_minutes: 60,
//     note: "Focused on breathing and flexibility",
//     created_at: "Apr 30",
//     updated_at: "Apr 30",
//   },
//   {
//     id: 6,
//     user_id: 102,
//     exercise_type: "Swimming",
//     duration_minutes: 40,
//     distance_km: 1.2,
//     calories_burned: 350,
//     created_at: "Apr 30",
//     updated_at: "Apr 30",
//   },
//   {
//     id: 7,
//     user_id: 103,
//     exercise_type: "Jump Rope",
//     duration_minutes: 10,
//     reps: 300,
//     calories_burned: 120,
//     created_at: "Apr 30",
//     updated_at: "Apr 30",
//   },
//   {
//     id: 8,
//     user_id: 101,
//     exercise_type: "Bench Press",
//     duration_minutes: 25,
//     reps: 8,
//     sets: 3,
//     weight_kg: 60,
//     note: "Personal best!",
//     created_at: "Apr 30",
//     updated_at: "Apr 30",
//   },
//   {
//     id: 9,
//     user_id: 104,
//     exercise_type: "Walking",
//     duration_minutes: 50,
//     distance_km: 3.5,
//     note: "Nice weather outside",
//     created_at: "Apr 30",
//     updated_at: "Apr 30",
//   },
//   {
//     id: 10,
//     user_id: 102,
//     exercise_type: "Plank",
//     duration_minutes: 5,
//     note: "Held position for 1 min at a time",
//     created_at: "Apr 30",
//     updated_at: "Apr 30",
//   },
// ];

export default function ExerciseTable() {
  const { exercises, isLoading } = useGetExercises();
  if (isLoading) return <Spinner />;
  return (
    <Menus>
      <Table columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr 20rem 3rem">
        <Table.Header>
          <div>Date</div>
          <div>Category</div>
          <div>Duration</div>
          <div>Distance</div>
          <div>Reps</div>
          <div>Sets</div>
          <div>Weight(kg)</div>
          <div>Notes</div>
        </Table.Header>
        <Table.Body
          data={exercises || []}
          render={(exercise) => (
            <ExerciseRow key={exercise.id} exercise={exercise} />
          )}
        />
        <Table.Footer />
      </Table>
    </Menus>
  );
}
