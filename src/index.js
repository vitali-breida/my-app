import React from 'react';
import ReactDOM from 'react-dom';
import ClassComponent from './ClassComponent.js';
import ClassPureComponent from './ClassPureComponent.js'
import FunctionalComponent from './FunctionalComponent.js'
import FunctionalComponent2 from './FunctionalComponent2.js'

const root = document.getElementById('root');
const jsxDiv = <div>Hello world with JSX</div>

ReactDOM.render(
  React.createElement('div', {className : 'container'}, '',
    jsxDiv,
    <ClassComponent />,
    <ClassPureComponent/>, 
    <FunctionalComponent/>, 
    <FunctionalComponent2/>),
  root);

