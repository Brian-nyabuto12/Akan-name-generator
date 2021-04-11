function getAkanName(){
    let century = document.getElementById("century");
    let yearOfBirth = document.getElementById("year").Value;
    let monthOfBirth = Number(document.getElementById("month").Value);
    let dayOfBirth = Number(document.getElementById("day").Value);
    let gender = document.getElementsByName("gender");
}
function getGender(){
    for(let gender of genders){
        if(gender.checked){
            return gender.value;

        }
    }
}
 let myGenderValue = getGender();
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
