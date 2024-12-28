import { audioControl, toggleAudio } from "./audio";

import { TApllication } from "..";

const buttonsWrapper = document.createElement("div");
buttonsWrapper.classList.add("wrapper");
const volumeControl = document.createElement("input");
volumeControl.type = "range";
volumeControl.min = "0";
volumeControl.max = "1";
volumeControl.step = "0.1";
volumeControl.value = "0.5";

const imagePause = document.createElement("img");
imagePause.classList.add("item__imgPause");
imagePause.src = "../assets/icons/pause.svg";
imagePause.alt = "pause";

export const createWeatherItem = (
  items: TApllication[],
  paretn: HTMLDivElement,
) => {
  items.forEach((card, index) => {
    const button = document.createElement("button");
    button.classList.add("item");
    button.style.backgroundImage = `url(${card.img})`;
    button.style.backgroundSize = "cover";
    button.style.backgroundPosition = "center";
    button.innerHTML = `<img src="${card.icon}" alt="${card.weatherType} icon">`;
    buttonsWrapper.appendChild(button);

    button.addEventListener("click", () => {
      paretn.style.backgroundImage = `url(${card.img})`;
      paretn.style.backgroundSize = "cover";
      paretn.style.backgroundPosition = "center";

      toggleAudio(index, items, button);
    });
  });
  audioControl(volumeControl);
  paretn.appendChild(buttonsWrapper);
  paretn.appendChild(volumeControl);
};
