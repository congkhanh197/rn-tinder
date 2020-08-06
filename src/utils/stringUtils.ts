import moment from 'moment';
import {IPeopleResponse} from '../store/reducers/peopleInfoReducer';
import {IPeopleInfo} from 'src/components/CardItem';

const upperFirst = (str: any) => {
  if (typeof str !== 'string') return '';
  return str
    .split(' ')
    .map(item => item.charAt(0).toUpperCase() + item.slice(1))
    .join(' ');
};

const formatPeopleInfo = (peopleInfo: IPeopleResponse): IPeopleInfo => ({
  picture: peopleInfo.picture,
  info: [
    {
      iconName: 'user-o',
      title: 'My name is',
      value: upperFirst(
        peopleInfo.name.title +
          '. ' +
          peopleInfo.name.first +
          ' ' +
          peopleInfo.name.last,
      ),
    },
    {
      iconName: 'calendar',
      title: 'My birthday is',
      value: moment.unix(parseInt(peopleInfo.dob)).format('D/M/YYYY'),
    },
    {
      iconName: 'map-o',
      title: 'My address is',
      value: upperFirst(peopleInfo.location.street),
    },
    {
      iconName: 'phone',
      title: 'My phone is',
      value: peopleInfo.phone,
    },
    {
      iconName: 'lock',
      title: 'My password is',
      value: peopleInfo.password,
    },
  ],
});

export {upperFirst, formatPeopleInfo};
