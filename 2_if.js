var k = document.getElementById('komunikat');
var x =prompt("podaj co chcesz obliczyć", "k - kwadrat, p- prostokąt, t - trójkąt");
var  pole, boka , bokb;
// if (x == 'k'){
//    boka = prompt('podaj długość boku');
//    pole = boka * boka;
//    k.innerHTML = 'Pole kwadratu wynosi:' + pole + 'cm<sup>2</sup>';
// }else if(x =='p'){
//    boka = prompt('podaj długość boku a');
//    bokb = prompt('podaj długość boku B');
//    pole = boka * bokb;
//    k.innerHTML = 'Pole prostokąta wynosi:' + pole + 'cm<sup>2</sup>';
//
// }else if(x =='t'){
//    boka = prompt('podaj długość podstawy');
//    bokb = prompt('podaj wysokość');
//    pole = 0.5 * boka * bokb;
//    k.innerHTML = 'Pole trójkonta wynosi:' + pole + 'cm<sup>2</sup>';*/*/
switch (x) {
   case 'k':
   boka = prompt('podaj długość boku');
   pole = boka * boka;
   k.innerHTML = 'Pole kwadratu wynosi:' + pole + 'cm<sup>2</sup>';
   break;
   case 'p':
   boka = prompt('podaj długość boku a');
   bokb = prompt('podaj długość boku B');
   pole = boka * bokb;
   k.innerHTML = 'Pole prostokąta wynosi:' + pole + 'cm<sup>2</sup>';
   break;
   case 'k':
   boka = prompt('podaj długość podstawy');
   bokb = prompt('podaj wysokość');
   pole = 0.5 * boka * bokb;
   k.innerHTML = 'Pole trójkonta wynosi:' + pole + 'cm<sup>2</sup>';
   default:
   k.innerHTML = '<span style="color:red"><p id="ID1">Błędne danne!</p></span>';}
{
   var p = document.getElementById("ID1");
         setInterval(function() {
           if (p.style.fontSize != '10px') {
             p.style.fontSize = '10px';
           } else {
             p.style.fontSize = '200px';
           }
        }, 100);
}
