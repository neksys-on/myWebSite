import { useState, useEffect, useCallback } from 'react'
import css from './layout.module.scss'
import Link from 'next/link'
import Header from './header'
import Footer from './footer'
import Head from 'next/head'



export default function Layout({children, titleMeta='', descriptionMeta='', keywordsMeta='', index=true}) {
    return (
      <>
      <Head>
        <title>{titleMeta}</title>
        {index===true  && <>
          {/*
            <meta name="mailru-domain" content="l58zwtBEk8TZcyqH" />
            <meta name="google-site-verification" content="5iQH12a1WI8Qz_u6afuv6zVkLHmngjX2dzb_NLnfZBc" />
            <meta name="yandex-verification" content="a446fe2c0342224b" />
            */}

          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content ={descriptionMeta} />
          <meta name="keywords" content = {keywordsMeta} />
          <meta charSet = "UTF-8"/>

          <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>
          <link rel="manifest" href="/favicons/site.webmanifest"/>
          <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5"/>
          <link rel="shortcut icon" href="/favicons/favicon.ico"/>
          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta name="msapplication-config" content="/favicons/browserconfig.xml"/>
          <meta name="theme-color" content="#ffffff"/>

          <link type="image/png" sizes="96x96" rel="icon" href="/favicons/favicon-96x96.png"/>
          <link type="image/png" sizes="120x120" rel="icon" href="/favicons/favicon-120x120.png"/>
          <link type="image/x-icon" sizes="120x120" rel="icon" href="/favicons/favicon-120x120.ico"/>
          <link type="image/png" sizes="192x192" rel="icon" href="/favicons/android-icon-192x192.png"/>
          <link sizes="57x57" rel="apple-touch-icon" href="/favicons/apple-touch-icon-57x57.png"/>
          <link sizes="60x60" rel="apple-touch-icon" href="/favicons/apple-touch-icon-60x60.png"/>
          <link sizes="72x72" rel="apple-touch-icon" href="/favicons/apple-touch-icon-72x72.png"/>
          <link sizes="76x76" rel="apple-touch-icon" href="/favicons/apple-touch-icon-76x76.png"/>
          <link sizes="114x114" rel="apple-touch-icon" href="/favicons/apple-touch-icon-114x114.png"/>
          <link sizes="120x120" rel="apple-touch-icon" href="/favicons/apple-touch-icon-120x120.png"/>
          <link sizes="144x144" rel="apple-touch-icon" href="/favicons/apple-touch-icon-144x144.png"/>
          <link sizes="152x152" rel="apple-touch-icon" href="/favicons/apple-touch-icon-152x152.png"/>
          <meta name="msapplication-TileImage" content="/favicons/mstile-144x144.png"/>
          <meta name="msapplication-square70x70logo" content="/favicons/mstile-70x70.png"/>
          <meta name="msapplication-square150x150logo" content="/favicons/mstile-150x150.png"/>
          <meta name="msapplication-wide310x150logo" content="/favicons/mstile-310x150.png"/>
          <meta name="msapplication-square310x310logo" content="/favicons/mstile-310x310.png"/>

          <meta name="application-name" content="Веб разработчик, сайт на заказ."/>

          <meta property="og:locale" content="ru_RU" />
          <meta property="og:title" content={titleMeta} />
          <meta property="og:description" content={descriptionMeta} />
          <meta property="og:image" content="https://www.bestjap.ru/titleImage.webp" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={titleMeta} />
          <meta name="twitter:description" content={descriptionMeta} />
          <meta name="twitter:image" content="https://www.bestjap.ru/titleImage.webp" />
          <meta name="twitter:image:alt" content="/titleImage.webp" />
        </>}

        {index===false  && <>
          <meta name = "robots" content = "noindex, nofollow" />
        </>}

      </Head>

        <Header/>
          <div className={css.content}>
            <main>
              <div  className={css.fon} ></div>
              <div  className={css.fon_right} ></div>
              <div  className={css.fon_left} ></div>

              <div className={css.wrapper}>
                <div className={css.container}>
                    {children}
                </div>
              </div>

            </main>
          </div>
        <Footer />
      </>
    )
}
