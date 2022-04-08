import { useState } from "react"
import { planetImg, imgBuilding, imgTest, imgFleet, imgDefence } from './importImages'


const QuickEmpire = (props) => {
    const [showEmpire, setShowEmpire] = useState(false)
    const resourceTable = ['Metal', 'Kryształ', 'Deuter']
    const resourcePlanet = ['metal', 'cristal', 'deuter']

    const energyValue =
        props.user.planet[props.planet.id - 1].resources[3].energy +
        props.user.planet[props.planet.id - 1].buildings[3].function[0].value *
        props.user.planet[props.planet.id - 1].resources[3].factor -
        props.user.planet[props.planet.id - 1].buildings[0].cost.energy -
        props.user.planet[props.planet.id - 1].buildings[1].cost.energy -
        props.user.planet[props.planet.id - 1].buildings[2].cost.energy;

    return (
        <div className={showEmpire ? "quick-empire open" : "quick-empire"} onClick={() => setShowEmpire(!showEmpire)}>
            {showEmpire ?
                <div>
                    <div className="quick-empire_header">
                        <img src={planetImg[props.planet.id - 1]} alt='planet.img' />
                        {resourceTable.map((resource, index) => (
                            <p className="quick-resources" key={index}>{resource}: {Math.round(props.user.planet[props.planet.id - 1].resources[index][resourcePlanet[index]])}</p>
                        ))}
                        <p className="quick-resources">Energia: {Math.round(energyValue)}</p>
                    </div>
                    <hr />
                    <h1>Budynki:</h1>
                    {props.user.planet[props.planet.id - 1].buildings.map((build, index) => (
                        <div key={index} className='box'>
                            <img src={imgBuilding[index]} alt={build.name}/>
                            <div>
                                <p>{build.name}{' ⇒ '}{build.level}</p>
                                <p>M: {Math.round(build.cost.metal)}{' '}K: {Math.round(build.cost.cristal)}{' '}D: {Math.round(build.cost.deuter)}{' '}E: {Math.round(build.cost.energy)}</p>
                            </div>
                        </div>
                    ))}
                    <hr />
                    <h1>Badania:</h1>
                    {props.user.planet[props.planet.id - 1].tests.map((test, index) => (
                        <div key={index} className='box'>
                            <img src={imgTest[index]} alt={test.name}/>
                            <div>
                                <p>{test.name}{' ⇒ '}{test.level}</p>
                                <p>M: {Math.round(test.cost.metal)}{' '}K: {Math.round(test.cost.cristal)}{' '}D: {Math.round(test.cost.deuter)}{' '}E: {Math.round(test.cost.energy)}</p>
                            </div>
                        </div>
                    ))}
                    <hr />
                    <h1>Flota:</h1>
                    {props.user.planet[props.planet.id - 1].fleet.map((ship, index) => (
                        <div key={index} className='box'>
                            <img src={imgFleet[index]} alt={ship.name}/>
                            <div>
                                <p>{ship.name}{' ⇒ '}{ship.quantity}</p>
                                <p>M: {Math.round(ship.cost.metal)}{' '}K: {Math.round(ship.cost.cristal)}{' '}D: {Math.round(ship.cost.deuter)}{' '}</p>
                            </div>
                        </div>
                    ))}
                    <hr />
                    <h1>Obrona:</h1>
                    {props.user.planet[props.planet.id - 1].defence.map((defence, index) => (
                        <div key={index} className='box'>
                            <img src={imgDefence[index]} alt={defence.name}/>
                            <div>
                                <p>{defence.name}{' ⇒ '}{defence.quantity}</p>
                                <p>M: {Math.round(defence.cost.metal)}{' '}K: {Math.round(defence.cost.cristal)}{' '}D: {Math.round(defence.cost.deuter)}{' '}</p>
                            </div>
                        </div>
                    ))}
                </div> :
                '☰'}
        </div>
    )
}

export default QuickEmpire