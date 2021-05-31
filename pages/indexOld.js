import Head from 'next/head'
import css from './index.module.scss'
import { useState, useEffect, useCallback } from 'react'
import TelephoneInput from '../components/telephoneInput'
import Layout from '../components/layout/layout'



function highlighting(type) {
  const h2 = document.querySelector(`#h2_${type}`)
  const input = document.querySelector(`#input_${type}`)
  h2.style.color = '#d15698'
  input.style.border = '1px solid #d15698'
}

function stop_highlighting(type) {
  const h2 = document.querySelector(`#h2_${type}`)
  const input = document.querySelector(`#input_${type}`)
  h2.style.color = '#aaa'
  input.style.border = '1px solid #cccccc'
}


export default function Home() {
  const [test, setTest] = useState('click me')
  const [wid, setWid] = useState(0)
  const [show, setShow] = useState('Title')
  const [heig, setHeig] = useState(0)
  const [n, setN] = useState(0)
  const [phone_value, setPhone_value] = useState('+7')
  const [phone_value_length, setPhone_value_length] = useState(3)


  function handleChange(e) {
    setPhone_value(e.target.value)
    setPhone_value_length(e.target.value.length)
  }


  let y = 47
  let x0 = 50
  let x = 50+(0.01*y*(0.06*y))
  let x2 = 50-(0.01*y*(0.06*y))
  let coord = []
  coord.push({x:x0, y})

  let cardTransitionTime = 8

  while (y<94) {
    coord.push({x, y})
    coord.push({x:x2, y})
    x+=(0.01*y*(0.06*y))
    x2-=(0.01*y*(0.06*y))

    if (x>99.9) {
      y+=0.17*y*(0.01*y)*(0.009*y)/2
      if (y<94) {
        coord.push({x:x0, y})
      }
      x=50+(0.01*y*(0.06*y))
      x2=50-(0.01*y*(0.06*y))
    }

  }
  const [coordItem, setCoordItem] = useState(coord)

  useEffect(()=>{

  if ((typeof window !== 'undefined')&(wid === 0)) {
    setWid(document.documentElement.clientWidth)
    setHeig(document.documentElement.clientHeight)
  }

})


  function Dinamic_item() {
      return (
        <>
          <div className={css.test}>{n}{show}</div>
          {coordItem.map((element)=>(
            <div key={`${element.y}${element.x}`} className={css.item} style={{top: `${element.y}%`, left: `${element.x}%`, width:`${Math.floor(element.y/7-3)}px`, height:`${Math.floor(element.y/7-3)}px`}}></div>
          ))}
        </>
      )
  }

  function Show_info() {
      return (
        <>
            <div className={css.wrapper}>
              <div className={css.container}>
                <div className={css.container__menu}>
                  <div className={css.menu__content}>
                    <div className={css.menu__element} onClick={()=>{
                      setShow('Info_person')
                    }}>
                    </div>
                    <div className={css.menu__element} onClick={()=>{
                      setShow('Info_project')
                    }}>
                    </div>
                    <div className={css.menu__element} onClick={()=>{
                      setShow('Application_Form')
                    }}>
                    </div>
                    <div className={css.menu__element}>
                    </div>
                  </div>
                </div>
                <div className={css.container__show}>
                  <Info TypeInfo={show}/>
                </div>
              </div>
            </div>
        </>
      )
  }


  function Info({TypeInfo}) {

    if (TypeInfo === 'Info_person')  return (
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
                        <a>Привет, меня зовут Дмитрий Савчук</a>
                        <a>Я веб разработчик, фрилансер</a>
                        <a>Делаю приложения на Next.js</a>
                      </div>
                    </div>
                    <div className={css.person_content}>
                      <div className={css.content_conteiner}>
                        <div className={css.content_element}>
                          <div className={css.content_question}><a>Что я умею?</a></div>
                          <div className={css.content_answer}><a>Все что захочу.</a></div>
                        </div>
                        <div className={css.content_element}>
                          <div className={css.content_question}><a>Мое главное приемущество?</a></div>
                          <div className={css.content_answer}><a>Могу релаизовать Вашу идею.</a></div>
                        </div>
                        <div className={css.content_element}>
                          <div className={css.content_question}><a>Мои главный навык?</a></div>
                          <div className={css.content_answer}><a>Нереальная обучаемость.</a></div>
                        </div>
                        <div className={css.content_element}>
                          <div className={css.content_question}><a>Наверное я скромняга?</a></div>
                          <div className={css.content_answer}><a>Ну есть немного.</a></div>
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
      )

      if (TypeInfo === 'Info_project')  return (
          <>
            <div className={css.project_container}
            onMouseMove={(e) => {

                const card = document.querySelector(`#idCard`)
                const coord = card.getBoundingClientRect()
                let xAxis =  (coord.x + (coord.width / 2) - e.clientX) / 60;
                let yAxis =  -1*(coord.y + (coord.height / 2) - e.clientY) / 45;
                card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) translateZ(145px)`

                cardTransitionTime -= 1
                if (cardTransitionTime>0) {
                  card.style.transition = `all 0.${cardTransitionTime*10}s ease`
                }
            }}
            onMouseEnter={(e) =>{
                const card = document.querySelector(`#idCard`)
                const header = document.querySelector(`#idHeader`)
                const footer = document.querySelector(`#idFooter`)

                header.style.transition = 'all 0.85s ease'
                footer.style.transition = 'all 0.85s ease'

                header.style.transform = 'translateZ(50px)'
                footer.style.transform = 'translateZ(50px)'
            }}
            onMouseLeave={(e) =>{
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


            }}
            >
              <div className={css.project_content}>
                <div className={css.project_scroll}>
                  <div className={css.project_element1} id={'idCard'}>
                    <div className={css.project_header} id={'idHeader'}><a>Интернет магазин</a></div>
                    <div className={css.project_item1}></div>
                    <div className={css.project_footer} id={'idFooter'}><a>Интерактивный интернет магазин с наворотами</a></div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )

        if (TypeInfo === 'Application_Form')  return (
            <>
              <div className={css.application_container}>
                <div className={css.application_content}>
                  <div className={css.application_header}>
                    <a>Желаете заказать свой проек у меня?</a>
                    <a>Вы можете заполнить форму</a>
                  </div>
                  <div className={css.application_body}>
                    <div className={css.application_body_stroka}>

                      <div className={css.div_input}>
                        <h2 id={'h2_surname'}>Фамилия</h2>
                        <input id={'input_surname'} className={css.form_input} type='text'
                        onFocus={()=>{
                          highlighting('surname')
                        }}
                        onBlur={()=>{
                          stop_highlighting('surname')
                        }}
                        ></input>
                      </div>
                      <div className={css.div_input}>
                        <h2 id={'h2_name'}>Имя</h2>
                        <input id={'input_name'} className={css.form_input} type='text'
                        onFocus={()=>{
                          highlighting('name')
                        }}
                        onBlur={()=>{
                          stop_highlighting('name')
                        }}
                        ></input>
                      </div>
                      <div className={css.div_input}>
                        <h2 id={'h2_email'}>Имя</h2>
                        <input id={'input_email'} className={css.form_input} type='email'
                        onFocus={()=>{
                          highlighting('email')
                        }}
                        onBlur={()=>{
                          stop_highlighting('email')
                        }}
                        ></input>
                      </div>

                      <TelephoneInput value={phone_value}/>

                      <div className={css.div_input_comments}>
                        <h2 id={'h2_comments'}>Описание</h2>
                        <textarea id={'input_comments'} className={css.form_input_comments}  type='text'
                        onFocus={()=>{
                          highlighting('comments')
                        }}
                        onBlur={()=>{
                          stop_highlighting('comments')
                        }}
                        ></textarea>
                      </div>

                    </div>
                    <div className={css.application_body_text}></div>
                  </div>
                  <div className={css.application_footer}>
                    <div className={css.button}>
                      <div className={css.button_container}>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )

      return (
        <></>
      )
  }



  return (
    <>
      <div className={css.fon} onMouseMove={(e)=>{
        let pos = {x: e.clientX/wid*100, y:e.clientY/heig*100}

        // coord = coordItem
        // coord.map((element)=>{
        //   if ((element.x>pos.x-2)&(element.x<pos.x+2)&(element.y<pos.y+2)&(element.y>pos.y-2)) {
        //     element.y-=2
        //   }
        // })
        // setCoordItem(coord)
      }}>
        <Show_info/>
        <Dinamic_item/>
      </div>

    </>
  )
}
