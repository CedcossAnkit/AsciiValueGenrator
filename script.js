function gen(){
    var ch=document.getElementById("txt").value;
    if(ch==""){
        alert("Required Feild");
        document.getElementById("txt").style.borderColor="red";
    }
    else{
        var ascii=ch.charCodeAt(0);
        document.getElementById('rs').innerHTML="ch==>"+ascii;
    }

}