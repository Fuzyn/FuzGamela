const Resources = (props) => {

    const resourceTable = ['Metal', 'Kryształ', 'Deuter']
    const resourcePlanet = ['metal', 'cristal', 'deuter']

    let energyValue =
        props.user.planet[props.planet.id - 1].resources[3].energy  +
        props.user.planet[props.planet.id - 1].buildings[3].function[0].value * 
        props.user.planet[props.planet.id - 1].resources[3].factor -
        props.user.planet[props.planet.id - 1].buildings[0].cost.energy -
        props.user.planet[props.planet.id - 1].buildings[1].cost.energy -
        props.user.planet[props.planet.id - 1].buildings[2].cost.energy;

    const handleChangeExtract = (building, e) => {
        props.handleChangeExtract(e.target.value, building)
    }
    const select = (building) => {
        return (
            <select className="res-select" onChange={handleChangeExtract.bind(this, building)}>
                {[10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((value, index) => (
                    <option key={index} value={`${value / 10}`}>
                        {value * 10}%
                    </option>
                ))}
            </select>
        )
    }

    return (
        <div className="content res">
            <h1 className="resources-title">Produkcja na planecie: {props.planet.name}</h1>
            <table className="table">
                <tbody>
                    <tr>
                        <th style={{ border: 'none', backgroundColor: 'rgba(0,0,0,0)' }}></th>
                        <th>Metal</th>
                        <th>Kryształ</th>
                        <th>Deuter</th>
                        <th>Energia</th>
                        <th>Wydobycie:</th>
                    </tr>
                    <tr>
                        <td>Wydobycie podstawowe:</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>0</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
            <table className="table">
                <tbody>
                    <tr>
                        <td>{props.planet.buildings[0].name} (Poziom: {props.planet.buildings[0].level})</td>
                        <td>{Math.round(props.user.planet[props.planet.id - 1].buildings[0].function[0].value * props.user.planet[props.planet.id - 1].resources[0].factor)}</td>
                        <td>0</td>
                        <td>0</td>
                        <td style={{ color: 'red' }}>-{Math.round(props.planet.buildings[0].cost.energy)}</td>
                        <td>{select(0)}</td>
                    </tr>
                    <tr>
                        <td>{props.planet.buildings[1].name} (Poziom: {props.planet.buildings[1].level})</td>
                        <td>0</td>
                        <td>{Math.round(props.user.planet[props.planet.id - 1].buildings[1].function[0].value * props.user.planet[props.planet.id - 1].resources[1].factor)}</td>
                        <td>0</td>
                        <td style={{ color: 'red' }}>-{Math.round(props.planet.buildings[1].cost.energy)}</td>
                        <td>{select(1)}</td>
                    </tr>
                    <tr>
                        <td>{props.planet.buildings[2].name} (Poziom: {props.planet.buildings[2].level})</td>
                        <td>0</td>
                        <td>0</td>
                        <td>{Math.round(props.user.planet[props.planet.id - 1].buildings[2].function[0].value * props.user.planet[props.planet.id - 1].resources[2].factor)}</td>
                        <td style={{ color: 'red' }}>-{Math.round(props.planet.buildings[2].cost.energy)}</td>
                        <td>{select(2)}</td>
                    </tr>
                    <tr>
                        <td>{props.planet.buildings[3].name} (Poziom: {props.planet.buildings[3].level})</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>{Math.round(props.user.planet[props.planet.id - 1].buildings[3].function[0].value * props.user.planet[props.planet.id - 1].resources[3].factor)}</td>
                        <td>{select(3)}</td>
                    </tr>
                    <tr>
                        <td>Pojemność magazynów:</td>
                        <td>{Math.round(props.planet.buildings[8].function[0].value)}</td>
                        <td>{Math.round(props.planet.buildings[8].function[0].value)}</td>
                        <td>{Math.round(props.planet.buildings[8].function[0].value)}</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>Produkcja po korekcji:</td>
                        <td>{Math.round(props.planet.buildings[0].function[0].value* props.user.planet[props.planet.id - 1].resources[0].factor) + 10}</td>
                        <td>{Math.round(props.planet.buildings[1].function[0].value* props.user.planet[props.planet.id - 1].resources[1].factor) + 10}</td>
                        <td>{Math.round(props.planet.buildings[2].function[0].value* props.user.planet[props.planet.id - 1].resources[2].factor) + 10}</td>
                        {energyValue > 0 ? <td style={{ color: 'green' }}>{Math.round(energyValue)}</td> : <td style={{ color: 'red' }}>{Math.round(energyValue)}</td>}
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
            <table className="table">
                <tbody>
                    <tr>
                        <th>Produkcja w dłuższym okresie:</th>
                        <th>Godzina:</th>
                        <th>Dzień:</th>
                        <th>Tydzień:</th>
                        <th>Miesiąc:</th>
                    </tr>

                    {resourceTable.map((res, index) =>
                        <tr key={index}>
                            <td>{res}</td>
                            <td>{Math.round((props.planet.buildings[index].function[0].value * 3600) + 10)}</td>
                            <td>{Math.round((props.planet.buildings[index].function[0].value * 86400) + 10)}</td>
                            <td>{Math.round((props.planet.buildings[index].function[0].value * 604800) + 10)}</td>
                            <td>{Math.round((props.planet.buildings[index].function[0].value * 18144000) + 10)}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <table className="table">
                <tbody>
                    <tr>
                        <td>Stan magazynów:</td>
                    </tr>

                    {resourceTable.map((res, index) =>
                        <tr key={index}>
                            <td>{res}</td>
                            <td>{Math.round((props.user.planet[props.planet.id - 1].resources[index][resourcePlanet[index]] / props.user.planet[props.planet.id - 1].buildings[8].function[0].value * 100))} %</td>
                            <td className="progress_bar">
                                <div style={{ width: '25vw', height: '1vh' }}>
                                    <div style={{ backgroundColor: 'green', width: `${props.user.planet[props.planet.id - 1].resources[index][resourcePlanet[index]] / props.user.planet[props.planet.id - 1].buildings[8].function[0].value * 100}%`, height: '100%' }} />
                                </div>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Resources