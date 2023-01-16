import React from 'react'
import styles from './Picture.module.scss'

export const Picture:React.FC=()=>{
    return(
        <div className={styles.Picture}>
            <img src = '/luffy.png'/><br/>
        </div>
    )
}