/* eslint-disable no-promise-executor-return */
import products from './products.json';
import user from './profile.json';

const deffer = (fn) => new Promise((resolve) => setTimeout(() => resolve(fn), 1000));

export default {
  getProducts: ({ offset = 1, limit = 6 }) => deffer(products.productos.slice(0, limit * offset)),
  getUser: () => deffer(user.profile),
};
