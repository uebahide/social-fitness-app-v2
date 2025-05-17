import styled, { css } from "styled-components";
import Filter from "../../ui/Filter";

const TableOperation = styled.div`
  display: flex;
  justify-content: center;
`;

export default function ExerciseTableOperations() {
  return (
    <TableOperation>
      <Filter
        options={["all", "push up", "running", "cycling", "bench press"]}
        filterField="category"
      />
    </TableOperation>
  );
}
