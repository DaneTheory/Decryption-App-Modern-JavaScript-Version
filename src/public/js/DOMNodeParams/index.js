export const UIElementsObject = {
  txtInptEl: {
    elType: "TEXTAREA",
    elAttrs: {
      "type": "text",
      "id": "encrypter",
      "class": "active",
      "name": "hiddenMessage",
      "placeholder": "Type Message To Encrypt"
    }
  },
  bttnEncrypt: {
    elType: "BUTTON",
    elAttrs: {
      "id": "bttnEncrypt",
      "class": "show active"
    },
    elContent: "ENCRYPT"
  },
  bttnDecrypt: {
    elType: "BUTTON",
    elAttrs: {
      "id": "bttnDecrypt",
      "class": "hide"
    },
  elContent: "DECRYPT"
  },
  bttnReset: {
    elType: "BUTTON",
    elAttrs: {
      "id": "bttnReset",
      "class": "hide"
    },
  elContent: "RESET"
  },
  containerEl: {
    elType: "DIV",
    elAttrs: {
      "id": "mainContainer"
    }
  },
  backgroundEl: {
    elType: "DIV",
    elAttrs: {
      "id": "bgContainer"
    }
  }
}

export const HiddenMessageElementObject = {
  hiddenSpans: {
    elType: "SPAN",
    elAttrs: {
      "type": "text",
      "hidden": ""
    }
  }
}

export const PsuedoMessageElementObject = {
  visibleSpans: {
    elType: "SPAN",
    elAttrs: {
      "type": "text"
    }
  }
}
