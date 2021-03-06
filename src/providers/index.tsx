import { ReactNode } from "react";
import { FavoriteDigimonsProvider } from "./favoriteDigimons/FavoriteDigimons";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <FavoriteDigimonsProvider>
      {children}
    </FavoriteDigimonsProvider>
  );
};

export default Providers;
