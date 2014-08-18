

//objects holding weather conditions
var weatherObj = {
    //variables requested from JSON current_condition object
    cityName : "Chicago",
    cloud: "0",
    humidity: "0",
    observationTime: "",
    precipMM: "0.0",
    pressure: "0",
    tempC: "0",
    tempF: "0",
    visibility: "0",
    weatherCode: "0",
    weatherDesc: "",
    windDir16Point: "",
    windDirDegree: "0",
    windSpeedKmph: "0",
    windSpeedMiles: "0",
    location: " ",
    //variables requested from JSON weather Object
    date: "",
    precipMM2:"",
    tempMaxC:"",
    tempMaxF:"" ,
    tempMinC:"" ,
    tempMinF: "",
    weatherCode2: "",
    weatherDesc2: "",
    weatherIconUrl:"" ,
    windDir16Point2: "",
    windDirDegree2: "",
    windDirection: "",
    windSpeedKmph2: "",
    windSpeedMiles2:""

}
var weatherDay2 = {
    //variables requested from JSON weather Object
    date: "",
    precipMM:"",
    tempMaxC:"",
    tempMaxF:"" ,
    tempMinC:"" ,
    tempMinF: "",
    weatherCode: "",
    weatherDesc: "",
    weatherIconUrl:"" ,
    windDir16Point: "",
    windDirDegree: "",
    windDirection: "",
    windSpeedKmph: "",
    windSpeedMiles:""
}
var weatherDay3 = {
    //variables requested from JSON weather Object
    date: "",
    precipMM:"",
    tempMaxC:"",
    tempMaxF:"" ,
    tempMinC:"" ,
    tempMinF: "",
    weatherCode: "",
    weatherDesc: "",
    weatherIconUrl:"" ,
    windDir16Point: "",
    windDirDegree: "",
    windDirection: "",
    windSpeedKmph: "",
    windSpeedMiles:""
}
var weatherDay4 = {
    //variables requested from JSON weather Object
    date: "",
    precipMM:"",
    tempMaxC:"",
    tempMaxF:"" ,
    tempMinC:"" ,
    tempMinF: "",
    weatherCode: "",
    weatherDesc: "",
    weatherIconUrl:"" ,
    windDir16Point: "",
    windDirDegree: "",
    windDirection: "",
    windSpeedKmph: "",
    windSpeedMiles:""
}
var weatherDay5 = {
    //variables requested from JSON weather Object
    date: "",
    precipMM:"",
    tempMaxC:"",
    tempMaxF:"" ,
    tempMinC:"" ,
    tempMinF: "",
    weatherCode: "",
    weatherDesc: "",
    weatherIconUrl:"" ,
    windDir16Point: "",
    windDirDegree: "",
    windDirection: "",
    windSpeedKmph: "",
    windSpeedMiles:""
}


//get functions for weatherObj
function getD1City(){
    return weatherObj.cityName
}
function getD1Cloud(){
    return weatherObj.cloud
}
function getD1Humid(){
    return weatherObj.humidity
}
function getD1ObsTime(){
    return weatherObj.observationTime
}
function getD1PrecMM(){
    return weatherObj.precipMM
}
function getD1Pressure(){
    return weatherObj.pressure
}
function getD1TempC(){
    return weatherObj.tempC
}
function getD1TempF(){
    return weatherObj.tempF
}
function getD1Vis(){
    return weatherObj.visibility
}
function getD1WCode(){
    return weatherObj.weatherCode
}
function getD1WDesc(){
    return weatherObj.weatherDesc
}
function getD1Wind16Pt(){
    return weatherObj.windDir16Point
}
function getD1WindDirDeg(){
    return weatherObj.windDirDegree
}
function getD1WindSpeedKMPH(){
    return weatherObj.windSpeedKmph
}
function getD1WindSpeedMiles(){
    return weatherObj.windSpeedMiles
}
function getD1Location(){
    return weatherObj.location
}
function getD1Date(){
    return weatherObj.date
}
function getD1PrecMM2(){
    return weatherObj.precipMM2
}
function getD1TempMaxC(){
    return weatherObj.tempMaxC
}
function getD1TempMaxF(){
    return weatherObj.tempMaxF
}
function getD1TempMinC(){
    return weatherObj.tempMinC
}
function getD1TempMinF(){
    return weatherObj.tempMinF
}
function getD1WCode2(){
    return weatherObj.weatherCode2
}
function getD1WDesc2(){
    return weatherObj.weatherDesc2
}
function getD1IconURL(){
    return weatherObj.weatherIconUrl
}
function getD1Wind16Pt2(){
    return weatherObj.windDir16Point2
}
function getD1WindDirDeg2(){
    return weatherObj.windDirDegree2
}
function getD1WindDirection(){
    return weatherObj.windDirection
}
function getD1WindSpeedKMPH2(){
    return weatherObj.windSpeedKmph2
}
function getD1WindSpeedMiles2(){
    return weatherObj.windSpeedMiles2
}
//set functions for weatherObj
function setCity(city){
    weatherObj.cityName = city
}

