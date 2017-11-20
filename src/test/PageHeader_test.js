import React from 'react';
import PageHeader from '../PageHeader.js';

import { shallow } from 'enzyme';
import './EnzymeSetup';

describe('<PageHeader />', () => {
  var input = {
    pageTitle: 'testPageTitle',
  };

  const pageHeader = shallow(<PageHeader />);
  const pageHeaderwithProps = shallow(<PageHeader {...input} />);

  it('renders the tag', () => {
    expect(pageHeader.type()).toBe('div');
  });

  it('verify the className', () => {
    expect(pageHeader.props().className).toBe('container-fluid pageHeader');
  });

  it('find element with tag', () => {
    const divElement = pageHeader.find('div');
    const buttonElement = pageHeader.find('button');

    expect(divElement.length).toEqual(5);
    expect(buttonElement.length).toEqual(1);
  });

  it('find element with class and default props', () => {
    const divElementArr = pageHeader.find('.row');
    const divElement1 = pageHeader.find('.page-title');
    const buttonElement1 = pageHeader.find('.primary-btn');

    expect(divElementArr.length).toEqual(1);
    expect(divElement1.props().className).toBe('page-title text-left');
    expect(divElement1.props().children).toEqual('CaseName');
    expect(buttonElement1.props().className).toBe('primary-btn pull-right');
    expect(buttonElement1.props().children).toEqual('Save Form');
  });

  it('check default props', () => {
    const instance = pageHeader.instance();

    expect(instance.props.pageTitle).toEqual('CaseName');
  });

  it('find element with class and object passed as props', () => {
    const divElement1 = pageHeaderwithProps.find('.page-title');

    expect(divElement1.props().className).toBe('page-title text-left');
    expect(divElement1.props().children).toEqual('testPageTitle');
  });

  describe('#handleScroll', () => {
    describe('with scrolling', () => {
      it('sets stickyHeader to true', () => {
        const currentWindow = { scrollY: 2 };
        const element = {
          getBoundingClientRect: () => {
            return { bottom: 101 };
          },
        };
        const currentDocument = {
          querySelector: () => {
            return element;
          },
        };

        pageHeaderwithProps
          .instance()
          .handleScroll(currentWindow, currentDocument);
        expect(pageHeaderwithProps.instance().state.stickyHeader).toEqual(true);
      });
    });

    describe('not scrolled', () => {
      it('sets stickyHeader to false', () => {
        const currentWindow = { scrollY: 0 };
        const element = {
          getBoundingClientRect: () => {
            return { bottom: 101 };
          },
        };
        const currentDocument = {
          querySelector: () => {
            return element;
          },
        };
        pageHeaderwithProps
          .instance()
          .handleScroll(currentWindow, currentDocument);
        expect(pageHeaderwithProps.instance().state.stickyHeader).toEqual(
          false
        );
      });
    });

    describe('less than 100 pixels from bottom ', () => {
      it('sets stickyHeader to false', () => {
        const currentWindow = { scrollY: 11 };
        const element = {
          getBoundingClientRect: () => {
            return { bottom: 99 };
          },
        };
        const currentDocument = {
          querySelector: () => {
            return element;
          },
        };
        pageHeaderwithProps
          .instance()
          .handleScroll(currentWindow, currentDocument);
        expect(pageHeaderwithProps.instance().state.stickyHeader).toEqual(
          false
        );
      });
    });
  });

  describe('#render', () => {
    describe('with stickyHeader', () => {
      it('adds a 0.000em style', () => {
        const pageHeaderElement = shallow(<PageHeader />);
        pageHeaderElement.setState({ stickyHeader: true });

        expect(pageHeaderElement.props().style).toEqual({ top: '0.000em' });
      });
    });

    describe('without stickyHeader', () => {
      it('adds a 0.000em style', () => {
        const pageHeaderElement = shallow(<PageHeader />);

        expect(pageHeaderElement.props().style).toEqual(undefined);
      });
    });
  });
});
