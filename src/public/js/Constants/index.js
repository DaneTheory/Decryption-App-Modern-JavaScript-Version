const DocumentBodyRef = document.querySelector(`body`)
const CharactersToEncryptAgainst = `abcdefghijkmnpqrstuvwxyz23456789ABCDEFGHJKLMNPQRSTUVWXYZ!@#$%^&*()?{[}]|`
const CharactersToEncryptAgainstLength = CharactersToEncryptAgainst.length
const HiddenMessageDocumentFragment = document.createDocumentFragment()
const SpansDocumentFragment = document.createDocumentFragment()
const UIDocumentFragment = document.createDocumentFragment()
const HiddenMessageDOMElsRef = document.querySelectorAll(`span[hidden]`)
const SpanFinderArray = document.querySelectorAll(`span`)
const SpanFinderLength = SpanFinderArray.length

let uiDOMStatus = false

const CONSTANTS = {
  DocumentBodyRef: DocumentBodyRef,
  CharactersToEncryptAgainst: CharactersToEncryptAgainst,
  CharactersToEncryptAgainstLength: CharactersToEncryptAgainstLength,
  HiddenMessageDocumentFragment: HiddenMessageDocumentFragment,
  SpansDocumentFragment: SpansDocumentFragment,
  UIDocumentFragment: UIDocumentFragment,
  HiddenMessageDOMElsRef: HiddenMessageDOMElsRef,
  SpanFinderArray: SpanFinderArray,
  SpanFinderLength: SpanFinderLength,
  uiDOMStatus: uiDOMStatus
}


export default CONSTANTS
