import { useState } from "react"
import { planetImg } from './importImages'


const QuickEmpire = (props) => {
    const [showEmpire, setShowEmpire] = useState(false)
    const resourceTable = ['Metal', 'Kryształ', 'Deuter', 'Energia']
    const resourcePlanet = ['metal', 'cristal', 'deuter', 'energy']

    return (
        <div className={showEmpire ? "quick-empire open" : "quick-empire"} onClick={() => setShowEmpire(!showEmpire)}>
            {showEmpire ?
                <div>
                    <img src={planetImg[props.planet.id - 1]} alt='planet.img' />
                    {resourceTable.map((resource, index) => (
                        <p className="quick-resources" key={index}>{resource}: {Math.round(props.planet.resources[resourcePlanet[index]])}</p>
                    ))}
                    <hr />
                    <h1>Budynki:</h1>
                    {props.planet.buildings.map((build, index) => (
                        <div key={index} className='box'>
                            <p>{build.name}{' ⇒ '}{build.level}</p>
                            <p>M: {Math.round(build.cost.metal)}{' '}K: {Math.round(build.cost.cristal)}{' '}D: {Math.round(build.cost.deuter)}{' '}E: {Math.round(build.cost.energy)}</p>
                        </div>
                    ))}
                    <hr />
                    <h1>Badania:</h1>
                    {props.planet.tests.map((test, index) => (
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