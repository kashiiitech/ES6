//  steps
// first take the value 
// second perform the operation plus or minus
// third insert the value


// onclick() -> inc() or dec()


function increament() {
  cnt = document.querySelector('#counter').textContent;
  value = parseInt(cnt);
  value++;
  document.querySelector('#counter').innerHTML=value;
  createDynamicCircle();
}


function decreament() {
  cnt = document.querySelector('#counter').textContent;
  value = parseInt(cnt);
  value--;
  document.querySelector('#counter').innerHTML=value;
  createDynamicCircle();
}


 // Function to create a dynamic circle with a random color
 function createDynamicCircle() {
   const dynamicCircle = document.createElement("div");
   dynamicCircle.className = "dynamic-circle";
   dynamicCircle.style.backgroundColor = getRandomColor();
   dynamicCircle.style.left = `${Math.random() * 90}%`;
   dynamicCircle.style.top = `${Math.random() * 90}%`;
   document.body.appendChild(dynamicCircle);

   // Remove the dynamic circle after 1 second
   setTimeout(() => {
     dynamicCircle.remove();
   }, 1000);
 }

 // Function to generate a random color
 function getRandomColor() {
   const letters = "0123456789ABCDEF";
   let color = "#";
   for (let i = 0; i < 6; i++) {
     color += letters[Math.floor(Math.random() * 16)];
   }
   return color;
 }