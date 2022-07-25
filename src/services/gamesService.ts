import api from './Api'
import swal from 'sweetalert'

interface Games{

    title: string,
    coverImageUrl: string,
    description: string,
    year: number,
    imdbScore: number,
    trailerYoutubeUrl: string,
    gameplayYoutubeUrl: string,
    genreName: string,
}
const findAllGames ={
    allGames: () =>
    api.get('/games')
    .then((response: any)=>{
        return response;
    })
    .catch((error:any)=> console.log(error))
}

const deleteGame ={
    delete: (id:string)=>
    api.delete(`/games/${id}`)
    .then((response: any)=> {
    swal({
        title: "Sucesso!",
        text: `${response.name} deletado!`,
        icon: "success",
        timer: 5000,
      })
    })
    .catch((error:any)=>{
        swal({
            title: "Erro!",
            text: `${error.message}`,
            icon: "error",
            timer: 5000,
          })
    })
}

const updateGame = {
    update: (id: string, game: Games) =>
    api.patch(`/games/${id}`,{
       
        title: game.title,
        coverImageUrl: game.coverImageUrl,
        description: game.description,
        year: game.year,
        imdbScore: game.imdbScore,
        trailerYoutubeUrl: game.trailerYoutubeUrl,
        gameplayYoutubeUrl: game.gameplayYoutubeUrl,
        genreName: game.genreName,
    })
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

export {findAllGames, deleteGame, updateGame};