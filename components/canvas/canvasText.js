import { useRef, useEffect } from 'react'
import css from './canvasText.module.scss'

// Verdana, Arial, Times New Roman, serif, sans-serif
// grow- множитель межпиксельной дист, min 1-впритык. x,y - координаты начала в canvas. xm,ym- отступ от координаты. cDot/cLine- цвет точек/линий.
// rDestr/rLine - радиус Разрушения/ создания линий. spDestr-скорость разрушения. slowRec- медленность востановления. lineWidth- толщена линий
const CanvasText = ({ text='-', idcanv,width=100, height=100, fontHeight=15, grow=1,fontFamily='Verdana',x=10,y=10,xm=0,ym=0,cDot='white',cLine='white', rDestr=80, rLine=1, spDestr=1, slowRec=10, lineWidth=1}) => {
  const canvasRef = useRef(null)


  useEffect(() => {
    let mouse = {x:0, y:0, radius: rDestr}
    window.addEventListener('mousemove', function(event){
      mouse = {x:event.pageX, y:event.pageY, radius: rDestr}
    });


    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    canvas.width = width
    canvas.height= height
    let adjustX = xm
    let adjustY = ym
    let particleArray = []
    const coordCanv = document.querySelector(`#${idcanv}`).getBoundingClientRect()

    ctx.fillStyle = 'white'
    console.log(ctx.font)
    ctx.font = `${fontHeight}px ${fontFamily}`
    console.log(ctx.font)
    ctx.fillText(text, x, y)
    const textCoordinats = ctx.getImageData(0,0,width,height)

    class Particle {
      constructor(x, y){
        this.x = x
        this.y = y
        this.size = 2
        this.baseX = this.x
        this.baseY = this.y
        this.density = (Math.random()*30)+3
      }
      draw() {
        ctx.fillStyle = cDot
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()
      }
      update() {
        let dx = mouse.x-coordCanv.left - this.x
        let dy = mouse.y-coordCanv.top - this.y
        let distance = Math.sqrt(dx*dx+dy*dy)
        let forceDirectionX = dx / distance
        let forceDirectionY = dy / distance
        let maxDistance = mouse.radius
        let force = (maxDistance - distance)/maxDistance
        let directionX = forceDirectionX * force * this.density * spDestr
        let directionY = forceDirectionY * force * this.density * spDestr
        if (distance < mouse.radius) {
          this.x -= directionX
          this.y -= directionY
        } else {
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX
            this.x -= dx/slowRec
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY
            this.y -= dy/slowRec
          }
        }
      }
    }

    function init() {
      particleArray = []
      for (let y = 0, y2 = textCoordinats.height; y < y2; y++) {
        for (let x = 0, x2 = textCoordinats.width; x < x2; x++) {
          if (textCoordinats.data[(y*4*textCoordinats.width)+(x*4)+3] > 128) {
            let positionX = x + adjustX
            let positionY = y + adjustY
            particleArray.push(new Particle(positionX*grow, positionY*grow))
          }
        }
      }

    }
    init()


    let animationFrameId
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].draw()
        particleArray[i].update()
      }
      connect()
      animationFrameId = requestAnimationFrame(animate)
    }
    animate()

    function connect() {
      for (let a = 0; a < particleArray.length; a++) {
        for (let b = 0; b < particleArray.length; b++) {
          let dx = particleArray[a].x - particleArray[b].x
          let dy = particleArray[a].y - particleArray[b].y
          let distance = Math.sqrt(dx*dx+dy*dy)
          if (distance < rLine) {
            ctx.strokeStyle = cLine
            ctx.lineWidth = lineWidth
            ctx.beginPath()
            ctx.moveTo(particleArray[a].x,particleArray[a].y)
            ctx.lineTo(particleArray[b].x,particleArray[b].y)
            ctx.stroke()
          }
        }
      }
    }



    return () => {
        // window.removeEventListener('mousemove', handleScroll);
        window.cancelAnimationFrame(animationFrameId)
    };

  }, [])

  return (
    <>
      <canvas id={idcanv} ref={canvasRef} className={css.canvas}/>
    </>
  )
}
export default CanvasText
