import useTodos from "../state/useTodos";
import TodoItem from "./TodoItem";

export default function TodosList() {

    const {
        todos,
        wordsTotal,
        open
    } = useTodos();

    return (
        <>
            <h2>Ongoing todos</h2> 
            <div>
                {todos.map(t => (<TodoItem key={t.id} todo={t}/>))}
            </div>
            <footer>
                <span>{open} open todos</span> 
                <span>{wordsTotal} words in total</span>
            </footer> 
        </> 
    );
};