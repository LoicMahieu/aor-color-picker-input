
import React, { PropTypes } from 'react'
import ColorPicker from 'material-ui-color-picker'

const ColorInput = ({
  id,
  disabled,
  label,
  name,
  input: {
    value,
    onChange
  }
}) => (
  <ColorPicker
    id={id}
    disabled={disabled}
    floatingLabelText={label}
    name={name}
    value={value}
    defaultValue={value}
    onChange={onChange}
  />
)

ColorInput.propTypes = {
  addField: PropTypes.bool.isRequired,
  addLabel: PropTypes.bool.isRequired,
  input: PropTypes.object,
  label: PropTypes.string,
  options: PropTypes.object,
  source: PropTypes.string
}

ColorInput.defaultProps = {
  addField: true,
  addLabel: false,
  options: {},
  record: {}
}

export default ColorInput
