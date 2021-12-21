"use strict";

function colGlas(str){
    let hGlas = {а:1,я:1,е:1,ё:1,о:1,э:1,ю:1,у:1,и:1,ы:1}; 
    let count=0;
    let newStr = str.toLowerCase();
    for(let i=0; i<newStr.length; i++){
        if(newStr[i] in hGlas)
            count++;
    }
    console.log(count);
}
let a = 'аяеёОэУюИы';
colGlas(a);



