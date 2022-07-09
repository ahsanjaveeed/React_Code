const CounterReducer = (state, action)=>{

    switch(action){
        case 'INC':
            return state +1 

        case 'DEC':
            return state -1
    }

}

export default CounterReducer;