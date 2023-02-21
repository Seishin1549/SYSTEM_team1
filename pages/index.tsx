import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Base } from '../parts/Base/Base'
import { Header } from '../parts/Header/Header'
import styles from '../styles/Home.module.scss'
const bunkatu=()=>{
  
}
const Home: NextPage = () => {
  //英語と国語のボタンはあくまでこんな感じに増やせるということを説明するための見せかけです。リンクは既存の別のものを再利用しています。
  return (
   <div>
    <Base>
    
    これはCSBSS(Conduct Survey Based Separating System)のホームページです。<br/><br/>
    担当の教科を選択してください<br/><br/>
    <Link href = "/japanese"><a><button className={styles.aaa}>国語</button></a></Link><br/><br/>
    <br/>
    <Link href = "/math"><a><button className={styles.aaa}>数学</button></a></Link><br/><br/>
    <br/>
    <Link href = "/system"><a><button className={styles.aaa}>システム設計</button></a></Link><br/><br/>
    <br/>
    <Link href = "/english"><a><button className={styles.aaa}>英語</button></a></Link><br/><br/>
    <br/>
    </Base>
   </div>
  )
}

export default Home
