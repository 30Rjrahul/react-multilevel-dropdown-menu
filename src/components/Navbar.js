import { menuItems } from '../menuItems';

import MenuItem from './MenuItems';

const Navbar = () => {
    return (
        <nav>
          <ul className="menus">
            {menuItems.map((menu, index) => {
              const depthLevel =0;
              return <MenuItem item={menu} key ={index} depthLevel={depthLevel}/>
            })} 
          </ul>
        </nav>
      );
  };
  
export default Navbar;