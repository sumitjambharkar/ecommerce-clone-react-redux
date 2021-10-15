import React from 'react';
import './Checkout.css';
import { useSelector,useDispatch } from 'react-redux';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer/addProductReducer';
import Button from '@mui/material/Button';

const Checkout = () => {
    const {basket} = useSelector(state => state.addProductReducer)

  const dispatch = useDispatch()
    
    return (
        <>
        <div className="container checkout">
            <div className="">
                <img src="" alt="" className="checkout_add" />
                 <div className="Check_title">
                     <h2 className="title">Your Product</h2>
                     {
                         basket.map((curr)=>{
                                return(
                                    <div className="check_pro">
                                        <div className="img">
                                        <img Height={80} width={170} src={curr.image} alt="" />
                                        </div>
                                       <div className="name_button">
                                       <p>{curr.name}</p>
                                       <p>Rs.{curr.price}</p>
                                       <Button>
                                       <button onClick={()=>{dispatch({
                                            type:"REMOVE_TO_CART",
                                            payload:curr,
                                        })}}>REMOVE CART</button>
                                       </Button>
                                       </div>
                                    </div>
                                )
                         })
                     }
                     
                 </div>
            </div>
            <div className="subtotal">
                <div>
                <CurrencyFormat 
                value={getBasketTotal(basket)} 
                displayType={'text'} 
                thousandSeparator={true} 
                prefix={'Rs '} 
                renderText={(value) =>(
                <p>Subtotal ({basket.length} items):{value}</p>
                )} />
                <small>
                    <input type="checkbox" />
                    This order contain a gift
                </small>
                </div>
                
                <div className="che_button">
                    <button>Procced to Checkout</button>
                </div>
              

            </div>
        </div>
        
        </>
    )
}

export default Checkout