import { TApllication } from "..";

let currentAudio: HTMLAudioElement | null = null
let currentVolume: number = 1
let currentCardIndex: number = -1

export const audioControl = (element: HTMLInputElement) => {
  element.addEventListener('input', (event: Event) => {
    const target = event.target as HTMLInputElement
    currentVolume = parseFloat(target.value)
    if (currentAudio) {
      currentAudio.volume = currentVolume
    }
  })
}

export const toggleAudio = (index: number, cards: TApllication[]) => {
  if (currentCardIndex === index) {
    if (currentAudio) {
      currentAudio.paused ? currentAudio.play() : currentAudio.pause()
    }
  } else {
    if (currentAudio) {
      currentAudio.pause()
      currentAudio.currentTime = 0
    }

    currentAudio = new Audio(cards[index].sound)
    currentAudio.volume = currentVolume
    currentAudio.play()
    currentCardIndex = index
  }
}
