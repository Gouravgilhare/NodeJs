
//fundamental of javascript
//array and objects
//async js coding 
//foreach map filter  find index of


var arr = [1,2,3,4,5];

console.log("ForEach : \n");
arr.forEach(function(val){
    
    console.log(val + " hello");
})



//map : using for creating new array with  the previous value
console.log("map : ");

var newarr = arr.map(function(val){

    return val*3;
});

console.log(newarr);



//filter
console.log("filter : " );
var ans = arr.filter(function(val){

    if(val>3){
        return true;
    }
    else return false;

});

console.log(ans);



//find :: find the element and return the exit;

console.log("Find : ")
var ans2 = arr.find(function(val){
    if(val === 2)return val;
});

console.log(ans2);

//indexof :: find the element and return the index  exit;

console.log("IndexOF : ")
var ans2 = arr.indexOf(5);
console.log(ans2);


//object :: is pattern  like name : Gourav;

console.log("Objects : ");
var obj = {
        name : "Gourav",
        age : 21

}

Object.freeze(obj);  // uneditable the obj
obj.age = 23;
console.log(obj);




console.log("Length of Function parameter : ")
function abcd(a,b,c,d){

}

console.log(abcd.length);

//RETURN  :  
console.log("Return : ");
function efgh(){ return 110};

console.log(efgh());



//synchronous : line by line code ko chalana
//asynchronous : asynchronous code ko side stack mai daldo and agle code ko chalao jo bhi synchronous ho , jab sab sync code chal jaye tab check karo async code chalao;


//main stack  -> side stack

console.log("Async : ");

async function hjkl(){
    
    var blob = await fetch(`https://randomuser.me/api/`);
    var ans3  = await blob.json();
    console.log (ans3.results[0].name);
};
hjkl();

