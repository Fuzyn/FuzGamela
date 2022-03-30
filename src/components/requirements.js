import update from "react-addons-update";

const checkRequireLoop = (planet, section) => {
    const table = []
    for (let i = 0; i < planet[section].length; i++) {
        table.push(planet[section][i].name)
    }
    return table
}

export const checkRequirements = (planet, section) => {
    const table = checkRequireLoop(planet, section)
    for (let i = 0; i < table.length; i++) {
        const element = document.getElementById(table + '-req')
        if (element.children[0].style.color === 'grey') {
        }
        const tableCheckRequire = []
        if (element.children[0].style.color !== 'grey') {
            for (let j = 0; j < element.children.length; j++) {
                if (element.children[j].style.color === 'red') {
                    tableCheckRequire.push(false)
                }
                if (element.children[j].style.color === 'green') {
                    tableCheckRequire.push(true)
                }
            }
            const generalRequire = tableCheckRequire.every(v => v === true)
            if (generalRequire === true) {
                const changeAvailable = update(planet, { [section]: { [i]: { available: { $set: 'true' } } } })
                console.log(changeAvailable)
                return changeAvailable
            }
        }
    }
}