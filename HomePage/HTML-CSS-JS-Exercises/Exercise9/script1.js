const arr=[0,0,0,0,0,0,0,0,0,0];
function bookticket()
{
    let name=prompt("Enter your name");
    let choice=parseInt(prompt("Enter the type for the seat booking.Type 1(first-class) denotes seats 1-5 and Type 2 (economy) denotes seats 6-10."));
    let ec;
    let seatno;
    if(choice===1)
    {
        for(let i=0;i<5;i++)
        {
            if(arr[i]===0)
            {
                arr[i]=1;
                seatno=i+1;
                ec="First-Class"
                break;
            }
            else if(i===4 && arr[i]===1)
            {
                alert("Seats are full.");
                let ans=prompt("Would you like to book seats in the economy class if the seats are available in that?(Y/N)");
                if (ans==="Y")
                {
                    for(let i=5;i<10;i++)
                        {
                            if(arr[i]===0)
                            {
                                arr[i]=1;
                                seatno=i+1;
                                ec="Economy";
                                break;
                            }
                            else if(i===9 && arr[i]===1)
                            {
                                alert("Seats are full in the economy section too.");
                            }
                        }
                }
                else{
                    break;
                }
            }
        }
    }
    else if(choice===2)
    {
        for(let i=5;i<10;i++)
        {
            if(arr[i]===0)
            {
                arr[i]=1;
                seatno=i+1;
                ec="Economy"
                break;
            }
            else if(i===9 && arr[i]===1)
            {
                alert("Seats are full");
                let ans=prompt("Would you like to book seats in the first-class if the seats are available in that?(Y/N)");
                if (ans==="Y")
                {
                    for(let i=0;i<5;i++)
                    {
                        if(arr[i]===0)
                        {
                            arr[i]=1;
                            seatno=i+1;
                            ec="First-class"
                            break;
                        }
                        else if(i===4 && arr[i]===1)
                        {
                            alert("The seats are full in the first-class too.")
                        }
                    }
                }
                else{
                    break;
                }
            }
        }
    }


    document.getElementById("name").textContent=name;
    document.getElementById("seat").textContent=seatno;
    document.getElementById("class").textContent=ec;
}


function calcbmi()
{
    let weight=parseFloat(document.F1.weight.value);
    let feet=parseInt(document.F1.feet.value);
    let inches=parseFloat(document.F1.inches.value);
    let gender=document.F1.gender.value;


    let bmi;
    if(inches)
    {
       bmi=(703*weight)/(inches*inches);
    }
    else if(feet)
    {
       bmi=(703*weight)/((feet*12)*(feet*12));
    }
    bmi=bmi.toFixed(2);
    document.getElementById("bmi").value = bmi;


    let classify;


    if(gender==="Female")
    {
        if(bmi>=32.30)
        {
            alert("very overweight or obese range");
        }
        else if(bmi>=27.31)
        {
            alert("Marginally overweight range");
        }
        else if(bmi>=25.81)
        {
            alert("Ideal range");
        }
        else if(bmi>=19.11)
        {
            alert("Ideal range");
        }
        else if(bmi>17.51)
        {
            alert("Underweight");
        }
        else{
            alert("Anorexia");
        }
    }
    if(gender==="Male")
        {
            if(bmi>=31.10)
            {
                alert("very overweight or obese range");
            }
            else if(bmi>=27.81)
            {
                alert("Marginally overweight range");
            }
            else if(bmi>=26.41)
            {
                alert("Ideal range");
            }
            else if(bmi>=20.71)
            {
                alert("Ideal range");
            }
            else if(bmi>17.51)
            {
                alert("Underweight");
            }
            else{
                alert("Anorexia");
            }
         }




    }
