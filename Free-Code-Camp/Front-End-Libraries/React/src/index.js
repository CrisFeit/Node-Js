import React from 'react';
import { render } from 'react-dom';

import MyComponent from './components/MyFirstComponent';
import ArrayProps from './components/ArrayProps';
import {ShoppingCart} from './components/PropTypes';
import ToggleState from './components/Toggle-State';
import MagicEightBall from './components/Magic-Eight-Ball'

// render(<MyComponent /> , document.body)
// render(<ArrayProps /> , document.body)
// render(<ShoppingCart /> , document.body)
// render(<ToggleState /> , document.body)
render(<MagicEightBall /> , document.body)
