import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Base } from '../parts/Base/Base'
import { Header } from '../parts/Header/Header'
import styles from '../styles/Home.module.scss'
// komennto
const Home: NextPage = () => {
  return (
   <div>
    <Base>
    これはCSBSS(Conduct Survey Based Separating System)のホームページです。<br/><br/>
    <Link href ="https://forms.office.com/?redirecturl=https%3a%2f%2fforms.office.com%2fpages%2fdesignpagev2.aspx%3flang%3dja%26origin%3dOfficeDotCom%26route%3dOfficeHome%26subpage%3ddesign%26id%3dXYP-cpVeEkWK4KezivJfyMzkoX2THZJEp8ZKC1VpiUhUNjhDRVExTE9WREc0MlJESEs2Ukg2NjcwRy4u%26analysis%3dfalse&nocdn=1&fswBypass=1" ><a><button className={styles.aaa}>アンケート実施</button></a></Link><br/><br/><br/>
    <button className={styles.aaa}>グループ分割実施</button><br/><br/><br/>
    <button className={styles.aaa}>・・・実施</button><br/><br/><br/>
    <Link href ="https://www.youtube.com" ><a><button className={styles.aaa}>Youtube</button></a></Link><br/><br/><br/>
    </Base>
   </div>
  )
}

export default Home
