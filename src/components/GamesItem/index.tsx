interface cardProps {
  game: {
    id: string;
    title: string;
    coverImageUrl: string;
    description: string;
    year: number;
    imdbScore: number;
    trailerYoutubeUrl: string;
    genres: string;

  }
} 


const Card = ({ game }: cardProps) => {
  return (
    <div className='card'>
      <img src={game.coverImageUrl} className="game-image" alt="Imagem do jogo" />
      <div>
        <h2>{game.title}</h2>
        <p>{game.trailerYoutubeUrl}</p>
        <p>{game.description}</p>
      </div>
    </div>
  )
}

export default Card;