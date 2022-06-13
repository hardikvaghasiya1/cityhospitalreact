export const DoneLogin = () => {
    if(sessionStorage.getItem("user")){
        return true
    }
    else
    {
        return false
    }
}  