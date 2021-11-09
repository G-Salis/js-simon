
const container = document.querySelector('.mycontainer');
const numMemory = [];
let myNum = 0;
const correctNum = [];
let match = false;

console.log('prova: ', correctNum);

stampNum();
console.log('out', numMemory)
setTimeout(record, 1000);
setTimeout(memoryNum, 1200);
// setTimeout(result, 1300);



// function result() {
//   for (let i = 0; i < numMemory.length; i++) {

//     if (numMemory.includes(myNum)) {

//       correctNum.push(myNum)
//       console.log('correctNum out: ', correctNum);

//     }
//   }
  

// }


function memoryNum() {

  for (let i = 0; i < 5 ; i++) {
    myNum = parseInt(prompt('Digita i numeri che sono apparsi'))
    console.log('out', myNum);

    // if (numMemory.includes(myNum))  {

    //   correctNum.push(myNum)
    //   console.log('correctNum out: ', correctNum);

    //   if (correctNum.length === 0) {

    //     container.innerHTML = `<div>Non hai indovinato alcun numero</div>`

      
    //   }else{

    //     container.innerHTML = `<div>Hai indovinato ${correctNum.length} numeri</div>`

    //   }
    // }

    if (numMemory.includes(myNum))  {

      correctNum.push(myNum)
      console.log('correctNum out: ', correctNum);
      container.innerHTML = `<div>Hai indovinato ${correctNum.length} numeri</div>`
    }

      if (correctNum.length === 0) {

        container.innerHTML = `<div>Non hai indovinato alcun numero</div>`

      
      }
   
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