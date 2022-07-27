import api from "./Api"

import swal from 'sweetalert'
interface Genre{
  name:string;
}
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
const createGenre = {
  create: async (newGenre: Genre)=>
  api
  .post('/genres', newGenre)
  .then((response: any)=> {
    return response;
  })
  .catch((error:any)=>console.log(error))
}
const editGenre ={

  update: async(id:string, newGenre: Genre)=>
  api.patch(`/genres/${id}`,{
    name: newGenre.name
  })
  .then((response:any)=>response)
  .catch((error: any) => {
    swal({
      title: "Erro!",
      text: `${error.message}`,
      icon: "error",
      timer: 7000,
    })
  })
}

const deleteGenre = {
  delete:(id:string)=>
  api.delete(`/genres/${id}`)
  .then((response: any) => response)
  .catch((error: any) => {
    swal({
      title: "Erro!",
      text: `${error.message}`,
      icon: "error",
      timer: 7000,
    })
  })
}
export{findGenres, createGenre, editGenre, deleteGenre}