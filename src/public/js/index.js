import CONSTANTS from './Constants'
import { UIElementsObject, HiddenMessageElementObject, PsuedoMessageElementObject } from './DOMNodeParams'
import { SetAttributesUtility, RandomCharacterGenerator } from './Utilities'
import UIElementGenerationHandler from './UIHandlers/DynamicDOMNodes'
import CypherEngineHandler from './Cypher/Engine'
import CypherControlsHandler from './Cypher/Controls'
import HiddenMessageToScreenGenerator from './UIHandlers/FakeScreenHandler'
import TerminalUIHandler from './UIHandlers/TerminalUI'
import DecryptionScreenHandler from './UIHandlers/DecryptionScreenUI'


const DecryptionApp = (() => {
  const appExecutionPromise = () => {
    while(!CONSTANTS.uiDOMStatus) UIElementGenerationHandler.createUI()
    if (CONSTANTS.uiDOMStatus) {
      return Promise.resolve()
        .then(() => CypherEngineHandler.encrypt())
        .then(() => CypherControlsHandler.listen())
        .then(() => HiddenMessageToScreenGenerator.makeFakeScreen())
        .then(() => TerminalUIHandler.create())
        .then(() => DecryptionScreenHandler.testIt())
        .catch(error => {
          console.log(error)
          return new Error(error)
        })
    }
  }
  const init = () => appExecutionPromise()
  return {
    enterTheMatrix: init
  }
})()


export default DecryptionApp
