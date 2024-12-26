import { audioControl, toggleAudio } from './audio'

import { TApllication } from '..'

export const createWeatherItem = (items: TApllication[], paretn: HTMLDivElement) => {
  const buttons: HTMLButtonElement[] = []

  items.map((item, index) => {
    const button = document.createElement('button')
    button.classList.add('item')
    button.style.backgroundImage = `url(${item.img})`
    button.style.backgroundSize = 'cover'
    button.style.backgroundPosition = 'center'

    const image = document.createElement('img')
    image.classList.add('item__img')
    image.src = item.icon
    image.alt = item.weatherType
    button.appendChild(image)

    const volume = document.createElement('input')
    volume.classList.add('item__input')
    volume.type = 'range'
    volume.min = '0'
    volume.max = '1'
    volume.step = '0.1'
    volume.value = '0.5'
    
    button.addEventListener('click', () => {   
      buttons.map(btn => {btn !== button && btn.querySelector('.item__input')?.remove()})
      paretn.style.backgroundImage = `url(${(item.img)})`
      button.appendChild(volume)
      toggleAudio(index, items, image, button)
    })
  
    buttons.push(button)
    audioControl(volume)

    paretn.appendChild(button)
  })
}
