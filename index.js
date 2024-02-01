//FIZZBUZZ
//exercice avec les variables incluses  
function maFonction(nb)
{
  let a = nb;
  let b = 3;
  let c = 5;
  
  if(a % b) 
  {
    return result = "Fizz";
  }

  if(a % c)
  {
    return result = "Buzz";
  }

  if(a % b == a % c)
  {
    return result = "FizzBuzz";
  }

  }

    console.log(maFonction(30))
    console.log(maFonction(12))
    console.log(maFonction(1))

//Et sans 
function maFonction(nb)
{
  
  if(nb % 3) 
  {
    return result = "Fizz";
  }

  if(nb % 5)
  {
    return result = "Buzz";
  }

  if(nb % 3 == nb % 5)
  {
    return result = "FizzBuzz";
  }

  }

    console.log(maFonction(15))
    console.log(maFonction(7))
    console.log(maFonction(10))