 import { useDispatch } from "react-redux"
 import toast, { Toaster } from 'react-hot-toast';
 import { addItemToCart, calculateTotalPrice } from "../Redux/reduce/cart"
 
 function Product( {items} ){

   
        const dispatch = useDispatch()

        const handleCartItem =()=>{
            dispatch(addItemToCart(items))
            dispatch(calculateTotalPrice())
            toast.success("item has been added",{

                position: "top-center"
            })
        }
    

    return <div id="box" className="border-2   text-secondryColor  p-3   w-full border-secondryColor">
        <img className="rounded   h-[75px] sm:h-[150px]" src= {items.image} />
        <div className="flex justify-between ">
        <h1 className="sm:font-bold sm:text-lg">{items.title.substring(0,0)}</h1>
        <h1 className="sm:font-bold hidden">{items.category.name}</h1>
        </div>
        <div className="flex justify-between ">
            <h1 className="sm:text-2xl   font-semibold">${items.price}</h1>
            {/* <button className="w-[40px] mr-[200px] h-[40px] sm:block hidden text-primeryColor bg-secondryColor text-3xl rounded-full">
            <FontAwesomeIcon icon={faCirclePlus} />
            </button> */}
            <button>
            <i onClick={handleCartItem} id="cartbtn" class="fa-solid fa-circle-plus hidden sm:text-lg"></i>
            </button>
            
        </div>
        <Toaster/>
    </div>
  
}
export default Product