import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

import M from "materialize-css/dist/js/materialize.min.js";
import '../../css/style.css'


const Navbar = ({icon, title}) => {
		useEffect(() => {
			// Init Tabs Materialize JS
			// let btnCollapse = document.querySelectorAll(".sidenav");
			// M.Sidenav.init(btnCollapse);
			// console.log('ok')
			var elems = document.querySelectorAll('.sidenav');
    	var instances = M.Sidenav.init(elems);
		});

    return (
			<div>
				<nav className='teal darken-2'>
					<div className='container'>
						<div className='nav-wrapper'>
							<div className="">
								<a href="" className="brand-logo">
									<i className="tiny material-icons hide-on-med-and-down">{icon}</i>
									{title}
								</a>
							</div>
							{/* Hamburguer menu button */}
							<a className="hide-on-large-only sidenav-trigger cursor-pointer" data-target='slide-out'>
								<i className='material-icons'>menu</i>
							</a>
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

				{/* Side Nav */}
				<ul id="slide-out" className="sidenav">
						<li>
								<Link to='/'>Home</Link>
						</li>
						<li>
								<Link to='/Help'>Help</Link>
						</li>
						<li>
							<Link to='/About'>About</Link>
						</li>
				</ul>
			</div>
    )
}

export default Navbar
