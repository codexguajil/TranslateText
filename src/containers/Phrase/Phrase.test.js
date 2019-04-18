import {Phrase} from './Phrase'
import React from 'react'
import {shallow} from 'enzyme'

describe('Phrase', () => {
  let wrapper;

  it('should match the snapshot', () => {
    let props = {
      deleteTrans: jest.fn(),
      id: '1'
    }
    wrapper = shallow(
      <Phrase {...props}/>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it.skip('should call deleteTrans on click of delete button', () => {
    let props = {
      deleteTrans: jest.fn(),
      id: '1'
    }
    wrapper = shallow(
      <Phrase {...props}/>
    )
    wrapper.find('.delete').simulate('click')
    expect(wrapper.instance().props.deleteTrans).toHaveBeenCalled()
  })
})