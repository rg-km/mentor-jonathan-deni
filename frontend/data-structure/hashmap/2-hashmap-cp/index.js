// Mengecek jika dua string adalah anagram
// Anagram adalah kata yang dibentuk melalui penataan ulang huruf-huruf dari beberapa kata lain.
//
// Contoh 1
// Input: a = "keen", b = "knee"
// Output: "Anagram"
// Explanation: Jika ditata, "knee" dan "keen" memiliki huruf-huruf yang sama, hanya berbeda urutan
//
// Contoh 2
// Input: a = "fried", b = "fired"
// Output: "Anagram"
// Explanation: Jika ditata, "fried" dan "fired" memiliki huruf-huruf yang sama, hanya berbeda urutan
//
// Contoh 3
// Input: a = "apple", b = "paddle"
// Output: "Bukan Anagram"
// Explanation: Jika ditata, "apple" dan "paddle" memiliki huruf-huruf yang berbeda

function anagramChecker(str1, str2) {
    let str1Map = new Map();

    for (let i = 0; i < str1.length; i++) {
        if (str1Map.has(str1[i])) {
            let strCounter = str1Map.get(str1[i]) + 1
            str1Map.set(str1[i], strCounter)
        } else {
            str1Map.set(str1[i], 1)
        }
    }

    let str2Map = new Map()

    for (let i = 0; i < str2.length; i++) {
        if (str2Map.has(str2[i])) {
            let strCounter = str2Map.get(str2[i]) + 1
            str2Map.set(str2[i], strCounter)
        } else {
            str2Map.set(str2[i], 1)
        }
    }

    let isAnagram = true;
    const str1Keys = Object.keys(str1Map), str2Keys = Object.keys(str2Map);
    if(str1Keys.length !== str2Keys.length) return false;

    for (const key1 of str1Map) {
        // anagram : huruf harus sama / mengandung huruf yang sama => str2Map.has(key1)
        // dapetin jumlah dari huruf yang sama str2Map.get(key1) == str1Map.get(key1)
        // jumlah huruf harus sama
        if(!str2Map.has(key1[0]) || str2Map.get(key1[0]) !== str1Map.get(key1[0])) {
            isAnagram = false
        }
    }

    return isAnagram
}

console.log(anagramChecker("keen", "knee"));
console.log(anagramChecker("kee", "knn"));
console.log(anagramChecker("fried", "fired"));

module.exports = {
    anagramChecker
}
