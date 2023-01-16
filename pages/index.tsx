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
  return (
   <div>
    <Base>
    これはCSBSS(Conduct Survey Based Separating System)のホームページです。<br/><br/>
    <Link href ="https://forms.office.com/Pages/DesignPageV2.aspx?subpage=design&FormId=XYP-cpVeEkWK4KezivJfyMzkoX2THZJEp8ZKC1VpiUhUNjhDRVExTE9WREc0MlJESEs2Ukg2NjcwRy4u" ><a><button className={styles.aaa}>アンケート実施</button></a></Link><br/><br/><br/>
    <button className={styles.aaa}onClick={bunkatu}>グループ分割実施</button><br/><br/><br/>
    <button className={styles.aaa}>・・・実施</button><br/><br/><br/>
    <Link href ="https://www.youtube.com" ><a><button className={styles.aaa}>Youtube</button></a></Link><br/><br/><br/>
    </Base>
   </div>
  )
}

export default Home
