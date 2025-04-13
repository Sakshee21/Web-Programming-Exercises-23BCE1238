function compute()
{
    
    let a1=parseInt(document.F1.t1.value);
    let a2=parseInt(document.F1.t2.value);
    if (isNaN(a1) || isNaN(a2)) {
        alert("Please enter valid integers in both text boxes.");
        return; 
    }

    let operation=prompt("Enterthe operation you wanna perform","+");

    let result;

    if(operation==="+")
    {
        result=a1+a2;
    }
    else if(operation==="-")
    {
        result=a1-a2;
    }

    else if(operation==="*")
    {
        result=a1*a2;
    }

    else if(operation==="/")
    {
        if(a2!==0)
        {
        result=a1/a2;
        }
        else
        {
            alert("Cannot divide by 0");
        }
    }
    else{
        alert("Invalid operator");
    }

    alert("Hence the result is: "+result);
}

function eligible()
{
    let age=prompt("Enter the age of the user",12);
    if (isNaN(age) || isNaN(age)) {
        alert("Please enter a valid age.");
        return; 
    }
    if(age>=18)
    {
        alert("You are eligible for voting");
    }
    else{
        alert("You are not eligible for voting");
    }
}

function showconfirm()
{
    let isconform=confirm("Are you a student???");
    if(isconform===true)
    {
        document.F3.regno.disabled = false;
    }
    else{
        document.F3.regno.disabled = true;
    }
}


function displaybox()
{
    var regno=document.F5.regno1.value;
    var name=document.F5.name.value;
    if(regno===""||name==="")
    {
        alert("Please enter the fields");
        return;
    }

    document.write('<div style="border: 3px solid red; width: 100px; text-align: center; font-weight: bold; padding: 10px; font-size: 20px;">' + regno + '</div>');
    document.getElementById("namedisplay").innerHTML = 
                '<div style="border: 2px solid black; width: 150px; text-align: center; font-weight: bold; padding: 10px; font-size: 18px; color: red;">' +
                  name   +
                '</div>';
}


function ticketbooth()
{
    let adu=parseInt(document.F6.ad.value)||0;
    let chi=parseInt(document.F6.ch.value)||0;
    let total=(10*adu) + (chi*5);
    document.F6.res.value="Rs."+total;
}