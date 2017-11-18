

function forLoop(anArray){

  for (let i = 0; i < 25; i++) {
    if (i === 1){
    anArray.push (`"I am 1 strange loop."`);
} else {
  anArray.push(`"I am ${i} strange loops."`);
}
}
return anArray
};


function whileLoop(number){
  while (number>0){
    console.log(number-1);
  }
  return `done.`
}
