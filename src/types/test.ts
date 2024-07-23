export type Laptop = {
  type: 'laptop'
  screenSize: number
  graphicas: number
}

export type HeadPhone = {
  type: 'headphone'
  ANC: boolean
}

export type Product = {
  name: string
  price: number
} & (Laptop | HeadPhone)

export const laptopXYZ: Product = {
  type: 'laptop',
  name: 'XYZ',
  price: 2000,
  screenSize: 200,
  graphicas: 14,
}

export const airPodsPro: Product = {
  type: 'headphone',
  name: 'XYZ',
  price: 2000,
  ANC: true,
}
