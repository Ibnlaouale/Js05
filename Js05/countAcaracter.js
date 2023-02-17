let sentence = "Bonjour, chers candidat comment vous allez aujourd'hui";

function countAcaracter(){

    let n=0;
    let tab = sentence.split('');
    
    for(let i=1; i<tab.length; i++){
        if(tab[i]=='a'){
            n++;
        }
    }
    console.log("Le nombre d'occurrences de 'a' est",n);

}
    countAcaracter();
module.exports = countAcaracter;

