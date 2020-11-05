


function MainLayout() {

  const dropDownLocalStyle = {
    background: '#fff',
    paddingTop:2,
    paddingRight:10,
    paddingBottom:0,
    paddingLeft: 0
      };

   
  return (
   
   <div classname="container-fluid fixed">
				
        {/* Navigation Bar Start */ }
        <div class="navbar main">
			    <a href="index.html?lang=en" class="appbrand"><span>Admin+ <span>lovely headline here</span></span></a>
			
						<button type="button" class="btn btn-navbar">
				    <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span>
			    </button>
						
			<ul class="topnav pull-right">
				<li class="visible-desktop">
					<ul class="notif">
						<li><a href="" class="glyphicons envelope" data-toggle="tooltip" data-placement="bottom" data-original-title="5 new messages"><i></i> 5</a></li>
						<li><a href="" class="glyphicons shopping_cart" data-toggle="tooltip" data-placement="bottom" data-original-title="1 new orders"><i></i> 1</a></li>
						<li><a href="" class="glyphicons log_book" data-toggle="tooltip" data-placement="bottom" data-original-title="3 new activities"><i></i> 3</a></li>
					</ul>
				</li>
				<li class="dropdown visible-desktop">
					<a href="" data-toggle="dropdown" class="glyphicons cogwheel"><i></i>Dropdown <span class="caret"></span></a>
					<ul class="dropdown-menu pull-right">
						<li><a href="">Some option</a></li>
						<li><a href="">Some other option</a></li>
						<li><a href="">Other option</a></li>
					</ul>
				</li>
				<li class="account">
					<a data-toggle="dropdown" href="form_demo.html?lang=en" class="glyphicons logout lock">
						<span class="hidden-phone text">mosaicpro</span><i></i>
					</a>
					
					<ul class="dropdown-menu pull-right">
						<li><a href="form_demo.html?lang=en" class="glyphicons cogwheel">Settings<i></i></a></li>
						<li>
							<span>
								<a class="btn btn-default btn-small pull-right" style={dropDownLocalStyle} href="login.html?lang=en">Sign Out</a>
							</span>
						</li>
					</ul>
				</li>
			</ul>
	
  
  	</div>		
	   {/* Navigation Bar End */ }


	{/*<!-- Start Wrapper  -->  */ }
  <div id="wrapper">

			<div id="menu" class="hidden-phone">
				<div id="menuInner">
					<div id="search">
						<input type="text" placeholder="Quick search ..." />
						<button class="glyphicons search"><i></i></button>
					</div>
					
					<ul>
						<li class="heading"><span>E Shop</span></li>
						<li class="glyphicons search"><a href="finances.html?lang=en"><i></i><span>Search Products</span></a></li>
					</ul>
					<ul>
						<li class="heading"><span>Users</span></li>
						<li class="glyphicons user_add"><a href="finances.html?lang=en"><i></i><span>Create User</span></a></li>
						<li class="glyphicons group"><a href="finances.html?lang=en"><i></i><span>Admin Users</span></a></li>		
					</ul>				
					<ul>
						<li class="heading"><span>Admin</span></li>					
						<li class="glyphicons gift"><a href="finances.html?lang=en"><i></i><span>Create Product</span></a></li>	
						<li class="glyphicons table"><a href="finances.html?lang=en"><i></i><span>Admin Products</span></a></li>									
					</ul>
				</div>
		</div>


		<div id="content">
			


		<div class="innerLR">
				
			<div class="row-fluid">							
				<div class="span12">
					<div class="widget-head">
						<div class="heading-buttons">
							<h3 class="glyphicons gift"><i></i>Products</h3>					
							<div class="clearfix"></div>
						</div>
					</div>
				<hr class="separator bottom" />
				<div class="widget-body" style={{ padding: '10px' }}>
				{/*<!-- --------------------------------------------- -->	*/}
					
				<table class="table table-bordered table-condensed table-striped table-primary table-vertical-center checkboxs">
					<thead>
						<tr>
							<th class="center">No.</th>
							<th class="center">Time</th>
							<th>Client</th>
							<th class="center">Phone</th>
							<th class="center">Amount</th>
							<th class="center">Heard from</th>
							<th class="center" style={{ width: '90px' }} >Actions</th>
						</tr>
					</thead>
					<tbody>
						<tr class="selectable">
							<td class="center">1</td>
							<td class="center">11:00</td>
							<td><strong>Lorem Ipsum</strong><br/><small>Location: Miami</small></td>
							<td class="center">0740000000</td>
							<td class="center">#30</td>
							<td class="center">Friend</td>
							<td class="center">
								<a href="#" class="btn-action glyphicons eye_open btn-info"><i></i></a>
								<a href="#" class="btn-action glyphicons pencil btn-success"><i></i></a>
								<a href="#" class="btn-action glyphicons remove_2 btn-danger"><i></i></a>
							</td>
						</tr>
						<tr class="selectable selected">
							<td class="center">2</td>
							<td class="center">12:00</td>
							<td><strong>Lorem Ipsum</strong><br/><small>Location: Hollywood</small></td>
							<td class="center">0740000000</td>
							<td class="center">#39</td>
							<td class="center">Friend</td>
							<td class="center">
								<a href="#" class="btn-action glyphicons eye_open btn-info"><i></i></a>
								<a href="#" class="btn-action glyphicons pencil btn-success"><i></i></a>
								<a href="#" class="btn-action glyphicons remove_2 btn-danger"><i></i></a>
							</td>
						</tr>
						<tr class="selectable">
							<td class="center">3</td>
							<td class="center">13:00</td>
							<td><strong>Lorem Ipsum</strong><br/><small>Location: Miami</small></td>
							<td class="center">0740000000</td>
							<td class="center">31</td>
							<td class="center">Google Search</td>
							<td class="center">
								<a href="#" class="btn-action glyphicons eye_open btn-info"><i></i></a>
								<a href="#" class="btn-action glyphicons pencil btn-success"><i></i></a>
								<a href="#" class="btn-action glyphicons remove_2 btn-danger"><i></i></a>
							</td>
						</tr>
						<tr class="selectable">
							<td class="center">4</td>
							<td class="center">14:00</td>
							<td><strong>Lorem Ipsum</strong><br/><small>Location: Miami</small></td>
							<td class="center">0740000000</td>
							<td class="center">43</td>
							<td class="center">Google Search</td>
							<td class="center">
								<a href="#" class="btn-action glyphicons eye_open btn-info"><i></i></a>
								<a href="#" class="btn-action glyphicons pencil btn-success"><i></i></a>
								<a href="#" class="btn-action glyphicons remove_2 btn-danger"><i></i></a>
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