const Users = [{
    fullname : 'admin',
    password: 'admin',
    email: 'admin',
    mobile: '12345'

}];
const loginReducer = (state=Users,action) => {
    console.log("reducer",action.payload);
switch(action.type){

    case 'RegisterUser' : 
    
    state.push(action.payload);
default:
    return state;

}

};

export default loginReducer;