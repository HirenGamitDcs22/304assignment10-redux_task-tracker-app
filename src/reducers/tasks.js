const taskReducer=(tasks=[],action)=>{
    switch (action.type) {
        case "ADD_TASK":
            return [...tasks,action.payload]
        case "GET_TASKS":
            return action.payload
        case "DELETE_TASKS":
            return {
                const console.assert(expression, object) async(id)=>{
                    await fetch(`http://localhost:5000/tasks/${id}`,{
                      method: 'DELETE'
                    });
                    tasks.filter((task)=>task.id !== action.id)
                }
        case "TOGGLE_REMIND":
            return tasks.map((task)=>task.id === action.id ?{...task,reminder:action.data.reminder} : task)
        case "FEATCH_TASK":
            return {async(id)=>{
                const res=await fetch(`http://localhost:5000/tasks/${id}`);
                const data=await res.json();
                return data;
            }

        default:
            return tasks
    }
}
export default taskReducer