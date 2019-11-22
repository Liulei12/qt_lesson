
const defaultList = [
    {
        name:'Ipad',
        count:3,
        price:10,
        checked:false
    },
    {
        name:'Ipone',
        count:3,
        price:30,
        checked:false
    }

]
function shopCart(state,action){
    switch (action.type){
        case 'TOGGLE_CHECKED':
            return state.map((good,i) => {
                if(i === action.index){
                    return {
                        ...good,
                        checked:action.checked
                    }
                }
                return good;
            })
            case 'DEL':
                return state.filter((good,i) => {
                    return i !== action.index
                })
        default:
            return defaultList
    }
}

export default shopCart