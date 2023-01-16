import React from 'react'
import { ReactNode } from "react"
import styles from './Back.module.scss'

export const Back:React.FC<{children: ReactNode}> =(props)=>{
    return(
        <div className={styles.Back}>
            {props.children}
        </div>
    )
}