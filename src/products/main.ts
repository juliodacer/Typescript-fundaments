import { addProdcut, calcStock, products } from './product.service';

addProdcut({
  name: 'Prod1',
  createAt: new Date(),
  stock: 12,
});

addProdcut({
  name: 'Prod2',
  createAt: new Date(),
  stock: 8,
});

console.log(products);
const total = calcStock()
console.log(total);


