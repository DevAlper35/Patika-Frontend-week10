import "./App.css";
import { useState, useEffect } from "react";
import { DATA } from "./data";
const alfabe = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "R",
  "S",
  "T",
  "U",
  "V",
  "Y",
  "Z",
];
function App() {
  const [index, setIndex] = useState(0);
  const [soru, setSoru] = useState("");
  const [cevap, setCevap] = useState("");
  const [cevapListesi, setCevapListesi] = useState([]);
  const [basilanlar, setBasilanlar] = useState([]);
  const [soruSonucu, setSoruSonucu] = useState(false);
  const karistir = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const harfBas = (basilanHarf) => {
    if (basilanlar.length < cevap.length) {
      basilanlar.push(basilanHarf);
      setBasilanlar([...basilanlar]);
    }

    if (basilanlar.length == cevap.length) {
      if (basilanlar.join("") == cevap) {
        alert("Doğru Cevap - " + cevap);
        setBasilanlar([]);
        setIndex(index + 1);
        setSoruSonucu(true);
      } else {
        alert("Yanlış Cevap");
      }
    }
  };

  useEffect(() => {
    setSoruSonucu(false);
    setSoru(DATA[index].soru);
    const cevap = DATA[index].cevap.toUpperCase();
    setCevap(cevap);

    const cevapToArray = cevap.split("");

    cevapToArray.push(alfabe[Math.floor(Math.random() * alfabe.length)]);
    cevapToArray.push(alfabe[Math.floor(Math.random() * alfabe.length)]);
    cevapToArray.push(alfabe[Math.floor(Math.random() * alfabe.length)]);
    cevapToArray.push(alfabe[Math.floor(Math.random() * alfabe.length)]);
    cevapToArray.push(alfabe[Math.floor(Math.random() * alfabe.length)]);
    cevapToArray.push(alfabe[Math.floor(Math.random() * alfabe.length)]);

    setCevapListesi(karistir(cevapToArray));
  }, [soruSonucu]);

  const harfSil = (index) => {
    basilanlar.splice(index, 1);
    setBasilanlar([...basilanlar]);
  };
  return (
    <>
      <div className="text-center">
        <div>
          <span>{soru}</span>
        </div>

        <div className="h-5">
          {basilanlar.map((harf, index) => (
            <span
              className="font-bold text-2xl"
              key={index}
              onClick={() => harfSil(index)}
            >
              <a className="m-0.5 bg-gray-200 px-1.5 rounded-md" href="#">
                {harf}
              </a>
            </span>
          ))}
        </div>

        <div className="mt-5">
          {cevapListesi.map((harf, index) => (
            <button
              className="bg-slate-300 w-6 h-6 m-1 rounded-md"
              key={index}
              onClick={() => {
                harfBas(harf);
              }}
            >
              {harf}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
