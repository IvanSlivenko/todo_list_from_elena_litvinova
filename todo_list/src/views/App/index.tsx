import React, { useEffect, useCallback } from "react";
import styles from './index.module.scss'
import { useToDoStore } from '../../data/stores/useToDoStore';
import { InputPlus } from "../components/InputPlus";

export const App: React.FC = () => {

    // const [
    //     tasks,
    //     createTask,
    //     updateTask,
    //     removeTask 
    // ] = useToDoStore(state => [
    //     state.tasks,
    //     state.createTask,
    //     state.updateTask,
    //     state.removeTask,
    // ]);

    const tasks = useToDoStore(state => state.tasks);
    const createTask = useToDoStore(state => state.createTask);
    const updateTask = useToDoStore(state => state.updateTask);
    const removeTask = useToDoStore(state => state.removeTask);

    const handleCreateTask = useCallback((title) => {
        createTask(title);
    }, [createTask]);

    // Якщо хочеш створювати завдання при першому рендері
    // useEffect(() => {
    //     handleCreateTask("Initial Task"); // Створення завдання з фіксованою назвою
    // }, [handleCreateTask]);

    
    const handleUpdateTask = React.useCallback((id, title) => {
        updateTask(id, title);
    }, [updateTask]);
    
    const handleRemoveTask = React.useCallback((id) => {
        removeTask(id);
    }, [removeTask]);

    
  console.log(tasks,'-- tasks');
  
    
    return (
        <article className={styles.article}>
           <h1 className={styles.articleTitle}>To Do App</h1> 
           <section className={styles.articleSection}>
                <InputPlus  
                    onAdd={( title )=> {
                        if(title){
                            createTask(title)
                        }
                    }}
                />
           </section>
           <section className={styles.articleSection}>
                    {!tasks.length && (
                        <p className={styles.articleText}>Завдання відсутні</p>
                    )}
           </section>
        </article>
    );
}