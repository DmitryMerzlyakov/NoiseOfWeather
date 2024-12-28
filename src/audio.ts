import { TApllication } from "..";

let currentAudio: HTMLAudioElement | null = null;
let currentVolume: number = 1;
let currentCardIndex: number = -1;

export const toggleAudio = (
  index: number,
  cards: TApllication[],
  button: HTMLButtonElement,
) => {
  const isCurrentCard = currentCardIndex === index;
  currentAudio &&
    (isCurrentCard
      ? currentAudio.paused
        ? (currentAudio.play(),
          updateIcon(currentAudio.paused, button, cards[index]))
        : (currentAudio.pause(),
          updateIcon(currentAudio.paused, button, cards[index]))
      : (() => {
          currentAudio.pause(), (currentAudio.currentTime = 0);
        })());
  !isCurrentCard &&
    (() => {
      currentAudio = new Audio(cards[index].sound);
      currentAudio.volume = currentVolume;
      currentAudio.play();
      currentCardIndex = index;
      resetOtherIcons(cards, index);
    })();
};

const setVolume = (audio: HTMLAudioElement, volume: number) => {
  audio.volume = volume;
};

export const audioControl = (element: HTMLInputElement) => {
  element.addEventListener("input", () => {
    currentAudio && setVolume(currentAudio, parseFloat(element.value));
  });
};

const updateIcon = (
  isUpdate: boolean,
  button: HTMLButtonElement,
  card: TApllication,
) => {
  const imagePause = document.createElement("img");
  imagePause.classList.add("item__imgPause");
  imagePause.src = "../assets/icons/pause.svg";
  imagePause.alt = "pause";
  isUpdate
    ? button.querySelector("img")?.setAttribute("src", imagePause.src)
    : button.querySelector("img")?.setAttribute("src", card.icon);
};

const resetOtherIcons = (cards: TApllication[], index: number) => {
  cards.forEach((otherCard) => {
    if (otherCard.id !== cards[index].id) {
      const otherButton = document.querySelector(
        `button:nth-of-type(${otherCard.id + 1})`,
      );
      otherButton?.querySelector("img")?.setAttribute("src", otherCard.icon);
    }
  });
};
