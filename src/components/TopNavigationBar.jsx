
function TopNavigationBar() {
  
	const dropDownLocalStyle = {
		background: '#fff',
		paddingTop:2,
		paddingRight:10,
		paddingBottom:0,
		paddingLeft: 0
	};
	
	return (   
	<div className="navbar main">
			<a href="index.html?lang=en" className="appbrand"><span>Admin+ <span>lovely headline here</span></span></a>

					<button type="button" className="btn btn-navbar">
				<span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span>
			</button>
					
		<ul className="topnav pull-right">
			<li className="visible-desktop">
				<ul className="notif">
					<li><a href="" className="glyphicons envelope" data-toggle="tooltip" data-placement="bottom" data-original-title="5 new messages"><i></i> 5</a></li>
					<li><a href="" className="glyphicons shopping_cart" data-toggle="tooltip" data-placement="bottom" data-original-title="1 new orders"><i></i> 1</a></li>
					<li><a href="" className="glyphicons log_book" data-toggle="tooltip" data-placement="bottom" data-original-title="3 new activities"><i></i> 3</a></li>
				</ul>
			</li>
			<li className="dropdown visible-desktop">
				<a href="" data-toggle="dropdown" className="glyphicons cogwheel"><i></i>Dropdown <span className="caret"></span></a>
				<ul className="dropdown-menu pull-right">
					<li><a href="">Some option</a></li>
					<li><a href="">Some other option</a></li>
					<li><a href="">Other option</a></li>
				</ul>
			</li>
			<li className="account">
				<a data-toggle="dropdown" href="form_demo.html?lang=en" className="glyphicons logout lock">
					<span className="hidden-phone text">mosaicpro</span><i></i>
				</a>
				
				<ul className="dropdown-menu pull-right">
					<li><a href="form_demo.html?lang=en" className="glyphicons cogwheel">Settings<i></i></a></li>
					<li>
						<span>
							<a className="btn btn-default btn-small pull-right" style={dropDownLocalStyle} href="login.html?lang=en">Sign Out</a>
						</span>
					</li>
				</ul>
			</li>
		</ul>
	</div>

 );
}

export default TopNavigationBar;
