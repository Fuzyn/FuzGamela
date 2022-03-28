import { useState } from "react";
import { planetImg } from "./importImages";

const Empire = (props) => {
    const [openResources, setOpenResources] = useState(false)
    const [openBuildings, setOpenBuildings] = useState(false)
    const [openTests, setOpenTests] = useState(false)
    return (
        <div className="content empire">
            {props.user.planet.map((planet, index) => (
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
                            <tbody><tr>
                                <td>Metal:</td>
                                <td>{Math.round(planet.resources.metal)} / {planet.buildings[8].function[0].value}</td>
                            </tr>
                                <tr>
                                    <td>Kryształ:</td>
                                    <td>{Math.round(planet.resources.cristal)} / {planet.buildings[8].function[0].value}</td>
                                </tr>
                                <tr>
                                    <td>Deuter:</td>
                                    <td>{Math.round(planet.resources.deuter)} / {planet.buildings[8].function[0].value}</td>
                                </tr>
                                <tr>
                                    <td>Energia:</td>
                                    <td>{Math.round(planet.resources.energy)}</td>
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
                </div>
            ))}
        </div>
    )
}

export default Empire;
