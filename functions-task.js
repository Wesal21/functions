
//callback function ***********

console.log(isEven(5));
console.log(getOdd([6,5,3,8,7,9]));

// problem1*************
function isEven ( num){
 return num%2==0;
}

//problem2************
function getOdd(arr){
const result=[];
for (let i=0;i<arr.length;i++){
result[i]=isEven(arr[i]);

}
return result;

}
//problem3***************

console.log(getMax([6,8,46,55,99]));
function getMax(arr2){
let max=0;
for (let i=0; i<arr2.length;i++){
if(arr2[i]>max){
max=arr2[i]
}
}
return max;
}
 //problem4***************
 console.log(stringContains("carolina","car"));
function stringContains(str1,str2){
let res=0;

  res=str1.includes(str2);
  
 
 return res;
}

//problem5
console.log(capitalizeWords("car"));
function capitalizeWords(str){
let res=0;
for (let i=0; i<str.length;i++){
 res=str.toUpperCase()
  
 
 return res;
}

}


//problem6

console.log(arrayContains([5,6,3,2],[5, 6]));
function arrayContains(a1,a2){
let res=false;
 


for (let  i = 0; i < a2.length; i++) {
    if (a1.indexOf(a2[i]) > -1) {
        res = true;
        break;
    }
}


 return res;
}
 // problem 7*****

 console.log(getSequence(-3));

 function getSequence(number){
     var res=[];
     if(number<0){
         for(let j=0;j<=0;j--)
         {
             res=j;
         }
     }
     else{
         for(let i=0;i<=number;i++){
             res=i;
         }

     }
     return res;
 }

//problem8*********
function getSlug(st){
    let resString=[];
    for(let i=0; i< st.length;i++ ){
    resString= st.replace(/\s+/g, '-').toLowerCase();
    }
    return resString;
    }
    console.log(getSlug("I LOVE APPLE"));





