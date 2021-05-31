import Layout from '../../components/layout/layout'
import css from './index.module.scss'
import Link from 'next/link'



export default function Info() {


  return (
    <Layout titleMeta={'Политика конфиденциальности'} descriptionMeta={'Политика конфиденциальности'} keywordsMeta={''} index={false}>
      <>
        <div className={css.wrapper}>
          <div className={css.container}>
            <div className={css.title}><h1>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</h1></div>
            <h2>Политика конфиденциальности</h2>
            <p>Этот сайт принадлежит Дмитрию Савчуку. Для меня очень важно сохранять Вашу конфиденциальность во время пользования Интернетом, так как я хочу, чтобы Вы чувствовали себя в безопасности и не испытывали дискомфорта.</p>
            <p>Я собираю некоторую информацию личного характера о своих пользователях и ниже привожу условия получения и использования этой информации.</p>
            <h2>Собираемая информация</h2>
            <p>Я собираю два типа информации о пользователях:</p>
            <div className={css.otstup}><h4>›</h4><p> Информация, которую пользователь предоставляет добровольно. К ней, например, относится Ваше имя и номер телефона, которые Вы указываете при оформлении заявки.</p></div>
            <div className={css.otstup}><h4>›</h4><p> Информация, получаемая путем комплексного слежения и статистической обработки динамики просмотра страниц моего сайта. Эта информация позволяет мне лучше приспособить содержимое моего сайта к потребностям пользователей и помогает понять демографию аудитории. Ни при каких обстоятельствах я не разглашает информацию об отдельном пользователе третьим лицам, кроме случаев, предусмотренных законом.</p></div>
            <h2>Использование информации</h2>
            <p>Я используем всю добровольно предоставленную пользователями информацию для добавления новых и улучшения существующих услуг, которые бы максимально соответствовали интересам и потребностям пользователей.</p>
            <p>Я анализируем трафик пользователей, чтобы знать, что на моем сайте пользуется наибольшей популярностью и наоборот. Я не отслеживаем, что именно читает конкретный пользователь, а только считаю общее количество просмотров каждой страницы. Это помогает мне предоставлять Вам более качественные услуги.</p>
            <p>Никакая информация личного характера об отдельном пользователе не разглашается, кроме случаев, предусмотренных законом.</p>
            <h2>Выдача информации</h2>
            <p>Я использую описанные выше виды информации для адаптации своих услуг и содержимого Вашим потребностям и для лучшего понимания демографии аудитории. Это необходимо, чтобы мои услуги и дальше оставались полезными. Никакая информация личного характера об отдельном пользователе третьим лицам не разглашается, кроме случаев, предусмотренных законом.</p>
            <h2>Ваше согласие</h2>
            <p>Пользуясь этим сайтом, Вы соглашаетесь с условиями сбора и использования описанной выше информации. Если будет решино изменить политику конфиденциальности, то будут внесены изменения на эту страницу, чтобы Вы всегда были в курсе, какая информация собирается, как она используется и при каких обстоятельствах раскрывается.</p>
            <p></p>
          </div>
        </div>
      </>
    </Layout>
  )
}
