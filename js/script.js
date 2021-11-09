
const container = document.querySelector('.mycontainer');
const numMemory = [];
const myNum = [];

stampNum();
console.log('out', numMemory)
setTimeout(record, 3000);
setTimeout(memoryNum, 3100);





function memoryNum() {

  for (let i = 0; i < 5 ; i++) {
    myNum[i] = parseInt(prompt('Digita i numeri che sono apparsi'))
    console.log('out', myNum)
  }
  
}


function record() {

  container.innerHTML = ``;
  
}


function stampNum() {

  for (let i = 0; i < 5 ; i++) {
    numMemory[i] = random(1, 99);
    console.log(numMemory)
  }
  
  container.innerHTML = `<span>${numMemory[0]},<span>${numMemory[1]},<span>${numMemory[2]},<span>${numMemory[3]},<span>${numMemory[4]}`;
  
}


function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// let clock = setInterval(counter, 1000);
// setTimeout(timer, 6000);


// let sec = 0;

// function counter() {

//   sec++;
//   console.log(sec);
//   if (sec === 5) {
//     clearInterval(clock);
//   }
//   };

// function timer() {
// console.log('timer concluso');

// };