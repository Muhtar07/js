
//1
var a = 1, b = 1, c, d;
c = ++a; alert(c); // 2 а +1; a=2
d = b++; alert(d); // 1 после команды alert b+1; b=2
c = (2+ ++a); alert(c); // 5 a+1; a=3
d = (2+ b++); alert(d); // 4 после команды alert b+1; b=3
alert(a); // 3 
alert(b); // 3


//2
var a =2;
var b = 1+(a*=2);//  получится 1+(a=a*2) 
alert (b);//5

//3

var a=prompt("Введите число a");
var b=prompt("Введите число b");
 if(a>=0&b>=0) alert (a-b);
 
 else if (a<0&b<-0) alert (a*b);

else if(a>=0&b<0||a<0&b>=0)
 alert (+a + +b);

else alert ("Вы ввели не число"); 

//4
var a = +prompt("Введите число в диапазоне от 0 до 15");
switch(a){
    case 1:
        alert("1,2,3,4,5,6,7,8,9,10,11,12,13,14,15");
        break;
    case 2:
        alert("2,3,4,5,6,7,8,9,10,11,12,13,14,15");
        break;
    case 3:
        alert("3,4,5,6,7,8,9,10,11,12,13,14,15");
        break;
    case 4:
        alert("4,5,6,7,8,9,10,11,12,13,14,15");
        break;
    case 5:
        alert("5,6,7,8,9,10,11,12,13,14,15");
        break;
    case 6:
        alert("6,7,8,9,10,11,12,13,14,15");
        break;
    case 7:
        alert("7,8,9,10,11,12,13,14,15");
        break;
    case 8:
        alert("8,9,10,11,12,13,14,15");
        break;
    case 9:
        alert("9,10,11,12,13,14,15");
        break;
    case 10:
        alert("10,11,12,13,14,15");
        break;
    case 11:
        alert("11,12,13,14,15");
        break;
    case 12:
        alert("12,13,14,15");
        break;
    case 13:
        alert("13,14,15");
        break;
    case 14:
        alert("14,15");
        break;
    case 15:
        alert("15");
        break;
}

//5

function ab (a,b){
	var a=a+b;
  var b=a-8;
  var a =b*a
  var a=a/2;
	
  return a;
}

alert(ab(15,11));



//7
var a=null;
var b=0;
var c=a==b;
alert(c);// false:Значения null и undefined равны == друг другу и не равны ничему другому. 

//6 7 не смог сделать 