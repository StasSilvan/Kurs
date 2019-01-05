var k = document.getElementById('komunikat');
k.innerHTML = '<span style="color:red">Janusz';


var kraj = prompt('Podaj Swoją Narodowość');
if (kraj == 'Polska'|| kraj == 'polska')
k.textContent = 'Polska - najlepszy kraj';
else if (kraj == 'Niemcy'|| kraj == 'niemcy'|| kraj == 'NIEMCY')
{
k.textContent = 'Niemcy';
alert('Niemcy');

}
else
k.textContent = 'Moze warto spróbować';
/*jesli uzytkownik poda z klawiatury prawidłowo długosc boków to wyswietli sie mu ,:Pole wynosi cm2 oraz obwód
jesli danne bedą błędne , to wyswitli sie komunikat w kolorze CZERWONYM
Utwóz nowy block strony do wyswietlenia komónikatów*/
var kw = document.getElementById('komkwadrat');
var bok = parseFloat(prompt("podaj długość boku"));
if (bok > 0){
let pole = bok * bok;
let obwod = 4 * bok;
let text = '<hr>Pole wynosi: ' + pole + 'cm<sup>2</sup><br>';
text += 'Obwód: '+ obwod +'cm';
kw.innerHTML = text;
}else{
   kw.innerHTML = '<span style="color:red"Błędne danne!</span>'

}
