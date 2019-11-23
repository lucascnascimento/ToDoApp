import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({icon, title}) => {
    return (
			<nav>
				<div className='container'>
					<div className='nav-wrapper'>
						<a href="#!" class="brand-logo"><i class="large material-icons">event_available</i>TodoApp</a>
						<ul className="right hide-on-med-and-down">
								<li>
									<div>
										<Link to='/'>Home</Link>
									</div>
								</li>
								<li>
									<div>
										<Link to='/Help'>Help</Link>
									</div>
								</li>
								<li>
									<div>
									<Link to='/About'>About</Link>
									</div>
								</li>
						</ul>
					</div>
				</div>
			</nav>
    )
}

export default Navbar
