import { selector } from "recoil";
import { Todo } from "../data/Todo";
import { todosAtom } from "./todosAtom";

export const openTodosSelector = selector({
    key: "openTodosSelector",
    get: ({ get }) => {

        const todos = get(todosAtom);

        return todos.reduce<number>((acc: number, value: Todo) => {
            acc += value.checked ? 0 : 1;
            return acc;
        }, 0);
    }
})