import { BrowserRouter,Routes,Route } from "react-router-dom";
import Browse from "./Pages/Browse";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ProtectedRoute from "./ProtectedRoute";



export default function Rotas(){
    return(
        <BrowserRouter>
             <Routes>
                 <Route path="/" element={<Home />}/>
                 <Route path="/br/login" element={<Login />}/>
                 <Route path="/br/register" element={<Register />}/>
                 <Route element={<ProtectedRoute />}>
                 <Route path="/browse" element={<Browse />}/>
                 </Route>
         </Routes>
        </BrowserRouter>
    )
}