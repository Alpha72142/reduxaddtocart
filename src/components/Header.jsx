import React, { useState } from "react";
import Badge from "@mui/material/Badge";
import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import { useSelector } from "react-redux";

function Header() {

    const getdata = useSelector(state => state.cartreducer.carts);
    console.log(getdata)

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <nav className="navbar bg-dark " style={{ height: 60 }} data-bs-theme="dark">
                <div className="container-fluid mx-5">
                    <NavLink className="text-decoration-none text-light mx-3" to="/">Add to Cart</NavLink>
                    <div className="me-auto" id="navbarNav">
                        <NavLink className="text-decoration-none text-light mx-3" aria-current="page" to="/"> Home </NavLink>
                    </div>
                    <Badge
                        badgeContent={getdata.length}
                        color="primary"
                        id="basic-button"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                    >
                        <i className="fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: "pointer" }}></i>
                    </Badge>
                </div>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >

                    {
                        getdata.length ?
                            <div className="card_details" style={{ width: "24rem", padding: 10 }}>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Photo</th>
                                            <th scope="col">Restaurant Name</th>
                                        </tr>
                                    </thead>
                                    <tbody class="table-group-divider">
                                        {
                                            getdata.map((e) => {
                                                return (
                                                    <tr>
                                                        <td><img src={e.imgdata} alt="" style={{ width: "5rem", height: "5rem" }} /></td>
                                                        <td>
                                                            <p>{e.rname}</p>
                                                            <p>Price : ₹ {e.price}</p>
                                                            <p>Quantity : {e.qnty}</p>
                                                            <p style={{ color: "red", fontSize: 20, cursor: "pointer" }}>
                                                                <i className="fas fa-trash smalltrash"></i>
                                                            </p>
                                                        </td>
                                                        <td className="mt-5" style={{color: "red",fontSize:20 ,cursor: "pointer" }}>
                                                        <i className="fas fa-trash largetrash"></i>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }

                                    </tbody>
                                </table>
                            </div>

                            :
                            <div className="card_details d-flex justify-content-center align-items-center" style={{ width: "24rem", padding: 10, position: "relative" }}>
                                <i className="fas fa-close smallclose" style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }}
                                    onClick={handleClose}
                                ></i>
                                <p style={{ fontSize: 20 }}>Your cart is empty</p>
                                <img src="./cart.gif" alt="" className="emptycart_img" style={{ width: "5rem", padding: 10 }} />
                            </div>
                    }
                </Menu>
            </nav>
        </div>
    );
}

export default Header;