function setWeatherObj(jsonObj){
    //set vars gathered from JSON current_condition obj
    weatherObj.cloud = ""+ jsonObj.data.current_condition[0].cloudcover;
    weatherObj.humidity = jsonObj.data.current_condition[0].humidity;
    weatherObj.observationTime = "" + jsonObj.data.current_condition[0].observation_time;
    weatherObj.precipMM = ""+ jsonObj.data.current_condition[0].precipMM;
    weatherObj.pressure = ""+ jsonObj.data.current_condition[0].pressure;
    weatherObj.tempC = ""+ jsonObj.data.current_condition[0].temp_C;
    weatherObj.tempF = ""+ jsonObj.data.current_condition[0].temp_F;
    weatherObj.visibility = "" + jsonObj.data.current_condition[0].visibility;
    weatherObj.weatherCode = "" + jsonObj.data.current_condition[0].weatherCode;
    weatherObj.weatherDesc = "" + jsonObj.data.current_condition[0].weatherDesc[0].value;
    weatherObj.windDir16Point = ""+ jsonObj.data.current_condition[0].winddir16Point;
    weatherObj.windDirDegree = ""+ jsonObj.data.current_condition[0].winddirDegree;
    weatherObj.windSpeedKmph = ""+ jsonObj.data.current_condition[0].windspeedKmph;
    weatherObj.windSpeedMiles = ""+ jsonObj.data.current_condition[0].windspeedMiles;
    weatherObj.location = ""+ jsonObj.data.request[0].query;
    //set vars gathered from JSON weather obj
    weatherObj.date = jsonObj.data.weather[0].date;
    weatherObj.precipMM2 = ""+ jsonObj.data.weather[0].precipMM;
    weatherObj.tempMaxC = ""+ jsonObj.data.weather[0].tempMaxC;
    weatherObj.tempMaxF = ""+ jsonObj.data.weather[0].tempMaxF;
    weatherObj.tempMinC = ""+ jsonObj.data.weather[0].tempMinC;
    weatherObj.tempMinF = ""+ jsonObj.data.weather[0].tempMinF;
    weatherObj.weatherCode2 = ""+ jsonObj.data.weather[0].weatherCode;
    weatherObj.weatherDesc2 = ""+ jsonObj.data.weather[0].weatherDesc[0].value;
    weatherObj.weatherIconUrl = ""+ jsonObj.data.weather[0].weatherIconUrl[0].value;
    weatherObj.windDir16Point2 = ""+ jsonObj.data.weather[0].winddir16Point;
    weatherObj.windDirDegree2 = ""+ jsonObj.data.weather[0].winddirDegree;
    weatherObj.windDirection = ""+ jsonObj.data.weather[0].winddirection;
    weatherObj.windSpeedKmph2 = ""+ jsonObj.data.weather[0].windspeedKmph;
    weatherObj.windSpeedMiles2 = ""+ jsonObj.data.weather[0].windspeedMiles;
}
//get functions for weatherDay2
function getD2Date(){
    return weatherDay2.date
}
function getD2PrecMM(){
    return weatherDay2.precipMM
}
function getD2TempMaxC(){
    return weatherDay2.tempMaxC
}
function getD2TempMaxF(){
    return weatherDay2.tempMaxF
}
function getD2TempMinC(){
    return weatherDay2.tempMinC
}
function getD2TempMinF(){
    return weatherDay2.tempMinF
}
function getD2WCode(){
    return weatherDay2.weatherCode
}
function getD2WDesc(){
    return weatherDay2.weatherDesc
}
function getD2IconURL(){
    return weatherDay2.weatherIconUrl
}
function getD2Wind16Pt(){
    return weatherDay2.windDir16Point
}
function getD2WindDirDeg(){
    return weatherDay2.windDirDegree
}
function getD2WindDirection(){
    return weatherDay2.windDirection
}
function getD2WindSpeedKMPH(){
    return weatherDay2.windSpeedKmph
}
function getD2WindSpeedMiles(){
    return weatherDay2.windSpeedMiles
}
//set functions for weatherDay2
function setD2(jsonObj){
    //set vars gathered from JSON weather obj
    weatherDay2.date = jsonObj.data.weather[1].date;
    weatherDay2.precipMM = ""+ jsonObj.data.weather[1].precipMM;
    weatherDay2.tempMaxC = ""+ jsonObj.data.weather[1].tempMaxC;
    weatherDay2.tempMaxF = ""+ jsonObj.data.weather[1].tempMaxF;
    weatherDay2.tempMinC = ""+ jsonObj.data.weather[1].tempMinC;
    weatherDay2.tempMinF = ""+ jsonObj.data.weather[1].tempMinF;
    weatherDay2.weatherCode = ""+ jsonObj.data.weather[1].weatherCode;
    weatherDay2.weatherDesc = ""+ jsonObj.data.weather[1].weatherDesc[0].value;
    weatherDay2.weatherIconUrl = ""+ jsonObj.data.weather[1].weatherIconUrl[0].value;
    weatherDay2.windDir16Point = ""+ jsonObj.data.weather[1].winddir16Point;
    weatherDay2.windDirDegree = ""+ jsonObj.data.weather[1].winddirDegree;
    weatherDay2.windDirection = ""+ jsonObj.data.weather[1].winddirection;
    weatherDay2.windSpeedKmph = ""+ jsonObj.data.weather[1].windspeedKmph;
    weatherDay2.windSpeedMiles = ""+ jsonObj.data.weather[1].windspeedMiles;
}
//get functions for weatherDay3
function getD3Date(){
    return weatherDay3.date
}
function getD3PrecMM(){
    return weatherDay3.precipMM
}
function getD3TempMaxC(){
    return weatherDay3.tempMaxC
}
function getD3TempMaxF(){
    return weatherDay3.tempMaxF
}
function getD3TempMinC(){
    return weatherDay3.tempMinC
}
function getD3TempMinF(){
    return weatherDay3.tempMinF
}
function getD3WCode(){
    return weatherDay3.weatherCode
}
function getD3WDesc(){
    return weatherDay3.weatherDesc
}
function getD3IconURL(){
    return weatherDay3.weatherIconUrl
}
function getD3Wind16Pt(){
    return weatherDay3.windDir16Point
}
function getD3WindDirDeg(){
    return weatherDay3.windDirDegree
}
function getD3WindDirection(){
    return weatherDay3.windDirection
}
function getD3WindSpeedKMPH(){
    return weatherDay3.windSpeedKmph
}
function getD3WindSpeedMiles(){
    return weatherDay3.windSpeedMiles
}
//set functions for weatherDay3
function setD3(jsonObj){
    //set vars gathered from JSON weather obj
    weatherDay3.date = jsonObj.data.weather[2].date;
    weatherDay3.precipMM = ""+ jsonObj.data.weather[2].precipMM;
    weatherDay3.tempMaxC = ""+ jsonObj.data.weather[2].tempMaxC;
    weatherDay3.tempMaxF = ""+ jsonObj.data.weather[2].tempMaxF;
    weatherDay3.tempMinC = ""+ jsonObj.data.weather[2].tempMinC;
    weatherDay3.tempMinF = ""+ jsonObj.data.weather[2].tempMinF;
    weatherDay3.weatherCode = ""+ jsonObj.data.weather[2].weatherCode;
    weatherDay3.weatherDesc = ""+ jsonObj.data.weather[2].weatherDesc[0].value;
    weatherDay3.weatherIconUrl = ""+ jsonObj.data.weather[2].weatherIconUrl[0].value;
    weatherDay3.windDir16Point = ""+ jsonObj.data.weather[2].winddir16Point;
    weatherDay3.windDirDegree = ""+ jsonObj.data.weather[2].winddirDegree;
    weatherDay3.windDirection = ""+ jsonObj.data.weather[2].winddirection;
    weatherDay3.windSpeedKmph = ""+ jsonObj.data.weather[2].windspeedKmph;
    weatherDay3.windSpeedMiles = ""+ jsonObj.data.weather[2].windspeedMiles;
}
//get functions for weatherDay4
function getD4Date(){
    return weatherDay4.date
}
function getD4PrecMM(){
    return weatherDay4.precipMM
}
function getD4TempMaxC(){
    return weatherDay4.tempMaxC
}
function getD4TempMaxF(){
    return weatherDay4.tempMaxF
}
function getD4TempMinC(){
    return weatherDay4.tempMinC
}
function getD4TempMinF(){
    return weatherDay4.tempMinF
}
function getD4WCode(){
    return weatherDay4.weatherCode
}
function getD4WDesc(){
    return weatherDay4.weatherDesc
}
function getD4IconURL(){
    return weatherDay4.weatherIconUrl
}
function getD4Wind16Pt(){
    return weatherDay4.windDir16Point
}
function getD4WindDirDeg(){
    return weatherDay4.windDirDegree
}
function getD4WindDirection(){
    return weatherDay4.windDirection
}
function getD4WindSpeedKMPH(){
    return weatherDay4.windSpeedKmph
}
function getD4WindSpeedMiles(){
    return weatherDay4.windSpeedMiles
}
//set functions for weatherDay4
function setD4(jsonObj){
    //set vars gathered from JSON weather obj
    weatherDay4.date = jsonObj.data.weather[3].date;
    weatherDay4.precipMM = ""+ jsonObj.data.weather[3].precipMM;
    weatherDay4.tempMaxC = ""+ jsonObj.data.weather[3].tempMaxC;
    weatherDay4.tempMaxF = ""+ jsonObj.data.weather[3].tempMaxF;
    weatherDay4.tempMinC = ""+ jsonObj.data.weather[3].tempMinC;
    weatherDay4.tempMinF = ""+ jsonObj.data.weather[3].tempMinF;
    weatherDay4.weatherCode = ""+ jsonObj.data.weather[3].weatherCode;
    weatherDay4.weatherDesc = ""+ jsonObj.data.weather[3].weatherDesc[0].value;
    weatherDay4.weatherIconUrl = ""+ jsonObj.data.weather[3].weatherIconUrl[0].value;
    weatherDay4.windDir16Point = ""+ jsonObj.data.weather[3].winddir16Point;
    weatherDay4.windDirDegree = ""+ jsonObj.data.weather[3].winddirDegree;
    weatherDay4.windDirection = ""+ jsonObj.data.weather[3].winddirection;
    weatherDay4.windSpeedKmph = ""+ jsonObj.data.weather[3].windspeedKmph;
    weatherDay4.windSpeedMiles = ""+ jsonObj.data.weather[3].windspeedMiles;
}
//get functions for weatherDay5
function getD5Date(){
    return weatherDay5.date
}
function getD5PrecMM(){
    return weatherDay5.precipMM
}
function getD5TempMaxC(){
    return weatherDay5.tempMaxC
}
function getD5TempMaxF(){
    return weatherDay5.tempMaxF
}
function getD5TempMinC(){
    return weatherDay5.tempMinC
}
function getD5TempMinF(){
    return weatherDay5.tempMinF
}
function getD5WCode(){
    return weatherDay5.weatherCode
}
function getD5WDesc(){
    return weatherDay5.weatherDesc
}
function getD5IconURL(){
    return weatherDay5.weatherIconUrl
}
function getD5Wind16Pt(){
    return weatherDay5.windDir16Point
}
function getD5WindDirDeg(){
    return weatherDay5.windDirDegree
}
function getD5WindDirection(){
    return weatherDay5.windDirection
}
function getD5WindSpeedKMPH(){
    return weatherDay5.windSpeedKmph
}
function getD5WindSpeedMiles(){
    return weatherDay5.windSpeedMiles
}
//set functions for weatherDay5
function setD5(jsonObj){
    //set vars gathered from JSON weather obj
    weatherDay5.date = jsonObj.data.weather[4].date;
    weatherDay5.precipMM = ""+ jsonObj.data.weather[4].precipMM;
    weatherDay5.tempMaxC = ""+ jsonObj.data.weather[4].tempMaxC;
    weatherDay5.tempMaxF = ""+ jsonObj.data.weather[4].tempMaxF;
    weatherDay5.tempMinC = ""+ jsonObj.data.weather[4].tempMinC;
    weatherDay5.tempMinF = ""+ jsonObj.data.weather[4].tempMinF;
    weatherDay5.weatherCode = ""+ jsonObj.data.weather[4].weatherCode;
    weatherDay5.weatherDesc = ""+ jsonObj.data.weather[4].weatherDesc[0].value;
    weatherDay5.weatherIconUrl = ""+ jsonObj.data.weather[4].weatherIconUrl[0].value;
    weatherDay5.windDir16Point = ""+ jsonObj.data.weather[4].winddir16Point;
    weatherDay5.windDirDegree = ""+ jsonObj.data.weather[4].winddirDegree;
    weatherDay5.windDirection = ""+ jsonObj.data.weather[4].winddirection;
    weatherDay5.windSpeedKmph = ""+ jsonObj.data.weather[4].windspeedKmph;
    weatherDay5.windSpeedMiles = ""+ jsonObj.data.weather[4].windspeedMiles;
}

