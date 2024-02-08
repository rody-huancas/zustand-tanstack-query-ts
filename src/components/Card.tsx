import { Repository } from "../hooks/types";

type CardProps = {
  repository: Repository;
};

export const Card = ({ repository }: CardProps) => {
  return (
    <div>
      <h2>{repository.name}</h2>
      <button>Like</button>
    </div>
  );
};
