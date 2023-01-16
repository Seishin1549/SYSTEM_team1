import { ReactNode } from "react"
import { Picture } from "../Picture/Picture"
import { Name } from "../Name/Name"
import { Point} from "../Point/point"

export const Total: React.FC<{}> = (props) =>{
    return(
        <div>
            <Picture/>
            <Name/>
            <Point/>
        </div>
    )
}