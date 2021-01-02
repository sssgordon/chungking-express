export const desktopBreakpoint = `1024px`

export const mobileVW = px => {
  return `${(px / 414) * 100}vw`
}

export const desktopVW = px => {
  return `${(px / 1440) * 100}vw`
}

export const zIndex = {
  high: 99,
  medium: 50,
  low: 1,
}

export const easing = {
  linear: 'cubic-bezier( 0.250, 0.250, 0.750, 0.750)',
  inQuad: 'cubic-bezier( 0.26, 0, 0.6, 0.2 )',
  outQuad: ' cubic-bezier( 0.4, 0.8, 0.74, 1 )',
  inOutQuad: 'cubic-bezier( 0.48, 0.04, 0.52, 0.96 )',
  inCubic: 'cubic-bezier( 0.4, 0, 0.68, 0.06 )',
  outCubic: 'cubic-bezier( 0.34, 1.02, 0.68, 1 )',
  inOutCubic: 'cubic-bezier( 0.66, 0, 0.34, 1 )',
  inExpo: 'cubic-bezier( 0.66, 0, 0.86, 0 )',
  outExpo: 'cubic-bezier( 0.16, 1.08, 0.38, 0.98 )',
  inOutExpo: 'cubic-bezier( 0.9, 0, 0.1, 1 )',
  inQuart: 'cubic-bezier( 0.52, 0, 0.74, 0 )',
  outQuart: 'cubic-bezier( 0.26, 1.04, 0.54, 1 )',
  inOutQuart: 'cubic-bezier( 0.770, 0.000, 0.175, 1.000 )',
  inBack: 'cubic-bezier( 0.600, -0.280, 0.735, 0.045 )',
  outBack: 'cubic-bezier( 0.175, 0.885, 0.320, 1.275 )',
  inOutBack: 'cubic-bezier( 0.175, 0.885, 0.320, 1.275 )',
}

export const color = {
  black: '#0D0D0D',
}
