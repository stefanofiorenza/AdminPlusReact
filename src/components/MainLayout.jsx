import TopNavigationBar from './TopNavigationBar.jsx'
import LeftMenu from './LeftMenu.jsx'
import TablePage from './TablePage.jsx'


function MainLayout() {



   
  return (
   
   <div className="container-fluid ">     
          <TopNavigationBar />
          <div id="wrapper">
              <LeftMenu />
              <div id="content">
                  <TablePage />			
              </div>
            </div>
	</div>

  );
}
export default MainLayout