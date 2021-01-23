import axios from 'axios';

export const getMe = async () => {
  const { data } = await axios.get('http://localhost:8081/users', {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  });
  return data;
};

export const getDealer = async () => {
  const { data } = await axios.get('https://randomuser.me/api/');
  const dealer = data.results[0].name;
  const result = {
    image: data.results[0].picture.large,
    id: -1,
    username: `${dealer.first} ${dealer.last}`,
  };
  return result;
};

export const getPlayerInfo = async () => {
  const { data } = await axios.get(
    'http://localhost:8081/users/infos',
    {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    },
  );
  return data;
};
