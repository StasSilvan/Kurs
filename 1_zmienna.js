// //var let
// /*
// zmienna = 7;
// zmienna - nazwa zmiennej
// = operator przypisania
// 7 wartosc zmiennej
// */
// var imie ="Janusz";
// var nazwisko;
// nazwisko ="Nowak";
// document.write("Twoje imie: <br>");
// var wiek = 21;
// /*+ ocznacza połączenie string*/
// document.write("Twój wiek: wiek :" + wiek);
//
// console.log("Wiek");
//
// var x, y;
// x = 10;
// y = 7;
// var suma = x + y;
// // document.write(" <br> Suma wynosi: " + (x + y));
// document.write(" <br> Suma wynosi: " + suma + "<br>");
// // alert(suma)
// x = 20;
// y = 2;
// var suma = x + y;// 22
// var roznica = x - y;// 18
// x = 19;
// y = 2;
// var iloraz = x /  y;//9.5
// var iloczyn = x * y;//38
// //potęgowanie
// var potega = Math.pow(2,4);
// alert("potenga:" + potega);
// // modulo - reszta z dzielenia
// var modulo = x % y;
// console.log(roznica);
// console.log("suma :" + suma + ",roznica:" + roznica + ",iloczyn" +
// iloczyn +",iloraz:" + iloraz + ",modulo:" +modulo);
// // typy dannych
// var a = 10;b = "10a";
// //alert(a + b);
// //window.alert(a + b);
//
// console.log(typeof(a));// number
// console.log(typeof(b));// string
// var prawda = true;
// console.log(typeof(prawda));// boolean
// var nic = null;
// console.log(typeof(nic));// object
// var pusta;
// console.log(typeof(pusta));// object
//
// console.log(a+(a %3)-10);//1
// var dziesietny = 11; // liczba w systemie dziesietnym, decymalny
// var oktalny = 010;// ósemkowy, oktalny
// /*010 => 8
// 0 - system oktalny
// 01 => 1 * 8 ^ 1 + 0 * 8^0 = 1*8+0*1=8+0=8*/
// var szesnastkowy = 0x10;//szesnastkowy, hexadecymalny
// /*0x10=> 16
// 0x - system szesnastkowy
//  10 => 1 * 16^1 + 0 * 16^ 0 = 1 * 16 + 0 * 1 =16 +0 = 16 */
// /*console.log(oktalnym)*/;
// var liczba1 = prompt("Podaj pierwszą liczbę:");
// console.log("Podana pierwsza liczba z klawiatury: " + liczba1);
// var liczba2 = prompt("Podaj druga liczbę:");
// console.log("Podana pdruga liczba z klawiatury: " + liczba2);
//
// // typy zmiennych
// console.log(typeof(liczba1));
// console.log(typeof(liczba2));
// //zamiana zmiennych na typ liczbowy
// liczba1 = parseInt(liczba1)
// liczba2 = parseInt(liczba2)
// suma = liczba1 + liczba2 ;
// console.log("suma wynosi:"+ suma);
//
//
// /*summa dwoch liczb zmiennoprzecinkowych*/
// // camel case expression:
//    var liczbaPierwsza = parseFloat(prompt("podaj poerwszą liczbę","np. 3.5"));
//    var liczbaDruga = parseFloat(prompt("podaj drugą liczbę","np. 3.5"));
//    suma = liczbaPierwsza + liczbaDruga;
//    document.write(liczbaPierwsza + "+" + liczbaDruga + "=" + suma);
//
//
// /*ZADANIE DOMOWE
//  napisz programm który oblicze pole prostokąta , danne podaje uzytkownik z klawiatury , liczby zmiennoprzecinkowe )
//  wynik wyswietli w formacie : "Boka: ..., boka:...., pole wynosi: ....cm^2" (2 w indeksie gornym)
// w podobny sposob oblicz pole trójkonta oraz koła (math.p)
//
//  */
//  var boka = parseFloat(prompt("podaj bok a"));
//  var boka = parseFloat(prompt("podaj bok b"));
//  var pole = a * b;
//  document.write("boka: " + boka + ", bokb" + bokb + ", pole wynosi:"+ pole +"cm<sup>2</sup>");
//  // wyswietlenie imienia i nazwiska uzytkowniaka, danne podane z klawiatury ( w formacie imie : Janusz  ( Janusz w kolorzeczerwonym)) nazwisko : Kowal - w kolorze niebieskim
 let i = prompt("Podaj Imie");
 let n = prompt("Podaj Nazwisko");
 dane = '<hr>Imię: <span style="color:red">'+ i;
 dane += '</span>,Nazwisko:<span style="color:blue">'+ n + "</span>";
 document.write(dane);
