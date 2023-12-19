import Image from 'next/image'
import styles from './page.module.css'
import Feature from '@/components/featured/Featured'
import CategoryList from '@/components/categoryList/CategoryList'
import CardList from '@/components/cardlist/CardList'
import Menu from '@/components/menu/Menu'
import ThemeToggle from '@/components/themeToggle/ThemeToggle'
export default function Home() {
  return (
    <main className={styles.main}>
     <Feature/>
     <CategoryList/>
     <div className={styles.container}>
        <CardList/>
        <Menu/>
     </div>
    </main>
  )
}
