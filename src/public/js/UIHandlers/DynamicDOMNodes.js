import CONSTANTS from '../Constants'
import { SetAttributesUtility } from '../Utilities'
import { UIElementsObject } from '../DOMNodeParams'


const UIElementGenerationHandler = (() => {
  const createEls = (elObj, elDocFrag, randoGen) => {
    let component
    let eObj
    let eType
    let eAttrs
    let eTxtCnt
    for (component in elObj) {
      eObj = elObj[component]
      eType = eObj.elType
      eAttrs = eObj.elAttrs
      eTxtCnt = eObj.elContent
      component = document.createElement(eType)
      SetAttributesUtility(component, eAttrs)
      eType === "SPAN" ? component.textContent = randoGen : component.textContent = eTxtCnt
      elDocFrag.appendChild(component)
    }
  }
  const init = () => {
    createEls(UIElementsObject, CONSTANTS.UIDocumentFragment)
    CONSTANTS.DocumentBodyRef.insertBefore(CONSTANTS.UIDocumentFragment, CONSTANTS.DocumentBodyRef.firstChild)
    CONSTANTS.uiDOMStatus = true
  }
  return {
    createUI: init,
    createEls: createEls
  }
})()


export default UIElementGenerationHandler
