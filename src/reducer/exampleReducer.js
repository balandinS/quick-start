import { EXAMPLE_ACTION } from '../action/types'


export default (state= "", action)=>{
      switch(action.type){
          case EXAMPLE_ACTION: 
           return action.payload
        default: 
         return state
      }
}