import React from 'react'
import Layout from '../components/Layout'
import Character from '../components/Character'
import CardDeck from 'react-bootstrap/CardDeck'


export default class Characters extends React.Component {
    state = {
        info: null,
        characters: null,
        page: 1,
    }

    componentDidMount(){
        console.log("ComponentDidMount")
        this.fetchCharacters()
    }

    fetchCharacters = () => {
        fetch("https://rickandmortyapi.com/api/character")
            .then(res => res.json())
            .then(json => {
                this.setState({
                    info: json.info,
                    characters: json.results
                })
            })
    }

    render() {
        return (
            <Layout>
                <h1>Characters</h1>
                <ul>
                {/* <CardDeck> */}
                    { this.state.characters ? this.state.characters.map(char => <Character {...char}/>) : null }
                {/* </CardDeck> */}
                </ul>
            </Layout>
        )
    }
}