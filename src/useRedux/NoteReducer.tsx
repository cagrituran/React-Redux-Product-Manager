import { INote } from "../models/INote";
import { ENote } from "./ENote";
import { INoteAction } from "./INoteAction";

export const NoteReducer = (state:INote[]=dummyData(),action:INoteAction) => {
    switch (action.type) {
        case ENote.NOTE_ADD:
        return [...state,action.payload]
            
        
        case ENote.NOTE_DELETE:
        const newArr = [...state]
        const index=newArr.findIndex(item=>item.id==action.payload.id)
        newArr.splice(index,1)
        return newArr;

        
        case ENote.NOTE_LIST:

        return state;    
    
        default:
        return state;
    }
     

}
const dummyData=()=>{
    const arr:INote[]=[
        {id:1,title:"aksam",detail:"kurumsal",date:"04.02.1995"},
        {id:2,title:"sabah",detail:"ozel",date:"05.02.1995"},
        {id:3,title:"ogle",detail:"yan",date:"06.02.1995"},
        {id:4,title:"gece",detail:"on",date:"07.02.1995"},
        {id:5,title:"guz",detail:"arka",date:"11.02.1995"},
        {id:6,title:"yaz",detail:"sol",date:"12.02.1995"},
        {id:7,title:"sonbahar",detail:"sag",date:"15.02.1995"},
        {id:8,title:"kis",detail:"tatil",date:"21.02.1995"},

    ]
    return arr

}