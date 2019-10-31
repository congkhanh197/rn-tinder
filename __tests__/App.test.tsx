import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';
import store from '../src/store';
import { retrieveFavoritePeopleDataAction } from '../src/store/actions/favoriteAction';

jest
  .mock('../src/store', () => ({
    dispatch: jest.fn(),
    subscribe: jest.fn(),
    getState: jest.fn(),
  }))
  .mock('../src/store/actions/favoriteAction', () => ({
    retrieveFavoritePeopleDataAction: jest.fn(()=>({
      type: "RETRIEVE_FAVORITE_PEOPLE_DATA",
    })),
  }))
  .mock('../src/navigation/AppNavigator', () => () => 'Test');
describe.only('Test render app', () => {
  test('Check the render method of app', () => {
    const tree = renderer.create(<App />);
    expect(tree).toMatchSnapshot();
  });
  test('Should call useEffect', () => {
    const wrapper = mount(<App />);
    expect(store.dispatch).toHaveBeenCalledWith(retrieveFavoritePeopleDataAction())
  });
});
