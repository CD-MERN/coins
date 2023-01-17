const tossCoin = () =>  {
    return Math.random() > 0.5 ? "heads" : "tails";
}


const fiveHeadsSync =() => {
    let headsCount = 0;
    let attempts = 0;
    while(headsCount < 5) {
        attempts++;
        let result = tossCoin();
        console.log(`${result} was flipped`);
        if(result === "heads") {
            headsCount++;
        } else {
            headsCount = 0;
        }
    }
    return `Sync: It took ${attempts} tries to flip five "heads"`;
}
//console.log( fiveHeadsSync() );
//console.log( "This is run after the fiveHeadsSync function completes" );

//async
function fiveHeads() {
    return new Promise( (resolve, reject) => {
      let headsCount = 0;
      let attempts = 0;
      while(headsCount < 5) {
          attempts++;
          let result = tossCoin();
          console.log(`${result} was flipped`);
          if(result === "heads") {
              headsCount++;
          } else {
              headsCount = 0;
          }
      }
      if(headsCount == 5){
        resolve(`Async: It took ${attempts} tries to flip five "heads"`);
      } 
      if(attemps == 100){
        reject('Async: Exceeded 100 attempts')
      }
    });
}
fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
console.log( "When does this run now?" );
