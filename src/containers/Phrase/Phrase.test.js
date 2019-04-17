import {Phrase} from './Phrase'
import React from 'react'
import {shallow} from 'enzyme'

describe('Phrase', () => {
  let wrapper;

  it('should match the snapshot', () => {
    wrapper = shallow(
      <Phrase />
    )

    expect(wrapper).toMatchSnapshot()
  })
})