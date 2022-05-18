import { useState } from "react"

const YatzyComponent = () => {
    const [dice1, setdice1] = useState('?')
    const [dice2, setdice2] = useState('?')
    const [dice3, setdice3] = useState('?')
    const [dice4, setdice4] = useState('?')
    const [dice5, setdice5] = useState('?')

    const [sum, setSum] = useState('sum')
    const [yatzy, setYatzy] = useState('hej') // false
    
    function randomise() {
        // todo
    }

    function calculateScore() {
        // let sum = dice1 + dice2 + dice3 + dice4 + dice5
        setSum(dice1 + dice2 + dice3 + dice4 + dice5)
    }

    function calculateYatzy() {
        if (dice1 == dice2 && dice2 == dice3 && dice3 == dice4 && dice4 == dice5) {
            setYatzy('ja') // true
            let yatzy = true
            console.log('true?:', yatzy)
        }
        else if (dice1 != dice2) {
            setYatzy('nej') //true
            console.log('false?:', yatzy)
        }
    }

    return (
        <div className="dices">
            <button className="square" onClick={() => setdice1(1)}> {dice1} </button>
            <button className="square" onClick={() => setdice2(1)}> {dice2} </button>
            <button className="square" onClick={() => setdice3(1)}> {dice3} </button>
            <button className="square" onClick={() => setdice4(1)}> {dice4} </button>
            <button className="square" onClick={() => setdice5(1)}> {dice5} </button>

            <button onClick={calculateScore}>{sum}</button>
            <button onClick={calculateYatzy}>räkna yatzy</button>
            <p>yatzy?:{yatzy}</p>
        </div>
    )
}

export default YatzyComponent