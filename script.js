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
                document.getElementById("result").
            }
    }
}