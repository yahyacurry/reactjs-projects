export const API_KEY = 'AIzaSyD1h1qD3feIBR37HpPasEfKBP8ZFsVGpds';

export const value_converter = (value) =>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}