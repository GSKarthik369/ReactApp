import React from 'react';
import { shallow, render, mount } from 'enzyme';
import NewComponent from './NewComponent';

describe('NewComponent', () => {
  let props;
  let shallowNewComponent;
  let renderedNewComponent;
  let mountedNewComponent;

  const shallowTestComponent = () => {
    if (!shallowNewComponent) {
      shallowNewComponent = shallow(<NewComponent {...props} />);
    }
    return shallowNewComponent;
  };

  const renderTestComponent = () => {
    if (!renderedNewComponent) {
      renderedNewComponent = render(<NewComponent {...props} />);
    }
    return renderedNewComponent;
  };

  const mountTestComponent = () => {
    if (!mountedNewComponent) {
      mountedNewComponent = mount(<NewComponent {...props} />);
    }
    return mountedNewComponent;
  };  

  beforeEach(() => {
    props = {};
    shallowNewComponent = undefined;
    renderedNewComponent = undefined;
    mountedNewComponent = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
