(()=> {
  let userId: string | number

  userId = 2323
  userId = 'asasa'

  function greeting(myText: string | number){
    if(typeof myText === 'string'){
      console.log(`string ${myText.toLowerCase()}`);
    }else{
      console.log(`string ${myText.toFixed(2)}`);
    }
  }
  greeting('ass')
  greeting(12.23434343)
})()
