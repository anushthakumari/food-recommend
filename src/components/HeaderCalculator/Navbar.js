import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { MdFoodBank } from "react-icons/md";
// import { IoMdMenu } from "react-icons/io";
// import { useSidebarContext } from "../../context/sidebarContext";

const Navbar = () => {
	// const { openSidebar } = useSidebarContext();

	return (
		<nav className={`navbar bg-green flex align-center`}>
			<div className="container w-100">
				<div className="navbar-content text-white">
					<div className="brand-and-toggler flex align-center justify-between">
						<Link to="/" className="navbar-brand fw-3 fs-22 flex align-center">
							<MdFoodBank />
							<span className="navbar-brand-text fw-7">replaceEat.</span>
						</Link>
						{/* <div className="navbar-btns flex align-center">
							<button
								type="button"
								className="navbar-show-btn text-white"
								onClick={() => openSidebar()}>
								<IoMdMenu size={27} />
							</button>
						</div> */}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
