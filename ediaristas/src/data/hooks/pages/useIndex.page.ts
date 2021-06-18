import { UserShortInterface } from "data/@types/UserInterface";
import { ValidationService } from "data/services/ValidationService";
import { useState, useMemo } from "react";

export default function useIndex() {
    const [cep, setCep] = useState(''),
        cepValido = useMemo(() => {
            return ValidationService.cep(cep);
        }, [cep]),
        [erro, setErro] = useState(''),
        [buscaFeita, setBuscaFeita] = useState(false),
        [carregando, setCarregando] = useState(false),
        [diaristas, setDiaristas] = useState<UserShortInterface[]>([]),
        [diaristasRestantes, setDiaristasRestantes] = useState(0);

    return {
        cep, setCep, cepValido
    }
}