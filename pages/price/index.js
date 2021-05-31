import Layout from '../../components/layout/layout'
import css from './index.module.scss'
import Link from 'next/link'


function Offer( {name, discription, price, usl} ) {
  if (price.length>3) {
    let priceObr = ''
    let threeN = 0
    for (let i = price.length-1; i >= 0; i--) {
      threeN++
      if (threeN>=4) {
        threeN = 1
        priceObr+= ' '
      }
      priceObr+= price[i]
    }
    price = ''
    for (let i = priceObr.length-1; i >= 0; i--) {
      price+= priceObr[i]
    }
  }

  return (
    <>
      <div className={css.offer}>
        <div className={css.offer_discription}>
          <h4 className={css.otstup}>{name}</h4>
          <p className={css.otstup}>{discription}</p>
        </div>
        <div className={css.price}>
          <h4>{price}₽
          {usl === '*' && <>
            *
          </>}
          </h4>
        </div>
      </div>
      <div className={css.hr}></div>
    </>
  )
}

export default function Info() {


  return (
    <Layout titleMeta={'Прайс лист'} descriptionMeta={'Прайс-лист услуг веб разработки, SEO-продвижения и поддержки вашего сайта.'} keywordsMeta={'прайс, лист, услуги, веб разработка, SEO, продвижение, поддержка сайта'} index={true}>
      <>
        <div className={css.wrapper}>
          <div className={css.container}>
            <div className={css.title}><h1>ПРАЙС-ЛИСТ</h1></div>
            <h2>Комплексная разработка, SEO-продвижение и поддержка Вашего сайта. Cтоимость услуг веб-разработчика.</h2>
            <p>ХОСТИНГ:</p>
            <div className={css.offer}>
              <div className={css.offer_discription}>
                <h4 className={css.otstup}>Хостинг на Vercel</h4>
                <p className={css.otstup}>Проекты, заказанные у меня, я могу для Вас развернуть(запустить), бессрочно и бесплатно, на высококачественном облачном сервисе <Link href="https://vercel.com/"><a>Vercel</a></Link>, который имеет свою CDN структуру, автоматически предоставляет бессрочный SSL сертификат, и все это совершенно бесплатно.</p>
              </div>
              <div className={css.price}>
                <h4>Бесплатно</h4>
              </div>
            </div>
            <div className={css.hr}></div>
            <p>САЙТ:</p>
            <Offer name={'Сайт-визитка'} discription={'Создание личного сайта с нуля.'} price={'2500'} />
            <Offer name={'Посадочная страница'} discription={'Одностраничный промо-сайт (landing page).'} price={'5500'} />
            <Offer name={'Интернет-магазин'} discription={'Сайт с системой управления товарами/услугами с большим набором средств для маркетинга и электронной коммерции.'} price={'35000'} />
            <p>SEO-продвижение:</p>
            <Offer name={'Установка на сайт счетчиков статистики'} discription={'Яндекс метрика, Google Аналитика'} price={'1500'} />
            <Offer name={'Заполнение всех мета данных (1 стр. сайта)'} discription={'Все метаданные необходимые для SEO оптимизации, включая: title, description, keywords, favicons параметры всех размеров, OpenGraph Tags, twitter tags'} price={'800'} />
            <p>ПРОЧИЕ РАБОТЫ:</p>
            <Offer name={'Подбор доменного имени'} discription={'Подбор доменного имени исходя из ваших пожеланий, целей и региональной направленности'} price={'1000'} />
            <Offer name={'Разработка калькулятора на сайт (расчет услуг/товаров)'} discription={''} price={'5000'} usl={'*'}/>
            <Offer name={'Система регистрации'} discription={'Современная система регистрации на сайте, со всеми самыми лучшими методами защиты информации.'} price={'5000'} />
            <Offer name={'Личный кабинет'} discription={'Создание личного кабинета с необходимым функционалом.'} price={'5000'} usl={'*'} />
            <Offer name={'Разработка визуальных эффектов'} discription={'Создание визуальных эффектов/анимаций/отрисовки данных(графиков) при помощи canvas.'} price={'2000'} usl={'*'} />
            <Offer name={'Подключение WhatsApp оповещений'} discription={'Подключение и настройка автоматических WhatsApp сообщений/уведомлений с одного номера на другой/другие(возможна рассылка), без абонентской платы.'} price={'5000'} usl={'*'} />
            <h4>* Указанные цены являются условно ориентировочными и могут отличатся в зависимости от сложности и емкости задачи.</h4>
            <p></p>
          </div>
        </div>
      </>
    </Layout>
  )
}
