export interface ITodo {
    id?: number;
    text: string;
    completed: boolean;
};

export type IState = ITodo[];
