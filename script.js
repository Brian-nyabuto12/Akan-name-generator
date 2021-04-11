function getAkanName(){
    var century = document.getElementById("century");
    var yearOfBirth = document.getElementById("year").Value;
    var monthOfBirth = Number(document.getElementById("month").Value);
    var dayOfBirth = Number(document.getElementById("day").Value);
    var gender = document.getElementsByName("gender");
}
function getGender(){
    for(var gender of genders){
        if(gender.checked){
            return gender.value;

        }
    }
}
 var myGenderValue = getGender();
 console.log(myGenderValue);


 function monthValidity(){
     if(monthOfBirth < 1 || monthOfBirth > 12){
         return false;
     }
     else{
         return true;
     }
 }



 
     
 function dayValidator () {
    if (monthOfBirth === 2 && Number(yearOfBirth)%4 === 0) {
      if (dayOfBirth > 28 || dayOfBirth < 1) {
        return false;
      } else if (monthOfBirth === 2 && dayOfBirth > 29) {
        return false;
      } else if (monthOfBirth === 2 && dayOfBirth < 1) {
        return false;
      } else {
        return true;
      }
    } else if (dayOfBirth < 1 || dayOfBirth > 31){
      return false;
    } else {
      return true;
    }
  }
    
  var monthValid = monthValidity();
   var dayValid = dayValidity();

   var  dayOfTheWeek = math.floor( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7
   
   
   
   var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
   var maleAkanNames = [ "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
   var femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  
  
  
   var index;

  if (dayOfWeekNumber == 0){
    index = 6;
  } else {
    index = dayOfWeekNumber - 1;
  }

  console.log(index);

  if (myGenderValue == "male" && monthValid && dayValid) {
    document.getElementById('result').textContent = "You were born on a " + daysOfWeek[index] + " , your Akan name is " + maleAkanNames[index];
    document.getElementById('display-name').textContent = "Here is your Akan name: ";
    document.getElementById('result').style.fontSize = "18px";
    document.querySelector('h1').textContent = "Hello" + " " + maleAkanNames[index];
    return false;
  } else if (myGenderValue == "female" && monthValid && dayValid) {
    document.getElementById('result').textContent = "You were born on a " + daysOfWeek[index] + " , your Akan name is " + femaleAkanNames[index];
    document.getElementById('display-name').textContent = "Here is your Akan name: ";
    document.getElementById('result').style.fontSize = "18px";
    document.querySelector('h1').textContent = "Hello" + " " + femaleAkanNames[index];
    return false;
  } else {
    alert("You entered an invalid day or month, You please try again");
  }

