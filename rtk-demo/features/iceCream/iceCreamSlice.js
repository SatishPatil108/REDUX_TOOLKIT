const { cakeActions } = require('../cake/cakeSlice');

const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
    numOfIceCreams : 20,
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers : {
        ordered: (state) => { 
            state.numOfIceCreams--;
        },

        restocked: (state, action) => {
            state.numOfIceCreams += action.payload;
        },
    },
    // extraReducers: {
    //    ['cake/ordered']:  (state, action) => {
    //         state.numOfIceCreams--;
    //    }
    // }

    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, state => {
            state.numOfIceCreams--;
        })
    }
})

module.exports = icecreamSlice.reducer;
module.exports.iceCreamActions = icecreamSlice.actions;