import { Todo } from "./Todo";

export default class FalseRestApi {

    static readonly instance: FalseRestApi = new FalseRestApi();

    private _todos: Todo[] = [];

    private _counter: number = 0;

    getTodos() : Promise<Todo[]> {

        return Promise.resolve(this._todos.map(value => Object.assign({ }, value)));
    }

    createTodo(input: Partial<Todo> = { }) : Promise<Todo> {

        const todo = Object.assign({ 
            label: "",
            checked: false,
            prio: 1,
            description: "",
        }, input, { id: this._counter++ });

        this._todos.push(todo);

        return Promise.resolve(Object.assign({ }, todo));
    }

    deteleTodo(id: number) : Promise<void> {

        const idx = this._todos.findIndex(value => value.id === id);

        if (idx === -1) return Promise.resolve();

        this._todos.splice(idx, 1);

        return Promise.resolve();
    }

    updateTodo(id: number, input: Partial<Todo>) : Promise<Todo> {

        const todo = this._todos.find(value => value.id === id);

        if (!todo) return Promise.reject(Error('Todo not found'));

        Object.assign(todo, input);

        todo.id = id;

        return Promise.resolve(Object.assign({ }, todo));
    };
};