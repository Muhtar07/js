// 1 
var i =0;
var n=100;
while(i<=n) {

 console.log(i++);

}
//2
var i=0;
var n=10;
while(i<=n){
	
	if (i==0){ 
		console.log(i+" это ноль");
		i++}
	else{
		
	if(i%2==0){
		console.log(i+" четное");
		i++;}
	else{
		console.log(i+" не четное");
		i++;}
}}

//3
for (var n = 0; n <= 9; n++) 
	console.log(n);
//4
var i=1;
var pyramid;
while(i<=20){
	var pyramid=pyramid+"x";
	i++;
	console.log(pyramid);
	
}

var number = Math.round(1000 + Math.random() * (9999 - 1000));
var attempt=1;
guessNumber();


function guessNumber() {
  var result = parseInt(prompt("Введите число: ", 0));

  if (result == number) {
    alert("Ура! Вы угадали число. попыток" +attempt);
    location.reload();
  } else if(result == 0 || isNaN(result)) {
    alert("Вы не ввели число");
    guessNumber();
  } else if(result == -1) {
    alert("Спасибо за игру!");

  } else {
    if (result > number) {
      alert("Ваше число больше загаданного");
      attempt++;
    } else {
      alert("Ваше число меньше загаданного");
      attempt++;
    }
    guessNumber();
  }
}
