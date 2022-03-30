const Tech = (props) => {

    const Require = (element) => {
        if (element.requirements.length > 0) {
            return (
                element.requirements.map((req, index) => (
                    <div id={element.name+'req'} key={index} className='tech-req_simple' style={getStyleRequirement(req.description, req.source, req.value)}>
                        <p>{req.description}: {req.value}</p>
                    </div>
                )))
        }
        else {
            return <p style={{ color: 'grey' }}>Brak wymagań!</p>
        }
    }

    const getStyleRequirement = (req, source, level) => {
        const requireElement = getRequireElement(req, source)
        if (requireElement[0].level >= level) {
            return { color: 'green' }
        } else if (requireElement[0].level < level) {
            return { color: 'red' }
        }
    }

    function getRequireElement(req, source) {
        return props.planet[source].filter(
            function (build) { return build.name === req }
        );
    }


    return (
        <div className="content">
            <h1 className="tech-title-h1">Wymagania:</h1>
            <h2 className="tech-title-h2">Budynki:</h2>
            {props.planet.buildings.map((build, index) => (
                <div  key={index} className='tech'>
                    <div className='tech-name'>
                        {build.name}:
                    </div>
                    <div className="tech-req">
                        {Require(build)}
                    </div>
                </div>

            ))}
            <h2 className="tech-title-h2">Badania:</h2>
            {props.planet.tests.map((test, index) => (
                <div key={index} className='tech'>
                    <div className='tech-name'>
                        {test.name}:
                    </div>
                    <div className="tech-req">
                        {Require(test)}
                    </div>
                </div>

            ))}
        </div>
    )
}

export default Tech