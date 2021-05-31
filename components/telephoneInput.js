import { useState, useEffect, useCallback } from 'react'
import css from '../pages/request/index.module.scss'

export default function Input() {

  const [phone_value, setPhone_value] = useState('+7 ')
  const [phone_value_length, setPhone_value_length] = useState(3)
  const [phone_max_length, setPhone_max_length] = useState(16)

  function handleChange(e) {
    const val = e.target.value
                  let newVal = val
                  let n = 0
                  if ((e.target.value[0] !== '8')&(e.target.value[0] !== '7')&(e.target.value[0] !== '+')) {
                    n = 3
                  }
                  else {
                    if (e.target.value[0] !== '+') {
                      n = 1
                    }
                    if ((e.target.value.length > 2-n)&(e.target.value[2-n] !== ' ')&(e.target.value.length > phone_value_length)) {
                      newVal = ''
                      for (let i = 0; i < e.target.value.length; i++) {
                        if (i === 2-n) {
                          newVal = newVal+' '
                        }
                        newVal = newVal+e.target.value[i]
                      }
                    }
                  }
                  if (((e.target.value.length === 6-n)||(e.target.value.length === 10-n)||(e.target.value.length === 13-n))&(e.target.value.length > phone_value_length)) {
                    newVal = val+' '
                  }

                  if ((e.target.value.length > 6-n)&(e.target.value[6-n] !== ' ')&(e.target.value.length > phone_value_length)) {
                    newVal = ''
                    for (let i = 0; i < e.target.value.length; i++) {
                      if (i === 6-n) {
                        newVal = newVal+' '
                      }
                      newVal = newVal+e.target.value[i]
                    }
                  }

                  if ((e.target.value.length > 10-n)&(e.target.value[10-n] !== ' ')&(e.target.value.length > phone_value_length)) {
                    newVal = ''
                    for (let i = 0; i < e.target.value.length; i++) {
                      if (i === 10-n) {
                        newVal = newVal+' '
                      }
                      newVal = newVal+e.target.value[i]
                    }
                  }
                  if ((e.target.value.length > 13-n)&(e.target.value[13-n] !== ' ')&(e.target.value.length > phone_value_length)) {
                    newVal = ''
                    for (let i = 0; i < e.target.value.length; i++) {
                      if (i === 13-n) {
                        newVal = newVal+' '
                      }
                      newVal = newVal+e.target.value[i]
                    }
                  }
                  if (e.target.value[0] !== '+') {
                    setPhone_max_length(15)
                  } else {
                    setPhone_max_length(16)
                  }

                  setPhone_value(newVal)
                  setPhone_value_length(e.target.value.length)
  }

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


  return (
    <>
      <div className={css.div_input}>
        <div className={css.input_title}><h2 id={'h2_telephone'}>Номер телефона</h2><h3 id={'mark_phone'}>*обязательное</h3></div>
        <input id={'input_telephone'} className={css.form_input} type='tel' value={phone_value} maxLength={phone_max_length}
        onChange = {handleChange}
        onFocus={()=>{
          highlighting('telephone')
        }}
        onBlur={()=>{
          stop_highlighting('telephone')
        }}
        ></input>
      </div>
    </>
  )
}
