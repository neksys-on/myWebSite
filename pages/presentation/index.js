import Layout from '../../components/layout/layout'
import css from './index.module.scss'
import { useState, useEffect, useCallback } from 'react'



export default function Presentation() {
  const [widDisp, setWidDisp] = useState(0)

  let cardTransitionTime = 8

  useEffect(()=>{
    if ((typeof window !== 'undefined')&(widDisp === 0)) {
    setWidDisp(document.documentElement.clientWidth)
  }
  },[])

  return (
    <Layout titleMeta={'Презентация работ'} descriptionMeta={'Портфолио в виде небольшой презинтации, на уже созданные работы.'} keywordsMeta={'информация, разработчик, веб разработка, SEO, продвижение, услуги'} index={true}>
      <>
        <div className={css.container__show}>
          <div className={css.project_container}
            onMouseMove={(e) => {
                if (widDisp>768) {
                  const card = document.querySelector(`#idCard`)
                  const coord = card.getBoundingClientRect()
                  let xAxis =  (coord.x + (coord.width / 2) - e.clientX) / 60;
                  let yAxis =  -1*(coord.y + (coord.height / 2) - e.clientY) / 45;
                  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) translateZ(145px)`

                  cardTransitionTime -= 1
                  if (cardTransitionTime>0) {
                    card.style.transition = `all 0.${cardTransitionTime*10}s ease`
                  }
                }
            }}
            onMouseEnter={(e) =>{
                if (widDisp>768) {
                  const card = document.querySelector(`#idCard`)
                  const header = document.querySelector(`#idHeader`)
                  const footer = document.querySelector(`#idFooter`)

                  header.style.transition = 'all 0.85s ease'
                  footer.style.transition = 'all 0.85s ease'

                  header.style.transform = 'translateZ(50px)'
                  footer.style.transform = 'translateZ(50px)'
                }
            }}
            onMouseLeave={(e) =>{
                if (widDisp>768) {
                  cardTransitionTime = 8
                  const card = document.querySelector(`#idCard`)
                  const header = document.querySelector(`#idHeader`)
                  const footer = document.querySelector(`#idFooter`)

                  card.style.transform = `rotateY(0deg) rotateX(0deg) translateZ(80px)`
                  card.style.transition = 'all 0.5s ease'

                  header.style.transition = 'all 0.85s ease'
                  footer.style.transition = 'all 0.85s ease'


                  header.style.transform = 'translateZ(0px)'
                  footer.style.transform = 'translateZ(0px)'
                }
            }}
          >
            <div className={css.project_content}>
              <div className={css.project_scroll}>
                <a className={css.project_element1} id={'idCard'} href="https://www.bestjap.ru/" target={"_blank"}>
                  <div className={css.project_header} id={'idHeader'}><p>Интернет магазин</p></div>
                  <div className={css.project_item1}></div>
                  <div className={css.project_footer} id={'idFooter'}><p>Интерактивный интернет магазин с наворотами</p></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    </Layout>
  )
}
