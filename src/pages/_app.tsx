import Navbar from "@/components/Navbar";
import { ThemeProvider } from "../context/ThemeContext";
import '../styles/globals.css'
import { AppProps } from "next/app";

function MyApp ({Component, pageProps}:AppProps){
    return(
        <ThemeProvider>
            <Navbar />
            <Component {...pageProps}/>
        </ThemeProvider> 
    )
}
export default MyApp;