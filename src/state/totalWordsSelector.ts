import { selector } from "recoil";
import { Todo } from "../data/Todo";
import { todosAtom } from "./todosAtom";

export const totalWordsSelector = selector({
    key: "totalWordsSelector",
    get: ({ get }) => {

        const todos = get(todosAtom);

        return todos.reduce<number>((acc: number, value: Todo) => {
            acc += value.label.split(' ').length;

            return acc;
        }, 0);
    }
});