import product from './game.json'
const initialState = {product}

const productReducer =(state=initialState,action)=>{
    switch (action.type) {
        case "PRODUCT":
            return{
                ...state
            }
    
        default:
            return state;
    }


}

export default productReducer;