import MenuItem from './MenuItems';

const DropDown =({submenu,dropdown,depthLevel})=>{
    depthLevel = depthLevel+1;
    const dropDownClass= depthLevel>1?"dropdown-submenu":"";

    return(
        <ul className={`dropdown ${dropDownClass} ${dropdown ? "show":"" }`}>
            {
                submenu.map((submenu,index)=>(
                    <MenuItem items={submenu} key ={index} depthLevel={depthLevel} />

                ))
            }
        </ul>
    )
}
export default DropDown