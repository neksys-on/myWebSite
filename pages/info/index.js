import Layout from '../../components/layout/layout'
import css from './index.module.scss'



export default function Info() {


  return (
    <Layout>
      <>
        <div className={css.show__content}>
          <div className={css.show__content_2}>
            <div className={css.show__frame_left_top}>
              <div className={css.show__frame_left_top_item}></div>
              <div className={css.show__frame_right_top_item}></div>
            </div>
            <div className={css.show__element}>
              <div className={css.element_box}>
                <div className={css.person_container}>
                  <div className={css.person_header}>
                    <div className={css.person_image}></div>
                    <div className={css.person_description}>
                      <h1>Привет, меня зовут Дмитрий Савчук</h1>
                      <h2>Я веб разработчик, фрилансер</h2>
                      <h2>Делаю приложения на Next.js</h2>
                    </div>
                  </div>
                  <div className={css.person_content}>
                    <div className={css.content_conteiner}>
                      <div className={css.content_element}>
                        <div className={css.content_question}><h3>Что я умею?</h3></div>
                        <div className={css.content_answer}><h3>Все что захочу.</h3></div>
                      </div>
                      <div className={css.content_element}>
                        <div className={css.content_question}><h3>Мое главное приемущество?</h3></div>
                        <div className={css.content_answer}><h3>Могу релаизовать Вашу идею.</h3></div>
                      </div>
                      <div className={css.content_element}>
                        <div className={css.content_question}><h3>Мои главный навык?</h3></div>
                        <div className={css.content_answer}><h3>Нереальная обучаемость.</h3></div>
                      </div>
                      <div className={css.content_element}>
                        <div className={css.content_question}><h3>Наверное я скромняга?</h3></div>
                        <div className={css.content_answer}><h3>Ну есть немного.</h3></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={css.show__frame_right_bottom}>
              <div className={css.show__frame_left_bottom_item}></div>
              <div className={css.show__frame_right_bottom_item}></div>
            </div>
          </div>
        </div>
      </>
    </Layout>
  )
}
