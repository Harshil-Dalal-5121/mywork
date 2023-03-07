let a = Math.floor(((Math.random()*100)+1))
let input = prompt('Guess the number')
let score=0;

        while(a !== input){
            if(a == input){
                break;
            } 
            else if(input>a){
                alert("You have guessed greater number")
                input = prompt('Guess the number')
                score++;
            }
            else{
               alert("You have guessed lower number")
               input = prompt('Guess the number');
               score++;
            }
       
            
        }
        alert("Guessed Number is correct");
        alert(`You Score is ${100-score}`);