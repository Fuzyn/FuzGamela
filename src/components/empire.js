import { useState } from "react";
import { planetImg } from "./importImages";

const Empire = (props) => {

    const energyValue =
        props.user.planet[props.planet.id - 1].resources[3].energy +
        props.user.planet[props.planet.id - 1].buildings[3].function[0].value * 
        props.user.planet[props.planet.id - 1].resources[3].factor -
        props.user.planet[props.planet.id - 1].buildings[0].cost.energy -
        props.user.planet[props.planet.id - 1].buildings[1].cost.energy -
        props.user.planet[props.planet.id - 1].buildings[2].cost.energy;

    const Planet = (planet, index) => {
        const [openResources, setOpenResources] = useState(false)
        const [openBuildings, setOpenBuildings] = useState(false)
        const [openTests, setOpenTests] = useState(false)
        const [openFleet, setOpenFleet] = useState(false)
        const [openDefence, setOpenDefence] = useState(false)

        return (
            <div key={index} className='empire-column'>
                    <img alt="planet" src={planetImg[index]} />
                    <h1>{planet.name}</h1>
                    <p
                        onClick={() => setOpenResources((prev) => !prev)}
                        className={openResources ? 'empire_title-is-open' : 'empire_title'}>
                        Zasoby:
                    </p>
                    {openResources ?
                        <table>
                            <tbody>
                                <tr>
                                    <td>Metal:</td>
                                    <td>{Math.round(planet.resources[0].metal)}</td>
                                </tr>
                                <tr>
                                    <td>Kryształ:</td>
                                    <td>{Math.round(planet.resources[1].cristal)}</td>
                                </tr>
                                <tr>
                                    <td>Deuter:</td>
                                    <td>{Math.round(planet.resources[2].deuter)}</td>
                                </tr>
                                <tr>
                                    <td>Energia:</td>
                                    <td>{Math.round(energyValue)}</td>
                                </tr>
                            </tbody>
                        </table> : <></>}
                    <p
                        onClick={() => setOpenBuildings((prev) => !prev)}
                        className={openBuildings ? 'empire_title-is-open' : 'empire_title'}>
                        Budynki:
                    </p>
                    {openBuildings ?
                        planet.buildings.map((build, index) => (
                            <table key={index}>
                                <tbody>
                                    <tr>
                                        <td>{build.name}</td>
                                        <td>{build.level}</td>
                                    </tr>
                                </tbody>
                            </table>
                        )) : <></>}
                    <p
                        onClick={() => setOpenTests((prev) => !prev)}
                        className={openTests ? 'empire_title-is-open' : 'empire_title'}>
                        Badania:
                    </p>
                    {openTests ?
                        planet.tests.map((test, index) => (
                            <table key={index}>
                                <tbody>
                                    <tr>
                                        <td>{test.name}</td>
                                        <td>{test.level}</td>
                                    </tr>
                                </tbody>
                            </table>
                        )) : <></>}
                        <p
                        onClick={() => setOpenFleet((prev) => !prev)}
                        className={openFleet ? 'empire_title-is-open' : 'empire_title'}>
                        Flota:
                    </p>
                    {openFleet ?
                        planet.fleet.map((ship, index) => (
                            <table key={index}>
                                <tbody>
                                    <tr>
                                        <td>{ship.name}</td>
                                        <td>{ship.quantity}</td>
                                    </tr>
                                </tbody>
                            </table>
                        )) : <></>}
                        <p
                        onClick={() => setOpenDefence((prev) => !prev)}
                        className={openDefence ? 'empire_title-is-open' : 'empire_title'}>
                        Obrona:
                    </p>
                    {openDefence ?
                        planet.defence.map((defence, index) => (
                            <table key={index}>
                                <tbody>
                                    <tr>
                                        <td>{defence.name}</td>
                                        <td>{defence.quantity}</td>
                                    </tr>
                                </tbody>
                            </table>
                        )) : <></>}
                </div>
        )
    }

    return (
        <div className="content empire">
            {props.user.planet.map((planet, index) => (
                Planet(planet, index)
            ))}
        </div>
    )
}

export default Empire;
