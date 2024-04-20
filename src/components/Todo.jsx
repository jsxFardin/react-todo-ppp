import { useState } from "react";
import InputArea from "./InputArea";
import ListOfActivity from "./ListOfActivity";

function Todo() {
    const [list, setList] = useState([]);

    const handleSubmit = (todo) => {
        if (todo === "") {
            return;
        }
        setList(prev => {
            return [...prev, {title: todo, completed: false}];
        });
    };

    const handleDelete = (index) => {
        setList(prev => {
            return prev.filter((todo, i) => i !== index);
        });
    };

    const handleComplete = (index) => {
        setList(prev => {
            return prev.map((todo, i) => {
                if (i === index) {
                    return {...todo, completed: !todo.completed};
                }
                return todo;
            });
        });
    };

    return (
        <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
            <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                <div className="mb-4">
                    <h1 className="text-grey-darkest">Todo List</h1>
                    <InputArea handleSubmit={handleSubmit}/>
                </div>
                <ListOfActivity list={list} handleDelete={handleDelete} handleComplete={handleComplete}/>
            </div>
        </div>
    );
}

export default Todo;