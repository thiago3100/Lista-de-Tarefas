import { v4 as uuidv4} from 'uuid'
import { useReducer } from 'react';

type Tasks = {
    id:string;
    name:string;
}
type ActionPersons = {
    type:string;
    payload?: {
        name?:string;
        id?:string;
    }
};
const initialState: Tasks[] = [];

const reducer = (state: Tasks[], action: ActionPersons) => {
       switch(action.type){
        case 'ADD':
            if(action.payload?.name){
                const newState = [...state];
                state.push({
                    id: uuidv4(),
                    name: action.payload?.name 
            });
            return newState;
        }
           break; 
           case 'DEL':
               if(action.payload?.id){
                    let newState = [...state];
                    newState = newState.filter(item => item.id !== action.payload?.id)
                    return newState;
             }
           break;
           case 'ORER':
                let newState = [...state];
                newState = newState.sort((a, b)=> (a.name > b.name) ? 1 : -1 );
                return newState;
           break;  
       }
       return state; 
}
      
export const People = () => {
     return useReducer(reducer, initialState);
}