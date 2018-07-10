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
        className="select-input"
        value={this.props.value}
        onChange={this.handleChange}
        options={this.props.options}
        clearable={false}
        searchable={false}
      />
    )
  }
}

SelectInput.propTypes = {
  value: PropTypes.any,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
}

SelectInput.defaultProps = {
  value: { value: undefined, label: 'Choose' },
}

export default SelectInput
