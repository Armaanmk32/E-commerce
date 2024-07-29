import { useDispatch, useSelector } from "react-redux"
import Price from "../Components/Price"
import { calculateTotalPrice, removeItemFromCart } from "../Redux/reduce/cart"
import toast from "react-hot-toast"
function Cart(){
    const dispatch = useDispatch()
    const allItems =useSelector((state)=> state.cart.items)

    const handleRemove =(data)=>{
        dispatch(removeItemFromCart(data))
        dispatch(calculateTotalPrice())
        toast.success("the item has been deleted",{
        position:"top-center"})

    }

    

    return allItems.length < 0 ? <p>There is no data</p> : <div className="grid  grid-[200px] justify-center">
        
        


        {
              allItems.map((items)=>{

                return <div className="border-2  gap-9 flex m-2 sm:mt-[45px] items-center border-secondryColor px-4 py-5 sm:w-[500px] w-[350px] h-[160px] rounded">
                    <img className="w-[150px]  h-[130px] rounded " src={items.image} />
                    <div className="">
                        <p>{items.title}</p>
                        <h1 className=" font-bold">${items.price}</h1>
                    </div>
                <h1><i onClick={ ()=>handleRemove(items)} class="fa-solid text-3xl fa-x"></i></h1>


                </div>
            })
        }

        { 

        allItems.length > 0 ? <Price/> : 
        <p className="text-5xl font-bold">the cart is empty</p>
        }


        

        
    





    </div>
}

export default Cart