


for (let i = 0; i < 5 ; i++) {
  const numMemory = [random(1, 99)];
  console.log(numMemory)
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