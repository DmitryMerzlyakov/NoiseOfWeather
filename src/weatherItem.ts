import { audioControl } from './audio'

import { TApllication } from '..'

let currentAudio: HTMLAudioElement | null = null;
let currentVolume: number = 1
let currentCardIndex: number = -1
const buttonsWrapper = document.createElement('div')
buttonsWrapper.classList.add('wrapper')
const volumeControl = document.createElement('input')
volumeControl.type = 'range'
volumeControl.min = '0'
volumeControl.max = '1'
volumeControl.step = '0.1'
volumeControl.value = '0.5'

export const createWeatherItem = (items: TApllication[], paretn: HTMLDivElement) => {
  items.forEach((card, index) => {
    const button = document.createElement('button')
    button.classList.add('item')
    button.style.backgroundImage = `url(${card.img})`
    button.style.backgroundSize = 'cover'
    button.style.backgroundPosition = 'center'
    button.innerHTML = `<img src="${card.icon}" alt="${card.weatherType} icon">`
    buttonsWrapper.appendChild(button)
    
    button.addEventListener('click', () => {
      // if (currentAudio) {
      //   currentAudio.pause()
      //   currentAudio.currentTime = 0
      // }

      // if (!currentAudio || currentAudio.src !== card.sound) {
      //   currentAudio = new Audio(card.sound)
      //   currentAudio.volume = parseFloat(volumeControl.value)
      //   currentAudio.play()
      // } else {
      //   if (currentAudio.paused) {
      //   currentAudio.volume = parseFloat(volumeControl.value)
      //   currentAudio.play()
      //   } else {
      //   currentAudio.pause()
      //   }
      // }
      toggleAudio(index, items)
    })
  })
  paretn.appendChild(buttonsWrapper)
  paretn.appendChild(volumeControl)
}

const setVolume = (audio: HTMLAudioElement, volume: number) => {
  audio.volume = volume
};

volumeControl.addEventListener('input', () => {
  if (currentAudio) {
    setVolume(currentAudio, parseFloat(volumeControl.value))
  }
})

const toggleAudio = (index: number, cards: TApllication[]) => {
    const isCurrentCard = currentCardIndex === index
    currentAudio && 
      (isCurrentCard ? 
        (currentAudio.paused ? 
          (currentAudio.play()
          // updateIcon(currentAudio.paused)
        )
          :
          (currentAudio.pause()
          // updateIcon(currentAudio.paused)
        )
        )
        :
        (() => {currentAudio.pause(), currentAudio.currentTime = 0})()
      )
    !isCurrentCard && (() => {
      currentAudio = new Audio(cards[index].sound)
      currentAudio.volume = currentVolume
      currentAudio.play()
      currentCardIndex = index
    })()
  }