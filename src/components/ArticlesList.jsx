import { useState } from "react";


const articles = [
    {
        id: 1,
        title: "FORMAZIONE MILAN",
        description: "MILAN (4-2-3-1): Maignan; Walker, Tomori, Pavlovic, Theo Hernandez; Fofana, Reijnders; Musah, Joao Felix, Leao; Gimenez. All. Conceiçao. "
    },
    {
        id: 2,
        title: "FORMAZIONE FEYENOORD",
        description: "FEYENOORD (4-3-3): Wellenreuther; Read, Beelen, Hancko, Smal; Moder, Milambo, Bueno; Hadj-Moussa, Carranza, Paixao. All. Bosschaart"
    },
    {
        id: 3,
        title: "FORMAZIONE ATALANTA",
        description: "ATALANTA (3-4-1-2): Carnesecchi; Posch, Hien, Djimsiti; Bellanova, de Roon, Ederson, Zappacosta; Pasalic; De Ketelaere, Retegui. All. Gasperini."
    },
    {
        id: 4,
        title: "FORMAZIONE CLUB BRUGGE",
        description: "CLUB BRUGGE (4-5-1): Mignolet; Seys, Ordonez, Mechele, De Cuyper; Talbi, Jashari, Vanaken, Onyedika, Tzolis; Jutglà. All. Hayen."
    },
    {
        id: 5,
        title: "FORMAZIONE BAYERN MONACO",
        description: "BAYERN MONACO (4-2-3-1): Neuer; Laimer, Upamecano, Kim, Guerreiro; Kimmich, Pavlovic; Olise, Musiala, Sané; Kane. All. Kompany."
    },
    {
        id: 6,
        title: "FORMAZIONE BENFICA",
        description: "BENFICA (4-3-3): Trubin; Araujo, Otamendi, Antonio Silva, Carreras; Kocku, Nuno Felix, Barreiro; Akturkoglu, Pavlidis, Schjelderup. All. Lage."
    }
];

export default function ArticleSelector() {



    return (
        <>
            <div>

                {/* itero array di articoli */}
                {articles.map((article) => (

                    // definizione chiave per react
                    <div key={article.id}>
                        {article.title}
                    </div>

                ))}
            </div>
        </>
    );
}