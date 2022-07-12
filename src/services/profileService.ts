import api from './Api';

const findProfiles ={
    allProfiles: () =>
    api.get('/profile')
    .then((response: any)=>{
        return response 
    }).catch((error: any)=> console.log(error))
}

export {findProfiles}