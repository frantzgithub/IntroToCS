'use strict';

function BinaireDecimal(num) {
    
    let sum = 0;
    let spaceInNumber = num.split('').reverse();
    for(let i = 0; i < num.length; i++){
        sum = sum + parseInt(spaceInNumber[i]) * Math.pow(2, i);
    }
    return sum;
}

function DecimalABinaire(num) {
    
    let binaire = [];
    
    while(num >= 1){
        let resultat = Math.trunc(num % 2);
        num = num / 2;
        binaire.push(resultat);
    }
    return binaire.reverse().join('');
}

module.exports = {
   BinaireDecimal,
   DecimalABinaire,
};
