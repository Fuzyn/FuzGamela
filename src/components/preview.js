import PointsTable from './points';
import {planetImg} from './importImages'


const Preview = (props) => {

  return (
    <div className="content">
      <div className="planet-name">Planeta: {props.planet.name}</div>
      <p className="events">Wydarzenia</p>
      <div className='chosen-planet'>
        <img alt='planet-logo' src={planetImg[props.planet.id - 1]} className='chosen-planet_img' />
        <div className='chosen-planet_points'>
          <PointsTable planet={props.planet} user={props.user} />
        </div>
      </div>
      <div className='planet-group'>
        {props.user.planet.map((planet, index) => (
          <div key={index} className='planet-single' onClick={() => props.handleChange(index)}>
            <img alt='planet-logo' src={planetImg[index]} />
            {planet.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Preview;
