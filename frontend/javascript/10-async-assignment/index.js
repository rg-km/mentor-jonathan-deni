/**
 * Get Starship name
 *
 * Ambil model starship apa saja yang pernah digunakan oleh seorang karakter starwars.
 * Contoh, karakter dengan id = 1 adalah "Luke Skywalker" pernah menggunakan starship "T-65 X-wing" dan "Lambda-class T-4a shuttle".
 * Keluarkan model starship tersebut dalam bentuk array of string.
 *
 * Referensi:
 * https://swapi.dev/documentation#people
 * https://swapi.dev/documentation#starships
 *
 *
 * Input: 1 //Karakter id
 * Output: ["T-65 X-wing", "Lambda-class T-4a shuttle"]
 *
 * Gunakan async/await untuk menyelesaikan tugas ini.
 *
 */

/**
 * Gunakan fungsi berikut untuk mempermudah http request.
 */

const https = require("https");

function getStarWarsData(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let result = "";

        if (res.statusCode !== 200) {
          reject(new Error(res.statusCode));
        }

        res.on("data", (d) => {
          result += d;
        });

        res.on("end", () => {
          resolve(result);
        });
      })
      .on("error", (e) => {
        reject(e);
      });
  });
}

async function getStarshipModelByCharacterId(id) {
  // TODO: answer here
  // await data karakter -> id = 1 -> Luke Skywalker
  const getDataKarakter = await getStarWarsData("https://swapi.dev/api/people/" + id);
  // JSON.parse data karakter
  const dataKarakter = JSON.parse(getDataKarakter);
  // bikin variable buat dapetin starship (dataKarakter.starships)
  let starshipsData = dataKarakter.starships;
  const starshipsModelArray = [];
  // for loop async await buat dapetin starship pake URL yang ada di dataKarakter.starships'
  for(let i = 0; i < starshipsData.length; i++) {
    const getDataStarships = await getStarWarsData(starshipsData[i]);
    const dataStarships = JSON.parse(getDataStarships);
    starshipsModelArray.push(dataStarships.model)
  }
  // terakhir return dijadiin array
  return starshipsModelArray
}

module.exports = {
  getStarshipModelByCharacterId
}