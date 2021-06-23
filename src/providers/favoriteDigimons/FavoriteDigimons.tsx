import { createContext, ReactNode, useContext, useState } from "react";
import { Digimon } from "../../types/Digimon";

interface FavoriteDigimonsProvidersProps {
  children: ReactNode;
}

interface FavoriteDigimonsProviderData {
  favorites: Digimon[];
  addDigimon: (digimon: Digimon) => void;
  deleteDigimon: (digimon: Digimon) => void;
}

const FavoriteDigimonsContext = createContext<FavoriteDigimonsProviderData>(
  {} as FavoriteDigimonsProviderData
);

export const FavoriteDigimonsProvider = ({
  children,
}: FavoriteDigimonsProvidersProps) => {
  const [favorites, setFavorites] = useState<Digimon[]>([] as Digimon[]);

  const addDigimon = (digimon: Digimon) => {
    if (!favorites.includes(digimon)) {
      setFavorites([...favorites, digimon]);
    }
  };

  const deleteDigimon = (digimonToBeDeleted: Digimon) => {
    const newList = favorites.filter(
      (digimon) => digimon.name !== digimonToBeDeleted.name
    );
    setFavorites(newList);
  };

  return (
    <FavoriteDigimonsContext.Provider
      value={{ favorites, addDigimon, deleteDigimon }}
    >
      {children}
    </FavoriteDigimonsContext.Provider>
  );
};

export const useFavoriteDigimons = () => useContext(FavoriteDigimonsContext);
