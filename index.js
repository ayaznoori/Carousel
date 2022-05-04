let c=-100;
    function hello(){
    document.getElementById("icontainer").style.left=`${c}px`;
        c-=80;
        if(c<=-1320){
            document.getElementById("left").style.display="none";
        }
        if(c==-20){
            document.getElementById("right").style.display="block"; 
        }
 
    }
    function hello2(){
        c+=80;
      document.getElementById("icontainer").style.left=`${c}px`;
      
     if(c==-1300){
        document.getElementById("left").style.display="block";
     }
     if(c==60){
        document.getElementById("right").style.display="none";
     }

    }