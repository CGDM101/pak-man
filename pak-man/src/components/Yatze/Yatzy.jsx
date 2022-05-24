import { useState } from "react"
import './Yatzy.css'

const YatzyComponent = () => {
    const [dice1, setdice1] = useState('?')
    const [dice2, setdice2] = useState('?')
    const [dice3, setdice3] = useState('?')
    const [dice4, setdice4] = useState('?')
    const [dice5, setdice5] = useState('?')

    const [sum, setSum] = useState(0)
    const [yatzy, setYatzy] = useState('-') // false
    const [fyrtal, setFyrtal] = useState('-') // false

    const [ones, setOnes] = useState(0)
    const [twos, setTwos] = useState(0)
    const [threes, setThrees] = useState(0)
    const [fours, setFours] = useState(0)
    const [fives, setFives] = useState(0)
    const [sixes, setSixes] = useState(0)
    
    function CalculateGeneral( ) {
        let dices = [dice1, dice2, dice3, dice4, dice5]
        
        let sumOnes = 0
        let sumTwos = 0
        let sumThrees = 0
        let sumFours = 0
        let sumFives = 0
        let sumSixes = 0

        for (let i = 0; i < dices.length; i++) {
            if (dices[i] === 1) {
                sumOnes += 1
            } else sumOnes += 0 

            if (dices[i] === 2) {
                sumTwos += 1
            } else sumTwos += 0 

            if (dices[i] === 3) {
                sumThrees += 1
            } else sumThrees += 0 

            if (dices[i] === 4) {
                sumFours += 1
            } else sumFours += 0 

            if (dices[i] === 5) {
                sumFives += 1
            } else sumFives += 0 

            if (dices[i] === 6) {
                sumSixes += 1
            } else sumFives += 0 

        }

        setOnes(sumOnes)
        setTwos(sumTwos)
        setThrees(sumThrees)
        setFours(sumFours)
        setFives(sumFives)
        setSixes(sumSixes)
    }

    function CalculateFyrtal() {
        let dices = [dice1, dice2, dice3, dice4, dice5]
        let fyrtal = ''
        if ((dice1 == dice2 && dice2 == dice3 && dice3 == dice4) || (dice2 == dice3 && dice3 == dice4 && dice4 == dice5) ) {
            fyrtal='ja'
        } else fyrtal = 'nej'
        setFyrtal(fyrtal)        
    }

    function CalculateScore() {
        setSum(dice1 + dice2 + dice3 + dice4 + dice5)
    }

    function CalculateYatzy() {
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
        <div className="yatzybody">
        <div className="dices">
            <button className="square" onClick={() => setdice1(5)}> {dice1} </button>
            <button className="square" onClick={() => setdice2(5)}> {dice2} </button>
            <button className="square" onClick={() => setdice3(5)}> {dice3} </button>
            <button className="square" onClick={() => setdice4(5)}> {dice4} </button>
            <button className="square" onClick={() => setdice5(5)}> {dice5} </button>


            <div className="buttons-calc">
                <button onClick={CalculateScore}>Räkna summa!</button>
                <button onClick={CalculateYatzy}>Är det yatzy? </button>

                <button onClick={CalculateGeneral}> räkna alla av varje sort</button>
                <button onClick={CalculateFyrtal}> fyrtal?</button>
            </div>

            <div className="div-calc-output">
                <p>Är det yatzy? {yatzy}</p>
                <p>Summan? {sum}</p>
                <p>Hur många ettor? {ones}</p>
                <p>Hur många tvåor? {twos}</p>
                <p>Hur många treor? {threes}</p>
                <p>Hur många fyror? {fours}</p>
                <p>Hur många femmor? {fives}</p>
                <p>Hur många sexor? {sixes}</p>
            </div>
            
            <div className="div-calc-output">
                <p>Är det kåk? (todo)</p>
                <p>Är det stege? (todo)</p>
                <p>Är det par? (todo)</p>
                <p>Är det triss? (todo)</p>
                <p>Är det fyrtal? {fyrtal}</p>
                <p>Är det två par? (todo)</p>
            </div>
        </div>
        </div>
    )
}

export default YatzyComponent