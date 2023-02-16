function checkNumber(n){
    if ( n < 5)
    {
        console.log("faible");
    }
    else if( n>5 && n<=10)
        {
            console.log("moyen");
        }
}
checkNumber(2);
checkNumber(6);
 module.exports = checkNumber;