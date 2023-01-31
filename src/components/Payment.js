import React, {useContext} from 'react'
import styled from 'styled-components';
import {AiFillPlusCircle, AiFillMinusCircle} from 'react-icons/ai'
import {MdDelete} from 'react-icons/md'
import { ShopContext } from './Colab/Menu/shop-context';
import { cases } from './data';
import {auth} from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = styled.section`
overflow-x: auto;
margin: 20px 60px;

h1{
  text-align: center;
  text-transform: uppercase;
  font-size: 35px;
  margin-bottom: 50px;
  background: #8e2de2;
  background: -webkit-linear-gradient(to right, #8e2de2, #4a00e0);
  background: linear-gradient(to right, #8e2de2, #4a00e0);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}

h2{
  text-align: center;
  text-transform: uppercase;
  font-size: 35px;
  margin-bottom: 50px;
  color: #FF0000;
}

h3{
  text-transform: lowercase;
  color: #FF0000;
  margin-top: 1rem;
  text-align: center;
  font-size: 2rem;
}

table{
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  white-space: nowrap;

  img{
    width: 200px;
  }

  td{
    &:nth-child(1){
      width: 100px;
      text-align: center;
    }
    &:nth-child(2){
      width: 150px;
      text-align: center;
    }
    &:nth-child(3){
      width: 250px;
      text-align: center;
    }
    &:nth-child(4),
    &:nth-child(5),
    &:nth-child(6){
      width: 150px;
      text-align: center;
    }
  }

  i{
    font-size: 40px;
    color: #FF0000;
    cursor: pointer;
  }

  span{
    font-size: 25px;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    cursor: pointer;
  }

  thead{
    border: 1px solid #e2e9e1;
    border-left: none;
    border-right: none;

    td{
      text-transform: uppercase;
      font-size: 15px;
      padding: 18px 0;
    }
  }

  tbody{
    td{
      padding-top: 20px;
    }
  }
}

@media (max-width: 477px){
  flex-direction: column;
}
`

const Stotal = styled.section`
margin: 20px 100px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;

@media (max-width: 477px){
  flex-direction: column;
}
`
const Coupon = styled.div`
width: 50%;
margin-bottom: 30px;

h3{
  padding-bottom: 15px;
}
input{
  padding: 10px 20px;
  outline: none;
  width: 60%;
  margin-right: 10px;
  border: 1px solid #e2e9e1;
}
button{
  border: none;
  background: #00f260; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #00f260, #0575e6); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #00f260, #0575e6);
  color: #fff;
  padding: 12px 20px;
  cursor: pointer;
}

@media (max-width: 477px){
  width: 100%;
}
`

const Subtotal = styled.div`
width: 50%;
margin-bottom: 30px;
border: 1px solid #e2e9e1;
padding: 30px;

h3{
  padding-bottom: 15px;
}

button{
  border: none;
  background: #00f260; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #00f260, #0575e6); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #00f260, #0575e6);
  color: #fff;
  padding: 12px 20px;
  cursor: pointer;
}

table{
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 20px;

  td{
    width: 50%;
    border: 1px solid #e2e9e1;
    padding: 10px;
    font-size: 14px;
  }
}

@media (max-width: 477px){
  width: 100%;
  padding: 20px;
}
`

const Btn = styled.button`
display: flex;
background-color: #5d26c1;
color: #fff;
outline: none;
border: none;
text-decoration: none;
margin-left: auto;
margin-right: auto;
font-size: 18px;
font-family: 'Nunito', sans-serif;
padding: 0.6rem 2rem;
border-radius: 50px;
cursor: pointer;
transition: all 0.2s ease;
margin-top: 50px;
margin-bottom: 50px;

&:hover{
    transform: scale(0.9);
}

&::after{
    content: ' ';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid #5d26c1;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.2s ease;
}

&:hover::after{
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
}
`

const Payment2 = () => {
  const [user] = useAuthState(auth);
  const {cartItems, addToCart, removeFromCart, removeItem, getTotalCartAmount} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const handleAlert = () => {
    toast.success('Remove successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  const signOut = () => {
    toast.success('Sign Out successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    auth.signOut();
  }

  return (
    <div>
      <Cart>
        {totalAmount > 0 ? (
          <>
          {user && <h1>Welcome{user.displayName}</h1>}
          <h1>Your bag</h1>
        <ToastContainer/>
        <table width="100%">
          <thead>
            <tr>
              <td>Remove</td>
              <td>Image</td>
              <td>Product</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Subtotal</td>
            </tr>
          </thead>
          <tbody>
            {cases.map((item) => {
              const {id, img, title, price} = item;
              if(cartItems[id] !== 0){
                return(
                  <tr key={id}>
                    <td><i onClick={() =>  removeItem(id)}><MdDelete onClick={handleAlert}/></i></td>
                    <td><img src={img} alt=''/></td>
                    <td>{title}</td>
                    <td>RM {price}</td>
                    <td>
                      <span>
                        <AiFillMinusCircle onClick={() => removeFromCart(id)}/>
                          </span>{cartItems[id]}<span>
                        <AiFillPlusCircle onClick={() => addToCart(id)}/>
                      </span>
                    </td>
                    <td>RM {price*cartItems[id]}</td>
                  </tr>
                )
              }
            })}
          </tbody>
        </table>
        </>
        ) : (
          <Cart>
            {user && <h1>Welcome {user.displayName}</h1>}
              <h2>Your bag</h2>
              <h3>is currently empty</h3>
          </Cart>
        )}
      </Cart>

      {user && <Btn onClick={signOut}>Sign Out</Btn>}
      <Stotal>
        <Coupon>
          <h3>Apply Coupon</h3>
          <div>
            <input type="text" placeholder="Enter Your Coupon"/>
            <button>Apply</button>
          </div>
        </Coupon>

        <Subtotal>
          <h3>Cart Total</h3>
          <table>
            <tr>
              <td>Cart Subtotal</td>
              <td>RM {totalAmount.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>Free</td>
            </tr>
            <tr>
              <td><strong>Total</strong></td>
              <td><strong>RM {totalAmount.toFixed(2)}</strong></td>
            </tr>
          </table>
          <button>Proceed to checkout</button>
        </Subtotal>
      </Stotal>
    </div>
  )
}

export default Payment2