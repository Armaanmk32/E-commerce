function Header2(){
    return <div className="bg-sky-500 flex p-4 items-center justify-between px-12">
        <h1 className="text-5xl font-bold">E-<span className="text-white">Book</span> </h1>
        <ul className=" flex gap-10">
            <li className="text-2xl">home</li>
            <li className="text-2xl">abou</li>
            <li className="text-2xl">servixe</li>
            <li className="text-2xl">contact</li>
        </ul>
        <form>
            <input className="rounded-full" type="text" placeholder="searching"/>
        </form>
        <i class="fa-brands text-5xl fa-shopify"></i>
    </div>
}
export default Header2