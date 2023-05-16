import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({

    name : 'app' , 

    initialState : {
        isMenuOpen : false 
    }
 ,
    reducers :{

        toggleMenu( state , action ){
            state.isMenuOpen = !(state.isMenuOpen);
        },

        closeMenu : ( state , action ) => {
            state.isMenuOpen = false ;
        }

    }

})


export const { toggleMenu , closeMenu } = AppSlice.actions ;
export default AppSlice.reducer ;