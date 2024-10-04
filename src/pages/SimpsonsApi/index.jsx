import { useEffect, useState } from 'react';
import './styles.css';
import Card from '../../components/Card';

export default function SimpsonsApi() {
    const [conteudo, setConteudo] = useState(<>Carregando...</>);

    async function getCharacters() {
        const reqOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        try {
            const response = await fetch('https://futuramaapi.com/api/characters', reqOptions);

            if (!response.ok) {
                throw new Error('Erro ao buscar personagens');
            }

            const apiResponse = await response.json();
            return apiResponse.items;
        } catch (error) {
            console.error('Erro:', error);
            setConteudo(<p>Não foi possível carregar os personagens.</p>);
        }
    }

    async function buildCards() {
        const characters = await getCharacters();

        if (characters && characters.length > 0) {
            return characters.map((personagem) => (
                <Card key={personagem.id} data={personagem} />
            ));
        } else {
            return <p>Nenhum personagem encontrado.</p>;
        }
    }

    useEffect(() => {
        async function getConteudo() {
            const cards = await buildCards();
            setConteudo(cards);
        }

        getConteudo();
    }, []);

    return (
        <div className='list-api'>
            {conteudo}
        </div>
    );
}
