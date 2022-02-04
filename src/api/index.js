/* eslint-disable no-promise-executor-return */
import products from './products.json';
import user from './profile.json';

const deffer = (fn) => new Promise((resolve) => setTimeout(() => resolve(fn), 0));

export default {
  getProducts: () => deffer(products.productos),
  getProduct: (id) => deffer(...products.productos.filter((el) => el.id === id)),
  getUser: () => deffer(user.profile),
};
