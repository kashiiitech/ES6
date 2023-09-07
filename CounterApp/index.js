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
}


function decreament() {
  cnt = document.querySelector('#counter').textContent;
  value = parseInt(cnt);
  value--;
  document.querySelector('#counter').innerHTML=value;
}