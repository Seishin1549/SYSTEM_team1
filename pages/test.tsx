import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Base } from '../parts/Base/Base'
import { Total } from '../character/Total/Total'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
   <div>
    <Base>
    こちらはテストページです<br/><br/>
    もし他のキャラクターの紹介を見たければ下のリンクからページにアクセスしてください。<br/>
    <Link href = "/"><a className={styles.link}>麦わらの一味紹介</a></Link>に移動<br/>
    <Link href = "/villain"><a className={styles.link}>敵キャラ紹介</a></Link>に移動<br/>
    <Link href = "/favorite"><a className={styles.link}>お気に入りキャラ紹介</a></Link>に移動<br/>

    <Total/>
    
    </Base>
   </div>
  )
}

export default Home
