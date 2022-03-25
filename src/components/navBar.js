import { Link } from 'react-router-dom'

const NavBar = () => {

  const Navigation = () => {
    return (
      <div className='navigation'>
        <ul>
          <li>
            <Link to='/'>
              PODGLĄD
            </Link>
          </li>
          <li>
            <Link to='empire'>
              IMPERIUM
            </Link>
          </li>
          <li>
            <Link to='buildings'>
              BUDYNKI
            </Link>
          </li>
          <li>
            <Link to='tests'>
              BADANIA
            </Link>
          </li>
        </ul>
      </div>
    )
  }

  return <Navigation />
}

export default NavBar;
