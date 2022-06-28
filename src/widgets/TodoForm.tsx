import { FormEvent, useRef } from "react";
import useCurrentTodo from "../state/useCurrentTodo";

export default function TodoForm() {

    const labelRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLTextAreaElement>(null);

    const {
        todo,
        upsert
    } = useCurrentTodo();

    const onSubmit = (e:FormEvent) => {

        e.preventDefault();

        if (!labelRef.current) return;
        if (!descriptionRef.current) return;

        const input = Object.assign({ }, todo, {
            label: labelRef.current.value,
            descriptionRef: descriptionRef.current.value
        });

        upsert(input);
    };

    return (
        <form onSubmit={onSubmit}>
            <h2>Todo</h2>
            <div>
                <input ref={labelRef} type="text" defaultValue={todo?.label}/>
            </div> 
            <div>
                <textarea ref={descriptionRef} defaultValue={todo?.description}/>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    );
};