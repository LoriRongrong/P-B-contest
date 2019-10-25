function debugLog(message){
    if(expt.debug){
        console.log(message);
    }
}

var trialData = [];
var average_guess = 0;
// var expt = {
//     name: 'P_B',
//     maxTrials: 1000,
//     num_of_trials: 0,
//     average_guess:0,
//     debug: false,
//     //saveURL: 'submit.simple.php',

// };

var trial = {
    trialNumber: 0,
    sent: "",
    guessed_num: 0,
};
var valid_input=false;

function pageLoad(){
    document.getElementById('trial').style.display = 'block';
    document.getElementById('comparison').style.visibility="hidden";
}

function see_result(){
    var inputVal = document.getElementById("provided_num").value;
    inputVal = parseInt(inputVal, 10);
    
    if(!valid_input){
        check_input(inputVal);
    }
    provide_ave();
    document.getElementById('trial').style.display = 'none';
    document.getElementById('trial').style.visibility = "hidden";
    //console.log(document.getElementById('comparison').style)
    document.getElementById('comparison').style.visibility = 'visible';
    document.getElementById('comparison').style.display = 'block';
    //console.log(document.getElementById('comparison').style)
    //collect_data(inputVal);
    
}

function check_input(inputVal){
    // change the value of valid input
    while(true){
        if(inputVal>100 || inputVal < 0){
            alert("Please give an integer between 0 and 100");
            return false;
        }
        else{
            valid_input=true;
            break;
        }
    }
}

// function collect_data(inputVal){
//     const fs = require('fs') 
//     // Write data in 'Output.txt' . 
//     fs.writeFile('Output.txt', inputVal, (err) => { 
   
//         if (err) throw err; 
//     }) 
// }

// function trial_complete(){

// }
function provide_ave(){
    let ave = 0;
    for(i=0;i<1000;i++){
        ave += Math.floor((Math.random() * 100) + 1);
    }   
    ave = ave*1.0/1000;
    document.getElementById("average_num").innerHTML = ave;
    document.getElementById("num_of_part").innerHTML = 1000;
}
    

// function experimentDone(){
//     submitExternal(client);
// }

