import api from "./Api"

import swal from 'sweetalert'

const findGenres ={
    allGenres: ()=>
    api.get('/genres')
    .then((response:any)=> response)
    .catch((error: any) => {
        swal({
          title: "Erro!",
          text: `${error.message}`,
          icon: "error",
          timer: 7000,
        })
      })
}

export{findGenres}