(()=>{"use strict";var e,t=document.querySelector("#app"),a=window.application.cards;window.application.activeBlock;e=t,a.forEach((function(t){var a=document.createElement("button");a.classList.add("item"),a.style.backgroundImage="url(".concat(t.img,")"),a.style.backgroundSize="cover",a.style.backgroundPosition="center";var c=document.createElement("img");c.classList.add("item__img"),c.src=t.icon,c.alt=t.weatherType;var i=document.createElement("input");i.classList.add("item__input"),i.type="range",i.min="0",i.max="1",i.step="0.1",i.value="0.5",a.appendChild(c),a.addEventListener("click",(function(){window.application.activeBlock===t.weatherType&&a.classList.add("item__active"),e&&(e.style.backgroundImage="url(".concat(t.img,")"))})),a.addEventListener("click",(function(){var e=new Audio(t.sound);console.log(e),a.appendChild(i)})),e&&e.appendChild(a)})),console.log(window.application.activeBlock)})();