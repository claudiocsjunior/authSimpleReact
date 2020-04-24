export function signIn(){
    return new Promise( resolve => {
       setTimeout( () => {
           resolve({
               token: 'jkahdahsdakjshdaskjdfhsdfkhsdlkfh9o8riuerweryweriu',
               user: {
                   name: 'Claudio',
                   email: 'claudiocruzsilva10@gmail.com'
               }
           })
       }, 2000) 
    });
}