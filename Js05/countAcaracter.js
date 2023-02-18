let sentence = "Bonjour, chers candidat comment vous allez aujourd'hui";

function countAcaracter(chaine){

    let n=0;
    let tab = chaine.split('');
    
    for(let i=0; i<tab.length; i++)
    {
        if(tab[i]=='a')
        {
            n++;
        }
    }
    console.log("Le nombre d'occurrences de 'a' est",n);

}
    countAcaracter(sentence);
module.exports = countAcaracter;