//display attributes of an object on the console for comparison
function readDay(day){
    if(day === 1){
        console.log("**STORED IN DAY 1")
        console.log("date: " + getD1Date()+ " Precip MM: " + getD1PrecMM2() + " TempMaxC: " + getD1TempMaxC())
        console.log("TempMaxF: " + getD1TempMaxF() + " TempMinC: " + getD1TempMinC() + " TempMinF: "+ getD1TempMinF())
        console.log("weather code: "+ getD1WCode2()+ " weather descr: "+ getD1WDesc2() + " URL: " + getD1IconURL())
        console.log("wind16 pt: "+ getD1Wind16Pt2()+" wind dir deg: " + getD1WindDirDeg2() + " wind dir: " + getD1WindDirection())
        console.log("wind speed kmph: "+ getD1WindSpeedKMPH2() + " wind speed mph: " + getD1WindSpeedMiles2())
    }
    if(day=== 2){
        console.log("**STORED IN DAY 2")
        console.log("date: "+ getD2Date()+ " precip mm: "+ getD2PrecMM() + " temp maxC: "+ getD2TempMaxC())
        console.log("temp maxF: "+ getD2TempMaxF()+ " temp minC: " + getD2TempMinC() + " temp minF: " + getD2TempMinF())
        console.log("weather code: "+ getD2WCode()+ " weather desc: " + getD2WDesc()+ " icon URL: "+ getD2IconURL())
        console.log("wind 16pt: "+ getD2Wind16Pt()+ " wind dir degree: "+ getD2WindDirDeg() + " wind dir: "+ getD2WindDirection())
        console.log("wind speed KMPH: "+ getD2WindSpeedKMPH()+ " wind speed MPH: " + getD2WindSpeedMiles())
    }
    if(day=== 3){
        console.log("**STORED IN DAY 3")
        console.log("date: "+ getD3Date()+ " precip mm: "+ getD3PrecMM() + " temp maxC: "+ getD3TempMaxC())
        console.log("temp maxF: "+ getD3TempMaxF()+ " temp minC: " + getD3TempMinC() + " temp minF: " + getD3TempMinF())
        console.log("weather code: "+ getD3WCode()+ " weather desc: " + getD3WDesc()+ " icon URL: "+ getD3IconURL())
        console.log("wind 16pt: "+ getD3Wind16Pt()+ " wind dir degree: "+ getD3WindDirDeg() + " wind dir: "+ getD3WindDirection())
        console.log("wind speed KMPH: "+ getD3WindSpeedKMPH()+ " wind speed MPH: " + getD3WindSpeedMiles())
    }
    if(day=== 4){
        console.log("**STORED IN DAY 4")
        console.log("date: "+ getD4Date()+ " precip mm: "+ getD4PrecMM() + " temp maxC: "+ getD4TempMaxC())
        console.log("temp maxF: "+ getD4TempMaxF()+ " temp minC: " + getD4TempMinC() + " temp minF: " + getD4TempMinF())
        console.log("weather code: "+ getD4WCode()+ " weather desc: " + getD4WDesc()+ " icon URL: "+ getD4IconURL())
        console.log("wind 16pt: "+ getD4Wind16Pt()+ " wind dir degree: "+ getD4WindDirDeg() + " wind dir: "+ getD4WindDirection())
        console.log("wind speed KMPH: "+ getD4WindSpeedKMPH()+ " wind speed MPH: " + getD4WindSpeedMiles())
    }
    if(day=== 5){
        console.log("**STORED IN DAY 5")
        console.log("date: "+ getD5Date()+ " precip mm: "+ getD5PrecMM() + " temp maxC: "+ getD5TempMaxC())
        console.log("temp maxF: "+ getD5TempMaxF()+ " temp minC: " + getD5TempMinC() + " temp minF: " + getD5TempMinF())
        console.log("weather code: "+ getD5WCode()+ " weather desc: " + getD5WDesc()+ " icon URL: "+ getD5IconURL())
        console.log("wind 16pt: "+ getD5Wind16Pt()+ " wind dir degree: "+ getD5WindDirDeg() + " wind dir: "+ getD5WindDirection())
        console.log("wind speed KMPH: "+ getD5WindSpeedKMPH()+ " wind speed MPH: " + getD5WindSpeedMiles())
    }


}
function logDay(jsonObj, day){
    if(day ===1){
        console.log("*** Day1 Info:")
        showRequestInfo("cloud:" + jsonObj.data.current_condition[0].cloudcover);
        showRequestInfo("humidity:" + jsonObj.data.current_condition[0].humidity);
        showRequestInfo("observation_time:" + jsonObj.data.current_condition[0].observation_time);
        showRequestInfo("precipMM:" + jsonObj.data.current_condition[0].precipMM);
        showRequestInfo("pressure:" + jsonObj.data.current_condition[0].pressure);
        showRequestInfo("temp_C:" + jsonObj.data.current_condition[0].temp_C);
        showRequestInfo("temp_F:" + jsonObj.data.current_condition[0].temp_F);
        showRequestInfo("visibility:" + jsonObj.data.current_condition[0].visibility);
        showRequestInfo("weatherCode:" + jsonObj.data.current_condition[0].weatherCode);
        showRequestInfo("weatherDesc:" + jsonObj.data.current_condition[0].weatherDesc[0].value);
        showRequestInfo("winddir16Point:" + jsonObj.data.current_condition[0].winddir16Point);
        showRequestInfo("winddirDegree:" + jsonObj.data.current_condition[0].winddirDegree);
        showRequestInfo("windspeedKmph:" + jsonObj.data.current_condition[0].windspeedKmph);
        showRequestInfo("windspeedMiles:" + jsonObj.data.current_condition[0].windspeedMiles);
        showRequestInfo("Location:" + jsonObj.data.request[0].query);
        //variables from weather object
        showRequestInfo("date[0]:" + jsonObj.data.weather[0].date);
        showRequestInfo("precipMM[0]: " + jsonObj.data.weather[0].precipMM);
        showRequestInfo("tempMaxC[0]: " + jsonObj.data.weather[0].tempMaxC);
        showRequestInfo("tempMaxF[0]: " + jsonObj.data.weather[0].tempMaxF);
        showRequestInfo("tempMinC[0]: " + jsonObj.data.weather[0].tempMinC);
        showRequestInfo("tempMinF[0]: " + jsonObj.data.weather[0].tempMinF);
        showRequestInfo("weatherCode[0]: " + jsonObj.data.weather[0].weatherCode);
        showRequestInfo("weatherDesc[0]: " + jsonObj.data.weather[0].weatherDesc[0].value);
        showRequestInfo("weatherIconUrl[0]: " + jsonObj.data.weather[0].weatherIconUrl[0].value);
        showRequestInfo("winddir16Point[0]: " + jsonObj.data.weather[0].winddir16Point);
        showRequestInfo("winddirDegree[0]: " + jsonObj.data.weather[0].winddirDegree);
        showRequestInfo("winddirection[0]: " + jsonObj.data.weather[0].winddirection);
        showRequestInfo("windspeedKmph[0]: " + jsonObj.data.weather[0].windspeedKmph);
        showRequestInfo("windspeedMiles[0]: " + jsonObj.data.weather[0].windspeedMiles);
    }
    if(day === 2){
        console.log("*** Day2 Info:")
        showRequestInfo("date[1]:" + jsonObj.data.weather[1].date);
        showRequestInfo("precipMM[1]: " + jsonObj.data.weather[1].precipMM);
        showRequestInfo("tempMaxC[1]: " + jsonObj.data.weather[1].tempMaxC);
        showRequestInfo("tempMaxF[1]: " + jsonObj.data.weather[1].tempMaxF);
        showRequestInfo("tempMinC[1]: " + jsonObj.data.weather[1].tempMinC);
        showRequestInfo("tempMinF[1]: " + jsonObj.data.weather[1].tempMinF);
        showRequestInfo("weatherCode[1]: " + jsonObj.data.weather[1].weatherCode);
        showRequestInfo("weatherDesc[1]: " + jsonObj.data.weather[1].weatherDesc[0].value);
        showRequestInfo("weatherIconUrl[1]: " + jsonObj.data.weather[1].weatherIconUrl[0].value);
        showRequestInfo("winddir16Point[1]: " + jsonObj.data.weather[1].winddir16Point);
        showRequestInfo("winddirDegree[1]: " + jsonObj.data.weather[1].winddirDegree);
        showRequestInfo("winddirection[1]: " + jsonObj.data.weather[1].winddirection);
        showRequestInfo("windspeedKmph[1]: " + jsonObj.data.weather[1].windspeedKmph);
        showRequestInfo("windspeedMiles[1]: " + jsonObj.data.weather[1].windspeedMiles);
    }
    if(day === 3){
        console.log("*** Day3 Info:")
        showRequestInfo("date[2]:" + jsonObj.data.weather[2].date);
        showRequestInfo("precipMM[2]: " + jsonObj.data.weather[2].precipMM);
        showRequestInfo("tempMaxC[2]: " + jsonObj.data.weather[2].tempMaxC);
        showRequestInfo("tempMaxF[2]: " + jsonObj.data.weather[2].tempMaxF);
        showRequestInfo("tempMinC[2]: " + jsonObj.data.weather[2].tempMinC);
        showRequestInfo("tempMinF[2]: " + jsonObj.data.weather[2].tempMinF);
        showRequestInfo("weatherCode[2]: " + jsonObj.data.weather[2].weatherCode);
        showRequestInfo("weatherDesc[2]: " + jsonObj.data.weather[2].weatherDesc[0].value);
        showRequestInfo("weatherIconUrl[2]: " + jsonObj.data.weather[2].weatherIconUrl[0].value);
        showRequestInfo("winddir16Point[2]: " + jsonObj.data.weather[2].winddir16Point);
        showRequestInfo("winddirDegree[2]: " + jsonObj.data.weather[2].winddirDegree);
        showRequestInfo("winddirection[2]: " + jsonObj.data.weather[2].winddirection);
        showRequestInfo("windspeedKmph[2]: " + jsonObj.data.weather[2].windspeedKmph);
        showRequestInfo("windspeedMiles[2]: " + jsonObj.data.weather[2].windspeedMiles);
    }
    if(day === 4){
        console.log("*** Day4 Info:")
        showRequestInfo("date[3]:" + jsonObj.data.weather[3].date);
        showRequestInfo("precipMM[3]: " + jsonObj.data.weather[3].precipMM);
        showRequestInfo("tempMaxC[3]: " + jsonObj.data.weather[3].tempMaxC);
        showRequestInfo("tempMaxF[3]: " + jsonObj.data.weather[3].tempMaxF);
        showRequestInfo("tempMinC[3]: " + jsonObj.data.weather[3].tempMinC);
        showRequestInfo("tempMinF[3]: " + jsonObj.data.weather[3].tempMinF);
        showRequestInfo("weatherCode[3]: " + jsonObj.data.weather[3].weatherCode);
        showRequestInfo("weatherDesc[3]: " + jsonObj.data.weather[3].weatherDesc[0].value);
        showRequestInfo("weatherIconUrl[3]: " + jsonObj.data.weather[3].weatherIconUrl[0].value);
        showRequestInfo("winddir16Point[3]: " + jsonObj.data.weather[3].winddir16Point);
        showRequestInfo("winddirDegree[3]: " + jsonObj.data.weather[3].winddirDegree);
        showRequestInfo("winddirection[3]: " + jsonObj.data.weather[3].winddirection);
        showRequestInfo("windspeedKmph[3]: " + jsonObj.data.weather[3].windspeedKmph);
        showRequestInfo("windspeedMiles[3]: " + jsonObj.data.weather[3].windspeedMiles);
    }
    if(day === 5){
        console.log("*** Day5 Info:")
        showRequestInfo("date[4]:" + jsonObj.data.weather[4].date);
        showRequestInfo("precipMM[4]: " + jsonObj.data.weather[4].precipMM);
        showRequestInfo("tempMaxC[4]: " + jsonObj.data.weather[4].tempMaxC);
        showRequestInfo("tempMaxF[4]: " + jsonObj.data.weather[4].tempMaxF);
        showRequestInfo("tempMinC[4]: " + jsonObj.data.weather[4].tempMinC);
        showRequestInfo("tempMinF[4]: " + jsonObj.data.weather[4].tempMinF);
        showRequestInfo("weatherCode[4]: " + jsonObj.data.weather[4].weatherCode);
        showRequestInfo("weatherDesc[4]: " + jsonObj.data.weather[4].weatherDesc[0].value);
        showRequestInfo("weatherIconUrl[4]: " + jsonObj.data.weather[4].weatherIconUrl[0].value);
        showRequestInfo("winddir16Point[4]: " + jsonObj.data.weather[4].winddir16Point);
        showRequestInfo("winddirDegree[4]: " + jsonObj.data.weather[4].winddirDegree);
        showRequestInfo("winddirection[4]: " + jsonObj.data.weather[4].winddirection);
        showRequestInfo("windspeedKmph[4]: " + jsonObj.data.weather[4].windspeedKmph);
        showRequestInfo("windspeedMiles[4]: " + jsonObj.data.weather[4].windspeedMiles);
    }

}
//update the GUI
function updateGUI(){
    //clear predictions
    updateBottomPanel2(0);
    //update current information (row0)
    updateCurrentStats();
    //update future forecast (row1)
    updateFutureForecast();
    //update bottom panel 1
    updateBottomPanel1();

}
function updateCurrentStats(){
    //update current information (row0)
    currentCity.text = getD1City();
    currentDegrees.text = getD1TempF()+ "° F";
    currentDay.text = getTodaysDay();
    currentDate.text = getTodaysDate();
    currentWeatherDesc.text = getD1WDesc();
    currentWeatherIcon.source = weatherObj.weatherIconUrl;
}
//update future forecast (row1)
function updateFutureForecast(){
    //update days
    var nDay2=  getDayAfter(getTodaysDay());
    var nDay3 = getDayAfter(nDay2);
    var nDay4 = getDayAfter(nDay3);
    var nDay5 = getDayAfter(nDay4);
    day1Text.text = getTodaysDay();
    day2Text.text = nDay2;
    day3Text.text = nDay3;
    day4Text.text = nDay4;
    day5Text.text = nDay5;
    //update temps
    futureD1.text = getD1TempMaxF()+ "° F";
    futureD2.text = getD2TempMaxF()+ "° F";
    futureD3.text = getD3TempMaxF()+ "° F";
    futureD4.text = getD4TempMaxF()+ "° F";
    futureD5.text = getD5TempMaxF()+ "° F";
    //update icons
    day1Icon.source = getD1IconURL();
    day2Icon.source = getD2IconURL();
    day3Icon.source = getD3IconURL();
    day4Icon.source = getD4IconURL();
    day5Icon.source = getD5IconURL();
}

