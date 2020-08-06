import React from 'react';
import TabBarIcon, { IProps } from '../TabBarIcon';
import renderer from 'react-test-renderer';
describe('Test Tab bar icon', () => {
  test('should render with focused', () => {
    const props: IProps = {
        name: "testName",
        focused: true,
    }
    const tree = renderer.create(<TabBarIcon {...props}/>);
    expect(tree).toMatchSnapshot();
  });
  test('should render no focused', () => {
    const props: IProps = {
        name: "testName",
        focused: false,
    }
    const tree = renderer.create(<TabBarIcon {...props}/>);
    expect(tree).toMatchSnapshot();
  });
});
