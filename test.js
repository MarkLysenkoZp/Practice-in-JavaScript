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

    switch(action) {
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
    }
  
  }
  mathsUpdate(6,2,"add")