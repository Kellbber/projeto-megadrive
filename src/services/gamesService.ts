import api from './Api'
import swal from 'sweetalert'

const findAllGames ={
    allGames: () =>
    api.get('/games')
    .then((response: any)=>{
        return response;
    })
    .catch((error:any)=> console.log(error))
}

export {findAllGames};