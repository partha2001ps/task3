// How to campare two json have the same properties without order

let a = {name:"person 1", age:5};
let b = {age:5, name:"person 1"};

// to sort the a and b object keys 

let firstSort=Object.keys(a).sort();
let secondSort=Object.keys(b).sort();

// to json stringify 

let a1=JSON.stringify(firstSort)
let a2=JSON.stringify(secondSort)
 
// to compare a1 and a2 key length and  keys

let len1=a1.length
let len2=a2.length

if(len1===len2&&a1===a2){
        console.log(true)   
}

else{
    console.log(false)
}
