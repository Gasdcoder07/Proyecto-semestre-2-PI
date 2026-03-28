import { useState } from "react"
import { Navbar } from "../../components"

import Header from "./HeaderManzaDle"
import Board from "./Board"
import Keyboard from "./Keyboard"
import GameModal from "./GameModal"

export default function ManzaDle() {

    const [isGameOver, setIsGameOver] = useState(false)

    return (
        <div className="min-h-screen bg-linear-to-b from-zinc-950 to-orange-950 text-white flex flex-col font-sans">
            <Navbar />
            <main className="grow flex flex-col items-center pt-28 pb-8 px-4 w-full max-w-lg mx-auto relative">
                <Header />
                <div className="w-full grow flex flex-col justify-center items-center mb-6">
                    <Board />
                </div>
                
                <div className="w-full">
                    <Keyboard />
                </div>
                {isGameOver && (
                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-zinc-950/80">
                        <GameModal />
                    </div>
                )}
            </main>
        </div>
    )
}