export interface Todo {
    id: number;
    label: string;
    checked: boolean;

    // higher number means more priority
    prio: number;
};