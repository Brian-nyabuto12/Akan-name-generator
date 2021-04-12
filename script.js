function getAkanName(){
   var yearOfBirth = document.getElementById("year").Value;
   var monthOfBirth = Number(document.getElementById("month").Value);
   var dayOfBirth = Number(document.getElementById("day").Value);
   var gender = document.getElementsByName("gender");

function getGender(){
    for(var gender of genders){
        if(gender.checked){
            return gender.value;

        }
    }
}
 var myGenderValue = getGender();
 console.log(myGenderValue);


 function monthValidator(){
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
    
  var monthValid = monthValidator();
  var dayValid = dayValidator();

   var dayOfWeekNumber = Math.floor((((Number(yearOfBirth.slice(0,2))/4)-2*Number(yearOfBirth.slice(0,2))-1)+
          ((5*Number(yearOfBirth.slice(2,4))/4))+((26*(monthOfBirth+1)/10))+dayOfBirth)%7);

   
   
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


  if (myGenderValue == "male" && monthValid && dayValid){
    switch (dayOfWeekNumber) {
      case 1:
        document.getElementById('result').textContent = "You were born on a Sunday: your Akan name is " + maleAkanNames[0];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        return false;
        break;
      case 2:
        document.getElementById('result').textContent = "You were born on a Monday: your Akan name is " + maleAkanNames[1];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        return false;
        break;
      case 3:
        document.getElementById('result').textContent = "You were born on a Tuesday: your Akan name is " + maleAkanNames[2];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        return false;
        break;
      case 4:
        document.getElementById('result').textContent = "You were born on a Wednesday: your Akan name is " + maleAkanNames[3];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        return false;
        break;
      case 5:
        document.getElementById('result').textContent = "You were born on a Thursday: your Akan name is " + maleAkanNames[4];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        return false;
        break;
      case 6:
        document.getElementById('result').textContent = "You were born on a Friday: your Akan name is " + maleAkanNames[5];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        return false;
        break;
      case 7:
        document.getElementById('result').textContent = "You were born on a Saturday: your Akan name is " + maleAkanNames[6];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        return false;
        break;
      case 0:
        document.getElementById('result').textContent = "You were born on a Sunday: your Akan name is " + maleAkanNames[0];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        return false;
        break;
      default:
        alert("No Akan name for you");

    }
  } else if(myGenderValue == "female" && monthValid && dayValid) {
    switch (dayOfWeekNumber) {
      case 1:
        document.getElementById('result').textContent = "You were born on a Sunday: your Akan name is " + femaleAkanNames[0];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        return false;
        break;
      case 2:
        document.getElementById('result').textContent = "You were born on a Monday: your Akan name is " + femaleAkanNames[1];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        return false;
        alert("Kwadwo");
        break;
      case 3:
        document.getElementById('result').textContent = "You were born on a Tuesday: your Akan name is " + femaleAkanNames[2];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        return false;
        break;
      case 4:
        document.getElementById('result').textContent = "You were born on a Wednesday: your Akan name is " + femaleAkanNames[3];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        return false;
        break;
      case 5:
        document.getElementById('result').textContent = "You were born on a Thursday: your Akan name is " + femaleAkanNames[4];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        return false;
        break;
      case 6:
        document.getElementById('result').textContent = "You were born on a Friday: your Akan name is " + femaleAkanNames[5];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        return false;
        break;
      case 7:
        document.getElementById('result').textContent = "You were born on a Saturday: your Akan name is " + femaleAkanNames[6];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        return false;
        break;
      case 0:
        document.getElementById('result').textContent = "You were born on a Sunday: your Akan name is " + femaleAkanNames[0];
        document.getElementById('display-name').textContent = "Here is your Akan name: ";
        return false;
        break;
      default:
        alert(" No Akan name for you");
      }
    } else{
      alert("You entered invalid month or day");
    }    
  }
      
  


