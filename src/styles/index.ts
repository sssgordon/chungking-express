export const desktopBreakpoint = `1024px`

export const mobileVW = px => {
  return `${(px / 414) * 100}vw`
}

export const desktopVW = px => {
  return `${(px / 1440) * 100}vw`
}

export const ease = {
  expo: 'cubic-bezier(1.000, 0.000, 0.000, 1.000)',
}

export const color = {
  black: '#212121',
}
