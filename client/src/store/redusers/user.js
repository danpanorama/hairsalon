import * as actionTypes from "../Actions";

const initialState = {
        email:'',
        name:''
        

    };

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actionTypes.CONNECT:
        const user = {...state}; 
        
        user.email = action.data.email;
        user.name = action.data.name;
        return user


        case actionTypes.LOGUOT:
        const logout = {...state}; 
        
        localStorage.setItem('user','')
           logout.email = ""
           logout.name = ''
        return logout

        case actionTypes.STILL:
          const still = {...state}; 
          let str = localStorage.getItem('user');
          if(str == undefined ||str == 'undefined' || str == ''){
         return still
          }
          else{
            let obj = JSON.parse(str);
            if(obj && obj.length > 0){
             still.name = obj.name;
             still.email = obj.email
            }
          }
          return still

    default:
      break;
  }
  return state;
};

export default reducer;
