import { useRef, useEffect } from 'react'

// idImage, src, width, height обязательны ,,, необязательные: size-размер крупиц, velocity-скорость крупиц, numPart - количество крупиц (больше 10к-лаги)
// angle- активность смещенного движения (в основном от 0 до 2), coefSpeedX|Y- коэф скорости по X|Y

const Canvas = ({props, idImage, src, width, height, size=0, velocity=0.1, numPart=5000, angle=0.2, coefSpeedX=3, coefSpeedY=3}) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const img = document.getElementById(idImage)
    canvas.width = width
    canvas.height= height
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    let particleArray = []
    const numberOfParticles = numPart

    let mappedImage = []
    for (let y = 0; y < canvas.height; y++) {
      let row = []
      for (let x = 0; x < canvas.width; x++) {
        const red = pixels.data[(y*4*pixels.width)+(x*4)]
        const green = pixels.data[(y*4*pixels.width)+(x*4+1)]
        const blue   = pixels.data[(y*4*pixels.width)+(x*4+2)]
        const brightness = calculatedRelativeBrigthness(red, green, blue)
        const cell = [
          brightness,
          'rgb('+red+','+green+','+blue+')'
        ]
        row.push(cell)
      }
      mappedImage.push(row)
    }

    function calculatedRelativeBrigthness(red, green, blue) {
      return Math.sqrt(
        (red*red)*0.299 +
        (green*green)*0.587 +
        (blue*blue)*0.114
      )/100
    }

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = 0
        this.speed = 0
        this.velocity = Math.random() * (0.1+velocity)
        this.size = Math.random() * (size) + 1
        this.position1 = Math.floor(this.y)
        this.position2 = Math.floor(this.x)
        this.angle = 0
      }
      update() {
        this.position1 = Math.floor(this.y)
        this.position2 = Math.floor(this.x)
        if ((mappedImage[this.position1])&&(mappedImage[this.position1][this.position2])) {
          this.speed = mappedImage[this.position1][this.position2][0]
        }
        let movement = (2.5 - this.speed) + this.velocity
        this.angle+=this.speed/20


        this.y += movement + Math.sin(this.angle)*coefSpeedY
        this.x += movement + Math.cos(this.angle)*coefSpeedX
        if (this.y >= canvas.height) {
          this.y = 0
          this.x = Math.random() * canvas.width
        }
        if (this.x >= canvas.width) {
          this.x = 0
          this.y = Math.random() * canvas.height
        }
      }
      draw() {
        ctx.beginPath()
        ctx.fillStyle = 'white'
        if ((mappedImage[this.position1])&&(mappedImage[this.position1][this.position2])) {
          ctx.fillStyle = mappedImage[this.position1][this.position2][1]
        }
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }

    }

    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particleArray.push(new Particle)
      }
    }
    init()


    let animationFrameId
    const animate = () => {
      // ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
      ctx.globalAlpha = 0.05
      ctx.fillStyle = 'rgb(0, 0, 0)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].update()
        ctx.globalAlpha = particleArray[i].speed/5
        particleArray[i].draw()
      }
      animationFrameId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }

  }, [])



  return (
    <>
      <img id={idImage} src={src} width={width} height={height} style={{display:'none'}}/>
      <canvas ref={canvasRef} {...props}/>
    </>
  )
}

export default Canvas
