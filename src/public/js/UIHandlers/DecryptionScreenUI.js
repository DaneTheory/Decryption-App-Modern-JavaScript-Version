const DecryptionScreenHandler = (() => {
  const toggleFakeScreen = (e) => {
  e.preventDefault()
  const showFakeScreen = () => {
    document.getElementById(`bgContainer`).classList.remove(`show`)
    document.getElementById(`bgContainer`).classList.add(`hide`)
    document.getElementById(`mainContainer`).classList.remove(`hide`)
    document.getElementById(`mainContainer`).classList.add(`show`)
  }
  const hideFakeScreen = () => {
    document.getElementById(`bgContainer`).classList.remove(`hide`)
    document.getElementById(`bgContainer`).classList.add(`show`)
    document.getElementById(`mainContainer`).classList.remove(`show`)
    document.getElementById(`mainContainer`).classList.add(`hide`)
  }
  document.getElementById(`bttnDecrypt`).classList.contains(`show`) ? showFakeScreen() : hideFakeScreen()
 }
 const bindEvents = () => {
   document.getElementById(`bttnEncrypt`).addEventListener('click', toggleFakeScreen)
   document.getElementById(`bttnDecrypt`).addEventListener('click', toggleFakeScreen)
 }
 const init = () => bindEvents()
 return {
   testIt: init
 }
})()


export default DecryptionScreenHandler
