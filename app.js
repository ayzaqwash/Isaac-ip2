const result_p=document.getElementById("result");
function getBirtDay() {
    let gender=document.getElementById('gender').value;
    let dateOfBirth=document.getElementById('dateofbirth').value;
    // CC - is the century digits. For example 1989 has CC = 19

    // YY - is the Year digits (1989 has YY = 89)
   
    // MM -  is the Month
   
    // DD - is the Day of the month 
   
    // mod - is the modulus function ( % )
    // 31/10/1995
    var CC=dateOfBirth.slice(6,8);
    console.log(CC)
    var YY=dateOfBirth.slice(8,10);
    console.log(YY)
    var MM=dateOfBirth.slice(3, 5)
    console.log(MM)
    var DD=dateOfBirth.slice(0, 2)
    console.log(DD)
    console.log(gender)
    var zac=checkinputs(CC, YY, MM, DD)
   console.log(zac)
   if (zac) { 

    let birthDay = parseInt((((CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7)
   console.log (birthDay, gender==="male")
   if (birthDay===1&&gender==="male") {
    alert("Your akan name=Kwasi")
} else if (birthDay===2&&gender==="male") {
    alert("Your akan name is Kwadwo")
} else if (birthDay===3&&gender==="male") {
    alert("your akan name is Kwabena")
} else if (birthDay===4&&gender==="male")
{alert("Your akan name is Kwaku")
} else if (birthDay===5&&gender==="male") {
    alert("your akan name is Yaw")
} else if (birthDay===6&&gender==='male')  {
 console.log("line 40")   
 alert("your akan name is Kofi")
} else if (birthDay===7&&gender==="male") {
    alert("Your akan name is Kwame")
} else {
    console.log("me")
}}
}
