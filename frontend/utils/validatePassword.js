import { Names } from "./Names.js"

const specialChars = [
    '!',
    '"',
    '#',
    '$',
    '%',
    '&',
    '/',
    '(',
    ')',
    '=',
    '?',
    '¿',
    '¡',
    '*',
    '+',
    '-',
    '_'
]

export function validatePassword(pass) {
    if (pass.length < 8 || pass.length > 15 || pass.includes(" "))
        return false 

    const existeName = Names.some(p => pass.includes(p))
    const existeChar = specialChars.some(p => pass.includes(p))

    if (existeName) return false
    if (!existeChar) return false

    return false
}
