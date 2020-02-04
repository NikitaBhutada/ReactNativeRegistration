const RegisterUserProfile = (currentUser) =>
{
    console.log("action",currentUser);
    return {type: 'RegisterUser', payload : currentUser}
}

export default RegisterUserProfile;