function updateBottomPanel1(){
    infoPanel1Text.text = "\nCURRENT CONDITIONS:\n\n" +
            "\tObeservation Time (UTC): " + weatherObj.observationTime + "\n"+
            "\tTemp: " + weatherObj.tempF + "°F\n" +
            "\tTemp inside building: 68°F\n" +
            "\tPrecipiation : " + weatherObj.precipMM + "\n"+
            "\tPressure: " + weatherObj.pressure + "\n"+
            "\tWindSpeed(MPH): " + weatherObj.windSpeedKmph + "\n"+
            "\tVisibility: " + weatherObj.visibility + "\n"+
            "\nTODAYS FORECAST:\n\n"+
            "\tMax Temp: " + weatherObj.tempMaxF + "°F\n" +
            "\tMin Temp: " + weatherObj.tempMinF + "°F\n" +
            "\tPrecipitation: " + weatherObj.precipMM2 + "\n"+
            "\tWind Speed(MPH): " + weatherObj.windSpeedMiles2 + "\n"+
            "\tWind Direction: " + weatherObj.windDirection;
}

function updateBottomPanel2(day){

    //clear field
    if(day == 0){
        infoPanel2Text.text = "\n\n\nFORECAST (CLICK DAY)"
    }

    if(day == 2){
        infoPanel2Text.text = "\nFORECAST FOR: "+ getD2Date()+"\n\n"+
                "\tDescription: " + getD2WDesc() +"\n"+
                "\tMax Temp: " + getD2TempMaxF() + "°F\n" +
                "\tMin Temp: " + getD2TempMinF() + "°F\n" +
                "\tPrecipitation: " + getD2PrecMM() + "\n"+
                "\tWind Speed(MPH): " + getD2WindSpeedMiles() + "\n"+
                "\tWind Direction: " + getD2WindDirection();
    }
    if(day == 3){
        infoPanel2Text.text = "\nFORECAST FOR: "+ getD3Date()+"\n\n"+
                "\tDescription: " + getD3WDesc() +"\n"+
                "\tMax Temp: " + getD3TempMaxF() + "°F\n" +
                "\tMin Temp: " + getD3TempMinF() + "°F\n" +
                "\tPrecipitation: " + getD3PrecMM() + "\n"+
                "\tWind Speed(MPH): " + getD3WindSpeedMiles() + "\n"+
                "\tWind Direction: " + getD3WindDirection();
    }
    if(day == 4){
        infoPanel2Text.text = "\nFORECAST FOR: "+ getD4Date()+"\n\n"+
                "\tDescription: " + getD4WDesc() +"\n"+
                "\tMax Temp: " + getD4TempMaxF() + "°F\n" +
                "\tMin Temp: " + getD4TempMinF() + "°F\n" +
                "\tPrecipitation: " + getD4PrecMM() + "\n"+
                "\tWind Speed(MPH): " + getD4WindSpeedMiles() + "\n"+
                "\tWind Direction: " + getD4WindDirection();
    }
    if(day == 5){
        infoPanel2Text.text = "\nFORECAST FOR: "+ getD5Date()+"\n\n"+
                "\tDescription: " + getD5WDesc() +"\n"+
                "\tMax Temp: " + getD5TempMaxF() + "°F\n" +
                "\tMin Temp: " + getD5TempMinF() + "°F\n" +
                "\tPrecipitation: " + getD5PrecMM() + "\n"+
                "\tWind Speed(MPH): " + getD5WindSpeedMiles() + "\n"+
                "\tWind Direction: " + getD5WindDirection();
    }
}

