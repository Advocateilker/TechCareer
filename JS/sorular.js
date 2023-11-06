/*
var numbers = [33, 11, -5, 20, 1, 55, 100, 2, 94, 55, 11]
Dizinin en büyük sayısıı for döngüsü ile bul
Dizinin en küçük sayısıı for döngüsü ile bul
*/

// 1- 250 ye kadar olan sayıların toplamı nedir? 
let toplam250 = 0;

for (let i = 1; i <= 250; i++) {
    toplam250 += i;
}

console.log("250'ye kadar olan sayıların toplamı : ", toplam250)

// 2- 25 ile 125 arasındaki sayıların toplamı nedir?

let toplam125 = 0;

for (let i = 25; i <= 125; i++) {
    toplam125 += i;
}

console.log("25 ile 125e kadar olan sayıların toplamı : ", toplam125)

// 3- 1 ile 1000 Arasındaki Sayıların Toplamının ortalaması nedir?

let toplam1000 = 0;
let sayıMiktarı = 1000;
for (let i = 1; i < 1001; i++) {

    toplam1000 += i

}
const ortalama = toplam1000 / sayıMiktarı

console.log(ortalama)


// 4- Birden yüze kadarki sayılardan, 5’e bölünenleri ekrana yazdırın

for (let i = 1; i < 100; i++) {
    if (i % 5 == 0) {
        console.log(i)
    }
}

/*
var numbers = [33, 11, -5, 20, 1, 55, 100, 2, 94, 55, 11]
Dizinin en büyük sayısıı for döngüsü ile bul
Dizinin en küçük sayısıı for döngüsü ile bul
*/

var numbers = [33, 11, -5, 20, 1, 55, 100, 2, 94, 55, 11]
var enBuyuk = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > enBuyuk) {
        enBuyuk = numbers[i];
    }
}

console.log(enBuyuk)

var enKucuk = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (enKucuk > numbers[i]) {
        enKucuk = numbers[i]
    }
}

console.log(enKucuk)
