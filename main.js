function insert(num){
     document.getElementById("tex").value = document.getElementById("tex").value+num;
}

function equal(){
    var exp=document.getElementById("tex").value;
    if(exp){
 document.getElementById("tex").value=eval(exp);
}
}


function clean(){
    document.getElementById("tex").value="";
}

function back(){
   var exp=document.getElementById("tex").value;
   document.getElementById("tex").value=exp.substring(0,exp.length-1);
}




    var bleep=new Audio();
    bleep.src="chop.mp3";

function saund(){
    bleep.play();
}
