import axios from "axios"
import { useEffect, useState } from "react"
import Product from "./Product"
import { ClipLoader } from "react-spinners"
import Header from "./Header"
function PriductList(){


   




    

    const[data, setData]= useState([])
    const[searching, setSearching]=useState("")

    const[loading, setLoading]=useState(false)

    const handleSearching=(event)=>{
        setSearching(event.target.value)
    }

    const getAllproduct = ()=>{
        setLoading(true)
        axios.get("https://fakestoreapi.com/products").then((Response)=>{
            setData(Response.data)
            setLoading(false)

        }).catch((error)=>{
            console.log(error)
        })
    
    } 


    useEffect(()=>{
        getAllproduct()
    },[])
    


    return <div>
        <Header searching={handleSearching} />
        {
     loading === true? <ClipLoader className="ml-[630px] mt-[200px]" loading={loading}/> : <div  className="pt-32 grid grid-cols-[180px_180px] sm:grid-cols-[220px_220px_220px_220px] gap-4 justify-center">
        {
            data.filter(( products )=>{
                return searching.toLowerCase() == ""? products:
                products.title.toLowerCase().includes(searching.toLowerCase())
            }).map((items)=>{
                return <Product  items={items}/>

            })
        }

    </div>
    }
    </div>
    
}
export default PriductList