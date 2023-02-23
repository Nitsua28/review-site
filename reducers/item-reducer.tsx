type Review = {
    author: string
    title: string
    description: string
    rating: number
  }
type Item = {
    itemId: number
    name: string
    description: string
    image: string
    reviews: Review[]
  }
export type ItemListState = {
    items: Item[]
}

export type getAllItems = { type: "GET_ALL_ITEMS", payload: Item[] }
export type requestGetAllItems = {type: "REQUEST_GET_ALL_ITEMS"}

export type ItemListActions = getAllItems | requestGetAllItems

const initialState:ItemListState = {
    items: []
}
export function ItemListReducer(state: ItemListState = initialState, action: ItemListActions): ItemListState{
    const nextState: ItemListState = JSON.parse(JSON.stringify(state));
switch(action.type){
    case "GET_ALL_ITEMS":{
        nextState.items = action.payload;
        return nextState
    }
    
    default:{
        return nextState
    }
    
}
}