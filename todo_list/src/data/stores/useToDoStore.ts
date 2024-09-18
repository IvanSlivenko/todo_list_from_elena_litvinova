import { create } from 'zustand';
import { generateId } from '../helpers';

interface Task {
    id: string;
    title: string;
    createdAt: number;


}

interface ToDostore {
    tasks: Task[];
    createTask: (title: string) => void;
    updaTeTask: (id: string, title: string) => void;
    removeTask: (id: string) => void;

}

export const useToDoStore = create<ToDostore>((set, get) => ({
    tasks: [
        {
            id: 'werqwtewrt',
            title: 'ghgjdj',
            createdAt: 4545656
        },
    ],
    createTask: (title: string)=>{
        const { tasks }  = get();
        const newTask = {
            id: generateId(),
            
        }

    },
    updaTeTask: (id: string, title: string) => {},
    removeTask: (id: string) => {},

}))