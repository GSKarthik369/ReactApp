import React from 'react';
import { shallow, render, mount } from 'enzyme';
import New1Component from './New1Component';

describe('New1Component', () => {
  let props;
  let shallowNew1Component;
  let renderedNew1Component;
  let mountedNew1Component;

  const shallowTestComponent = () => {
    if (!shallowNew1Component) {
      shallowNew1Component = shallow(<New1Component {...props} />);
    }
    return shallowNew1Component;
  };

  const renderTestComponent = () => {
    if (!renderedNew1Component) {
      renderedNew1Component = render(<New1Component {...props} />);
    }
    return renderedNew1Component;
  };

  const mountTestComponent = () => {
    if (!mountedNew1Component) {
      mountedNew1Component = mount(<New1Component {...props} />);
    }
    return mountedNew1Component;
  };  

  beforeEach(() => {
    props = {};
    shallowNew1Component = undefined;
    renderedNew1Component = undefined;
    mountedNew1Component = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
