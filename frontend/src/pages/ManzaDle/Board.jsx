export default function Board({ guesses, currentGuess, turn, solution }) {

    const rows = Array.from({length: 6})

    const getColors = (guess) => {
        if (!guess) return Array(5).fill("bg-transparent border-zinc-800")
        
        const result = Array(5).fill("bg-zinc-800 border-zinc-800")
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
        <div className="grid grid-rows-6 gap-2 p-2">
            {rows.map((_, rowIndex) => {
                const isSubmitted = rowIndex < turn
                const isCurrent = rowIndex === turn
                
                let word = ""
                if (isSubmitted) word = guesses[rowIndex]
                else if (isCurrent) word = currentGuess

                const letters = word.padEnd(5, " ").split("")

                const colors = isSubmitted ? getColors(word) : Array(5).fill("")
                return (
                    <div key={rowIndex} className="grid grid-cols-5 gap-2">
                        {letters.map((char, colIndex) => {
                            const hasLetter = char !== " "

                            let baseStyle = "w-14 h-14 sm:w-16 sm:h-16 border-2 flex items-center justify-center text-3xl font-bold text-white uppercase select-none transition-all duration-500"

                            let colorStyle = ""
                            if (isSubmitted) {
                                colorStyle = colors[colIndex]
                            } else if(hasLetter) {
                                colorStyle = "border-zinc-500 bg-transparent text-white" 
                            } else {
                                colorStyle = "border-zinc-800 bg-transparent"
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