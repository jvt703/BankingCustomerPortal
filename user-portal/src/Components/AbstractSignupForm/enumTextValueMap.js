export default function enumTextValueMap(enumTexts = Array(String())){
  return enumTexts.map(enumText => {
    return {text: enumText, value: enumText.toUpperCase().split(" ").join("_")}
  })
}