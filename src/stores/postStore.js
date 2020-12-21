import {EventEmitter} from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../action/actionTypes";

const CHANGE_EVENT="change";
let post=[];

class PostStore extends EventEmitter{
    addChangeListener(callback){
        this.on(CHANGE_EVENT, callback)
    }
    removeChangeListener(callback){
        this.removeAllListener(CHANGE_EVENT, callback);
    }
    emitChange(){
        this.emit(CHANGE_EVENT);
    }
    getPosts(){
        return _posts;
    }
}

const postStore=new PostStore();

// dispatcher.register(action=>{
//     switch
// }