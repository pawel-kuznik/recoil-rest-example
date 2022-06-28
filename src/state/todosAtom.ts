import { atom } from "recoil";
import { Todo } from "../data/Todo";

export const todosAtom = atom<Todo[]>({
    key: "todosAtom",
    default: [],
});