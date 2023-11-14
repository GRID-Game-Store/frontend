import Image from 'next/image'
import styles from './page.module.css'
import { Main } from './components/main/main'
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import { AMOUNT_SLIDES } from './constants/slider'
type Repo = {
  name: string
  stargazers_count: number
}


async function getData(url:string) {
  const res = await fetch(url, { cache: 'force-cache' })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home() {
  const slides = await getData(`http://localhost:8082/api/v1/games/popular?qty=${AMOUNT_SLIDES}`)
  return (
    <main className={styles.main}>
        <Main slides={slides} />
    </main>
  )
}
