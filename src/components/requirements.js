import update from "react-addons-update";

const checkRequireLoop = (planet, section) => {
    const table = []
    for (let i = 0; i < planet[section].length; i++) {
        table.push(planet[section][i].name)
    }
    return table
}

export const checkRequirements = (planet, section) => {
    let updatePlanet = planet
    const table = checkRequireLoop(planet, section)
    for (let i = 0; i < table.length; i++) {
        const index = planet[section].findIndex(name => name.name === table[i])
        if (planet[section][index].requirements.length === 0) {
        }
        if (planet[section][index].requirements.length > 0 && planet[section][index].available === false) {
            const tableCheckRequire = []
            for (let j = 0; j < planet[section][index].requirements.length; j++) {
                const indexRequire = planet[planet[section][index].requirements[j].source].findIndex(name => name.name === planet[section][index].requirements[j].description)
                if (planet[section][index].requirements[j].value <= planet[planet[section][index].requirements[j].source][indexRequire].level) {
                    tableCheckRequire.push(true)
                }
                else {
                    tableCheckRequire.push(false)
                }
            }
            const generalRequire = tableCheckRequire.every(v => v === true)
            if (generalRequire === true) {
                updatePlanet = update(planet, { [section]: { [i]: { available: { $set: 'true' } } } })
            } else {
            }
        }
    }
    return updatePlanet
} 