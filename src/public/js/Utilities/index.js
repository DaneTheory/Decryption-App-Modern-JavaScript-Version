import CONSTANTS from '../Constants'


export const SetAttributesUtility = (el, attrs) => {
  for(var key in attrs) el.setAttribute(key, attrs[key])
}

export const RandomCharacterGenerator = () => {
  let randomCharacterIndex = Math.floor(Math.random() * CONSTANTS.CharactersToEncryptAgainstLength) + 1
  return CONSTANTS.CharactersToEncryptAgainst[randomCharacterIndex]
}
