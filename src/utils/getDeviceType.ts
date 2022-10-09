
export const getDeviceType = () =>
  /android/i.test(navigator.userAgent) ? 'android' : 'ios'
