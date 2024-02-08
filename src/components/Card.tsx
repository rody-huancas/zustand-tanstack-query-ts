import { Repository } from "../hooks/types";
import { useFavoriteResposStore } from "../store/favoriteRepos";

type CardProps = {
  repository: Repository;
  isFavorite: boolean;
};

export const Card = ({ repository, isFavorite }: CardProps) => {

  const addFavorieRepo = useFavoriteResposStore(state => state.addFavorieRepo);
  const removeFavoriteRepo = useFavoriteResposStore(state => state.removeFavoriteRepo);

  const toggleFavorite = () => {
    if(isFavorite) {
        removeFavoriteRepo(repository.id);
        return;
    }

    addFavorieRepo(repository.id);
  }

  return (
    <div>
      <h2>{repository.name}</h2>
      <button onClick={toggleFavorite}>
        {
            isFavorite ? 'Dislike' : 'Like'
        }
      </button>
    </div>
  );
};
