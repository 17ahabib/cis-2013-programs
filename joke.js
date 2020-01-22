var $ = function (id) 
{
    return document.getElementById(id);
}

var mainProgram = function () 
{
    var stringFirstName = prompt("What is your first name?");
    if (!isNaN(stringFirstName)) {
        alert("You did not enter a valid first name, so I will call you Ugly.  Hello Ugly Person!");
    } else
    {
        alert("Hello "+ stringFirstName +"! Yo momma is so fat when she got on the scale it said I need your weight not your phone number!");  
    }
}

window.onload = function () 
{
    $("click").onclick = mainProgram;
    $("item_cost").focus(); //puts the cursor on the first DOM text input box
}