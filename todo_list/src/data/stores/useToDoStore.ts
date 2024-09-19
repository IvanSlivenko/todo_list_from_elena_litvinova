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
    updateTask: (id: string, title: string) => void;
    removeTask: (id: string) => void;

}

export const useToDoStore = create<ToDostore>((set, get) => ({
    tasks: [
        {
        id: 'test id 1',
        title: 'Default task 1',
        createdAt: 123456
        },
        {
            id: 'test id 2',
            title: 'Default task 2',
            createdAt: 123456
        },
    ],
    createTask: (title) => {
        const { tasks }  = get();
        
        const newTask = {
            id: generateId(),
            title,
            createdAt: Date.now(),
        }

        set({
            tasks: [newTask].concat(tasks),
        })
    },
    updateTask: (id: string, title: string) => {
        const { tasks } = get();
        set({
            tasks: tasks.map((task)=>({
                ...task,
                title: task.id === id ? title : task.title,


            }))
        });

    },
    removeTask: (id: string) => {
        const { tasks } = get();
        set({
            tasks: tasks.filter((task)=> task.id !== id )
        });
    },

}))