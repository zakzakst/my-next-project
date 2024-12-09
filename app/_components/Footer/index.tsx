import styles from "./index.module.css"
import Link from "next/link"

type LinkData = {
  id: string
  path: string
  text: string
}

const links: LinkData[] = [
  {
    id: 'news',
    path: '/news',
    text: 'ニュース',
  },
  {
    id: 'members',
    path: '/members',
    text: 'メンバー',
  },
  {
    id: 'contact',
    path: '/contact',
    text: 'お問い合わせ',
  },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.items}>
          {links.map((link) => (
            <li key={link.id} className={styles.item}>
              <Link href={link.path}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <p className={styles.cr}>&copy; SIMPLE. All Rights Reserved 2024</p>
    </footer>
  )
}