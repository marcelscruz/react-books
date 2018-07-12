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
      clearable={false}
      onChange={handleChange}
      options={options}
      searchable={false}
      value={value}
    />
  )
}

SelectInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  value: PropTypes.number.isRequired,
}

export default SelectInput
