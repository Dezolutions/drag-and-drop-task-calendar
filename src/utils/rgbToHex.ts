
export const rgbToHex = (color: string) => {
  const rgbColors = color.split(',')
  
  const redHex = Number(rgbColors[0]).toString(16).padStart(2, '0');
  const greenHex = Number(rgbColors[1]).toString(16).padStart(2, '0');
  const blueHex = Number(rgbColors[2]).toString(16).padStart(2, '0');
  
  const hexColor = `#${redHex}${greenHex}${blueHex}`;

  return hexColor;
}