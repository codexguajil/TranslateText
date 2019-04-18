import React from 'react'
import DropDown from './DropDown'
import {shallow} from 'enzyme'

describe('DropDown', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <DropDown />
    )
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should toggle the language scroll bar', () => {
    wrapper.find('.dd-header').simulate('click')
    expect(wrapper.state('open')).toEqual(true)
  })

  it('should set the state to the selected language', () => {
    
  })
})