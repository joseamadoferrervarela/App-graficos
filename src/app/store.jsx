import {configureStore} from "@reduxjs/toolkit";

import  dataReducer  from "../reducers/data/dataSlice.jsx";
import  editReducer  from "../reducers/edit/editSlice.jsx";
import  modalReducer  from "../reducers/modal/modalSlice.jsx";



export const store = configureStore({
   reducer:{
      data:dataReducer,
      edit:editReducer,
      modal:modalReducer
   },
})

// export type RootState= ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

  