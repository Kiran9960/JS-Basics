

// if student score is 60 or above , a sportman and attentive, display a message brillint student.
// if score below 60, nighter sportMan nor attentive display dump student
// if score is 60 or above , not sportman display msg not active in sports
// if score is 60 or above, sportman but not attentive msg  good studend but not attending lecture

// 60 above, isSportman isAttentive = console.log('brillint student');
// 60 above, isSportman but not isAttentive = console.log('good studend but not attending lecture');
// 60 above, not isSportman  = console.log('not active in sports');
// 60 below, not isSportman  not isAttentive = console.log(' dump student);

var studentScore=60;
var isSportman= true;
var isAttentive=true;

 // Check if the student's score is 60 or above
if (studentScore >= 60){
 
    if(isSportman){
    // If the student's score is 60 or above and they are a sportsman

        if(isAttentive){
         // If the student is not attentive,

            console.log('brillint student');

        } else if(studentScore < 60 && !isAttentive && !isSportman){
            // 60 below, not isSportman  not isAttentive 
            console.log('dumb student');
        }
        else{
            // 60 above, isSportman but not isAttentive 
            console.log('good studend but not attending lecture');
        }
    }else{
        // 60 above, not isSportman 
        console.log('not active in sports');
    }
  
} else{
    console.log('dumb student');

}




