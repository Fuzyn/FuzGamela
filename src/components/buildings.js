import { imgBuilding } from './importImages';


const Buildings = (props) => {

  const handleUp = (e, section) => {
    props.handleUp(e, section)
};

const handleDown = (e, section) => {
    props.handleDown(e, section)
};

  return (
    <div className="content">
      {props.planet.buildings.map((build, index) => (
        <div key={index} className='building'>
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
                  <p>Metal: {build.cost[0].metal}</p>
                  <p>Kryształ: {build.cost[0].cristal}</p>
                  <p>Deuter: {build.cost[0].deuter}</p>
                </div>
                <div className='building-time'>Czas budowy: {build.time} s</div>
                
              </div>
              <div className='building-button'>
                <button className='building_button-up' onClick={() => handleUp(index, 'buildings')}>
                  up
                </button>
                <button className='building_button-down' onClick={() => handleDown(index, 'buildings')}>
                  down
                </button>
              </div>
            </div>

          </div>
          <div className='building-function'>
            {build.function[0].description}{build.function[0].value}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Buildings;
