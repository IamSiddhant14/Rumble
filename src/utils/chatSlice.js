import { createSlice } from '@reduxjs/toolkit';
import { CHAT_OOFSET } from './constants';

const chatSlice = createSlice({

    name : 'chat',

    initialState :{
        messages : []
    },
    
    reducers : {
          
        addMessage : ( state , action ) => {

            if( state.messages.length > 0 ){
                state.messages.splice(CHAT_OOFSET , 1 );
            }

            state.messages.unshift(action.payload);
        }

    }
})

export const { addMessage } = chatSlice.actions ;
export default chatSlice.reducer ;
