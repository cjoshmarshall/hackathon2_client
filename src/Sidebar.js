import { Link} from "react-router-dom";
import {Dropdown} from "react-bootstrap";

function Sidebar(){
    return<>
        <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        <div className="sb-sidenav-menu-heading">Core</div>
                        <Link to="/" className="nav-link">
                            <div className="sb-nav-link-icon"><i className="fas fa-home"></i></div>
                            Home
                        </Link>
                        <div className="sb-sidenav-menu-heading">Interface</div>
                        <Dropdown>
                                <Dropdown.Toggle variant="" className="text-light">
                                <i className="fas fa-money-check-alt"></i> Income &amp; Expenses
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                <Dropdown.Item><Link to="/weekly" className="nav-link text-dark">week wise</Link></Dropdown.Item>
                                <Dropdown.Item><Link to="/monthly" className="nav-link text-dark">Month wise</Link></Dropdown.Item>
                                <Dropdown.Item><Link to="/yearly" className="nav-link text-dark">year wise</Link></Dropdown.Item> 
                              </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <div className="sb-sidenav-footer">
                    <div className="small">Logged in as:</div>
                    Admin
                </div>
            </nav>
        </div>
    </>;
}
export default Sidebar;