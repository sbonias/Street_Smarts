import axios from 'axios';

export default {
  getCategories: function () {
    return axios.get('/api/categories');
  },

  getInventory: function () {
    return axios.get('/api/inventory');
  },
  getOrders: function () {
    return axios.get('/api/orders');
  },

  getLocations: function () {
    return axios.get('/api/locations');
  },

  getOrdersByLocation: function () {
    return axios.get('/api/bylocation');
  },
  getOrderItems: function () {
    return axios.get('/api/orderitems');
  },

  postCategories: function (category) {
    return axios.post(`/api/categories/${category}`);
  },
};