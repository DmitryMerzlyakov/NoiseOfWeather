import { createWeatherItem } from './weatherItem'
import './index.scss'
import { TApllication } from '..'

const root: HTMLDivElement | null = document.querySelector('#app')
const cards: TApllication[] = window.application.cards

createWeatherItem(cards, root)

