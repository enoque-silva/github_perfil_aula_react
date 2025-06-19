import { useState, useEffect } from "react"

export default () => {

    const [notaA, setNotaA] = useState(0);
    const [notaB, setNotaB] = useState(0);
    const [notaC, setNotaC] = useState(0);
    const [nome, setNome] = useState('');

    //Cliclo de vida de um Componente
    //1 - mount (Montado)
    //2 - update (Atualizado)
    //3 - onmount (Desmontado)

    useEffect(() => {
        console.log("O componente iniciou");

        return () => {
            console.log("O componente finalizou")
        }
    }, [])

    useEffect(() => {
        console.log("Houve alteração no campo Nome")
    }, [nome])

    useEffect(() => {
        console.log("Houve alteração em algum campo de Notas")
    }, [notaA, notaB, notaC])

    const alteraNome = (evento) => {
        setNome(evento.target.value);
    }

    const renderizaResultado = () => {
        const soma = notaA + notaB + notaC;
        const media = soma / 3;

        if (media >= 7) {
            return (
                <p>Olá {nome}, Você foi aprovado.</p>
            )
        } else {
            return (
                <p>Olá {nome}, Você foi reprovado.</p>
            )
        }
    }

    return (
        <form>

            <ul>
                {[1,2,3,4,5].map(item => <li key={item}>{item}</li>)}
            </ul>
            

            <input type="text" placeholder="Digite seu nome" onChange={alteraNome} />
            <input onChange={({ target }) => setNotaA(parseInt(target.value))} type="number" placeholder="Nota da Matéria A" />
            <input onChange={({ target }) => setNotaB(parseInt(target.value))} type="number" placeholder="Nota da Matéria B" />
            <input onChange={evento => setNotaC(parseInt(evento.target.value))} type="number" placeholder="Nota da Matéria C" />
            {renderizaResultado()}
        </form>
    )
}