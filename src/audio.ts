import { TApllication } from "..";

let currentAudio: HTMLAudioElement | null = null
let currentVolume: number = 1
let currentCardIndex: number = -1

export const audioControl = (element: HTMLInputElement) => {
  element.addEventListener('input', (event: Event) => {
    const target = event.target as HTMLInputElement
    currentVolume = parseFloat(target.value)
    currentAudio && (currentAudio.volume = currentVolume)
  })
}

export const toggleAudio = (index: number, cards: TApllication[], image: HTMLImageElement, button: HTMLButtonElement) => {
  const isCurrentCard = currentCardIndex === index
  currentAudio && 
    (isCurrentCard ? 
      (currentAudio.paused ? 
        (currentAudio.play(), updateIcon(currentAudio.paused, image, button))
        :
        (currentAudio.pause(), updateIcon(currentAudio.paused, image, button))
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

const updateIcon = (isUpdate: boolean, image: HTMLImageElement, button: HTMLButtonElement) => {
  const imagePause = document.createElement('img')
  imagePause.classList.add('item__imgPause')
  imagePause.src = '../assets/icons/pause.svg'
  imagePause.alt = 'pause'
  isUpdate ? 
    (button?.appendChild(imagePause), button.querySelector('.item__img')?.remove())
    : 
    (image && button?.appendChild(image), button.querySelector('.item__imgPause')?.remove())
}