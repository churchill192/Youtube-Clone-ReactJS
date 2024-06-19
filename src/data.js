export const API_KEY = 'AIzaSyAPAZUIv06uU43SdctcCcq48Yzy8cT0OBc'

export function value_converter(value){
    if (value >= 1000000){
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}