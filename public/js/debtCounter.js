function addCommas(nStr, french)
{
    var commaChar = ' ';
    var dotChar = '.';

    if (french == true)
    {
        commaChar = " ";
        dotChar = ',';
    }

    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? dotChar + x[1] : '';

    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1))
    {
        x1 = x1.replace(rgx, '$1' + commaChar + '$2');
    }
    
    if (french == true)
       x2 = x2 + " $";
    else
       x1 = "$" + x1;
                
    return x1 + x2;
}


function updateDebtClock()
{
    var debtContainer = document.getElementById("publicDebt");

    if (debtContainer)
    {
        var start = new Date("2015-03-26");
        var now = new Date();
        var seconds = (now.getTime() - start.getTime()-57600000) / 10;
        var baseDebt = 274413881557;
        var newDebt = seconds * 2.08607507;
        var result = baseDebt + newDebt;

        var isClockFrench = document.getElementById('frenchClock');
    
        if (isClockFrench)
            isClockFrench = true;
        else
            isClockFrench = false;

        debtContainer.innerHTML = addCommas(result.toFixed(2), isClockFrench);

    }
    setTimeout("updateDebtClock()",10);
}

updateDebtClock();