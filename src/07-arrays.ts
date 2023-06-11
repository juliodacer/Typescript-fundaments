(() => {
  // implicited mode
  let prices = [1, 2, 2, 2, 11, 212, 'hola', true];
  prices.push(12121212);

  let products = ['hola', true];
  products.push(false);

  // explicited mode
  let mixed: (number | string | boolean |object)[] = ['hola', true];
  // a array tambien lo reconoce ceomo object
  mixed.push(12)
  mixed.push('as')
  mixed.push(true)
  mixed.push({})
  mixed.push([])


})();
