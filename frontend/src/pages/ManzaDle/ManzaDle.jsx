import { useState, useEffect } from "react"
import { Navbar } from "../../components"
import Header from "./HeaderManzaDle"
import Board from "./Board"
import Keyboard from "./Keyboard"
import GameModal from "./GameModal"

export default function ManzaDle() {

    const [solution, setSolution] = useState("PLAYA")
    const [guesses, setGuesses] = useState(Array(6).fill(null))
    const [currentGuess, setCurrentGuess] = useState("")
    const [turn, setTurn] = useState(0)
    const [isGameOver, setIsGameOver] = useState(false)
    const [isWin, setIsWin] = useState(false)

    const handleKeyPress = (key) => {
        if (isGameOver) return

        if (key === 'BACKSPACE' || key === 'Backspace' || key === 'DELETE') {
            setCurrentGuess((prev) => prev.slice(0, -1))
            return
        }

        if (key === 'ENTER' || key === 'Enter') {
            if (currentGuess.length !== 5) return

            const newGuesses = [...guesses]
            newGuesses[turn] = currentGuess
            setGuesses(newGuesses)

            if (currentGuess === solution) {
                setIsWin(true)
                setIsGameOver(true)
            } else if (turn === 5) {
                setIsGameOver(true)
            }

            setTurn(turn + 1)
            setCurrentGuess("")
            return
        }

        if (/^[A-Za-zÑñ]$/.test(key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess((prev) => prev + key.toUpperCase())
            }
        }
    }

    useEffect(() => {
        const handleKeyDown = (e) => handleKeyPress(e.key)
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [currentGuess, turn, isGameOver])

    return (
        <div className="min-h-screen bg-linear-to-b from-zinc-950 to-orange-950 text-white flex flex-col font-sans">
            <Navbar />
            <main className="grow flex flex-col items-center pt-28 pb-8 px-4 w-full max-w-lg mx-auto relative">
                <Header />
                <div className="w-full grow flex flex-col justify-center items-center mb-6">
                    <Board guesses={guesses} currentGuess={currentGuess} turn={turn} solution={solution} />
                </div>
                
                <div className="w-full">
                    <Keyboard onKeyPress={handleKeyPress} />
                </div>
                {isGameOver && (
                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-zinc-950/80">
                        <GameModal isWin={isWin} secretWord={solution} />
                    </div>
                )}
            </main>
        </div>
    )
}