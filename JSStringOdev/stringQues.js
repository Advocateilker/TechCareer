//“  Çağatay Yıldız” isimli metindeki boşlukları kaldır.    (REPLACE)

let isim = "    Çağatay YILDIZ"

let newName = isim.replaceAll(" ", "")

console.log(newName)

//“cagatay yildiz” kelimesindeki boşlukları temizle ve tüm harfleri büyült ( REPLACE ve UPPER)

let isim2 = "çağatay yildiz"

let newName2 = isim2.replaceAll(" ", "")
let newName3 = newName2.toUpperCase();

console.log(newName3)

// “******Çağatay Yıldız” isimli metindeki yıldızları kaldır (REPLACE)

let isim3 = "******Çağatay Yıldız"

let newName4 = isim3.replaceAll("*", "")
let newName5 = newName4.trim()

console.log(newName5)

// “Çağatay  Yıldız” metnindeki kelimeler arasında 2 boşluk var bunu bir boşluk yap (REPLACE)

let isim4 = "Çağatay  Yıldız"

let newname6 = isim4.replaceAll("  ", " ")

console.log(newname6)

//“**Tech Career**” isimli metindeki yıldızları kaldır (REPLACE)

let isim5 = "**Tech Career**"
let newname7 = isim5.replaceAll("**", "")
console.log(newname7)

//“Tech Career” isimli metnin soluna ve sağına 3 yıldız koy. “***Tech Career***” ( Normal toplama operatörü)

let isim6 = "Tech Career"
let newname8 = "***" + isim6 + "***"

console.log(newname8)

//“Tech Career Bilişim teknolojileri” metnindeki son kelimeyi büyült (SUBSTRING)

let isim7 = "Tech Career Bilişim teknolojileri"
let lastWord = isim7.substring(19, 33).toUpperCase()
let newWord = isim7.replaceAll(" teknolojileri", lastWord)

console.log(newWord)


// “Tech Career” kelimelerin ilk harflerini büyült (Substring ve upper)

let word = "tech career";
let words = word.split(" ");
let upperWords = words.map(function (kelime) {
  return kelime[0].toUpperCase() + kelime.substring(1);
});
let newWord5 = upperWords.join(" ");
console.log(newWord5);





