// CALCULATING POINTS    
    
  function calculatePoints() { 
    var one = document.getElementById("one").value;
    var two = document.getElementById("two").value;
    var three = document.getElementById("three").value;
    var four = document.getElementById("four").value; 
    var five = document.getElementById("five").value;
    var six = document.getElementById("six").value;
    var seven = document.getElementById("seven").value;
    var eight = document.getElementById("eight").value;
    var nine = document.getElementById("nine").value;
    var ten = document.getElementById("ten").value;  
      
      
    if (isNaN(one, two, three, four, five, six, seven, eight, nine, ten) || one, two, three, four, five, six, seven, eight, nine, ten < 1 || one, two, three, four, five, six, seven, eight, nine, ten > 10) {   
    one = "Input not valid";
    two = "Input not valid";
    three = "Input not valid";
    four = "Input not valid";
    five = "Input not valid";    
    six = "Input not valid";
    seven = "Input not valid";
    eight = "Input not valid";
    nine = "Input not valid";
    ten = "Input not valid";    
  } else {  
    resultOne = one; 
    resultTwo = two; 
    resultThree = three; 
    resultFour = four;
    resultFive = five; 
    resultSix = six; 
    resultSeven = seven; 
    resultEight = eight;
    resultNine = nine; 
    resultTen = ten;      
  }  
    
    // SCORE ONE TOTAL  
    scoreOne = parseInt(resultOne) + parseInt(resultTwo); 
    document.getElementById("scoreOneTotal").innerHTML = scoreOne; 
    
    // SCORE TWO TOTAL  
    scoreTwo = parseInt(resultThree) + parseInt(resultFour); 
    scoreTwoTotal = parseInt(scoreOne) + parseInt(scoreTwo);  
    document.getElementById("scoreTwoTotal").innerHTML = scoreTwoTotal;
      
    // SCORE THREE TOTAL  
    scoreThree = parseInt(resultFive) + parseInt(resultSix); 
    scoreThreeTotal = parseInt(scoreTwoTotal) + parseInt(scoreThree);  
    document.getElementById("scoreThreeTotal").innerHTML = scoreThreeTotal;
      
    // SCORE FOUR TOTAL  
    scoreFour = parseInt(resultSeven) + parseInt(resultEight); 
    scoreFourTotal = parseInt(scoreThreeTotal) + parseInt(scoreFour);  
    document.getElementById("scoreFourTotal").innerHTML = scoreFourTotal;
      
    // SCORE FIVE TOTAL  
    scoreFive = parseInt(resultNine) + parseInt(resultTen); 
    scoreFiveTotal = parseInt(scoreFourTotal) + parseInt(scoreFive);  
    document.getElementById("scoreFiveTotal").innerHTML = scoreFiveTotal;   
        
  
  }
    
