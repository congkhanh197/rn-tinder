import axios from 'axios';

function getPeopleInfo() {
  return axios
    .get('https://randomuser.me/api/0.4/?randomapi')
    .then(response => response);
}

export default {
  getPeopleInfo,
};
