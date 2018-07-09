import React, { Component } from 'react'

class ItemDetails extends Component {
  state = {}
  componentDidMount() {
    console.log('details mounted')
  }

  render() {
    return (
      <div>
        <h1>details about item {this.props.selectedItem}</h1>
      </div>
    )
  }
}

export default ItemDetails
