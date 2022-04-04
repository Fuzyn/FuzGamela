import { imgBuilding } from './importImages';


const Buildings = (props) => {

  const handleUp = (e, section, metal, cristal, deuter) => {
    if (
      metal <= props.user.planet[props.planet.id - 1].resources.metal &&
      cristal <= props.user.planet[props.planet.id - 1].resources.cristal &&
      deuter <= props.user.planet[props.planet.id - 1].resources.deuter) {
      props.handleUp(e, section)
    } else {
      alert('Brak zasobów')
    }
  };

  const handleDown = (e, section) => {
    props.handleDown(e, section)
  };

  function changeAvailabla(index) {
    if (`${props.user.planet[props.planet.id - 1].buildings[index].available}` === 'true') {
      return true
    } else {
      return false
    }
  }

  return (
    <div className="content">
      {props.user.planet[props.planet.id - 1].buildings.map((build, index) => (
        <div id={build.name} key={index} className={changeAvailabla(index) ? 'buildings' : 'building-false'}>
          <div>
            <div className='building-name'>{build.name}</div>
            <div className='building-title'>
              <img src={imgBuilding[index]} alt={build.name} className='building-img' />
              <div className='building-level'>{build.level}</div>
              <div className='building-middle'>
                <div className='building-description'>
                  {build.description}
                </div>
                <div className='building-cost'>
                  <p>Metal: {Math.round(build.cost.metal)}</p>
                  {/* <p>{test(index)}</p> */}
                  <p>Kryształ: {Math.round(build.cost.cristal)}</p>
                  <p>Deuter: {Math.round(build.cost.deuter)}</p>
                </div>
                <div className='building-time'>Czas budowy: {Math.round(build.time)} s</div>

              </div>
              <div className='building-button'>
                <button className='building_button-up' onClick={() => handleUp(index, 'buildings', build.cost.metal, build.cost.cristal, build.cost.deuter)}>
                  up
                </button>
                <button className='building_button-down' onClick={() => handleDown(index, 'buildings')}>
                  down
                </button>
              </div>
            </div>
          </div>
          <div className='building-function'>
            {build.function.map((func, index) => (
              <div key={index}>
                {func.description}
                {Math.round(func.value)}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Buildings;
