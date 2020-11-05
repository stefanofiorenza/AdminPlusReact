


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
		
	
	</div>

  );
}
export default MainLayout