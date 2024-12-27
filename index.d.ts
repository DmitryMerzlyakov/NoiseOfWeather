export {};

export type TWeather = 'rain' | 'winter' | 'summer'
export type TApllication = {
  id: number
  weatherType: TWeather
  img: string
  icon: string
  sound: string
}

declare global {
  interface Window {
    application: {
      cards: TApllication[]
    }
  }
}