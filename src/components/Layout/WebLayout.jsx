import { Outlet, useNavigation } from "react-router"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Loading } from "./Loading";

export const WebLayout = () =>{
    const navigation = useNavigation();
    if(navigation.state === "loading") return <Loading/>
    else{
        return(<>
    <Header/>
    <Outlet/>
    {/* <Footer/> */}
    </>)
}
}