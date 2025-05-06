import { createContext, ReactNode, useContext } from "react";
import styled from "styled-components";
import { Exercise } from "../features/exercises/types/Exercise";

//types
type TableProps = {
  children: ReactNode;
  columns: string;
};
type TableContextValue = {
  columns: string;
};
type BodyProps = {
  data: Array<Exercise>;
  render: (e: Exercise) => ReactNode;
};

//styles
const StyledTable = styled.div`
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);
`;
const Commondiv = styled.div<{ columns: string }>`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 2rem;
  font-size: 1.6rem;
  font-weight: 500;
  gap: 1rem;
`;
const StyledHeader = styled(Commondiv)`
  background-color: var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.2px;
  font-weight: 600;
`;
const StyledRow = styled(Commondiv)`
  letter-spacing: 0.2px;
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;
const StyledBody = styled.section``;
const StyledFooter = styled.footer``;

const TableContext = createContext<TableContextValue>({ columns: "" });
export default function Table({ columns, children }: TableProps) {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable>{children}</StyledTable>
    </TableContext.Provider>
  );
}

function Header({ children }: { children: ReactNode }) {
  const { columns } = useContext(TableContext);
  return <StyledHeader columns={columns}>{children}</StyledHeader>;
}
function Row({ children }: { children: ReactNode }) {
  const { columns } = useContext(TableContext);
  return <StyledRow columns={columns}>{children}</StyledRow>;
}
function Body({ data, render }: BodyProps) {
  return <StyledBody>{data.map(render)}</StyledBody>;
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = StyledFooter;
