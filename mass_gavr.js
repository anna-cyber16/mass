/*Задание 1*/

let ss = Array();
//Задание массива
for (let i = 0; i <= 5; i++) {
    ss[i] = parseFloat((Math.random() * 50).toFixed(2));
}
//Вывод элементов массива в строку
let str = '';
for (let i = 0; i <= 5; i++) {
    str += ss[i] + ' ';
}
document.getElementById("out11").innerHTML = str;

let sum = 0;
let n = 0;
for (let i = 0; i < ss.length; i++) {
    sum += ss[i];
    n += 1;
}
let sred = sum / n;
document.getElementById("out12").innerHTML = sred;

/*Задание 2*/
let ll = Array();
let sum_2=0;
let str_2 = '';
pp=prompt("Введите количество элементов в массиве)");
for (let i = 0; i < pp; i++) {
    ll[i] = prompt("Введите " + (i+1) + "-й элемент массива");
    str_2 += ll[i] + ' ';
    if(ll[i]=='a'){ /*На англиском языке*/
        sum_2+=1;
    } else if(ll[i]=='а'){ /*На русском языке*/
        sum_2+=1;
    }
}
document.getElementById('out21').innerHTML = str_2;
document.getElementById('out22').innerHTML = sum_2;

/*Задание 3*/
let xx = Array();
let str_3 = '';
let sum_3=0;

for (let i = 0; i < 8; i++) {
    xx[i] = Math.floor(Math.random() * 2);
    if(xx[i]==0){
        xx[i]="Ложь";
    }
    else{
        xx[i]="Истина";
        sum_3+=1;
    }
    str_3 += xx[i] + ' ';
}

document.getElementById('out31').innerHTML = str_3;

if(sum_3>5){
    result="Значений 'Истина' больше";
}
else if(sum_3<5){
    result="Значений 'Ложь' больше";
}
else{
    result="Количество значений 'Истина' и 'Ложь' равное";
}

document.getElementById('out32').innerHTML = result;