function getTodaysDay(){
    //set a Date() object, it gets current date
    var date = new Date();
    //make the date into a string
    var today = date.toDateString();
    //get only the day prefix string
    var prefix = today.substring(0, 3);
    return prefix;
}
function getTodaysDate(){
    //set a Date() object, it gets current date
    var date1 = new Date();
    //make the date into a string
    var currDate = date1.toDateString();
    //get only the date part of the string
    var dateToken = currDate.substring(4, 15)
    return dateToken;
}
function getDayAfter(today){
    var Mon = "Mon";
    var Tue = "Tue";
    var Wed = "Wed";
    var Thu = "Thu";
    var Fri = "Fri";
    var Sat = "Sat";
    var Sun = "Sun";
    //test for current day sent in return next day
    if( (Mon.localeCompare(today)) == 0) {
        return "Tue";
    }
    if( (Tue.localeCompare(today)) == 0){
        return "Wed";
    }
    if( (Wed.localeCompare(today)) == 0){
        return "Thu";
    }
    if( (Thu.localeCompare(today)) == 0){
        console.log("True, localeCompare returns bool")
        return "Fri";
    }
    if( (Fri.localeCompare(today)) == 0){
        return "Sat";
    }
    if( (Sat.localeCompare(today)) == 0){
        return "Sun";
    }
    if( (Sun.localeCompare(today)) == 0){
        return "Mon"
    }else{
        console.log("Somethings wrong")
        return "N/A";
    }
}

