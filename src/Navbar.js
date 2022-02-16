import {Dropdown} from "react-bootstrap";

function Navbar(){
    return<>
    <nav className="sb-topnav navbar navbar-expand navbar-light bg-light">
            <button className="d-lg-none btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars"></i></button>
            <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div className="input-group">
                    <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                    <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i className="fas fa-search"></i></button>
                </div>
            </form>
            <Dropdown>
                <Dropdown.Toggle variant="link">
                    <i className="fas fa-user fa-fw"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#">Settings</Dropdown.Item>
                    <Dropdown.Item href="#/">Activity Log</Dropdown.Item>
                    <Dropdown.Item href="#">Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown> 
        </nav>
    </>;
}
export default Navbar;