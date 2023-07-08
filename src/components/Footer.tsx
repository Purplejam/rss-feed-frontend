import {NavStyle, Logo} from './wrappers/NavStyles'
import {Link} from "react-router-dom"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFeed} from '@fortawesome/free-solid-svg-icons'

export const Footer = () => {
	const userIcon = <FontAwesomeIcon icon={faFeed} />
	return(
		<NavStyle>
    <Link to="/">
    <Logo>
      <span>{userIcon}</span>
      <span>NewsFeed</span>
    </Logo>
    </Link>

    <div>
      <ul>
        <li><Link to="/admin-panel">Admin panel</Link></li>
      </ul>          
     </div>
		</NavStyle>
		)
}