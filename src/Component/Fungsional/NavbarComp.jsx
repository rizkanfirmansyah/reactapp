import React, { useContext, useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import { CartContext } from '../../CartContext';
import { NavLink } from 'react-router-dom';

const NavbarComp = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const { value, setValue } = useContext(CartContext)

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand to="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/mahasiswa">Mahasiswa</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/kelas">Class</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/hooks">Hooks</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/useeffects">Use Effects</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/produk">Product</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/reducer">Reducer</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>
                        <Button color="primary">
                            <i className="fas fa-shopping-cart"></i>
                            <sup> {value}</sup>
                        </Button>
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarComp
