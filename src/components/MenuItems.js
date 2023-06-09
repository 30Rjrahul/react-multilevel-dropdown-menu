import { useState, useEffect, useRef } from "react";
import DropDown from "./dropdown";

const MenuItem =({item,depthLevel})=>{
    const [dropdown,setDropdown]= useState(false);
    let ref = useRef();

    useEffect(()=>{
        const handler =(event)=>{
            if(dropdown && ref.current && !ref.contains(event.target)){
                setDropdown(false);
            }
        };
        document.addEventListener("mousedown",handler);
        document.addEventListener("touchstart", handler);
        return()=>{
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        }
        
    }, [dropdown]);
    const onMouseEnter = () => {
        window.innerWidth > 960 && setDropdown(true);
       };
       
       const onMouseLeave = () => {
        window.innerWidth > 960 && setDropdown(false);
       };

       return <li 
        className="menu-items"
        ref={ref} 
        onMouseEnter={onMouseEnter} 
        onMouseLeave={onMouseLeave}>
            {item.submenu ? (
                <>
                <button type="button"
                aria-haspopup="menu"
                aria-expanded={dropdown ?"true" :"false"}
                onClick={()=>setDropdown((prev)=>!prev)}>
                    {item.title}{""}
                    {
                        depthLevel >0 ?<span > & raquo:</span>:<span className="arrow"/>
                    }
                </button>
                <DropDown depthLevel={depthLevel} submenu={item.submenu} dropdown={dropdown}/>
                </>

            ):(
                <a href="/#">
                    {item.title}
                </a>
            )
        }

       </li>
    
};
export default MenuItem;