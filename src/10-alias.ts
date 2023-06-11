(() => {
  type UserId = string | number;
  let userId: UserId;

  // Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  shirtSize = 'S';

  function greeting(myText: UserId, size: Sizes) {
    if (typeof userId === 'string') {
      console.log('string');
    }
  }

  greeting(1111, 'M');
})();
