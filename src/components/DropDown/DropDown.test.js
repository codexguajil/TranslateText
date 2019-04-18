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
    let props = {
      handleLang: jest.fn()
    }
    wrapper = shallow(
      <DropDown {...props} />
    )
    wrapper.setState({open: true})
    wrapper.instance().handleClick = jest.fn()
    wrapper.find('#uz').simulate('click')
    expect(wrapper.instance().handleClick).toHaveBeenCalled()
    expect(wrapper.state('clicked')).toEqual('Languages')
  })

  describe('handleClick', () => {
    it('should call handleLang', () => {
      let props = {
        handleLang: jest.fn()
      }
      wrapper = shallow(
        <DropDown {...props} />
      )

      wrapper.instance().handleClick()
      expect(wrapper.instance().props.handleLang).toHaveBeenCalled()
    })
  })
})