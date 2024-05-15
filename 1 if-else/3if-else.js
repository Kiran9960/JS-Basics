// if student score is 60 or above , a sportman and attentive, display a message brillint student.
// if score below 60, nighter sportMan nor attentive display dump student
// if score is 60 or above , not sportman display msg not active in sports
// if score is 60 or above, sportman but not attentive msg  good studend but not attending lecture

// 60 above, isSportman isAttentive = console.log('brillint student');
// 60 above, isSportman but not isAttentive = console.log('good studend but not attending lecture');
// 60 above, not isSportman  = console.log('not active in sports');
// 60 below, not isSportman  not isAttentive = console.log(' dump student);

var studentScore=40;
var isSportman= false;
var isAttentive=true;

if(studentScore >=60){

    if(isSportman){

        if(isAttentive){
            console.log('brillint student');
        }else{
            console.log('good studend but not attending lecture');
        }
    }else{
        console.log('not active in sports');
    }



}else if (studentScore<60 ) {

    if(!isSportman){

        if(!isAttentive) {
            console.log(' dumb ');
        }else{
            console.log(' not sprot, no score, but attentive ');
        }
      
    }else{
        console.log(' Only Plays, no score, no attention ');     
    }

} 

