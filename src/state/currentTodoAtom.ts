import { atom } from "recoil";
import { Todo } from "../data/Todo";

export const currentTodoAtom = atom<Todo|null>({
    key: "currentTodoAtom",
    default: null,
    effects: [
        (( { onSet } ) => {
            console.log('current todo effect')

            onSet((newValue, oldValue) => {
                

            });
        })
    ]
});
