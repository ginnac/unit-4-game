// script game.js will take into effect when DOM has loaded...
var randomBaseNumber =[];
var crystalNumbers =[]
$(document).ready(function(){
var firstDiamondValue = "" ;
var secondDiamondValue = "";
var thirdDiamondValue = "";
var fourthDiamondValue = "";
var clicks =[];

    //....................lets generate the randomBaseNumber between 19-120 and write it in id="number-to-score".......................

        //create a loop between number 19-120 and create and array with those values (probably will have to push the values to an empty array)......
    for (var i=19;i<121;i++){
        randomBaseNumber.push(i);
                }
                 //testing randomBaseNumber
                console.log(randomBaseNumber);
            
            //maybe inside (or outside) the loop lets choose a random one and then write it in the DOM this has to have a variable becuase we will use it 

    var bigNumber = randomBaseNumber[Math.floor(Math.random()*randomBaseNumber.length)];
                    //testing bigNumber
                console.log(bigNumber);

            //write bigNumber in id= number-to-score
    $("#number-to-score").html(bigNumber);


    function winnerAndClearScore(){
//lets create loop to later randomly choose a number from
        for (var i=19;i<121;i++){
            randomBaseNumber.push(i);}
    //lets choose a random bigNumber and then write it in the DOM this has to have a variable becuase we will use it later....
        bigNumber = randomBaseNumber[Math.floor(Math.random()*randomBaseNumber.length)];
    //write bigNumber in id= number-to-score
        $("#number-to-score").html(bigNumber);
//lets clear total score
        clicks=[];
        $( "#your-score" ).empty();
//lets give new random values to diamonds....
        
        

    }


    
    //There is 4 diamonds (4 elements); here we will assign values to each diamond and values change after winning or losing
        //lets create a loop for first diamond between number 1 and 12 
        for (var x=1;x<13;x++){
        crystalNumbers.push(x);}
            //testing randomBaseNumber
            console.log(crystalNumbers);

        //now we will assign a random number to each diamond...
    //firstDiamond...
        var firstDiamond = crystalNumbers[Math.floor(Math.random()*crystalNumbers.length)];
                                    //testing firstDiamond
                                    console.log(firstDiamond);

        //assign value to first-diamond: 
        firstDiamondValue = $("#first-diamond").val();
        firstDiamondValue += firstDiamond;
        firstDiamondValue= parseInt(firstDiamondValue);
                        
                        // test that firstDiamondValue is a number
                        console.log(firstDiamondValue);
                        //??????????? it doesnt print html....????????????????????????????????????????
                        console.log($("#first-diamond").val())
                           
        //remove firstDiamond from crystalNumbers
        var index = $.inArray(firstDiamond,crystalNumbers)
        if (index > -1){
        crystalNumbers.splice(index, 1)} 
                                            //testing it has been removed
                                            console.log(crystalNumbers)

    //secondDiamond...from updated crytalNumbers assign number to secondDiamond
        var secondDiamond = crystalNumbers[Math.floor(Math.random()*crystalNumbers.length)];
                                         //testing we are dealing with updated crysta;

                                         console.log(crystalNumbers)
                                            //testing secondDiamond
                                    console.log(secondDiamond);

        secondDiamondValue = $("#second-diamond").val();
        secondDiamondValue += secondDiamond;
        secondDiamondValue= parseInt(secondDiamondValue);
                                                //testing secondDiamond
                                                 console.log(secondDiamondValue);

        //remove secondDiamond from crystalNumbers
        var index = $.inArray(secondDiamond,crystalNumbers)
        if (index > -1){
        crystalNumbers.splice(index, 1)} 
                                        //testing it has been removed
                                        console.log(crystalNumbers)

    //thirdDiamond...from updated crytalNumbers assign number to thirdDiamond
    var thirdDiamond = crystalNumbers[Math.floor(Math.random()*crystalNumbers.length)];
                                            //testing firstDiamond
                                             console.log(thirdDiamond);

        thirdDiamondValue = $("#third-diamond").val();
        thirdDiamondValue += thirdDiamond;
        thirdDiamondValue= parseInt(thirdDiamondValue);
                                                //testing secondDiamond
                                                console.log(thirdDiamondValue);


        //remove firstDiamond from crystalNumbers
        var index = $.inArray(thirdDiamond,crystalNumbers)
        if (index > -1){
        crystalNumbers.splice(index, 1)} 
                                        //testing it has been removed
                                        console.log(crystalNumbers)
    
    //forthDiamond...from updated crytalNumbers assign number to forthDiamond
    var fourthDiamond = crystalNumbers[Math.floor(Math.random()*crystalNumbers.length)];
                                            //testing firstDiamond
                                             console.log(fourthDiamond);

        fourthDiamondValue = $("#fourth-diamond").val();
        fourthDiamondValue += fourthDiamond;
        fourthDiamondValue= parseInt(fourthDiamondValue);
                                                    //testing secondDiamond
                                                    console.log(fourthDiamondValue);
        
        //remove firstDiamond from crystalNumbers
        var index = $.inArray(fourthDiamond,crystalNumbers)
        if (index > -1){
        crystalNumbers.splice(index, 1)} 
                                        //testing it has been removed
                                        console.log(crystalNumbers)

        //maybe function????
    $( "#first-diamond" ).on( "click", function diamond1() {
        //pushing to array, for the following conditional
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
                            console.log (score);
        //converting score which is a string into a number
        score = parseInt(score);
        //adding firstDiamondValue to it
        score = score + firstDiamondValue;
        //printing update score on the Dom
        $("#your-score").html(score);
       }

       if(score===bigNumber){
           var wins = $("#win").text();
           wins = parseInt(wins);
           wins = wins + 1;
           $("#win").html(wins);  
           winnerAndClearScore();
       }

    });   
    
    $( "#second-diamond" ).on( "click", function diamond2() {
         //pushing to array, for the following conditional
        clicks.push(secondDiamondValue);
         //if there is just 1 element in the array then write the number on #your- score
        if(clicks.length === 1){
       $("#your-score").html(secondDiamondValue);
        } 
        //else let's add secondtDiamondValue to the score
        else{
        //store text inside id #your score 
        var score = $("#your-score").text();
                            //testing we have stored it... 
                            console.log (score);
        //converting score which is a string into a number                   
        score = parseInt(score);
         //adding secondDiamondValue to it
        score = score + secondDiamondValue;
         //printing update score on the Dom
         $("#your-score").html(score);
        }

        if(score===bigNumber){
            var wins = $("#win").text();
            wins = parseInt(wins);
            wins = wins + 1;
            $("#win").html(wins);
            winnerAndClearScore();  
        }
    
    }); 
    $( "#third-diamond" ).on( "click", function diamond3() {
         //pushing to array, for the following conditional
        clicks.push(thirdDiamondValue);
         //if there is just 1 element in the array then write the number on #your- score
        if(clicks.length === 1){
      $("#your-score").html(thirdDiamondValue);
        }
        //else let's add thirdDiamondValue to the score
        else{
            //store text inside id #your score 
            var score = $("#your-score").text();
                                //testing we have stored it... 
                                console.log (score);
            //converting score which is a string into a number                   
            score = parseInt(score);
             //adding thirdDiamondValue to it
            score = score + thirdDiamondValue;
             //printing update score on the Dom
             $("#your-score").html(score);
            }
        if(score===bigNumber){
                var wins = $("#win").text();
                wins = parseInt(wins);
                wins = wins + 1;
                $("#win").html(wins);  
                winnerAndClearScore();
        }

    }); 
    $( "#fourth-diamond" ).on( "click", function diamond4() {
         //pushing to array, for the following conditional
        clicks.push(fourthDiamondValue);
         //if there is just 1 element in the array then write the number on #your- score
        if(clicks.length === 1){
        $("#your-score").html(fourthDiamondValue);
        }
        //else let's add fourthDiamondValue to the score
        else{
            //store text inside id #your score 
            var score = $("#your-score").text();
                                //testing we have stored it... 
                                console.log (score);
            //converting score which is a string into a number                   
            score = parseInt(score);
             //adding fourthDiamondValue to it
            score = score + fourthDiamondValue;
             //printing update score on the Dom
             $("#your-score").html(score);
            }
        if(score===bigNumber){
                var wins = $("#win").text();
                wins = parseInt(wins);
                wins = wins + 1;
                $("#win").html(wins);
                winnerAndClearScore();
        }
    }); 

    console.log(clicks);

//     function win(){
//     diamond1();
//     diamond2();
//     diamond3();
//     diamond4();

// }

    


            
        
            //maybe conditional???
                            
                            //and an array with those values (probably will have to push the values to an empty array)...

                                //maybe inside (or outside) the loop lets choose a random one and then write it in the DOM this 
                                //has to have a variable becuase we will use it  later for conditionals to see if user won or lost.


                                        //probably we will have to remove last value from array so second diamond can be different than 1st value

                                            //theh have 2nd diamond choose a random one from updated array


                                                //then remove this value from array


                                        //probably we will have to remove last value from array so 3rd diamond can be different than 2nd and 1st value

                                            //theh have 3rd diamond choose a random one from updated array


                                                //then remove this value from array


                                        
                                        
                                        
                                        //probably we will have to remove last value from array so 4th diamond can be different than 3rd, 2nd and 1st value

                                            //theh have 4th diamond choose a random one from updated array


                                                //then remove this value from the array


                          
                            //now create conditionals to accumulate the points each diamond gives us when user .on("click")......

                                            //....... (need to brainstrorm here)
                                    
            


    



});

