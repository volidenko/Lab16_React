import actionTypes from "../action/actionTypes";
import appDispatcher from "../appDispatcher";
import data from "../db.json";

export function getPosts(){
    appDispatcher.dispatch({
        actionTypes: actionTypes.GET_POST,
        post: data["post"]
    })
}

//export