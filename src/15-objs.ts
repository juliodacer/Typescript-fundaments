(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string;
    createAt: Date;
    stock: number;
    size?: Sizes;
  }
  const products: Product[] = [];

  const addProdcut = (data: Product) => {
    products.push(data);
  };

  addProdcut({
    title: 'Prod1',
    createAt: new Date(),
    stock: 12,
  });
  products.push({
    title: 'Prod2',
    createAt: new Date(),
    stock: 5,
  });
  console.log(products);
})();
