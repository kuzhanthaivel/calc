function add(){
    var act=0,b=0;
    act=f.ddd.value;
    b=act.charAt(act.length-1);
   if(b=='+'||b=='-'||b=='*'||b=='/'){
        f.ddd.value=act.substring(0,act,length-1);
        f.ddd.value+='+';

      }
    else{
       f.ddd.value+='+';
      }
}
function sub_(){
    var act=0,b=0;
    act=f.ddd.value;
    b=act.charAt(act.length-1);
   if(b=='+'||b=='-'||b=='*'||b=='/'){
        f.ddd.value=act.substring(0,act,length-1);
        f.ddd.value+='-';

      }
    else{
       f.ddd.value+='-';
      }
    }
function mul_(){
    var act=0,b=0;
    act=f.ddd.value;
    b=act.charAt(act.length-1);
   if(b=='+'||b=='-'||b=='*'||b=='/'){
        f.ddd.value=act.substring(0,act,length-1);
        f.ddd.value+='*';

      }
    else{
       f.ddd.value+='*';
      }
    }
function div_(){ var act=0,b=0;
    act=f.ddd.value;
    b=act.charAt(act.length-1);
   if(b=='+'||b=='-'||b=='*'||b=='/'){
        f.ddd.value=act.substring(0,act,length-1);
        f.ddd.value+='/';

      }
    else{
       f.ddd.value+='/';
      }
    }    