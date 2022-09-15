  function maths(a,b, action = 'add'){
  
    if(action == 'add'){
      return a + b;
    } 
    
    else if (action == 'mult'){
      return a * b;
    }

    else if (action == 'min'){
      return a - b;
    }
    
    else if(action == 'div'){
      return a / b;
    } 
    else{
      throw new Error('Arithmetic operation not found');
    } 
  }
  maths(6,2,"add");

  function mathsUpdate(a,b, action = 'add'){

    switch(action){
      case 'add':
      return a+b
      break;

      case 'mult':
      return a*b;
      break;

      case 'min':
      return a-b;
      break;

      case 'div':
      return a/b;
      break;
      default:
      throw new Error('Arithmetic operation not found');
    }
  }
  mathsUpdate(6,2,"add");
 
    
  function hash_Maths(a,b, action = 'add'){
    const maths = { 
      add: function() {return a + b},
      mult: function() {return a * b},
      min: function() {return a - b},
      div: function() {return a / b},
    }; 

    const result  = Object.keys(maths);
    const isFound = result.includes(action);

    if(isFound == false){
     throw new Error('Arithmetic operation not found');
    }          

    const operation = maths[action];
    return  operation()   
  }
  hash_Maths(6,2,'add');  
