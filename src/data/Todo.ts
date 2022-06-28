export interface Todo {
    id: number;
    label: string;
    checked: boolean;
    description: string;

    // higher number means more priority
    prio: number;
};