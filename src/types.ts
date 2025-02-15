
export interface Task {
    id: number;
    description: string;
}

export interface Lab{
    id: number;
    tasks: Task[];
}
