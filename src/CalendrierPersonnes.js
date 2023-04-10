import React, { useState } from "react";
import PersonnesJanvier from './components/PersonnesJanvier';
import PersonnesFevrier from "./components/PersonnesFevrier";
import PersonnesMars from "./components/PersonnesMars";
import PersonnesAvril from "./components/PersonnesAvril";
import PersonnesMai from "./components/PersonnesMai.js";
import PersonnesJuin from "./components/PersonnesJuin.js";
import PersonnesJuillet from "./components/PersonnesJuillet";
import PersonnesAout from "./components/PersonnesAout";
import PersonnesSeptembre from "./components/PersonnesSeptembre";
import PersonnesOctobre from "./components/PersonnesOctobre";
import PersonnesNovembre from "./components/PersonnesNovembre";
import PersonnesDecembre from "./components/PersonnesDecembre";
import './CalendrierPersonnes.css';

const mois = [
  { nom: "Ngù'fí", personnes: PersonnesJanvier },
  { nom: "Nkùɑ̀nʉ̀ɑ̀", personnes: PersonnesFevrier },
  { nom: "Mbàkngòfāt", personnes: PersonnesMars },
  { nom: "Sò'njɑ̀ɑ̀", personnes: PersonnesAvril },
  { nom: "Njwēnɑ̌hntà", personnes: PersonnesMai },
  { nom: "Mòmòshʉ̄", personnes: PersonnesJuin },
  { nom: "Ntūmbhìngòfāt", personnes: PersonnesJuillet },
  { nom: "Mɑ̄ngà'nshì", personnes: PersonnesAout },
  { nom: "Kùkū", personnes: PersonnesSeptembre },
  { nom: "Ndǔ'nzɑ̄", personnes: PersonnesOctobre },
  { nom: "Nkhùɑnʉ̀ɑ̀", personnes: PersonnesNovembre },
  { nom: "Ncátmɑ̄ŋū", personnes: PersonnesDecembre }
];

const CalendrierPersonnes = () => {
  const [moisActuel, setMoisActuel] = useState(0);

  const moisPrecedent = () => {
    setMoisActuel((moisActuel - 1 + mois.length) % mois.length);
  };

  const moisSuivant = () => {
    setMoisActuel((moisActuel + 1) % mois.length);
  };

  const personnesMois = mois[moisActuel].personnes;

  return (
    <div>
      <h1 className="mois">{mois[moisActuel].nom}</h1>
      <table>
        <thead>
          <tr>
            <th>Líé'nkwè’</th>
            <th>NKɑ́ɑ́tēē</th>
            <th>Nzêngòò</th>
            <th>ncômntēē</th>
            <th>Nzîngū</th>
            <th>Nzîsō</th>
            <th>Nsū'kwɑ̀</th>
            <th>Nthʉ̄'ntāā</th>
          </tr>
        </thead>
        <tbody>
          {[0, 1, 2, 3].map((i) => (
            <tr key={i}>
              {personnesMois.slice(i * 8, (i + 1) * 8).map((personne, j) => (
                <td key={j}>
                    <div className="f4 dark-red">{personne.jour}</div> <br/>
                    <div className="b">{personne.numero}</div> <br/>
                    <div className="">{personne.nom}</div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="ph3 mt4 mois">
        <a className="f6 link dim br-pill ba bw2 ph3 pv2 mb2 dib mid-green" onClick={moisPrecedent}>Mɑ̄ŋʉ̄ Pēēsì</a>
        <a className="f6 link dim br-pill ba bw2 ph3 pv2 mb2 dib dark-green" onClick={moisSuivant}>Mɑ̄ŋʉ̄ Ntāmbhì</a>
      </div>
    </div>
  );
}

export default CalendrierPersonnes;