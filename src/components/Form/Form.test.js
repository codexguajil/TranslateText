import React from 'react'
import {shallow} from 'enzyme'
import Form from './Form'

describe('Form', () => {
  let wrapper;
  it('should match the snapshot', () => {
    wrapper = shallow(
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

  it.skip('should call handleSubmit on click translate button', () => {

  })
})