
function   ListOfActivity({list, handleDelete, handleComplete}) {
    return (
        <div>
           {
               list.map((todo, index) => {
                   return (
                       <div key={index} className="flex mb-4 items-center">
                            <p className={`w-full ${todo.completed ? "line-through text-green" : "text-grey-darkest"}`}>{todo.title}</p>
                            <button onClick={() => handleComplete(index)} 
                            className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">
                                {todo.completed ? "Not Done" : "Done"}
                            </button>
                            <button onClick={() => handleDelete(index)} 
                            className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove</button>
                       </div>
                   )
               })
           }
        </div>
    )
}

export default ListOfActivity;