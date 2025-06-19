import { useEffect, useState } from "react";

import styles from "./ListaRepositorios.module.css";

export default ({ nomeUsuario }) => {

    const [repositorios, setRepositorios] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [deuErro, setDeuErro] = useState(false);

    useEffect(() => {
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(resposta => {
                if(resposta.status !== 200)
                    {
                    throw new Error('Erro na resposta da API');
                }
                return resposta.json();

            }).then(respostaJSON => {
                setTimeout(() => {
                    setRepositorios(respostaJSON);
                    setEstaCarregando(false);
                }, 3000)
                // console.log(respostaJSON);
            }).catch(() => {
                setDeuErro(true);
                setEstaCarregando(false);
            });
    }, [nomeUsuario]);

    if (estaCarregando) {
        return <h2>Carregando...</h2>;
    }

    if (deuErro) {
        return <h2 style={{ color: 'red' }}>Erro ao carregar os repositórios 😢</h2>;
    }

    return (
        <div className="container">
            <ul className={styles.list}>
                {/* {repositorios.map(repositorio => ( */}
                {repositorios.map(({ id, name, language, html_url }) => (
                    <li key={id} className={styles.listItem}>
                        <div className={styles.listItemName}>
                            <b>Nome:</b> {name}
                        </div>
                        <div className={styles.listItemLanguage}>
                            <b>Linguagem:</b> {language}
                        </div>
                        <a className={styles.listItemLink} target="_blank" href={html_url}>Visitar no GitHub</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}