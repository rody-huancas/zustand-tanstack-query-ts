import { Card } from "./components/Card";
import { useFetchRepositories } from "./hooks/useRepos";

const App = () => {
  const { data, isLoading } = useFetchRepositories();

  if(isLoading) return <div>Cargando...</div>

  return (
    <>
      {
        data?.map(repo => (
          <Card key={repo.id} repository={repo} /> 
        ))
      }
    </>
  );
};

export default App;
