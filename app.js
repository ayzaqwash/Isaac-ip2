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
}
