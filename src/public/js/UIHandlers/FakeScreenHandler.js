import { SetAttributesUtility } from '../Utilities'


const HiddenMessageToScreenGenerator = (() => {
  const fakeScreen = () => {
    const innerCon = document.createElement(`DIV`)
    const frag = document.createDocumentFragment()
    SetAttributesUtility(innerCon, { id: `innContainer`, class: `innCon` })
    frag.appendChild(innerCon)
    document.getElementById(`bgContainer`).appendChild(frag)
  }

  const fakeTextArea = (e) => {
    e.preventDefault()
    const txtArea = document.getElementById(`encrypter`)
    const bg = document.getElementById(`innContainer`)
    let txtAreaVal = txtArea.value
    let txtAreaValLen = txtArea.value.length
    bg.innerText = txtAreaVal.toUpperCase()
    if(txtAreaVal) {
      let glitch = document.getElementById('innContainer')
      SetAttributesUtility(glitch, { "data-text": txtAreaVal })
      bg.innerHTML += `<div class=customCaret></div>`
    }
  }

  const reseter = () => document.getElementById('innContainer').innerHTML = ``
  const bindEvents = () => document.body.addEventListener(`input`, fakeTextArea)
  const init = () => {
    fakeScreen()
    bindEvents()
  }

  return {
    makeFakeScreen: init,
    fakeScreenReset: reseter
  }
})()


export default HiddenMessageToScreenGenerator
