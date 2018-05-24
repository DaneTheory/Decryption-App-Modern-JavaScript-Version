import CONSTANTS from '../Constants'
import { UIElementsObject, HiddenMessageElementObject, PsuedoMessageElementObject } from '../DOMNodeParams'
import { RandomCharacterGenerator } from '../Utilities'
import UIElementGenerationHandler from '../UIHandlers/DynamicDOMNodes'
import HiddenMessageToScreenGenerator from '../UIHandlers/FakeScreenHandler'


const CypherEngineHandler = (() => {
  const encrypter = () => {
    const messageContainerRef = document.getElementById(`encrypter`)
    const mainContainerRef = document.getElementById(`mainContainer`)
    const addHiddenMessage = () => {
      for (let q = 0; q < CONSTANTS.HiddenMessageDOMElsRef.length; q++) CONSTANTS.HiddenMessageDOMElsRef[q].textContent = messageContainerTempContent[q]
    }
    let messageContainerTempContent = messageContainerRef.value
    let messageValueLen = messageContainerTempContent.length
    let visibleElems = messageValueLen / 0.05
    let rando = Math.floor(Math.random() * (visibleElems - messageValueLen) + messageValueLen)
    let tempCharacterFragment = CONSTANTS.HiddenMessageDocumentFragment.childNodes
    let tempCharacterFragmentCount = tempCharacterFragment.length - 1
    for (let i = 0; i < messageValueLen; i++) {
      UIElementGenerationHandler.createEls(HiddenMessageElementObject, CONSTANTS.HiddenMessageDocumentFragment)
    }
    for (let j = 0; j < rando; j++) {
      UIElementGenerationHandler.createEls(PsuedoMessageElementObject, CONSTANTS.HiddenMessageDocumentFragment, RandomCharacterGenerator())
    }
    for (let len3 = CONSTANTS.HiddenMessageDocumentFragment.childNodes.length - 1; len3 > 0; --len3) {
      let len4 = Math.floor(Math.random() * (len3 + 1))
      let tempDocFrag = CONSTANTS.HiddenMessageDocumentFragment.childNodes[len3]
      Array.from(CONSTANTS.HiddenMessageDocumentFragment.childNodes)[len3] = Array.from(CONSTANTS.HiddenMessageDocumentFragment.childNodes)[len4]
      Array.from(CONSTANTS.HiddenMessageDocumentFragment.childNodes)[len4] = tempDocFrag
      CONSTANTS.SpansDocumentFragment.appendChild(Array.from(CONSTANTS.HiddenMessageDocumentFragment.childNodes)[len4])
    }
    return !mainContainerRef.hasChildNodes() && CONSTANTS.SpansDocumentFragment.hasChildNodes() ?
      (() => {
        mainContainerRef.appendChild(CONSTANTS.SpansDocumentFragment)
        addHiddenMessage()
      })()
      :
      (() => {
        mainContainerRef.innerHTML = ''
        mainContainerRef.appendChild(CONSTANTS.SpansDocumentFragment)
        addHiddenMessage()
      })()
  }
  const decrypter = () => {
    for (let z = 0; z < CONSTANTS.SpanFinderLength; z++) {
      CONSTANTS.SpanFinderArray[z].hasAttribute(`hidden`) ? CONSTANTS.SpanFinderArray[z].removeAttribute(`hidden`) : CONSTANTS.SpanFinderArray[z].setAttribute(`hidden`, ``)
    }
  }
  const reseter = () => {
    document.getElementById(`encrypter`).value = ``
    document.getElementById(`mainContainer`).innerHTML = ``
    HiddenMessageToScreenGenerator.fakeScreenReset()
  }
  return {
    encrypt: encrypter,
    decrypt: decrypter,
    masterReset: reseter
  }
})()


export default CypherEngineHandler
