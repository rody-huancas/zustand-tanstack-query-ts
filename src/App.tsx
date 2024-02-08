import { Card } from "./components/Card";
import { useFetchRepositories } from "./hooks/useRepos";
import { useFavoriteResposStore } from "./store/favoriteRepos";

const App = () => {
  const { data, isLoading } = useFetchRepositories();
  const favoriteReposIds = useFavoriteResposStore(state => state.favoriteReposIds);

  if(isLoading) return <div>Cargando...</div>

  return (
    <>
      {
        data?.map(repo => (
          <Card key={repo.id} repository={repo} isFavorite={favoriteReposIds.includes(repo.id)} /> 
        ))
      }
    </>
  );
};

export default App;
