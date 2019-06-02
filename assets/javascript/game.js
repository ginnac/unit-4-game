// script game.js will take into effect when DOM has loaded...
var randomBaseNumber =[];
var crystalNumbers =[]
$(document).ready(function(){
var firstDiamondValue = "" ;
var secondDiamondValue = "";
var thirdDiamondValue = "";

    //....................lets generate the randomBaseNumber between 19-120 and write it in id="number-to-score".......................

        //create a loop between number 19-120 and create and array with those values (probably will have to push the values to an empty array)......
    for (var i=19;i<121;i++){
        randomBaseNumber.push(i);
                }
                 //testing randomBaseNumber
                console.log(randomBaseNumber);
            
            //maybe inside (or outside) the loop lets choose a random one and then write it in the DOM this has to have a variable becuase we will use it 
            //later for conditionals to see if user won or lost.

    var bigNumber = randomBaseNumber[Math.floor(Math.random()*randomBaseNumber.length)];
                    //testing bigNumber
                console.log(bigNumber);

            //write bigNumber in id= number-to-score
    $("#number-to-score").html(bigNumber);


    
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
    var forthDiamond = crystalNumbers[Math.floor(Math.random()*crystalNumbers.length)];
                                            //testing firstDiamond
                                             console.log(forthDiamond);
                //remove firstDiamond from crystalNumbers
                var index = $.inArray(forthDiamond,crystalNumbers)
                if (index > -1){
                crystalNumbers.splice(index, 1)} 
                                        //testing it has been removed
                                        console.log(crystalNumbers)

        //maybe function????
    $( "#first-diamond" ).on( "click", function() {
        // if(){
        // $("#your-score").html(firstDiamondValue);
        // }
    
    });    


            
        
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

