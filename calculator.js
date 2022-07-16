exp="";
function input(){
      document.getElementById("input").value=exp;

}
function first(){
    var one=document.getElementById("one").value;
    exp=exp+one;
    input();
}
function second(){
    var second=document.getElementById("two").value;
    exp=exp+second;
    input();
}
function three(){
    var third=document.getElementById("three").value;
    exp=exp+third;
    input();
}
function plus(){
    var p=document.getElementById("plus").value;
    exp=exp+p;
    input();
}
function four(){
    var four=document.getElementById("four").value;
    exp=exp+four;
    input();
}
function five(){
    var five=document.getElementById("five").value;
    exp=exp+five;
    input();
}
function six(){
    var six=document.getElementById("six").value;
    exp=exp+six;
    input();
}
function seven(){
    var seven=document.getElementById("seven").value;
    exp=exp+seven;
    input();
}
function minus(){
    var min=document.getElementById("minus").value;
    exp=exp+min;
    input();
}
function eight(){
    var eight=document.getElementById("eight").value;
    exp=exp+eight;
    input();
}
function nine(){
    var nine=document.getElementById("nine").value;
    exp=exp+nine;
    input();
}
function zero(){
    var zero=document.getElementById("zero").value;
    exp=exp+zero;
    input();
}
function star(){
    var s=document.getElementById("star").value;
    exp=exp+s;
    input();
}
function dot(){
    var dot=document.getElementById("dot").value;
    exp=exp+dot;
    input();
}
// function equal(){
//     var num=eval(exp);
// document.getElementById("input").value=num;
//     exp=num;
// }
function slash(){
    var sl=document.getElementById("slash").value;
    exp=exp+sl;
    input();
}
function Clear(){
    exp="";
    input();
}
function equal(){
    //alert(eval(exp))
    try {
        
        var num = eval(document.getElementById("input").value); 
        if(num=="Infinity" || num=="-Infinity"){
            throw "Zero Division Error";
        }
       
        document.getElementById("input").value=num;
        document.getElementById("input").style.background="green";
        exp=num;               
    }catch(err){

        if(err=="Zero Division Error"){
            alert("Invalid\n"+err);

        }
        else{
            alert("Invalid Error");
        }
        document.getElementById("input").style.background="red";
   }
}
