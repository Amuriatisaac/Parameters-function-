function userCredentials(email,password){
    const validEmail="amuriatisaac@gmail.com";
    const validPassword="22/U/4308/PS@2024";

    if(email===validEmail && password===validPassword){
        console.log(`User email is ${email},login successfully!`);
    }else{
        console.log("Invalid User credentials!");
    }
    

}

userCredentials("amuriatisaac@gmail.com","22/U/4308/PS@2024");