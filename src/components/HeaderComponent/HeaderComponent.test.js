import React from 'react';
import { shallow, render, mount } from 'enzyme';
import HeaderComponent from './HeaderComponent';

describe('HeaderComponent', () => {
  let props;
  let shallowHeaderComponent;
  let renderedHeaderComponent;
  let mountedHeaderComponent;

  const shallowTestComponent = () => {
    if (!shallowHeaderComponent) {
      shallowHeaderComponent = shallow(<HeaderComponent {...props} />);
    }
    return shallowHeaderComponent;
  };

  const renderTestComponent = () => {
    if (!renderedHeaderComponent) {
      renderedHeaderComponent = render(<HeaderComponent {...props} />);
    }
    return renderedHeaderComponent;
  };

  const mountTestComponent = () => {
    if (!mountedHeaderComponent) {
      mountedHeaderComponent = mount(<HeaderComponent {...props} />);
    }
    return mountedHeaderComponent;
  };  

  beforeEach(() => {
    props = {};
    shallowHeaderComponent = undefined;
    renderedHeaderComponent = undefined;
    mountedHeaderComponent = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
