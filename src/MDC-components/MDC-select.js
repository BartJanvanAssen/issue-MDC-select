import React, { Component } from 'react'

import { MDCSelect } from '@material/select'
import './MDCSelect.scss'

export default class Select extends Component {
  static propTypes = {
  }

  componentDidMount () {
    console.log(MDCSelect)
    this.node = new MDCSelect(this.node)

    this.node.listen('MDCSlider:change', () => this.handleMDCSliderChange())
    this.node.listen('MDCSlider:input', () => this.handleMDCSliderInput())
  }

  componentWillUnmount () {
    this.node.unlisten('MDCSlider:change', () => this.handleMDCSliderChange())
    this.node.unlisten('MDCSlider:input', () => this.handleMDCSliderInput())
    this.node.destroy()
  }

  render () {
    return (
      <div className='mdc-select' ref={(node) => { this.node = node }}>
        <select className='mdc-select__native-control'>
          <option value='' disabled selected />
          <option value='grains'>
            Bread, Cereal, Rice, and Pasta
          </option>
          <option value='vegetables'>
            Vegetables
          </option>
          <option value='fruit'>
            Fruit
          </option>
        </select>
        <label className='mdc-floating-label'>Pick a Food Group</label>
        <div className='mdc-line-ripple' />
      </div>
    )
  }
}
