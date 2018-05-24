const TerminalUIHandler = (() => {
  const loadTerminal = () => {
    const terminalArea = document.querySelector('#encrypter')
    const encryptBttn = document.querySelector('#bttnEncrypt')
    const path1 = document.querySelector('#line1')
    const path2 = document.querySelector('#line2')
    const path3 = document.querySelector('#line3')
    const path4 = document.querySelector('#line4')
    const path5 = document.querySelector('#line5')
    const path6 = document.querySelector('#line6')
    const path10 = document.querySelector('#line10')
    const path11 = document.querySelector('#line11')
    const path12 = document.querySelector('#line12')
    if (terminalArea.classList.contains('active')) {
      terminalArea.classList.remove('active')
      encryptBttn.classList.remove('active')
    }
    if(!terminalArea.classList.contains('droppedDown')) {
      terminalArea.classList.remove('pushedUp')
      encryptBttn.classList.remove('pushedUpBttn')
      path1.classList.remove('line1AnimOut')
      path2.classList.remove('line2AnimOut')
      path3.classList.remove('line3AnimOut')
      path4.classList.remove('line4AnimOut')
      path5.classList.remove('line5AnimOut')
      path6.classList.remove('line6AnimOut')
      path10.classList.remove('line10AnimOut')
      path11.classList.remove('line11AnimOut')
      path12.classList.remove('line12AnimOut')
      terminalArea.classList.add('droppedDown')
      encryptBttn.classList.add('droppedDownBttn')
      path1.classList.add('line1AnimIn')
      path2.classList.add('line2AnimIn')
      path3.classList.add('line3AnimIn')
      path4.classList.add('line4AnimIn')
      path5.classList.add('line5AnimIn')
      path6.classList.add('line6AnimIn')
      path10.classList.add('line10AnimIn')
      path11.classList.add('line11AnimIn')
      path12.classList.add('line12AnimIn')
    }
    else if(!terminalArea.classList.contains('pushedUp')) {
      terminalArea.classList.remove('droppedDown')
      encryptBttn.classList.remove('droppedDownBttn')
      path1.classList.remove('line1AnimIn')
      path2.classList.remove('line2AnimIn')
      path3.classList.remove('line3AnimIn')
      path4.classList.remove('line4AnimIn')
      path5.classList.remove('line5AnimIn')
      path6.classList.remove('line6AnimIn')
      path10.classList.remove('line10AnimIn')
      path11.classList.remove('line11AnimIn')
      path12.classList.remove('line12AnimIn')
      terminalArea.classList.add('pushedUp')
      encryptBttn.classList.add('pushedUpBttn')
      path1.classList.add('line1AnimOut')
      path2.classList.add('line2AnimOut')
      path3.classList.add('line3AnimOut')
      path4.classList.add('line4AnimOut')
      path5.classList.add('line5AnimOut')
      path6.classList.add('line6AnimOut')
      path10.classList.add('line10AnimOut')
      path11.classList.add('line11AnimOut')
      path12.classList.add('line12AnimOut')
    }
  }

  const bindEvents = () => document.querySelector(`#mainBttnTxt`).addEventListener(`click`, loadTerminal, false)
  const init = () => bindEvents()

  return {
    create: init
  }
})()


export default TerminalUIHandler
