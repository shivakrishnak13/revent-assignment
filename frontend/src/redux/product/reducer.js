import { PRODUCT_ERROR, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "./actionType";


const intialstate = {
    isLoading : false,
    isError : false,
    data : []

}

export const reducer = (state=intialstate,{type,payload}) =>{
    switch (type) {
        case PRODUCT_SUCCESS:
           return {
            ...state ,
            isLoading : false,
            isError:false,
            data :payload
           } 
           
        case PRODUCT_REQUEST :
            return {
                ...state ,
                isLoading : true,

            }
        case PRODUCT_ERROR :
            return {
                ...state ,
                isLoading  : false,
                isError :true
            }
        default:
            return state;
    }
}