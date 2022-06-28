import { useRecoilState } from "recoil";
import FalseRestApi from "../data/FalseRestApi";
import { Todo } from "../data/Todo";
import { currentTodoAtom } from "./currentTodoAtom";
import { todosAtom } from "./todosAtom";

export default function useCurrentTodo() {

    const [ todo, setTodo ] = useRecoilState(currentTodoAtom);
    const [ todos, setTodos ] = useRecoilState(todosAtom);

    const upsert = (input: Partial<Todo>) => {

        (() => {
            if (input.id) return FalseRestApi.instance.updateTodo(input.id, input);
            else return FalseRestApi.instance.createTodo(input);
        })().then(todo => {

            setTodo(todo);

            FalseRestApi.instance.getTodos().then(setTodos);
        });
    };

    return {
        todo,
        upsert
    };
};