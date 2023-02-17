function displayNumber()
{
    let i=1;
    let j=0;
   const tab=[];
    while(i<=10 && j<=9)
    {
        tab.push(i);
        i++;
        j++;
    }
        for(let t=0; t<=tab.length; t++)
        {
            console.log(tab[t]);
        }  
}

displayNumber();

module.exports = displayNumber;