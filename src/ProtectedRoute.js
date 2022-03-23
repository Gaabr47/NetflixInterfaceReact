import { useContext } from "react"
import { Outlet } from "react-router-dom"
import { Navigate } from "react-router-dom"
import { AuthContext } from "./Context/Auth"
export default function ProtectedRoute(){
    const {autenticate} = useContext(AuthContext)
    return(
        !autenticate ? <Navigate to="/" /> : <Outlet />
    )
}