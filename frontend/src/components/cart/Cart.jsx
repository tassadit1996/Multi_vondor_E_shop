import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";


const Cart = ({ setOpenCart }) => {

    const cartData = [
        {
            name: "Iphone 14 pro max 256 gb ssd and 8 gb ram sliver colour",
            description: "test description",
            price: 1000,
        },
        {
            name: "Iphone 14 pro max 256 gb ssd and 8 gb ram sliver colour",
            description: "test description",
            price: 63400,
        },
        {
            name: "Iphone 14 pro max 256 gb ssd and 8 gb ram sliver colour",
            description: "test description",
            price: 3230,
        },
    ]


    return (
        <div className='fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10'>
            <div className='fixed top-0 right-0 h-full w-[80%] 800px:w-[25%] bg-white flex flex-col overflow-y-scroll justify-between shadow-sm'>
                <div >
                    <div className='flex w-full justify-end pt-5 pr-5 '>
                        <RxCross1
                            size={25}
                            className="cursor-pointer"
                            onClick={() => setOpenCart(false)}
                        />
                    </div>
                    {/* item length */}
                    <div className={`${styles.noramlFlex} p-4`}>
                        <IoBagHandleOutline size={25} />
                        <h5 className="pl-2 text-[20px] font-[500]">
                            3 items
                        </h5>
                    </div>

                    {/* Cart Single item */}
                    <br />
                    <div className='w-full border-t'>
                        {
                            cartData && cartData.map((i, index) => {
                                return (
                                    <CartSingle data={i} key={index} />
                                )
                            })
                        }
                    </div>

                    <div className="px-5 mb-3">
                        {/* Check out btn */}
                        <Link to="/checkout">
                            <div
                                className={`h-[45px] flex items-center justify-center w-[100%] bg-[#e44343] rounded-[5px]`}
                            >
                                <h1 className="text-[#fff] text-[18px] font-[600]">
                                    Checkout Now (USD$34345)
                                </h1>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

const CartSingle = ({ data }) => {
    const [value, setValue] = useState(1)
    const totalPrice = data.price * value

    return (
        <>
            <div className='border-b p-4'>
                <div className='w-full flex items-center'>
                    <div>
                        <div
                            className={`bg-[#e44343] border border-[#e4434373] rounded-full w-[25px] h-[25px] ${styles.noramlFlex} justify-center cursor-pointer`}
                            onClick={() => setValue(value + 1)}
                        >
                            <HiPlus size={18}
                                color='#fff'
                            />
                        </div>
                        <span className='pl-[10px]'>
                            {value}
                        </span>
                        <div
                            className="bg-[#a7abb14f] rounded-full w-[25px] h-[25px] flex items-center justify-center cursor-pointer"
                            onClick={() => setValue(value === 1 ? 1 : value - 1)}
                        >
                            <HiOutlineMinus size={16} color="#7d879c" />

                        </div>
                    </div>
                    <img src="https://m.media-amazon.com/images/I/61cwywLZR-L._SL1500_.jpg"
                        className='w-[80px] h-[80px] ml-2 '
                        alt="side card" />

                    <div className='pl-[15px]'>
                        <h1>{data.name}</h1>
                        <h4
                            className='font-[400] text-[15px] text-[#00000082]'
                        >$ {data.price} * {value}</h4>
                        <h4
                            className='font-[400] text-[17px] pt-[3px]  text-[#d02222] font-Roboto '
                        >
                            US${totalPrice}
                        </h4>

                    </div>
                    <RxCross1
                        className='cursor-pointer'
                    />




                </div>

            </div>

        </>
    )
}




export default Cart