import { useSelector } from "react-redux"

function Price(){

    
    
    const price = useSelector((state)=>state.cart.totalPrice)
    const totalQuantity = useSelector((state)=>state.cart.items)

    return <div className="w-[300px] sm:mt-0  mt-12 sm:top-12 sm:fixed sm:ml-0 ml-8 mb-14 right-10 h-[300px] p-4 border-2 border-secondryColor">
        <h1 className="">Total Quantity</h1>
        <h1 className=" font-bold">{totalQuantity.length}</h1>
        <h1 className=" mt-8">Total price</h1>
        <h1 className=" font-bold">${price}</h1>
        <button className="bg-secondryColor  px-24 py-2 mt-10 text-primeryColor">Pay Now</button>

        
        

    </div>
}

export default Price