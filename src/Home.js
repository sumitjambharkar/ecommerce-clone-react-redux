import { useSelector,useDispatch } from 'react-redux';
import './App.css';
import Sidebar from './Sidebar.js';
import Footer from './Footer.js';
import Button from '@mui/material/Button';

const Home = () => {

  const {product} = useSelector(state => state.productReducer);

  const dispatch = useDispatch()

    return (
        <>
        <Sidebar/>
        <section className="product">
        <h1 className="text-center">New Product</h1>
    <div className="container page">
      <div className="row">
      {
        product.map((curElement)=>{
          return (
            <>
            <div className="box col-6 col-md-3">
            <img className="img" src={curElement.image} alt="img"/>
            <div className="name">{curElement.name}</div>
            <div className="names">
            <p>Rs.{curElement.price}</p>
            <Button>
            <button onClick={()=>{dispatch({
              type:'ADD_CART',
              payload:curElement,
            })}}>Buy Now</button>
            </Button>
            </div>
            </div>
            </>
          )
        })
      }
    </div>
    </div>
  </section>
  <Footer/>
        </>
    )
}

export default Home
