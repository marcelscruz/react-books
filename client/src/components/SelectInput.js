import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

class SelectInput extends Component {
  handleChange = selectedOption => {
    this.props.onChange(selectedOption)
  }
  render() {
    return (
      <Select
        value={this.props.defaultValue}
        onChange={this.handleChange}
        options={this.props.options}
        clearable={false}
      />
    )
  }
}

SelectInput.propTypes = {
  defaultValue: PropTypes.number.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
}

export default SelectInput
