"use client";

interface Props{

    golsBrasil:number;

    golsAdversario:number;

    setGolsBrasil:(v:number)=>void;

    setGolsAdversario:(v:number)=>void;

}

export default function Placar({

    golsBrasil,

    golsAdversario,

    setGolsBrasil,

    setGolsAdversario

}:Props){

    return(

        <div className="flex justify-around mt-8">

            <div className="text-center">

                <h2>🇧🇷</h2>

                <input

                    type="number"

                    value={golsBrasil}

                    min={0}

                    className="border rounded p-3 w-20 text-center"

                    onChange={(e)=>setGolsBrasil(Number(e.target.value))}

                />

            </div>

            <div className="flex items-center font-bold text-2xl">

                x

            </div>

            <div className="text-center">

                <h2>🏳️</h2>

                <input

                    type="number"

                    value={golsAdversario}

                    min={0}

                    className="border rounded p-3 w-20 text-center"

                    onChange={(e)=>setGolsAdversario(Number(e.target.value))}

                />

            </div>

        </div>

    )

}