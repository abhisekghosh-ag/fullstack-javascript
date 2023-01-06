/* conditions are 3 types :-
   1. if - else
   2. switch
   3. ternary 
*/

// if - else example

let marks = 90;

if (marks >= 35 && marks < 50) {
    console.log("you just passed ,study very hard!");
}
else if (marks >= 50 && marks < 70) {
    console.log(" you got Grade C,study harder!");
}
else
    if (marks >= 70 && marks < 80) {
        console.log(" you got Grade B,study harder!");
    }
    else
        if (marks >= 80 && marks < 90) {
            console.log(" you got Grade A,study a bit harder!");
        }
        else
            if (marks >= 90) {
                console.log(" congratulations! you got Grade AA ");
            }
            else
                if (marks > 100) {
                    console.log(" congratulations! you got Grade AA ");
                }
                else {
                    console.log("sorry! you failed! study so hard ,you can do it!");
                }