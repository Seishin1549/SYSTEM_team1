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
    こちらは敵キャラの紹介ページです<br/><br/>
    もし他のキャラクターの紹介を見たければ下のリンクからページにアクセスしてください。<br/>
    <Link href = "/"><a className={styles.link}>麦わらの一味紹介</a></Link>に移動<br/>
    <Link href = "/favorite"><a className={styles.link}>お気に入りキャラ紹介</a></Link>に移動<br/>

    
    <img src = '/arlong.png'/><br/>
    名前:アーロン<br/>
    特徴:尖った鼻が最強。<br/><br/><br/>
    <img src = '/buggy.png'/><br/>
    名前:バギー<br/>
    特徴:敵というかルフィのライバル。切られても死なない。<br/><br/><br/>
    <img src = '/enel.png'/><br/>
    名前:エネル<br/>
    特徴:雷を操れる神。<br/><br/><br/>
    <img src = '/lucci.png'/><br/>
    名前:ロブ・ルッチ<br/>
    特徴:諜報機関のメンバー<br/><br/><br/>
    <img src = '/moria.png'/><br/>
    名前:ゲッコーモリア<br/>
    特徴:影を操り相手を支配したりする。<br/><br/><br/>
    <img src = '/doflamingo.png'/><br/>
    名前:ドフラミンゴ<br/>
    特徴:糸を使って操り人形のように操ったりできる。<br/><br/><br/>
    <img src = '/linlin_kaido.png'/><br/>
    名前:ビッグマム、カイドウ<br/>
    特徴:四皇と呼ばれる最強四人集の中の二人。<br/><br/><br/>
    <img src = '/kurohige.png'/><br/>
    名前:黒ひげ<br/>
    特徴:悪魔の身の能力を二つ持っている！？<br/><br/><br/>
    <img src = '/kizaru.png'/><br/>
    名前:黄猿<br/>
    特徴:光になって超高速で動いたりできる。<br/><br/><br/>
    <img src = '/akainu.png'/><br/>
    名前:赤犬<br/>
    特徴:マグマを操ることができる。<br/><br/><br/>
    <img src = '/aokiji.png'/><br/>
    名前:青キジ<br/>
    特徴:海全体を凍らせることができる。<br/><br/><br/>
    <Link href = "/test"><a className={styles.link}>コンポーネントテスト</a></Link>に移動<br/>
    </Base>
   </div>
  )
}

export default Home
