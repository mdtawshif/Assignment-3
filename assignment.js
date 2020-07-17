//1.Convert (ft -> mile)

function feetToMile(feet)
{
    var mile = (feet/5280);
    if(mile>=0)
    {
       return mile;
    }
    else
    {
        return "Distance can't be negative";
    }
}

var conversion1 = feetToMile(6280);
console.log("After Conversion = ",conversion1,"mile");
var conversion2 = feetToMile(-6280);
console.log("After Conversion = ",conversion2);


//2.Total amount of wood.

function woodCalculator(chair,table,bed)
{
    var amountOfWood1 = (chair*2);
    var amountOfWood2 = (table*5);
    var amountOfWood3 = (bed*9);

    var totalWood =amountOfWood1 + amountOfWood2 + amountOfWood3;
    
    if(totalWood>=0)
    {
      return totalWood;
    }
    else
    { 
      return "Amount of wood can't be negative";
    }
    
}
 var woodAmount1 = woodCalculator(1,2,3);
 console.log("Total amount of wood: ",woodAmount1);
 var woodAmount2 = woodCalculator(1,2,-3);
 console.log("Total amount of wood: ",woodAmount2);



//3.brick calculation.

function brickCalculator(floor)
{
    if(floor>=1 && floor<=10)
    {
        var totalBrick = (1000*15);
        return totalBrick;
    }   
    if(floor>=11 && floor<=20)
    {
        var totalBrick = (1000*12);
        return totalBrick;
    }     
    if(floor>=21)
    {
        var totalBrick = (1000*10);
        return totalBrick;
    } 
    else
    {
        return "invalid input";
    }    
 
}

var brickAmount1 = brickCalculator(7);
console.log("Amount Of Bricks: ",brickAmount1);
var brickAmount2 = brickCalculator(13);
console.log("Amount Of Bricks: ",brickAmount2);
var brickAmount3 = brickCalculator(30);
console.log("Amount Of Bricks: ",brickAmount3);
var brickAmount4 = brickCalculator(0);
console.log("Amount Of Bricks: ",brickAmount4);


//4. Smallest string.
function tinyFriend(arr){
   var tiny=arr[0].length;
   var smallest = arr[0]; 
  for (i=0; i<arr.length; i++)
  {
      if (arr[i].length < tiny)
      {
        tiny= arr[i].length;
        smallest = arr[i];
      }

  }
  return smallest;
}

var name =tinyFriend(['Tawshif','Nibir','Abu','Topu','Sazid','Amin']);
console.log("Tiny name: ",name);