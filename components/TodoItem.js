import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../todoAtom';

const TodoItem = () => {
    const [inputvalue, setInputValue] = useState(""); 
    const setTodoList = useSetRecoilState(todoListState);

    const handleChange = (event) => {
        setInputValue(event.target.value); 
    };

    const addItem = () => {
        setTodoList(oldTodoList => [
            ...oldTodoList,
            {
                id: getId(),
                text: inputvalue, 
                isComplete: false
            }
        ]);

        setInputValue(''); 
    };

    return (
        <div>
            <input type='text' value={inputvalue} onChange={handleChange}/> {/* 'inputValue' 상태 사용 */}
            <button onClick={addItem}>+</button>
        </div>
    );
};

let id = 0;
function getId() {
    return id++; 
}

export default TodoItem;
