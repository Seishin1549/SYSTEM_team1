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
     これはCSBSS(Conduct Survey Based Separating System)の国語用ページです。<br/><br/>
     <Link href = "/"><a className={styles.link}>ホームページ</a></Link>に移動<br/>
     <Link href ="https://docs.google.com/forms/d/e/1FAIpQLSdKXuKuwfz3yhwt0fEh_DjKYvMWeaMwzzbc4vbqAM-6y2y6kw/viewform?vc=0&c=0&w=1&flr=0" ><a><button className={styles.aaa}>アンケート実施(二人グループ)</button></a></Link><br/><br/><br/>
     <br/>
     <Link href ="https://docs.google.com/forms/d/e/1FAIpQLSdKXuKuwfz3yhwt0fEh_DjKYvMWeaMwzzbc4vbqAM-6y2y6kw/viewform?vc=0&c=0&w=1&flr=0" ><a><button className={styles.aaa}>アンケート実施(三人グループ)</button></a></Link><br/><br/><br/>
     <br/>
     <Link href ="https://docs.google.com/forms/d/e/1FAIpQLSfyVbeUgwbYkc3hQYSF333m4b8ggJI-cCRtieRfx_Azf4MkIg/viewform?vc=0&c=0&w=1&flr=0" ><a><button className={styles.aaa}>アンケート実施(四人グループ)</button></a></Link><br/><br/><br/>
     <br/>
     </Base>
    </div>
   )
}

export default Home
