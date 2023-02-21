import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Base } from '../parts/Base/Base'
import { Header } from '../parts/Header/Header'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div>
     <Base>
     これはCSBSS(Conduct Survey Based Separating System)のシステム設計用ページです。<br/><br/>
     <Link href = "/"><a className={styles.link}>ホームページ</a></Link>に移動<br/>
     <Link href ="https://docs.google.com/forms/d/1CN5JqmgffL_uRMbRX5QM3Gter1-S1UfATQ9LS3LpkXA/edit" ><a><button className={styles.aaa}>アンケート実施(二人グループ)</button></a></Link><br/><br/><br/>
     <br/>
     <Link href ="https://docs.google.com/forms/d/1rnxgkFtQbPAS81pImZFlOp82G_DfPi0X1dotOfl-cug/edit" ><a><button className={styles.aaa}>アンケート実施(三人グループ)</button></a></Link><br/><br/><br/>
     <br/>
     <Link href ="https://docs.google.com/forms/d/1k6uUXxFwzO5vMLRHQEnGxlsC9w3a6-E_Sp1T13_D4GU/edit" ><a><button className={styles.aaa}>アンケート実施(四人グループ)</button></a></Link><br/><br/><br/>
     
     </Base>
    </div>
   )
}

export default Home
