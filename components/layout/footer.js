import { useState, useEffect, useCallback } from 'react'
import css from './footer.module.scss'
import Link from 'next/link'


export default function Footer() {

  return (
    <>
      <div className={css.wrapper}>
        <div className={css.container}>
          <div className={css.info}><p><Link href="/privacy"><a>Конфиденциальность </a></Link></p> <Link href="/terms"><a>Пользовательское соглашение</a></Link></div>
          <div className={css.info}><p>Разработка сайтов под ключ. </p><a href="tel:+79086752252" itemProp="telephone">+7 (908) 675-22-52</a></div>
          <div className={css.сopyright}><p>Copyright ©2021 SiteName. Все права защищены.</p></div>
        </div>
      </div>
    </>
  )
}
