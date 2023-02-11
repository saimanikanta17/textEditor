import styled from 'styled-components'

export const StyleButton = styled.button`
  color: ${props => (props.fontStyleActive ? '#faff00' : '#f1f5f9')};
`

export const FontWeightButton = styled.button`
  color: ${props => (props.fontWeightActive ? '#faff00' : '#f1f5f9')};
`

export const TextDecorationButton = styled.button`
  color: ${props => (props.textDecorationActive ? '#faff00' : '#f1f5f9')};
`

export const Textarea = styled.textarea`
  font-weight: ${props => (props.fontWeightActive ? 'bold' : 'normal')};
  font-style: ${props => (props.fontStyleActive ? 'italic' : 'normal')};
  text-decoration: ${props =>
    props.textDecorationActive ? 'underline' : 'normal'};
`
