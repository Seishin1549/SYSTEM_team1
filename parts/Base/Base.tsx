import { ReactNode } from "react"
import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import { Back } from "../Back/Back"

export const Base: React.FC<{children: ReactNode}> = (props) =>{
    return(
        <div>
            <Header/>
            <Back>
            {props.children}
            <Footer/>
            </Back>
        </div>
    )
}