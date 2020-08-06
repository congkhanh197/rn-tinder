import {formatPeopleInfo, upperFirst} from '../stringUtils';
describe('Test string utils', () => {
  test('Should upper first character of string', () => {
    expect(upperFirst('test')).toBe('Test');
  });
  test('Should upper first character of sentence', () => {
    expect(upperFirst('A test string')).toBe('A Test String');
  });
  test('Should return empty string when input not a string', () => {
    expect(upperFirst(1)).toBe('');
  });
  test('Should return format data of people', () => {
    const input = {
      md5: 'md5',
      picture: 'picture',
      name: {
        title: 'mr',
        first: 'john',
        last: 'weak',
      },
      dob: '133151858',
      location: {
        street: 'hcm city',
      },
      phone: '0351256',
      password: 'testPassword',
    };
    const expected = {
      picture: 'picture',
      info: [
        {
          iconName: 'user-o',
          title: 'My name is',
          value: 'Mr. John Weak',
        },
        {
          iconName: 'calendar',
          title: 'My birthday is',
          value: '22/3/1974',
        },
        {
          iconName: 'map-o',
          title: 'My address is',
          value: 'Hcm City',
        },
        {
          iconName: 'phone',
          title: 'My phone is',
          value: '0351256',
        },
        {
          iconName: 'lock',
          title: 'My password is',
          value: 'testPassword',
        },
      ],
    };
    expect(formatPeopleInfo(input)).toStrictEqual(expected)
  });
});
