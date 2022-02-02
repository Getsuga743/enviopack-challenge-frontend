/* eslint-disable no-promise-executor-return */
import products from './products.json';
import user from './profile.json';

const deffer = (fn) => new Promise((resolve) => setTimeout(() => resolve(fn), 1000));

export default {
  getProducts: () => deffer(products.productos),
  getUser: () => deffer(user.profile),
};
