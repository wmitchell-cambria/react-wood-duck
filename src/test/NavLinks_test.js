import React from 'react'
import { shallow } from 'enzyme'
import './EnzymeSetup'
import NavLink from '../NavLink'
import NavLinks from '../NavLinks'

describe('NavLinks', function() {
  const clickHandler = function() {}
  const simpleNavLinks = [
    <NavLink
      text="Tommy Cambell"
      href="#tm"
      preIcon="fa fa-user"
      handleClick={clickHandler}
      active={true}
      key={1}
    />,
    <NavLink
      text="Aubrey Cambell"
      href="#au"
      preIcon="fa fa-user"
      handleClick={clickHandler}
      key={2}
    />,
  ]
  const nestedNavLinks = [
    <NavLink text="Screener Summary" href="#summary" key={1} />,
    <NavLink text="People & Roles" href="#ppl" key={2}>
      <NavLinks nested={true}>
        <NavLink
          text="Tommy Cambell"
          href="#tom"
          preIcon="fa fa-user"
          postIcon="fa fa-exclamation-triangle c-red"
          indentationLevel={1}
          key={1}
        />
        <NavLink
          text="Aubrey Cambell"
          href="#aub"
          preIcon="fa fa-user"
          indentationLevel={1}
          key={2}
        />
        <NavLink
          text="Chris Cambell"
          href="#chr"
          preIcon="fa fa-user"
          indentationLevel={1}
          key={3}
        />
      </NavLinks>
    </NavLink>,
  ]

  describe('given empty navigation links', () => {
    const nullNavLinksComponent = shallow(<NavLinks />)

    it('renders No navigation links', () => {
      expect(nullNavLinksComponent.html()).toBe(null)
      expect(nullNavLinksComponent.children().length).toBe(0)
    })
  })

  describe('given simple navigation links', () => {
    const simpleNavLinksComponent = shallow(
      <NavLinks>{simpleNavLinks}</NavLinks>
    )
    const simpleNavLinksUlElement = simpleNavLinksComponent.find('ul')
    const simpleNavLinksNavElement = simpleNavLinksComponent.find('.row')

    it('renders nav element', () => {
      expect(simpleNavLinksNavElement.props().className).toBe('row')
    })

    it('renders with accessibility attributes', () => {
      expect(simpleNavLinksNavElement.prop('aria-label')).toBe(
        'Main Content Navigation Menu'
      )
    })

    it('renders ul tag', () => {
      expect(simpleNavLinksUlElement.props().className).toBe('nav nav-stacked')
    })

    it('renders simple navigation links', () => {
      expect(simpleNavLinksUlElement.props().children).toEqual(simpleNavLinks)
    })
  })

  describe('given nested navigation links', () => {
    const nestedNavLinksComponent = shallow(
      <NavLinks>{nestedNavLinks}</NavLinks>
    )

    it('renders only one nav element', () => {
      expect(nestedNavLinksComponent.filter('nav').length).toBe(1)
    })

    it('renders nested navigation links', () => {
      expect(nestedNavLinksComponent.find('ul').props().children).toEqual(
        nestedNavLinks
      )
    })
  })
})
