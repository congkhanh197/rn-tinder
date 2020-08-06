import React from 'react';
import Favorite, {IProps} from '../Favorite.view';
import renderer from 'react-test-renderer';
describe('Test Favorite view', () => {
  const props: IProps = {
    peopleList: [
      {
        dob: 'testDob',
        location: {
          street: 'test',
        },
        md5: 'testMd5',
        name: {
          first: 'mr',
          last: 'test',
          title: 'name',
        },
        password: 'test',
        phone: '0124',
        picture: 'test',
      },
    ],
  };
  test('should render', () => {
    const tree = renderer.create(<Favorite {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
