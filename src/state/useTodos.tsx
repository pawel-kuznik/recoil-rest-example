import { useRecoilState, useRecoilValue } from "recoil";
import FalseRestApi from "../data/FalseRestApi";
import { openTodosSelector } from "./openTodosSelector";
import { todosAtom } from "./todosAtom";
import { totalWordsSelector } from "./totalWordsSelector";

export default function useTodos() {

    const [ todos, setTodos ] = useRecoilState(todosAtom);
    const wordsTotal = useRecoilValue(totalWordsSelector);
    const open = useRecoilValue(openTodosSelector);

    const remove = (id:number) => {

        FalseRestApi.instance.deteleTodo(id).then(() => {
            FalseRestApi.instance.getTodos().then(setTodos);
        });
    };

    const check = (id:number, checked:boolean) => {

        FalseRestApi.instance.updateTodo(id, { checked }).then(() => {
            FalseRestApi.instance.getTodos().then(setTodos);
        });
    };

    return {
        todos,
        open,
        wordsTotal,
        remove,
        check
    };
};