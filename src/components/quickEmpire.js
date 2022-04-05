import { useState } from "react"
import { planetImg } from './importImages'


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
                    <img src={planetImg[props.planet.id - 1]} alt='planet.img' />
                    {resourceTable.map((resource, index) => (
                        <p className="quick-resources" key={index}>{resource}: {Math.round(props.user.planet[props.planet.id - 1].resources[index][resourcePlanet[index]])}</p>
                    ))}
                    <p className="quick-resources">Energia: {Math.round(energyValue)}</p>
                    <hr />
                    <h1>Budynki:</h1>
                    {props.user.planet[props.planet.id - 1].buildings.map((build, index) => (
                        <div key={index} className='box'>
                            <p>{build.name}{' ⇒ '}{build.level}</p>
                            <p>M: {Math.round(build.cost.metal)}{' '}K: {Math.round(build.cost.cristal)}{' '}D: {Math.round(build.cost.deuter)}{' '}E: {Math.round(build.cost.energy)}</p>
                        </div>
                    ))}
                    <hr />
                    <h1>Badania:</h1>
                    {props.user.planet[props.planet.id - 1].tests.map((test, index) => (
                        <div key={index} className='box'>
                            <p>{test.name}{' ⇒ '}{test.level}</p>
                            <p>M: {Math.round(test.cost.metal)}{' '}K: {Math.round(test.cost.cristal)}{' '}D: {Math.round(test.cost.deuter)}{' '}E: {Math.round(test.cost.energy)}</p>
                        </div>
                    ))}
                </div> :
                '☰'}
        </div>
    )
}

export default QuickEmpire