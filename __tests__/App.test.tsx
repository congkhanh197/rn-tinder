import 'react-native';
import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';

jest
  .mock('../src/store', () => ({
    dispatch: jest.fn(),
    getState: jest.fn(),
    subscribe: jest.fn(),
  }))
  .mock('react-native-gesture-handler', () => {
    const View = require('react-native/Libraries/Components/View/View');
    return {
      State: {},
      PanGestureHandler: View,
      BaseButton: View,
      Directions: {},
    };
  });

describe('Test render app', () => {
  it('Renders app correctly', () => {
    const tree = renderer.create(<App />);
    expect(tree).toMatchSnapshot();
  });
});
