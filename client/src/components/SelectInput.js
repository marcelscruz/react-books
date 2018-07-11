// ***** React ***** //
import React from 'react'
import PropTypes from 'prop-types'

// ***** Libraries ***** //
import Select from 'react-select'
import 'react-select/dist/react-select.css'

const SelectInput = props => {
  const { onChange, options, value } = props

  // Handle input change and send it back to List
  const handleChange = selectedOption => {
    onChange(selectedOption)
  }

  return (
    <Select
      className="select-input"
      value={value}
      onChange={handleChange}
      options={options}
      clearable={false}
      searchable={false}
    />
  )
}

SelectInput.propTypes = {
  value: PropTypes.number.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
}

export default SelectInput
