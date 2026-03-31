export default function Board({ guesses, currentGuess, turn, solution }) {
    const wordLength = solution.length
    const rows = Array.from({length: 6})

    const getColors = (guess) => {
        if (!guess) return Array(wordLength).fill("bg-transparent border-zinc-800")
        
        const result = Array(wordLength).fill("bg-zinc-800 border-zinc-800")
        const solutionChars = solution.split("")
        const guessChars = guess.split("")

        guessChars.forEach((char, i) => {
            if (char === solutionChars[i]) {
                result[i] = "bg-green-600 border-emerald-600"
                solutionChars[i] = null
                guessChars[i] = null
        }})

        guessChars.forEach((char, i) => {
            if (char !== null && solutionChars.includes(char)) {
                result[i] = "bg-yellow-500 border-yellow-500"
                solutionChars[solutionChars.indexOf(char)] = null
            }
        })

    return result
}

    return (
        <div className="grid grid-rows-6 gap-2 p-2 w-full max-w-fit mx-auto">
            {rows.map((_, rowIndex) => {
                const isSubmitted = rowIndex < turn
                const isCurrent = rowIndex === turn
                
                let word = ""
                if (isSubmitted) word = guesses[rowIndex]
                else if (isCurrent) word = currentGuess

                const letters = word.padEnd(wordLength, " ").split("")
                const colors = isSubmitted ? getColors(word) : Array(wordLength).fill("")
                return (
                    <div 
                        key={rowIndex} 
                        className="grid gap-2"
                        style={{ gridTemplateColumns : `repeat(${wordLength}, minmax(0, 1fr))` }}
                    >
                        {letters.map((char, colIndex) => {
                            const hasLetter = char !== " "

                            let baseStyle = "min-w-[3rem] aspect-square border-2 flex items-center justify-center text-2xl sm:text-3xl font-bold text-white uppercase select-none transition-all duration-500"

                            let colorStyle = ""
                            if (isSubmitted) {
                                colorStyle = colors[colIndex]
                            } else if(isCurrent && hasLetter) {
                                colorStyle = "border-zinc-500 bg-transparent text-white" 
                            } else {
                                colorStyle = "border-zinc-500 bg-transparent"
                            }
                            return (
                                <div key={colIndex} className={`${baseStyle} ${colorStyle}`}>
                                    {hasLetter ? char : ""}
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}