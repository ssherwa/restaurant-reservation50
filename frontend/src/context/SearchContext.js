import {createContext, useReducer} from 'react';

const INITIAL_STATE = {
    tableNumber: null,
    Booking: null,
}

export const TableContext = createContext(INITIAL_STATE);

const TableReducer = (state, action) => {
    switch (action.type) {
        case "SET_BOOKING":
            return action.payload;
        default:
            return INITIAL_STATE;
    }
}

const TableProvider = ({ children }) => {
    const [state, dispatch] = useReducer(TableReducer, INITIAL_STATE);

    return (
        <TableContext.Provider value={{tableNumber: state.tableNumber, Booking: state.Booking, dispatch}}>
            {children}
        </TableContext.Provider>
    );
};

 export default TableProvider;