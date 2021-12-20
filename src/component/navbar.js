import React from "react";
import { LOGO, NAVPAGES } from "../constant";
import { HamBurger_Icon, Search_Icon } from "../constant/icons";

const NavLink = ({ page }) => {
	return (
		<header className='Layout_header__2PY83'>
			<div className='Header_header__OkoDL'>
				<div className='Header_logo__1QUnI'>
					<p>{LOGO}</p>
				</div>
				<div className='Header_headerRgt__3jVFa'>
					<div className='Search_search__oTcCS Header_clsSearch__10Hs2'>
						<form>
							<input
								type='text'
								placeholder='Search projects, policies and items'
								className='Search_searchInp__1TmMq'
								value=''
							/>
							<Search_Icon />
						</form>
					</div>
				</div>
			</div>
			<nav>
				<div className='Navigation_containerBg__3trKY'>
					<div className='NavigationItems_NavigationItems__2diZ8'>
						{NAVPAGES.map((nav) => (
							<div
								className={
									nav == page
										? "NavItem_Item__3VGi0 active"
										: "NavItem_Item__3VGi0"
								}>
								<span>{nav}</span>
							</div>
						))}
					</div>
					<div className='Navigation_flex__3al-8'>
						<button className='Button_button__3-u4P Button_primary__24KWs'>
							Login
						</button>
					</div>
				</div>
				<div className='Navigation_containerSm__1ywLt'>
					<div className='Navigation_smTop__3GjYe'>
						<div className='Search_search__oTcCS'>
							<form>
								<input
									type='text'
									placeholder='Search projects, policies and items'
									className='Search_searchInp__1TmMq'
									value=''
								/>
								<Search_Icon />
							</form>
						</div>
						<HamBurger_Icon />
					</div>
					<div className='Navigation_smBottom__2na1G'>
						<div className='NavigationItems_NavigationItems__2diZ8 NavigationItems_navSm__3LXPB'>
							{NAVPAGES.map((nav) => (
								<div
									className={
										nav == page
											? "NavItem_Item__3VGi0 NavItem_itemSm__3UpQl active"
											: "NavItem_Item__3VGi0 NavItem_itemSm__3UpQl"
									}>
									<span>{nav}</span>
								</div>
							))}
						</div>
						<button className='Button_button__3-u4P Button_primary__24KWs'>
							Login
						</button>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default NavLink;
