//import Function from './Component/Function';

import Slide from "./slide";
import Supplier from "./Suppliers";



function SideBar() {
//     const AddSup=()=>{
//    alert("hello");
//     }
    return (
        
        <>

            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                            <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                <span className="fs-5 d-none d-sm-inline">Menu</span>
                            </a>
                            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="cmd">
                                <li className="nav-item">
                                    <a className="nav-link align-middle px-0">
                                        <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Commend Section</span>
                                    </a>
                                </li>
                                <li>
                                    <a data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                        <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Overview</span>
                                    </a>

                                </li>
                                <li>
                                    <a className="nav-link px-0 align-middle">
                                        <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Supplier Finacial Risk</span></a>
                                </li>
                                <li>
                                    <a data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                                        <i className="fs-4 bi-bootstrap"></i> <span className="ms-1 d-none d-sm-inline">Inteligents</span></a>
                                </li>
                                <li>
                                    <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-midle">
                                       
                                        <i className="fs-4 bi-grid"></i> <span className="ms-1 d-none d-sm-inline" id="">Supplier Relationship Manager</span> </a>

                                </li>
                                <li>
                                    <a className="nav-link px-0 align-middle">
                                        <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Settings</span> </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                   
                    {/* <div style={{maxWidth:80}} >
            <h4 className="col-md-4">Supplier Relationship Manager</h4>
            <div className="col-md-2"><label >search</label><input type="search" name="text" id="supplier" /></div>
            <div>
           <h4 style={{textAlign:'left'}}>Supplier</h4>
           
          
        </div>
        </div> */}
        <Supplier />
        {/* <Slide /> */}
        
                </div>
            </div>
        </>
    )
}

export default SideBar;