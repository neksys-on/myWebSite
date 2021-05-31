import Layout from '../../components/layout/layout'
import css from './index.module.scss'
import React, { useState, useEffect, useCallback } from 'react'
import TelephoneInput from '../../components/telephoneInput'



function highlighting(type) {
  const h2 = document.querySelector(`#h2_${type}`)
  const input = document.querySelector(`#input_${type}`)
  h2.style.color = '#EA2845'
  input.style.border = '1px solid #EA2845'
}

function stop_highlighting(type) {
  const h2 = document.querySelector(`#h2_${type}`)
  const input = document.querySelector(`#input_${type}`)
  h2.style.color = '#fff'
  input.style.border = '1px solid #cccccc'
}



export default function Request() {
  const [phone_value, setPhone_value] = useState('+7')
  const [phone_value_length, setPhone_value_length] = useState(3)

  function handleChange(e) {
    setPhone_value(e.target.value)
    setPhone_value_length(e.target.value.length)
  }

  useEffect(()=>{


  })


  async function msg(doing, textMsg, from_phone_number, to_phone_number) {
    const responseWA = await fetch('/api/msgsend', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        do: doing,
        text: textMsg,
        from: from_phone_number,
        to: to_phone_number,
       }),
    })
    const respMsg = await responseWA.json()
    // console.log(respMsg.status)
    if (respMsg.status === 'Complete') {
      // всплывающее окошко запустить о том что заявка принята
      const application = document.querySelector(`#application`)
      const pop_up = document.querySelector(`#pop_up`)
      application.style.display = 'none'
      pop_up.style.display = 'block'
    }

  }

  const onClickSendRequest = React.useCallback((e) => {

    const name = document.querySelector(`#input_name`).value
    const surname = document.querySelector(`#input_surname`).value
    const email = document.querySelector(`#input_email`).value
    const telephone = document.querySelector(`#input_telephone`).value
    const description = document.querySelector(`#input_comments`).value

    const markName = document.querySelector(`#mark_name`)
    const markPhone = document.querySelector(`#mark_phone`)
    const markDescription = document.querySelector(`#mark_comments`)
    const marksText = document.querySelector(`#marksText`)

    if (name !== '' && name.length >= 2 && telephone.length >= '11' && description !== '') {
      marksText.style.display = 'none'
      markName.style.display = 'none'
      markPhone.style.display = 'none'
      markDescription.style.display = 'none'

      const text = surname +' \n'+ name +' \n'+ telephone +' \n'+ email +' \n'+ description

      msg('send', text, '+79673055577', '+79086752252')

    } else {
      marksText.style.display = 'block'
      if (name === '' || name.length < 2) { markName.style.display = 'block' } else { markName.style.display = 'none' }
      if (telephone.length < '11') { markPhone.style.display = 'block' } else { markPhone.style.display = 'none' }
      if (description.length < 1) { markDescription.style.display = 'block' } else { markDescription.style.display = 'none' }

    }


  }, []);

  const onClickOkPopUp = () => {
    const application = document.querySelector(`#application`)
    const pop_up = document.querySelector(`#pop_up`)
    document.querySelector(`#input_name`).value = ''
    document.querySelector(`#input_surname`).value = ''
    document.querySelector(`#input_email`).value = ''
    document.querySelector(`#input_telephone`).value = '+7 '
    document.querySelector(`#input_comments`).value = ''
    application.style.display = 'block'
    pop_up.style.display = 'none'
  }


  return (
    <Layout titleMeta={'Оставить заявку'} descriptionMeta={'Что бы оставить заявку на создание вашего сайта, заполните форму обратной связи'} keywordsMeta={'форма, обратная связь, оставить заявку, разработка, сайт, заказать сайт, SEO, продвижение'} index={true}>
      <>
        <div id={'application'} className={css.application_container}>
          <div className={css.application_content}>
            <div className={css.application_header}>
              <h1>Желаете заказать свой проект у меня?</h1>
              <h2>Вы можете заполнить форму</h2>
            </div>
            <div className={css.application_body}>
              <div className={css.application_body_stroka}>

                <div className={css.div_input}>
                  <div className={css.input_title}><h2 id={'h2_surname'}>Фамилия</h2><h3 id={'mark_surname'}>*обязательное</h3></div>
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
                  <div className={css.input_title}><h2 id={'h2_name'}>Имя</h2><h3 id={'mark_name'}>*обязательное</h3></div>
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
                  <div className={css.input_title}><h2 id={'h2_email'}>Email</h2><h3 id={'mark_email'}>*обязательное</h3></div>
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
                  <div className={css.input_title}><h2 id={'h2_comments'}>Описание</h2><h3 id={'mark_comments'}>*обязательное</h3></div>
                  <textarea id={'input_comments'} className={css.form_input_comments}  type='text'
                  onFocus={()=>{
                    highlighting('comments')
                  }}
                  onBlur={()=>{
                    stop_highlighting('comments')
                  }}
                  ></textarea>
                  <div className={css.marksTextDiv}><h3 id={'marksText'}>*Пожалуйста, заполните все обязательные поля</h3></div>
                </div>

              </div>
              <div className={css.application_body_text}></div>
            </div>
            <div className={css.application_footer}>
              <div className={css.button}>
                <div className={css.button_container} onClick={onClickSendRequest}>
                  Отправить
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id={'pop_up'} className={css.pop_up_wrapper}>
          <div className={css.pop_up_contaoner}>
            <div className={css.pop_up_box}>
              <div className={css.pop_up_text}>Спасибо за заявку, я свяжусь с Вами так быстро, как только смогу.</div>
              <div className={css.pop_up_button}>
                <div className={css.pop_up_button_container} onClick={onClickOkPopUp}>
                  ОК
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </Layout>
  )
}
