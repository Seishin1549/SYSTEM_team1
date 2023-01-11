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
    こちらはお気に入り紹介ページです<br/><br/>
    もし他のキャラクターの紹介を見たければ下のリンクからページにアクセスしてください。<br/>
    <Link href = "/"><a className={styles.link}>麦わらの一味紹介</a></Link>に移動<br/>
    <Link href = "/villain"><a className={styles.link}>敵キャラ紹介</a></Link>に移動<br/>


    
    <img src = '/luffy.png'/><br/>
    名前:ルフィ<br/>
    好きな所：映画とか基本めっちゃかっこいい！<br/><br/><br/>
    <img src = '/brook.png'/><br/>
    名前:ブルック<br/>
    好きな所：優しさが溢れててイケメン。<br/><br/><br/>
    <img src = '/buggy.png'/><br/>
    名前:バギー<br/>
    好きな所：虚言だけで成り上がった感じがいい。<br/><br/><br/>
    <img src = '/kurohige.png'/><br/>
    名前:黒ひげ<br/>
    好きな所：名言がカッコ良すぎる。<br/><br/><br/>
    <img src = '/kizaru.png'/><br/>
    名前:黄猿<br/>
    好きな所：変な喋り方。<br/><br/><br/>
    <img src = '/chopper.png'/><br/>
    名前:チョッパー<br/>
    好きな所：可愛いところ。<br/><br/><br/>
    <Link href = "/test"><a className={styles.link}>コンポーネントテスト</a></Link>に移動<br/>
    </Base>
   </div>
  )
}

export default Home
