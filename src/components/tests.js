import { useEffect, useState } from "react";
import { imgTest } from "./importImages";

const Tests = (props) => {
    const [chosenTest, setChosenTest] = useState(props.planet.tests[0]);

    useEffect(() => {
        let id = chosenTest.id-1;
        let refreshChosenTest = props.planet.tests[id];
        setChosenTest(refreshChosenTest)
    }, [chosenTest.id, props.planet.tests]);

    const handleUp = (e, section) => {
        props.handleUp(e, section)
    };

    const handleDown = (e, section) => {
        props.handleDown(e, section)
    };




    return (
        <div className="content">
            <div className="test-chosen_container">
                <div className='test'>
                    <div>
                        <h1>{chosenTest.name}</h1>
                        <div className='test-title'>
                            <img src={imgTest[chosenTest.id - 1]} alt={chosenTest.name} className='test-img' />
                            <div className='test-level'>{chosenTest.level}</div>
                            <div className='test-middle'>
                                <div className='test-cost'>
                                    <p>Metal: {chosenTest.cost.metal}</p>
                                    <p>Kryształ: {chosenTest.cost.cristal}</p>
                                    <p>Deuter: {chosenTest.cost.deuter}</p>
                                </div>
                                <div className='test-time'>Czas badania: {chosenTest.time} s</div>
                            </div>
                            <div className='test-button'>
                                <button className='test_button-up' onClick={() => handleUp(chosenTest.id - 1, 'tests')}>
                                    up
                                </button>
                                <button className='test_button-down' onClick={() => handleDown(chosenTest.id - 1, 'tests')}>
                                    down
                                </button>
                            </div>
                        </div>
                        <div className='test-description'>
                            {chosenTest.description}
                        </div>
                    </div>
                    <div className='test-function'>
                        {chosenTest.function[0].description}{chosenTest.function[0].value}
                    </div>
                </div>
            </div>
            <div className="test-map_container">
                {props.planet.tests.map((test, index) => (
                    <div key={test.name} className="test-map_single">
                        <div className="test-map_level">{test.level}</div>
                        <img src={imgTest[index]} alt={test.name} className='test-map_img' onClick={() => setChosenTest(props.planet.tests[index])} />
                        <p>{test.name}</p>
                        <div className="test-map_button">
                            <button onClick={() => handleUp(index, 'tests')}>up</button>
                            <button onClick={() => handleDown(index, 'tests')}>down</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Tests;