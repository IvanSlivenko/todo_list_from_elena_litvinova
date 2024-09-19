import React, { useCallback, useState } from "react";
import styles from './index.module.scss'

interface InputTaskProps {
    id: string;
    title: string;
    onDone: (id: string) => void;
    onEdited: (id: string, title: string) => void;
    onRemoved: (id: string) => void;
}

export const InputTask: React.FC<InputTaskProps> =({
    id,
    title,
    onDone,
    onEdited,
    onRemoved,

})=> {

    const [checked, setCheced] = useState(false);

    

    return (
        <div className={styles.inputTask}>
            <label className={styles.inputTaskLabel }> 
                <input type="checkbox" 
                checked={checked}
                className={styles.inputTaskCheckbox}
                onChange={(evt)=>{
                    setCheced(evt.target.checked)
                    if(evt.target.checked){
                        onDone(id);
                    }
                }}    
            />
            <h3 className={styles.inputTaskTitle}>{title}</h3>
            </label>
            <button 
                aria-label="Edit"
                className={styles.inputTaskEdit}
                onClick={()=>{

                }}
            />
            <button
                aria-label="Remove"
                className={styles.inputTaskRemove}
                onClick={()=>{
                    if(confirm('Ви впевнені ?')){
                        onRemoved(id);
                    }
                    
                }}
            />
        </div>
    )
};