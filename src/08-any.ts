(() => {
  let dynamicVar: any; // cualquiera
  (dynamicVar = 100), (dynamicVar = null), (dynamicVar = {}), (dynamicVar = '');

  // CASTT
  dynamicVar = 'Hola';
  const res = (dynamicVar as string).toLowerCase();
  console.log(res);

  dynamicVar = 23;
  const res2 = (<number>dynamicVar).toFixed();
  console.log(res2);
})();
