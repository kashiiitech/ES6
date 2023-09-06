// Searching on Objects 
let objArray = [
    {
        No : 1,
        Name : 'Kashif'
    }
    ,
    {
        No : 2,
        Name : 'Usama'
    }
]

console.log(objArray); 

console.log(objArray.includes({No:1,Name:"Kashif"})); //present but false

// For this we use callback function 
let obj = objArray.find((obj) => obj.Name === "Kashif");
console.log(obj);