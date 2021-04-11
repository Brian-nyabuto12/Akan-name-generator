var century;
var year;
var month;
var date;
var dayOfTheWeek;
var maleNames= ["kwasi","Kwadwo","Kwaku","Yaw","Kofi","kwame"];
var femaleNames= ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];



var day= function(){
    century = parseInt(document.getElementById("cenuty").value);
    year = parseInt(document.getElementById("year").value);
    month = parseInt(document.getElementById("year").value);
    date = parseInt(document.getElementById("date").value);
}

function calculate(){
    day();
    dayOfTheWeek = ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + DD ) % 7
    return(math.floor(dayOfTheWeek));
    console.log(dayOfTheWeek);
}
var result = function(){
    dayOfTheWeek = calculate();
    checkgender();
}
var checkgender = function(){
    calculate();
    var gender = document.getElementById("one");
    if(gender[0].checked == true){
        gender = "male";
    }
    else if(gender[1].checked == true){
        gender ="female"
    }
    else{
        alert("input gender")
    }

    switch(gender){
        case "male":
            if(dayOfTheWeek == 0){
                document.getElementById("result").innerHTML = "monday" + maleNames[0];
            }
                  else if(day == 1){
                  document.getElementById("result").innerHTML = "Tuesday" + maleNames[1];
                        }
                    else if(day == 2){
                    document.getElementById("result").innerHTML = "wednesday" + maleNames[2];
            }            
                        else if(day == 3){
                        document.getElementById("result").innerHTML = "Thursday" + maleNames[3];
            }
                              else if(day == 4){
                              document.getElementById("result").innerHTML = "Friday" + maleNames[4];
            }
                               else if(day == 5){
                                document.getElementById("result").innerHTML = "saturday" + maleNames[5];
                        }
                                     else(day == 6){
                                     document.getElementById("result").innerHTML = "sunday" + maleNames[6];
                        }
                        break;
                        case "female":
                            if(dayOfTheWeek == 0){
                                document.getElementById("result").innerHTML = "monday" + femaleNames[0];
                            }
                                  else if(day == 1){
                                  document.getElementById("result").innerHTML = "Tuesday" + femaleNames[1];
                                        }
                                    else if(day == 2){
                                    document.getElementById("result").innerHTML = "wednesday" + femaleNames[2];
                            }            
                                        else if(day == 3){
                                        document.getElementById("result").innerHTML = "Thursday" + femaleNames[3];
                            }
                                              else if(day == 4){
                                              document.getElementById("result").innerHTML = "Friday" + femaleNames[4];
                            }
                                               else if(day == 5){
                                                document.getElementById("result").innerHTML = "saturday" + femaleNames[5];
                                        }
                                                     else(day == 6){
                                                     document.getElementById("result").innerHTML = "sunday" +femaleNames[6];
                                        }
                                        break;
                                        default:
    }
}