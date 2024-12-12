'use client'

import Link from 'next/link'
import Image from "next/image"
import styles from './index.module.css'
import { useState } from 'react'
import cx from 'classnames'

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

export default function Menu() {
  const [isOpen, setOpen] = useState<boolean>(false)
  const open = () => setOpen(true)
  const close = () => setOpen(false)

  return (
    <div>
      <nav className={cx(styles.nav, isOpen && styles.open)}>
        <ul className={styles.items}>
          {links.map((link) => (
            <li key={link.id}>
              <Link href={link.path}>{link.text}</Link>
            </li>
          ))}
        </ul>
        <button className={cx(styles.button, styles.close)} onClick={close}>
          <Image
            src='/close.svg'
            alt='閉じる'
            width={24}
            height={24}
            priority
          />
        </button>
      </nav>
      <button className={styles.button} onClick={open}>
        <Image
          src='/menu.svg'
          alt='メニュー'
          width={24}
          height={24}
        />
      </button>
    </div>
  )
}