import Button from '../UI/Button';
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';

function TodosActions({ resetTodos, deleteCompletedTodos }) {
  return (
    <>
      <Button title="Reset Todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button title="Clear Completed Todos" onClick={deleteCompletedTodos}>
        <RiDeleteBin2Line />
      </Button>
    </>
  );
}

export default TodosActions;