//makes connection to weather site via JSON
function setVar(city){

    /*log messages to ensure jsonObject is created w proper paramater
    console.log("inside setVar function")
    console.log("city sent in: "+ city)
    console.log("\n")
    */
    setCity(city)       //set the city global var
    //create doc object to use http call
    var doc = new XMLHttpRequest();
    //create jsonObject and store response (http://www.w3schools.com/ajax/ajax_xmlhttprequest_send.asp)
    doc.onreadystatechange = function() {
       if (doc.readyState == XMLHttpRequest.DONE) {
           var jsonObject = eval('(' + doc.responseText + ')');
           loaded(jsonObject);
        }
    }

    /*Request data from weather website
    Replace your key from free.worldweatheronline.com
    current key (generated 8/14/14): 178101586a7bc637c0d25d1fcc6e945cb3d48432
    depricated key: 348fee824b002953131202
    Get method is simpler to use
    depricated call: doc.open("GET", "http://free.worldweatheronline.com/feed/weather.ashx?q=" + city + "&format=json&num_of_days=5&key=178101586a7bc637c0d25d1fcc6e945cb3d48432");
    */
    doc.open("GET", "http://api.worldweatheronline.com/free/v1/weather.ashx?key=178101586a7bc637c0d25d1fcc6e945cb3d48432&q=" + city + "&fx=yes&num_of_days=5&format=json", true);
    //send request to server
    doc.send();
}

