var temprature=22;  
var humidity=5;
var isCloudy=true;


// check if temprature is more than 25Celcius
//check if humidity is more than 30%
//it rains if it is cloudy if above conditons are met
// else it's hot and humid weather today

if(temprature>=30){

    if(humidity>=25){

        if(isCloudy){
            // document.write('Likely to rain');
            console.log("Likely to rain");
        }

    }

}else{
    // document.write('Hot and humid day');
    console.log("Keep hydrated ");
}