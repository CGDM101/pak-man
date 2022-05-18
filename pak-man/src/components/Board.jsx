import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import Square from "./Square"

const Board = () => {
    const [nextPlayer, setNextPlayer] = useState('X') //

    return (
        <section>
            <div className="status"> next player: {nextPlayer} </div>

            <div className="board-row"> 
            <Square />
            <Square />
            <Square />
            </div>
            <div className="board-row">
            <Square />
            <Square />
            <Square />
            </div>
            <div className="board-row">
            <Square />
            <Square />
            <Square />
            </div>
        </section>
        
        )
}