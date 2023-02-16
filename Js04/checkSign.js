function checkSign(n){
    if ( n >= 0 )
    {
        console.log("Positif");
    }
    else
        {
            console.log("Negatif");
        }
}

checkSign(-5);
checkSign(5);
checkSign(6);

module.exports = checkSign;