import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  StyleButton,
  TextDecorationButton,
  FontWeightButton,
  Textarea,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    fontWeightActive: false,
    fontStyleActive: false,
    textDecorationActive: false,
  }

  changeFontWeight = () => {
    this.setState(prevState => ({
      fontWeightActive: !prevState.fontWeightActive,
    }))
  }

  changeFontStyle = () => {
    this.setState(prevState => ({
      fontStyleActive: !prevState.fontStyleActive,
    }))
  }

  changeTextDecoration = () => {
    this.setState(prevState => ({
      textDecorationActive: !prevState.textDecorationActive,
    }))
  }

  render() {
    const {fontWeightActive, fontStyleActive, textDecorationActive} = this.state
    return (
      <div>
        <div>
          <h1>Text Editor</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
            alt="text editor"
          />
        </div>
        <div>
          <ul>
            <li>
              <FontWeightButton
                data-testid="bold"
                onClick={this.changeFontWeight}
                fontWeightActive={fontWeightActive}
              >
                <VscBold size={25} />
              </FontWeightButton>
            </li>
            <li>
              <StyleButton
                data-testid="italic"
                onClick={this.changeFontStyle}
                fontStyleActive={fontStyleActive}
              >
                <GoItalic size={25} />
              </StyleButton>
            </li>
            <li>
              <TextDecorationButton
                data-testid="underline"
                onClick={this.changeTextDecoration}
                textDecorationActive={textDecorationActive}
              >
                <AiOutlineUnderline size={25} />
              </TextDecorationButton>
            </li>
          </ul>
          <Textarea
            rows="5"
            cols="30"
            fontWeightActive={fontWeightActive}
            fontStyleActive={fontStyleActive}
            textDecorationActive={textDecorationActive}
          />
        </div>
      </div>
    )
  }
}

export default TextEditor
