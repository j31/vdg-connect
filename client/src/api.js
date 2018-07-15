import axios from 'axios';

const service = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:3030/api',
});

const errHandler = err => {
  console.error(err);
  throw err;
};

export default {
  service: service,
  

  getPlayers() {
    return service
      .get('/users')
      .then(res => res.data)
      .catch(errHandler);
  },

  getConsorts() {
    return service
      .get('/consorts')
      .then(res => res.data)
      .catch(errHandler);
  },


  getEvents() {
    return service
      .get('/events')
      .then(res => res.data)
      .catch(errHandler);
  },

  postEvents(data) {
    return service
      .post('/events', data)
      .then(res => res.data)
      .catch(errHandler);
  },
  
  getProfile() {
    return service
      .get('/users/profile')
      .then(res => res.data)
      .catch(errHandler);
  },

  postProfile(file, playerInfo) {

    const formData = new FormData();
   
    formData.append("picture", file)
    
    formData.append("fullName", playerInfo.fullName)

    formData.append("address1", playerInfo.address1)
    formData.append("address2", playerInfo.address2)
    formData.append("city", playerInfo.city)
    formData.append("stateCounty", playerInfo.stateCounty)
    formData.append("postalCode", playerInfo.postalCode)
    formData.append("country", playerInfo.country)
    formData.append("location", playerInfo.location)
   
    return service
      .post('/users/profile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(res => res.data)
      .catch(errHandler);
  },
  

  signup(userInfo) {
    return service
      .post('/signup', userInfo)
      .then(res => res.data)
      .catch(errHandler);
  },

  login(email, password) {
    return service
      .post('/login', {
        email,
        password,
      })
      .then(res => {
        const { data } = res;
        localStorage.setItem('user', JSON.stringify(data));
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.token;
        return data;
      })
      .catch(errHandler);
  },

  logout() {
    delete axios.defaults.headers.common['Authorization'];
    localStorage.removeItem('user');
  },

  loadUser() {
    const userData = localStorage.getItem('user');
    if (!userData) return false;
    const user = JSON.parse(userData);
    if (user.token) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + user.token;
      return user;
    }
    return false;
  },

  isLoggedIn() {
    return localStorage.getItem('user') != null
  },

};
