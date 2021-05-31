import { useState, useEffect, useCallback } from 'react'
import css from './header.module.scss'
import Link from 'next/link'

export default function Header() {

  return (
    <>
      <div className={css.wrapper}>
        <div className={css.container}>
          <div className={css.nav_list}>
            <Link href={'/'} ><a className={css.nav}>главная</a></Link>
            <Link href={'/info'} ><a className={css.nav}>обо мне</a></Link>
            <Link href={'/presentation'} ><a className={css.nav}>примеры работ</a></Link>
            <Link href={'/price'} ><a className={css.nav}>прайс-лист</a></Link>
            <Link href={'/request'} ><a className={css.nav}>оставить заявку</a></Link>
          </div>
        </div>
      </div>
    </>
  )
}
