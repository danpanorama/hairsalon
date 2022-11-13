import * as actionTypes from "../Actions";

const initialState = {
        comments:[],
        len:0
        

    };

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.ADD_COMMENT:
        const allcomments = {...state}; 
       if(action.data){
            allcomments.comments = action.data;
        allcomments.len = allcomments.comments.length;
       }
     

        return allcomments

        case actionTypes.GET_COMMENT:
        const getcomment = {...state}; 
        console.log(action.data)
           getcomment.comments = action.data
           getcomment.len = getcomment.comments.length
        return getcomment

        
    case actionTypes.DELET_COMMENT:
    const deletecomment = {...state}; 
    console.log(deletecomment.comments)
      let arr = deletecomment.comments.filter((ele)=>{
        return ele.id != action.data
       })
       deletecomment.comments = arr
       deletecomment.len = arr.length
      
      return deletecomment

     




    default:
      break;
  }
  return state;
};

export default reducer;
