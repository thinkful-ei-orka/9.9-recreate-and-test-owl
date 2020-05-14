import React from 'react';
//import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ChatLog from './ChatLog';
import renderer from 'react-test-renderer';

it('renders the UI as expected', ()=> {
  const tree = renderer.create(<ChatLog />).toJSON();
  expect(tree).toMatchSnapshot();
})

it('renders without crashing',()=>{
  const div=document.createElement('div');
  ReactDOM.render(<ChatLog />,div);
ReactDOM.unmountComponentAtNode(div);
})