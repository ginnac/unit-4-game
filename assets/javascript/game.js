//empty arrays for baseNumbers and the crystal numbers, will be used to get random values from the array.
var randomBaseNumber =[];
var crystalNumbers =[];

// script game.js will take into effect when DOM has loaded...
$(document).ready(function(){
var firstDiamondValue = "" ;
var secondDiamondValue = "";
var thirdDiamondValue = "";
var fourthDiamondValue = "";
var clicks =[];
            
//make score = 0;
$( "#your-score" ).text("0");

    //create a loop between numbers 19-120 and create and array with those values (then push values to randomBaseNumber-empty array)......
    for (var i=19;i<121;i++){
        randomBaseNumber.push(i);}
        //now lets choose a random value from the randomBaseNumber array
        var bigNumber = randomBaseNumber[Math.floor(Math.random()*randomBaseNumber.length)];
        //write bigNumber in element with id= number-to-score
        $("#number-to-score").html(bigNumber);


//4 diamonds; below  we will assign values to each diamond - and values change after winning or losing ( will use a function for the value changes to take place)
        //lets create a loop for first diamond between number 1 and 12 
    for (var x=1; x<13; x++){
        //push to empty array
            crystalNumbers.push(x);}

    //now we will assign a random number to each diamond...
        //firstDiamond...
        var firstDiamond = crystalNumbers[Math.floor(Math.random()*crystalNumbers.length)];
    
            //assign value to element by id= first-diamond: 
            firstDiamondValue = $("#first-diamond").val();
            firstDiamondValue += firstDiamond;
            firstDiamondValue= parseInt(firstDiamondValue);
    
            //remove firstDiamond from crystalNumbers array:
            var index = $.inArray(firstDiamond,crystalNumbers)
            //if it exists in array...
            if (index > -1){
            //(then remove it, and just that index)...
            crystalNumbers.splice(index, 1);}
    
        //secondDiamond...from updated crytalNumbers assign number to secondDiamond
            var secondDiamond = crystalNumbers[Math.floor(Math.random()*crystalNumbers.length)];

            //assign value to element by id= second-diamond: 
            secondDiamondValue = $("#second-diamond").val();
            secondDiamondValue += secondDiamond;
            secondDiamondValue= parseInt(secondDiamondValue);
    
            //remove secondDiamond from crystalNumbers array
            var index = $.inArray(secondDiamond,crystalNumbers)
             //if it exists in array...
            if (index > -1){
            //(then remove it, and just that index)...
            crystalNumbers.splice(index, 1);}
                                            
        //thirdDiamond...from updated crytalNumbers assign number to thirdDiamond
        var thirdDiamond = crystalNumbers[Math.floor(Math.random()*crystalNumbers.length)];
                                               
            //assign value to element by id= third-diamond:
            thirdDiamondValue = $("#third-diamond").val();
            thirdDiamondValue += thirdDiamond;
            thirdDiamondValue= parseInt(thirdDiamondValue);
                                                
            //remove thirdDiamond from crystalNumbers
            var index = $.inArray(thirdDiamond,crystalNumbers)
            //if it exists in array...
            if (index > -1){
            //(then remove it, and just that index)...
            crystalNumbers.splice(index, 1);}
        
        //fourthDiamond...from updated crytalNumbers assign number to fourthDiamond
        var fourthDiamond = crystalNumbers[Math.floor(Math.random()*crystalNumbers.length)];

            //assign value to element by id= fourth-diamond:
            fourthDiamondValue = $("#fourth-diamond").val();
            fourthDiamondValue += fourthDiamond;
            fourthDiamondValue= parseInt(fourthDiamondValue);
                                                        
            //remove fourthDiamond from crystalNumbers
            var index = $.inArray(fourthDiamond,crystalNumbers)
            //if it exists in array...
            if (index > -1){
            //(then remove it, and just that index)...
            crystalNumbers.splice(index, 1);}


    function ClearScoreUpdateBaseNumberAndUpdateDiamondNumbers(){
    //lets start with clear arrays to push again the values
    clicks=[];
    crystalNumbers=[];
    randomBaseNumber =[];
    //lets create loop to later randomly choose a number from
        for (var i=19;i<121;i++){
            //push it to empty array
            randomBaseNumber.push(i);}
    //lets choose a random bigNumber and then write it in the DOM this has to have a variable becuase we will use it later....
        bigNumber = randomBaseNumber[Math.floor(Math.random()*randomBaseNumber.length)];
    //write bigNumber in id= number-to-score
        $("#number-to-score").html(bigNumber);
    //lets empty element by id "your-score"
        $( "#your-score" ).empty();
    //and give it value 0
        $( "#your-score" ).text("0");

    //lets give new random values to diamonds....
    
        //lets create a loop for first diamond between number 1 and 12 
        for (var x=1;x<13;x++){
        crystalNumbers.push(x);}

    //now we will assign a random number to each diamond...
    //firstDiamond...
        var firstDiamond = crystalNumbers[Math.floor(Math.random()*crystalNumbers.length)];

        //assign value to first-diamond: 
        firstDiamondValue = $("#first-diamond").val();
        firstDiamondValue += firstDiamond;
        firstDiamondValue= parseInt(firstDiamondValue);

        //remove firstDiamond from crystalNumbers
        var index = $.inArray(firstDiamond,crystalNumbers)
        if (index > -1){
        crystalNumbers.splice(index, 1);}

    //secondDiamond...from updated crytalNumbers assign number to secondDiamond
        var secondDiamond = crystalNumbers[Math.floor(Math.random()*crystalNumbers.length)];

        //assign value to second-diamond: 
        secondDiamondValue = $("#second-diamond").val();
        secondDiamondValue += secondDiamond;
        secondDiamondValue= parseInt(secondDiamondValue);
                                              
        //remove secondDiamond from crystalNumbers
        var index = $.inArray(secondDiamond,crystalNumbers)
        if (index > -1){
        crystalNumbers.splice(index, 1);}

    //thirdDiamond...from updated crytalNumbers assign number to thirdDiamond
    var thirdDiamond = crystalNumbers[Math.floor(Math.random()*crystalNumbers.length)];

        //assign value to third-diamond: 
        thirdDiamondValue = $("#third-diamond").val();
        thirdDiamondValue += thirdDiamond;
        thirdDiamondValue= parseInt(thirdDiamondValue);

        //remove thirdDiamond from crystalNumbers
        var index = $.inArray(thirdDiamond,crystalNumbers)
        if (index > -1){
        crystalNumbers.splice(index, 1);}
                                      
    //fourthDiamond...from updated crytalNumbers assign number to forthDiamond
    var fourthDiamond = crystalNumbers[Math.floor(Math.random()*crystalNumbers.length)];

        //assign value to fourth-diamond:
        fourthDiamondValue = $("#fourth-diamond").val();
        fourthDiamondValue += fourthDiamond;
        fourthDiamondValue= parseInt(fourthDiamondValue);
        
        //remove fourthDiamond from crystalNumbers
        var index = $.inArray(fourthDiamond,crystalNumbers)
        if (index > -1){
        crystalNumbers.splice(index, 1);}
                                    
    }

    //when user clicks the diamond
    $( "#first-diamond" ).on( "click", function() {
        //pushing to array
        clicks.push(firstDiamondValue);
       //if there is just 1 element in the array then write the number on #your- score
        if(clicks.length === 1){
        $("#your-score").html(firstDiamondValue);
        }
       //else let's add firstDiamondValue to the score
        else{
        //store text inside id #your score    
        var score = $("#your-score").text();
        //testing we have stored it... 
        score = parseInt(score);
        //adding firstDiamondValue to it
        score = score + firstDiamondValue;
        //printing update score on the Dom
        $("#your-score").html(score);

            //if the user scores is equal to bigNumber
            if(score===bigNumber){
            var wins = $("#win").text();
            wins = parseInt(wins);
            wins = wins + 1;
            $("#win").html(wins);
            ClearScoreUpdateBaseNumberAndUpdateDiamondNumbers();
            }

            //if the user scores is bigger than bigNumber
            else if(score > bigNumber){
            var lose = $("#lose").text();
            lose = parseInt(lose);
            lose = lose + 1;
            $("#lose").html(lose); 
            ClearScoreUpdateBaseNumberAndUpdateDiamondNumbers();
            }
        }
       
    });   
    
    $( "#second-diamond" ).on( "click", function() {
         //pushing to array
        clicks.push(secondDiamondValue);
         //if there is just 1 element in the array then write the number on #your- score
        if(clicks.length === 1){
       $("#your-score").html(secondDiamondValue);
        } 
        //else let's add secondtDiamondValue to the score
        else{
        //store text inside id #your score 
        var score = $("#your-score").text();
        //converting score which is a string into a number                   
        score = parseInt(score);
         //adding secondDiamondValue to it
        score = score + secondDiamondValue;
         //printing update score on the Dom
         $("#your-score").html(score);
            
            //if the user scores is equal to bigNumber
            if(score===bigNumber){
            var wins = $("#win").text();
            wins = parseInt(wins);
            wins = wins + 1;
            $("#win").html(wins);
            ClearScoreUpdateBaseNumberAndUpdateDiamondNumbers();
            }
    
            //if the user scores is bigger than bigNumber
            else if(score > bigNumber){
            var lose = $("#lose").text();
            lose = parseInt(lose);
            lose = lose + 1;
            $("#lose").html(lose); 
            ClearScoreUpdateBaseNumberAndUpdateDiamondNumbers();
            }
        }
    }); 

    $( "#third-diamond" ).on( "click", function() {
         //pushing to array
        clicks.push(thirdDiamondValue);
         //if there is just 1 element in the array then write the number on #your- score
        if(clicks.length === 1){
      $("#your-score").html(thirdDiamondValue);
        }
        //else let's add thirdDiamondValue to the score
        else{
            //store text inside id #your score 
            var score = $("#your-score").text();
            //converting score which is a string into a number                   
            score = parseInt(score);
             //adding thirdDiamondValue to it
            score = score + thirdDiamondValue;
             //printing update score on the Dom
             $("#your-score").html(score);
             
             //if the user scores is equal to bigNumber
            if(score===bigNumber){
            var wins = $("#win").text();
            wins = parseInt(wins);
            wins = wins + 1;
            $("#win").html(wins);
            ClearScoreUpdateBaseNumberAndUpdateDiamondNumbers();
            }
            //if the user scores is bigger than bigNumber
            else if(score > bigNumber){
            var lose = $("#lose").text();
            lose = parseInt(lose);
            lose = lose + 1;
            $("#lose").html(lose); 
            ClearScoreUpdateBaseNumberAndUpdateDiamondNumbers();
            }
        }
        });

    $("#fourth-diamond").on( "click",function() {
         //pushing to array
        clicks.push(fourthDiamondValue);
         //if there is just 1 element in the array then write the number on #your-score
        if(clicks.length === 1){
        $("#your-score").html(fourthDiamondValue);
        }
        //else let's add fourthDiamondValue to the score
        else{
            //store text inside id #your score 
            var score = $("#your-score").text();
            //converting score which is a string into a number                   
            score = parseInt(score);
             //adding fourthDiamondValue to it
            score = score + fourthDiamondValue;
             //printing update score on the Dom
             $("#your-score").html(score);
        
            //if the user scores is equal to bigNumber
            if(score===bigNumber){
            var wins = $("#win").text();
            wins = parseInt(wins);
            wins = wins + 1;
            $("#win").html(wins);
            ClearScoreUpdateBaseNumberAndUpdateDiamondNumbers();
            }

            //if the user scores is bigger than bigNumber
            else if(score > bigNumber){
            var lose = $("#lose").text();
            lose = parseInt(lose);
            lose = lose + 1;
            $("#lose").html(lose); 
            ClearScoreUpdateBaseNumberAndUpdateDiamondNumbers();
            }
        }
        
    }); 

});

