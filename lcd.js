
const lcdDigitList = require('./digits')

const argv = process.argv.slice(2)

if (argv.length === 0) {
    console.info("Require Number arguement")
} else {
    const numbers = argv[0]
    
    try {
        const numberToDigit = function (number) {
            return lcdDigitList[number]
        }
        console.info(numberToDigit(numbers))
    } catch (err) {
        console.error(err)
        console.info("USAGE")
    }
}