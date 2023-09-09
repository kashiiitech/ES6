const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-password-display]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

// console.log(inputSlider, lengthDisplay, passwordDisplay, copyBtn, copyMsg, uppercaseCheck, lowercaseCheck, numbersCheck, symbolsCheck, indicator, generateBtn, allCheckBox)

let password = "";
let passwordLength = 10;
let checkCount = 0;
handleSlider();
// site strength circle color to grey


// set the password length according to the slider
function handleSlider() {
  inputSlider.value = passwordLength;
  lengthDisplay.innerHTML = passwordLength;

}

function setIndicator(color) {
  indicator.style.backgroundColor = color;
  // shadow
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
} 

function generateRandomNumber() {
  return getRndInteger(0, 9);
}

function generateLowerCase() {
  return String.fromCharCode(getRndInteger(97, 127));
}


function generateUperCase() {
  return String.fromCharCode(getRndInteger(65, 91));
}

function generateSymbol() {
  const randNum = getRndInteger(0, symbols.length);
  return symbols.charAt(randNum);
}

function calcStrength() {
  let hasUpper = false;
  let hasLower = false;
  let hasNum = false;
  let hasSym = false;

  if(uppercaseCheck.checked) hasUpper = true;
  if(lowercaseCheck.checked) hasLower = true;
  if(numbersCheck.checked) hasNum = true;
  if(symbolsCheck.checked) hasSym = true;

  if(hasUpper && hasLower && (hasNum || hasSym) && passwordLength >=8) {
    setIndicator("#0f0");
  }else if (
    (hasLower || hasUpper) &&
    (hasNum || hasSym) &&
    passwordLength >= 6
  ) {
    setIndicator("#ff0");
  } else {
    setIndicator("#f00");
  }
}

async function copyContent() {

  try{
   await navigator.clipboard.writeText(passwordDisplay.value);
   copyMsg.innerText = "Copied"
  }
  catch(e) {
    copyMsg.innerText = "failed";
  }
  // to make the Copied visible
  copyMsg.classList.add("active");

  setTimeout(() => {
    copyMsg.classList.remove("active");
  }, 2000); 

}

function handleCheckBoxChange() {
  checkCount = 0;
  allCheckBox.forEach( (checkbox) => {
    if(checkbox.checked)
      checkCount++;
  })

  // conditition if all check boxes are checked and we still want a 1 character password
  if(passwordLength <= checkCount) {
    passwordLength = checkCount;
    handleSlider();
  }
}

allCheckBox.forEach(checkbox => {
  checkbox.addEventListener('change', handleCheckBoxChange);
  
});

// Main function 

inputSlider.addEventListener('input', (e) =>{
  passwordLength = e.target.value;
  handleSlider();
})


copyBtn.addEventListener('click', () =>{
  if(passwordDisplay.value)
    copyContent();
})

function shufflePassword(array) {
  // Fisher Yates Method
  for(let i =array.length-1; i>0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  let str = "";
  array.forEach((el) => str+=el);
  return str;

}




generateBtn.addEventListener('click', () => {
  console.log("inside teh generatebtn function");
  // none of the checkbox are selected
  if(checkCount==0) 
    return;

  // if length of the password is less than check count
  if(passwordLength < checkCount) {
    passwordLength = checkCount;
    handleSlider();
  }

  // let's start the journey to find the new password

  // remove old password
  password = "";

  // let's put the stuff mentioned by checkboxes

  // if(uppercaseCheck.checked) {
  //   password += generateUperCase();
  // }

  // if(lowercaseCheck.checked) {
  //   password += generateLowerCase();
  // }

  // if(numbersCheck.checked) {
  //   password += generateRandomNumber();
  // }

  // if(symbolsCheck.checked) {
  //   password += generateSymbol();
  // }

  let funcArr = [];

  if(uppercaseCheck.checked)
    funcArr.push(generateUperCase);
  if(lowercaseCheck.checked)
    funcArr.push(generateLowerCase);
  if(numbersCheck.checked)
    funcArr.push(generateRandomNumber);
  if(symbolsCheck.checked)
    funcArr.push(generateSymbol);

  // compulsory adition
  for(let i=0; i<funcArr.length; i++) {
    password += funcArr[i]();
  }

  // remaining addition
  for(let i=0; i<passwordLength-funcArr.length; i++){
    let randIndex = getRndInteger(0, funcArr.length);
    password += funcArr[randIndex]();
  }

  // shuffle the password

  password = shufflePassword(Array.from(password));

  // show in UI
  passwordDisplay.value = password;

  // calculate strength function
  calcStrength();



})
