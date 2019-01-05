// for (var i = 13; i <= 20; i++){
//    document.write( i+ "<br>");
// }
// // inkrementacja i++ i = i +1
// /*
// inicializacja var i=1
// warunek i <= 10
// Uaktualnianie i++
// */
// // od 13 do 20
// // pętla for
// //SPOSÓ 1
// for (i = 5; i <= 30; i+=5){
//    document.write(i+"");
// }
// // SPOSÓB 2
// for (i=5; i<=30; i++){
// if (i% 5 ==0)
//    document.write(i+"");
// }
// wypisz liczby parzyste z przedziału <10, 50> malejąco , po kazdej liczbie
//wyswietl przecinek i spacje po ostatniej liczbie wyswetl kropke
// for ( var i=50; i>=10; i--){
// if (i% 2 ==0)
// if (i ==10)
//    document.write(i+'.');
//    else
//    document.write(i+', ');
// }
// var l1 = parseFloat(prompt('Podaj pierwszej liczby'));
// var l2 = parseFloat(prompt('Podaj drugą liczby'));
// if(l1 >= l2){
//    for (i = l2; i >=l1; i--){
//       if(i == l1)
//       document.write(i + '.')
//       else
//       document.write(i + ', ')
//    }
// }else{
//    for (i = l1; i >= l2; i--){
//    if (i== l2)
//    document.write(i + '.')
//    else
//    document.write(i + ', ')
//    }
// }
// var suma = 0;
// var y;
// for (i = 1; i<= 3; i++){
//    y = parseFloat(prompt("podaj wartość nr " + i + ": "));
//    suma +=y;
//    }
//    document.write('Suma wartosci: ' + suma);
// var star ="*";
// var size = 5;
//
// for( f = 0 ; f < size ; f++)
// {
// for( j = size - f ; j > 0 ; j--)
// {
// document.write(" ");
// }
// for( i = 0 ; i <= f ;i++)
// {
// document.write("*");
// }
// document.writeln("<br>");
// }
// document.write("<br>");
// var p = parseFloat(prompt('Max poziom '));
// var stas =prompt('Wartość hoinki');
// for (i=1;i<= p ;i++)
// {
//     for ( var a=1;a<=i;a++)
//     {
//     document.write(stas +'');
// }
// document.write("<br>");
// }
// document.write("<br>");
var x=1;
for (i = 1; i<= 10; i++){
   for(j = 1; j <= 10; j++){
      if (i == j){
         document.write('x ');
      }else{
         if(x<10){if ( x % 2 == 0)
            document.write('<span style="color:red">0'+ x +'</span>');
            else
            document.write('0' + x + '');
         }else{
            if( x % 2 == 0)
               document.write('<span style="color:red">'+ x +'</span>');
         else
            document.write(x + '');
      }
   }
   x++;
}
document.write('<br>')
}
