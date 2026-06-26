interface Props{

    onClick:()=>void;

    disabled:boolean;

}

export default function BotaoConfirmar({

    onClick,

    disabled

}:Props){

    return(

        <button

            disabled={disabled}

            onClick={onClick}

            className="w-full bg-green-600 text-white rounded-xl p-4"

        >

            {disabled ? "Salvando..." : "Confirmar Palpite"}

        </button>

    )

}