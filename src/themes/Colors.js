const COLORS = {
  primary: "#1D1D1D ",
  primaryOpacity: (color) => { return `rgba(237, 95, 48,${color || 0.50})` },
  secondary: "rgb(0,34,114)",
  secondaryHover: '#143b95',
  //   secondary: "#133FA6",
  //secondaryOpacity: (color) => { return `rgba(32, 42, 93,${color || 0.50})` },
  tertiary: "#407ECC",
  tertiaryOpacity: (color) => { return `rgba(0, 99, 188,${color || 0.50})` },

  notificationSuccess: '#cee6d6',
  notificationWarning: '#ece6bb',
  notificationError: '#ff657a',

  //basics colors
  //#0961ad!importan
  red: "red",
  gray: "#58595b",
  grayHover: '#63696D',
  grayPlaceholder: '#A9A9AC',
  lightGray: "#DCDCDC",
  grayCard: '#666666',
  grayDark: '#231f20',
  grayMedium: '#9d9999',
  error: "#c95159",
  success: "#00a000",
  warning: "#ffff00",
  white: '#ffffff',
  whiteOpacity: 'rgba(255, 255, 255,0.65)',
  snow: '#f2f6ff',
  lighGreen: '#e0f0cc',
  black: '#231f20',
  blueDark: '#25296a',
  fieldGray: "#E6EAEE",
  gold: "#ffd700",
  yellow: "#FEDC00",
  yellowHover: " #f4c622",
  lighbackround: '#e0e4e7d4',
  shadow: '#48529944',
  iconHeaderBackground: '#d6ddf095'

}

export default COLORS

