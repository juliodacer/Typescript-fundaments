(() => {
  let productPrice = 100;
  productPrice = 12;
  console.log('productPrice', productPrice);
  let customerAge: number = 28;
  customerAge = customerAge + 1;
  console.log(customerAge);

  let productInStock: number; // inicializar
  console.log('productInStock', productInStock);
  if (productInStock > 10) {
    console.log('is greater');
  }
  let discount = parseInt('aaaa');
  console.log('discount', discount);
  if (discount < 200) {
    console.log('apply');
  } else {
    console.log('not apply');
  }

  let hex = 0xfff
  console.log(hex);

})();
