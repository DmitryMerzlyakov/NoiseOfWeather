import { TApllication } from '..'

export const createWeatherItem = (items: TApllication[], paretn: HTMLDivElement | null) => {
  items.forEach(item => {
    const button = document.createElement('button')
    button.classList.add('item')
    
    button.style.backgroundImage = `url(${item.img})`
    button.style.backgroundSize = 'cover'
    button.style.backgroundPosition = 'center'

    const image = document.createElement('img')
    image.classList.add('item__img')
    image.src = item.icon
    image.alt = item.weatherType

    const volume = document.createElement('input')
    let currentValue = 0.5
    volume.classList.add('item__input')
    volume.type = 'range'
    volume.min = '0'
    volume.max = '1'
    volume.step = '0.1'
    volume.value = String(currentValue)
    button.appendChild(image)

    button.addEventListener('click', () => {
      window.application.activeBlock === item.weatherType && button.classList.add('item__active')
      if (paretn) { 
        paretn.style.backgroundImage = `url(${(item.img)})`
      }
    })
    
    const audio = new Audio(item.sound)
    button.addEventListener('click', () => {
      if (audio.played.length === 1) {
        audio.pause()
      } else {audio.play()}
      button.appendChild(volume)
      console.log(audio.played.length)
      
      volume.addEventListener('input', (event) => {
        const target = event.target as HTMLInputElement
        currentValue = parseFloat(target.value)
        audio.volume = currentValue
      })
    })

    paretn && paretn.appendChild(button)
  })
}