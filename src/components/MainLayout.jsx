


function MainLayout() {

  const dropDownLocalStyle = {
    background: '#fff',
    paddingTop:2,
    paddingRight:10,
    paddingBottom:0,
    paddingLeft: 0
      };

   
  return (
   
   <div className="container-fluid ">
				
        {/* Navigation Bar Start */ }
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
	   {/* Navigation Bar End */ }


	{/*<!-- Start Wrapper  -->  */ }
  <div id="wrapper">

			<div id="menu" className="hidden-phone">
				<div id="menuInner">
					<div id="search">
						<input type="text" placeholder="Quick search ..." />
						<button className="glyphicons search"><i></i></button>
					</div>
					
					<ul>
						<li className="heading"><span>E Shop</span></li>
						<li className="glyphicons search"><a href="finances.html?lang=en"><i></i><span>Search Products</span></a></li>
					</ul>
					<ul>
						<li className="heading"><span>Users</span></li>
						<li className="glyphicons user_add"><a href="finances.html?lang=en"><i></i><span>Create User</span></a></li>
						<li className="glyphicons group"><a href="finances.html?lang=en"><i></i><span>Admin Users</span></a></li>		
					</ul>				
					<ul>
						<li className="heading"><span>Admin</span></li>					
						<li className="glyphicons gift"><a href="finances.html?lang=en"><i></i><span>Create Product</span></a></li>	
						<li className="glyphicons table"><a href="finances.html?lang=en"><i></i><span>Admin Products</span></a></li>									
					</ul>
				</div>
		</div>


		<div id="content">
			


		<div className="innerLR">
				
			<div className="row-fluid">							
				<div className="span12">
					<div className="widget-head">
						<div className="heading-buttons">
							<h3 className="glyphicons gift"><i></i>Products</h3>					
							<div className="clearfix"></div>
						</div>
					</div>
				<hr className="separator bottom" />
				<div className="widget-body" style={{ padding: '10px' }}>
				{/*<!-- --------------------------------------------- -->	*/}
					
				<table className="table table-bordered table-condensed table-striped table-primary table-vertical-center checkboxs">
					<thead>
						<tr>
							<th className="center">No.</th>
							<th className="center">Time</th>
							<th>Client</th>
							<th className="center">Phone</th>
							<th className="center">Amount</th>
							<th className="center">Heard from</th>
							<th className="center" style={{ width: '90px' }} >Actions</th>
						</tr>
					</thead>
					<tbody>
						<tr className="selectable">
							<td className="center">1</td>
							<td className="center">11:00</td>
							<td><strong>Lorem Ipsum</strong><br/><small>Location: Miami</small></td>
							<td className="center">0740000000</td>
							<td className="center">#30</td>
							<td className="center">Friend</td>
							<td className="center">
								<a href="#" className="btn-action glyphicons eye_open btn-info"><i></i></a>
								<a href="#" className="btn-action glyphicons pencil btn-success"><i></i></a>
								<a href="#" className="btn-action glyphicons remove_2 btn-danger"><i></i></a>
							</td>
						</tr>
						<tr className="selectable selected">
							<td className="center">2</td>
							<td className="center">12:00</td>
							<td><strong>Lorem Ipsum</strong><br/><small>Location: Hollywood</small></td>
							<td className="center">0740000000</td>
							<td className="center">#39</td>
							<td className="center">Friend</td>
							<td className="center">
								<a href="#" className="btn-action glyphicons eye_open btn-info"><i></i></a>
								<a href="#" className="btn-action glyphicons pencil btn-success"><i></i></a>
								<a href="#" className="btn-action glyphicons remove_2 btn-danger"><i></i></a>
							</td>
						</tr>
						<tr className="selectable">
							<td className="center">3</td>
							<td className="center">13:00</td>
							<td><strong>Lorem Ipsum</strong><br/><small>Location: Miami</small></td>
							<td className="center">0740000000</td>
							<td className="center">31</td>
							<td className="center">Google Search</td>
							<td className="center">
								<a href="#" className="btn-action glyphicons eye_open btn-info"><i></i></a>
								<a href="#" className="btn-action glyphicons pencil btn-success"><i></i></a>
								<a href="#" className="btn-action glyphicons remove_2 btn-danger"><i></i></a>
							</td>
						</tr>
						<tr className="selectable">
							<td className="center">4</td>
							<td className="center">14:00</td>
							<td><strong>Lorem Ipsum</strong><br/><small>Location: Miami</small></td>
							<td className="center">0740000000</td>
							<td className="center">43</td>
							<td className="center">Google Search</td>
							<td className="center">
								<a href="#" className="btn-action glyphicons eye_open btn-info"><i></i></a>
								<a href="#" className="btn-action glyphicons pencil btn-success"><i></i></a>
								<a href="#" className="btn-action glyphicons remove_2 btn-danger"><i></i></a>
							</td>
						</tr>
					</tbody>
				</table>
				</div>					
	{/* <!-- --------------------------------------------- -->			*/ }			
				</div>
			</div>	{/*<!-- 1st row fluid -->*/ }		
					
		</div>	{/*<!-- innerLR -->*/ }		
	
			{/*<!-- End Content -->*/ }		
		</div>
		
		</div>
		{/*<!-- End Wrapper  -->  */ }

	</div>

  );
}
export default MainLayout