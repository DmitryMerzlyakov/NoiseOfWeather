// import { TApllication } from "..";
// import { button, image } from "./weatherItem";

let currentAudio: HTMLAudioElement | null = null
let currentVolume: number = 1
let currentCardIndex: number = -1

// export const toggleAudio = (index: number, cards: TApllication[]) => {
//   const isCurrentCard = currentCardIndex === index
//   currentAudio && 
//     (isCurrentCard ? 
//       (currentAudio.paused ? 
//         (currentAudio.play(), updateIcon(currentAudio.paused))
//         :
//         (currentAudio.pause(), updateIcon(currentAudio.paused))
//       )
//       :
//       (() => {currentAudio.pause(), currentAudio.currentTime = 0})()
//     )
//   !isCurrentCard && (() => {
//     currentAudio = new Audio(cards[index].sound)
//     currentAudio.volume = currentVolume
//     currentAudio.play()
//     currentCardIndex = index
//   })()
// }

// const updateIcon = (isUpdate: boolean) => {
//   const imagePause = document.createElement('img')
//   imagePause.classList.add('item__imgPause')
//   imagePause.src = '../assets/icons/pause.svg'
//   imagePause.alt = 'pause'
//   isUpdate ? 
//     (button?.appendChild(imagePause), button.querySelector('.item__img')?.remove())
//     : 
//     (image && button?.appendChild(image), button.querySelector('.item__imgPause')?.remove())
// }

const AudioContext = new (window.AudioContext || window.AudioContext)();
let sourceNode: MediaElementAudioSourceNode | null = null;
let isPlaying = false;

export async function toggleAudio(fileUrl: string) {
  if (!isPlaying) {
    const audioElement = new Audio(fileUrl);
    sourceNode = AudioContext.createMediaElementSource(audioElement);
    sourceNode.connect(AudioContext.destination);
    
    try {
      await audioElement.play();
      isPlaying = true;
    } catch (error) {
      console.error("Ошибка воспроизведения:", error);
    }
  } else {
    if (sourceNode) {
      sourceNode.mediaElement.pause();
      isPlaying = false;
    }
  }
}

// document.getElementById('playButton')?.addEventListener('click', () => {
//   playOrPause('path/to/your/audio.mp3'); // Укажите путь к вашему MP3 файлу
// });


export const audioControl = (element: HTMLInputElement) => {
  // element.addEventListener('input', (event: Event) => {
  //   const target = event.target as HTMLInputElement
  //   currentVolume = parseFloat(target.value)
  //   currentAudio && (currentAudio.volume = currentVolume)
  // })
}
