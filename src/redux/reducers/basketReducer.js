const basket = (state = { title: "kong" }, action) => {
    console.log("Action is : ",action)
    switch (action.type) {
        case "ADD_BASKET":
            return {
                ...state,
                title: action.title
            }
        default:
            return state;
    }
}



export default basket;