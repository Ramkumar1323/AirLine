import App from '../AirLine'
import Home from '../'


const router = CreateBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children :[
            {
                path : "",
                element : <Home/>
            },
            {
                path : "login",
                element : <Login/>   
            }
        ]
    }
])