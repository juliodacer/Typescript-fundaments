(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  const login = (data: { email: string; password: string }) => {
    console.log(data.email, data.password);
  };
  // login('devcer@gm,gmail.com', '12121212')
  login({
    email: 'nico@nico.co',
    password: '1233222',
  });

  const products: any[] = [];

  const addProdcut = (data: {
    title: string;
    createAt: Date;
    stock: number;
    size?: Sizes;
  }) => {
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
