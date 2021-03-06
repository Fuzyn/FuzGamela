const PointsTable = (props) => {

    const buildingPoints = props.user.planet.map((planet) =>
        planet.buildings.map((build) =>
            build.level * build.points)
    )

    const testPoints = props.user.planet.map((planet) =>
        planet.tests.map((test) =>
            test.level * test.points)
    )

    const pointFlatSum = (table) => table.flat().reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
    })

    return (
        <div className="points-main">
            <p>Punkty:</p>
            <table className="points-main_table">
                <tbody>
                    <tr>
                        <th>{''}</th>
                        <th>Ilość punktów:</th>
                    </tr>
                    <tr>
                        <td>Budynki:</td>
                        <td className="points-main_point">{Math.round(pointFlatSum(buildingPoints))}</td>
                    </tr>
                    <tr>
                        <td>Badania:</td>
                        <td className="points-main_point">{Math.round(pointFlatSum(testPoints))}</td>
                    </tr>
                    <tr>
                        <td>Flota:</td>
                        <td className="points-main_point">{Math.round(pointFlatSum(props.user.planet.map((planet) => planet.fleet.map((fleet) => fleet.sumPoints))))}</td>
                    </tr>
                    <tr>
                        <td>Obrona:</td>
                        <td className="points-main_point">{Math.round(pointFlatSum(props.user.planet.map((planet) => planet.defence.map((defence) => defence.sumPoints))))}</td>
                    </tr>
                </tbody>
            </table>
            <p>Punkty za planetę:</p>
            <table className="points-main_table">
                <tbody>
                    <tr>
                        <th>{''}</th>
                        <th>Ilość punktów:</th>
                    </tr>
                    <tr>
                        <td>Budynki:</td>
                        <td className="points-main_point">{Math.round(pointFlatSum(buildingPoints[props.planet.id - 1]))}</td>
                    </tr>
                    <tr>
                        <td>Badania:</td>
                        <td className="points-main_point">{Math.round(pointFlatSum(testPoints[props.planet.id - 1]))}</td>
                    </tr>
                    <tr>
                        <td>Flota:</td>
                        <td className="points-main_point">{Math.round(pointFlatSum(props.user.planet[props.planet.id - 1].fleet.map((fleet) => fleet.sumPoints)))}</td>
                    </tr>
                    <tr>
                        <td>Obrona:</td>
                        <td className="points-main_point">{Math.round(pointFlatSum(props.user.planet[props.planet.id - 1].defence.map((defence) => defence.sumPoints)))}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default PointsTable;