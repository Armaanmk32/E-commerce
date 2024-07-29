import { useSelector } from "react-redux"

import { Link } from "react-router-dom"

import { useState } from "react"

function Header({searching}){

    const numberOfItems=useSelector((state)=> state.cart.items)



    const[menu, setMenu]=useState(false)
    

    const handleMenu =()=>{
        setMenu(true)
    }

    const handleClose =()=>{
        setMenu(false)
    }


    return <div id="box" className="sm:flex fixed w-full justify-between bg-secondryColor text-primeryColor py-6 sm:px-10 items-center font-serif">
        <h1 className="sm:text-4xl  text-2xl  ml-2 font-bold">E-Market</h1>
        <ul style={{display: menu == true ? "block" : ""}}  className=" ml-2 sm:flex hidden sm:pr-24 gap-10">
            <li className="sm:text-3xl">Home</li>
            <li className="sm:text-3xl">About</li>
            
        </ul>
        <form>
            <input onChange={searching} className="bg-primeryColor w-[140px] mr-6 sm:w-[300px] absolute right-16 top-7  sm:p-1 rounded-full text-secondryColor" type="text"placeholder="searching" />
        </form>
        <Link to="/Cart">
        <i style={{display: menu == true ? "block" : ""}}  class="fa-brands sm:text-4xl text-2xl ml-2 sm:flex hidden sm:right-2 sm:top-7  absolute    fa-shopify">{numberOfItems.length}</i>
        </Link>
        <button>

        <i onClick={handleMenu} style={{display: menu == true ? "none" : ""}} class="fa-solid sm:text-4xl text-2xl absolute right-4  top-6 sm:hidden   fa-bars"></i>
        </button>
        <i style={{display: menu == true ? "block" : ""}} onClick={handleClose} class="fa-solid text-2xl absolute right-4 hidden top-6 fa-x"></i>
    </div>
}
export default Header