import React from 'react'
import {shallow} from 'enzyme'
import {Form} from './Form'

describe('Form', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Form />
    )
  })
  it('should match the snapshot', () => {
    let wrapper = shallow(
      <Form />
    )
    
    expect(wrapper).toMatchSnapshot()
  })

  it('should update state on change', () => {
    wrapper.setState({text: ''})
    expect(wrapper.state('text')).toEqual('')

    let e = {
      target: {
        name: 'text',
        value: 'hello'
      }
    }

    wrapper.instance().handleChange(e)

    expect(wrapper.state('text')).toEqual('hello')
  })

  it('should call handleSubmit on click translate button', () => {
    let props = {
      handleError: jest.fn()
    }

    let wrapper = shallow(
      <Form {...props} />
      )

    wrapper.instance().handleSubmit = jest.fn()
    let mockEvent = { preventDefault: jest.fn()}
    wrapper.find('.form').simulate('submit', mockEvent)
    expect(mockEvent.preventDefault).toHaveBeenCalled()
  })

  it('should reroute to translations if See Translations is clicked', () => {
    let props = {
      handleSubmit: jest.fn(),
      history: { push: jest.fn() }
    }

    let wrapper = shallow(
      <Form {...props} />
      )

      wrapper.setState({text: 'hello'})
      let mockEvent = { preventDefault: jest.fn()}
      wrapper.instance().handleSubmit(mockEvent)
      expect(wrapper.instance().props.handleSubmit).toHaveBeenCalled()
  })

  it('should return an error if Translate is clicked without any text in state', () => {
    let props = {
      handleError: jest.fn(),
      handleSubmit: jest.fn(),
      history: { push: jest.fn() }
    }

    let wrapper = shallow(
      <Form {...props} />
      )

      let mockEvent = { preventDefault: jest.fn()}
      wrapper.instance().handleSubmit(mockEvent)
      expect(wrapper.instance().props.handleError).toHaveBeenCalled()
  })

  it('should have props', () => {
    let props = {
      translations: ['bonjour'],
      handleError: jest.fn(),
      handleSubmit: jest.fn(),
      history: { push: jest.fn() }
    }

    let wrapper = shallow(
      <Form {...props} />
    )

    wrapper.instance().handleClick()
    expect(wrapper.instance().props).toEqual(props)
  })

  it('should return an error if See Translations is clicked without any translations in store', () => {
    let props = {
      translations: [],
      handleError: jest.fn(),
      handleSubmit: jest.fn(),
      history: { push: jest.fn() }
    }

    let wrapper = shallow(
      <Form {...props} />
      )

      let mockEvent = { preventDefault: jest.fn()}
      wrapper.instance().handleClick(mockEvent)
      expect(wrapper.instance().props.handleError).toHaveBeenCalled()
  })
})