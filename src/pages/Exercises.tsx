import AddExercise from "../features/exercises/AddExercise";
import ExerciseTable from "../features/exercises/ExerciseTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import ExerciseTableOperations from "../features/exercises/ExerciseTableOperations";

export default function Exercises() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Exercises</Heading>
        <ExerciseTableOperations />
      </Row>
      <Row type="vertical">
        <ExerciseTable />
        <AddExercise />
      </Row>
    </>
  );
}
