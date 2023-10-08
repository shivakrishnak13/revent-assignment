import { PRODUCT_ERROR, PRODUCT_REQUEST, PRODUCT_SEARCH, PRODUCT_SUCCESS } from "./actionType";


const intialstate = {
    isLoading : false,
    isError : false,
    data : [],
    allprods:[]
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
        case PRODUCT_SEARCH:
           return {
            ...state ,
            isLoading : false,
            isError:false,
            allprods :payload
           } 
        default:
            return state;
    }
}