//displays information from weather site to log and app
function loaded(jsonObject)
{
    //console.log("inside loaded() function") //debug line

    //shows request works on console log
    //console.log("****** SHOWING DAYS ****");

    /*used to verify JSON object can be accessed
    showRequestInfo("date[0]:" + jsonObject.data.weather[0].date);
    showRequestInfo("date[1]:" + jsonObject.data.weather[1].date);
    showRequestInfo("date[2]:" + jsonObject.data.weather[2].date);
    showRequestInfo("date[3]:" + jsonObject.data.weather[3].date);
    showRequestInfo("date[4]:" + jsonObject.data.weather[4].date);
    set all object variables
    */
    setWeatherObj(jsonObject)
    setD2(jsonObject)
    setD3(jsonObject)
    setD4(jsonObject)
    setD5(jsonObject)
    /*used to test data integrity
    //logDay(jsonObject, 1)
    //readDay(1)
    //logDay(jsonObject, 2)
    //readDay(2)
    //logDay(jsonObject, 3)
    //readDay(3)
    //logDay(jsonObject, 4)
    //readDay(4)
    //logDay(jsonObject, 5)
    //readDay(5)
    */
    updateGUI();


}
//prints out weather results in log
function showRequestInfo(text) {
    //console.log("Inside showRequestInfo(text): " + text)
    var infoText = text
    console.log(infoText)
}

