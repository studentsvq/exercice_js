//FIZZBUZZ
function maFonction(nb)
{

  if(nb % 3 === 0 && nb % 5 === 0)
  {
    return result = "FizzBuzz";
  }
  
  if(nb % 3 === 0) 
  {
    return result = "Fizz";
  }

  if(nb % 5 === 0)
  {
    return result = "Buzz";
  }

  }

    console.log(maFonction(15))
    console.log(maFonction(7))
    console.log(maFonction(10))
