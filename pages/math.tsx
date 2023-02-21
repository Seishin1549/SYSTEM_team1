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
     これはCSBSS(Conduct Survey Based Separating System)の数学用ページです。<br/><br/>
     <Link href = "/"><a className={styles.link}>ホームページ</a></Link>に移動<br/>
     <Link href ="https://docs.google.com/forms/d/1AFyia3IS2AettC_qnNU4j49ZzZzAxegwOLwA7yczVpk/edit" ><a><button className={styles.aaa}>アンケート実施(二人グループ)</button></a></Link><br/><br/><br/>
     <br/>
     <Link href ="https://docs.google.com/forms/d/1GwY0FTC4bpxN8u3ZxaPXfI84Bqxd95s58QbMn-jkPvM/edit" ><a><button className={styles.aaa}>アンケート実施(三人グループ)</button></a></Link><br/><br/><br/>
     <br/>
     <Link href ="https://docs.google.com/forms/d/1zIPB7OZxKhfbPiKbqJns-Q7JHATiMC23QZVc650kwbo/edit" ><a><button className={styles.aaa}>アンケート実施(四人グループ)</button></a></Link><br/><br/><br/>
     
     </Base>
    </div>
   )
}

export default Home
