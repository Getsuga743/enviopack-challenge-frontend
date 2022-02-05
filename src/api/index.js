/* eslint-disable no-promise-executor-return */
import products from './products.json';
import user from './profile.json';

const WAIT_TIME = 1000;
const deffer = (fn) => new Promise((resolve) => setTimeout(() => resolve(fn), WAIT_TIME));

export default {
  getProducts: () => deffer(products.productos),
  getProduct: (id) => deffer(...products.productos.filter((el) => el.id === id)),
  getUser: () => deffer(user.profile),
};
