import React from 'react'
import { shallow } from 'enzyme'
import './EnzymeSetup'

import Link from '../Link'

describe('Link', () => {
  const href = 'test.html'
  const text = 'Nav Link Test'

  describe('basic', () => {
    const link = shallow(<Link href={href} text={text} onClick={() => {}} />)

    it('is inactive by default', () => {
      const inst = link.instance()
      expect(inst.props.active).toBe(false)
    })

    it('renders anchor element', () => {
      const anchorElement = link.find('a')
      expect(anchorElement.text()).toBe(text)
      expect(anchorElement.props().href).toEqual(href)
      expect(anchorElement.props().className).toBe('link')
    })
  })

  describe('active', () => {
    const inactiveLink = shallow(<Link href={href} text={text} active={true} />)

    it('has active style', function() {
      expect(inactiveLink.find('.active').exists()).toBe(true)
    })
  })

  describe('with handleClick callback', function() {
    let clickHandlerInstance
    let linkWithClickHandler
    beforeEach(function() {
      clickHandlerInstance = { clickHandler: function() {} }
      spyOn(clickHandlerInstance, 'clickHandler')
      linkWithClickHandler = shallow(
        <Link
          href={href}
          text={text}
          clickHandler={clickHandlerInstance.clickHandler}
        />
      )
    })

    it('invokes callback on click', function() {
      linkWithClickHandler.find('a').simulate('click')
      expect(clickHandlerInstance.clickHandler).toHaveBeenCalled()
    })
  })
})
