import CypherEngineHandler from './Engine'


const CypherControlsHandler = (() => {
  const bindEvents = () => {
    const encryptionButtonRef = document.getElementById(`bttnEncrypt`)
    const decryptionButtonRef = document.getElementById(`bttnDecrypt`)
    const resetButtonRef = document.getElementById(`bttnReset`)
    const ecryptionControlHandler = () => {
      if(encryptionButtonRef.classList.contains(`show`)) {
        encryptionButtonRef.classList.remove(`show`)
        encryptionButtonRef.classList.add(`hide`)
        decryptionButtonRef.classList.remove(`hide`)
        decryptionButtonRef.classList.add(`show`)
        resetButtonRef.classList.remove(`hide`)
        resetButtonRef.classList.add(`show`)
      } else {
        encryptionButtonRef.classList.add(`show`)
      }
      CypherEngineHandler.encrypt()
    }
    const decryptionControlHandler = () => {
      if(decryptionButtonRef.classList.contains(`show`)) {
        decryptionButtonRef.classList.remove(`show`)
        decryptionButtonRef.classList.add(`hide`)
        encryptionButtonRef.classList.remove(`hide`)
        encryptionButtonRef.classList.add(`show`)
      }
      CypherEngineHandler.decrypt();
    }
    const resetControlHandler = () => {
      if(encryptionButtonRef.classList.contains(`hide`) || encryptionButtonRef.classList.contains(`show`)) {
        resetButtonRef.classList.remove(`show`)
        resetButtonRef.classList.add(`hide`)
        decryptionButtonRef.classList.remove(`show`)
        decryptionButtonRef.classList.add(`hide`)
        encryptionButtonRef.classList.remove(`hide`)
        encryptionButtonRef.classList.add(`show`)
      }
      CypherEngineHandler.masterReset();
    }
    encryptionButtonRef.addEventListener('click', ecryptionControlHandler)
    decryptionButtonRef.addEventListener('click', decryptionControlHandler)
    resetButtonRef.addEventListener('click', resetControlHandler)
  }
  const init = () => bindEvents()
  return {
    listen: init
  }
})()


export default CypherControlsHandler
