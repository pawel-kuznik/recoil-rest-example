import { Todo } from "../data/Todo";
import useTodos from "../state/useTodos";

export default function TodoItem(props: { todo: Todo }) {

    const { remove, check } = useTodos();

    const todo = props.todo;

    const onChange = () => {

        check(todo.id, !todo.checked);
    };

    return (
        <div>
            <input type="checkbox" checked={todo.checked} onChange={onChange}/>
            <span>{todo.label}</span>
            <button onClick={() => remove(props.todo.id)}>Remove</button>
        </div>
    );
}