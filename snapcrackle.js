function snapCrackle(maxValue) {
     let result = "" 
      for( let num = 1; num <= maxValue; num++ ) {
       if (num % 2 === 1 && num % 5 === 0) {
        result += "SnapCrackle, ";      
        } else  if (num % 2 === 1) {
        result += "Snap, ";        
        } else if (num % 5 === 0) {
            result += "Crackle, ";      
        } else if (!(num % 2 === 1) && !(num % 5 === 0)){
            result += num + ", "
    }
   }
   return result;     
}

snapCrackle();