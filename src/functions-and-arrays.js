// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(a,b){
  return a>b?a:b;
}
// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function longest(word){
    let largest="";
    for(let i=0;i<word.length;i++){
        if(word[i].length>largest.length){
            largest=word[i];
        }
    }
    return largest;
}
console.log(longest(word));
// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
let netprice=0;
for(let i=0;i<numbers.length;i++){
netprice=netprice+numbers[i];
}
console.log(netprice);


// Progression #4: Calculate the average

// Progression 4.1: Array of numbers

const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function average(numbersAvg){
    let sum=0;
    let avg;
    for(let i=0;i<numbersAvg.length;i++){
        sum=sum+numbersAvg[i];
    }
    avg=sum/(numbersAvg.length);
    return avg;
}
console.log(average(numbersAvg));

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(arr){
  var total=0;
if(arr.length===0)
  return null;
  for(var i=0;i<arr.length;i++){
  total+=arr[i].length;}
  return total/arr.length;
}
function avg(arr){
var total=0;
  if(arr.length===0)
  return null;
  for(var i=0;i<arr.length;i++){
    if(typeof(arr[i])==='string'){
      total+=arr[i].length;
    }
    else if(typeof(arr[i])==='boolean'){
      total+=arr[i]===true?1:0;
    }
    else if(typeof(arr[i])==='number'){
      total+=arr[i];
    }
  }
    return Number((total/arr.length).toFixed(2));
  }

// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];
const uni=(value,index,self)=>{
      return self.indexOf(value)===index
  }
  const uniquearr=wordsUnique.filter(uni)
  console.log(uniquearr)

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
function compress(wordsCount){
     var com=[];
     var copy=wordsCount.slice(0);
     for(var i=0;i<wordsCount.length;i++){
         var mycount=0;
         for(var w=0;w<copy.length;w++){
             if(wordsCount[i]==copy[w]){
                 mycount++;
                 delete copy[w];
             }
         }
         if(mycount>0){
             var a=new Object();
             a.value=wordsCount[i];
             a.count=mycount;
             com.push(a);
         }
     }
     return com;
 };
console.log(compress(wordsCount));

// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];
function maximumProduct(matrix){
  pro=0;
  for(var i=0;i<matrix.length;i++){
    for(var j=0;j<matrix[i].length;j++){
      if(matrix[i][j]==1){
        pro=1;
      }
      else{
        pro=0;
      }
    }
  }
  return pro;
}
