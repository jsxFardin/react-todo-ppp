import {useState} from 'react';

function InputArea({ handleSubmit }) {
  const [todo, setTodo] = useState("")

    return (
        <form onSubmit={e => {
            e.preventDefault();
            handleSubmit(todo);
            setTodo("");
        }} className="flex mt-4">
            <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo" name='todo' value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button type='submit' className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal">Add</button>
        </form>
    )
}

export default InputArea;