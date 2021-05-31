import Layout from '@/components/layout/layout'
import css from './index.module.scss'
import MyCanvas from '@/components/canvas/canvas'
import CanvasText from '@/components/canvas/canvasText'




export default function Title() {


  return (
    <Layout titleMeta={'Веб разработка'} descriptionMeta={'Заказать сайт под ключ, можно здесь.'} keywordsMeta={''} index={true} >
      {/*Картинка со словом киберпанк*/}
      {/*<MyCanvas idImage={'cyber'} src={'/cyber.png'} width={440} height={112} size={0} velocity={1} numPart={2000}/>*/}
      {/*<div className={css.container}>
        <div className={css.canvasText1}>
          <MyCanvas idImage={'text1'} src={'/text2.png'} width={851} height={120} size={0} velocity={0} numPart={3000} angle={1} coefSpeedX={1} coefSpeedY={2}/>
        </div>
        <div className={css.canvasText2}>
          <MyCanvas idImage={'text2'} src={'/text3.png'} width={851} height={120} size={0} velocity={0} numPart={3000} angle={2} coefSpeedX={1} coefSpeedY={1}/>
        </div>
      </div>*/}

      {/*<<div className={css.container}>
        <div className={css.canvasText1}>
          <CanvasText text={'Твой сайт по'} idcanv={'canv1'} width={900} height={300} fontHeight={25} fontFamily={'Verdana'} grow={5} x={10} y={40} xm={40} ym={0} cDot={'rgb(190, 0, 39)'} cLine={'rgb(244, 137, 36)'} rLine={9} lineWidth={4} rDestr={120} spDestr={0.5} slowRec={22}/>
        </div>
        <div className={css.canvasText2}>
          <CanvasText text={'Твоим'} width={900} idcanv={'canv2'} height={300} fontHeight={25} fontFamily={'Verdana'} grow={5} x={10} y={40} xm={40} ym={0} cDot={'rgb(190, 0, 39)'} cLine={'rgb(244, 137, 36)'} rLine={9} lineWidth={4} rDestr={120} spDestr={0.5} slowRec={22}/>
        </div>


      </div>*/}
      <div className={css.container}>
        <div className={css.text1}></div>
      </div>
    </Layout>
  )
}
