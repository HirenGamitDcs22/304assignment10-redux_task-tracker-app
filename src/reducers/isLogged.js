const loggedReducer=(state=false,action)=>{
    switch (action.type) {
        case "SING_IN":
            return  !state
        case "FEATCH_USER":
            return action.user
        case "UPDATE_USER":
            return action.user.map((u)=>u.id === action.id ?{...action.user,logedin:action.user.logedin} : action.user)
        default:
            return state
    }
}
export default loggedReducer