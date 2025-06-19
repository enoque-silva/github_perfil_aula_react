import { useEffect, useState } from 'react';
import styles from './Perfil.module.css'

export default ({ nomeUsuario }) => {

    const [informacoesPerfilGitHub, setinformacoesPerfilGitHub] = useState([]);

    useEffect(() => {
        fetch(`https://api.github.com/users/${nomeUsuario}`).then(resposta => resposta.json()).then(respostaJSON => {
            setinformacoesPerfilGitHub(respostaJSON);
            console.log(respostaJSON);
        })
    }, [])

    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={informacoesPerfilGitHub.avatar_url} />
            <h1 className={styles.userName}>{informacoesPerfilGitHub.name}</h1>
            <h2 className={styles.userName}>{nomeUsuario}</h2>
        </header>
    )
}