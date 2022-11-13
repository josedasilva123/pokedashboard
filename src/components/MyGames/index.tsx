import React from "react";
import { GridBox } from "../../styles/grid";
import MyGamesHeader from "./MyGamesHeader";
import MyGamesList from "./MyGamesList";

const MyGames = () => {
   return (
      <section>
         <GridBox>
            <MyGamesHeader />
            <MyGamesList />
         </GridBox>
      </section>
   );
};

export default MyGames;
