import { useState } from "react";


const initialTeams = [
    "MILAN",
    "FEYENOORD",
    "ATALANTA",
    "CLUB BRUGGE",
    "BAYERN MONACO",
    "BENFICA"
];

export default function ArticleSelector() {

    // stato della lista squadre
    const [teams, setTeams] = useState(initialTeams);

    // stato dell'input di inserimento nuova squadra
    const [newTeam, setNewTeam] = useState('');



    //  aggiunta nuova squadra alla lista

    const addTeam = e => {
        e.preventDefault();

        // creazione nuovo array
        const updatedTeams = [...teams, newTeam];

        setTeams(updatedTeams);
        // azzeriamo il valore di newteam
        setNewTeam('');
    }

    return (
        <>

            <form onSubmit={addTeam}>

                {/* input nuovo team */}
                <input type="text" value={newTeam}
                    onChange={event => { setNewTeam(event.target.value) }}
                    placeholder="Inserisci nome squadra"
                />
                <button > Invia!</button>
            </form >



            <div>

                {/* itero array di squadre */}
                {teams.map((team, index) => (

                    // definizione chiave per react
                    <div key={index}>
                        {team}
                    </div>

                ))}
            </div>
        </>


    );
}