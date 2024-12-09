import Image from "next/image"
import Link from "next/link"
import styles from "./index.module.css"

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

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoLink}>
        <Image
          src="/logo.svg"
          alt="SIMPLE"
          className={styles.logo}
          width={348}
          height={133}
          priority
        />
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.items}>
          {links.map((link) => (
            <li key={link.id}>
              <Link href={link.path}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}