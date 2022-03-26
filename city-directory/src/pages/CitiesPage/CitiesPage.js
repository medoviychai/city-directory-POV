import React from "react";
import Cities from "../../components/Cities/Cities";
import SearchBox from '../../components/SearchBox/SearchBox';

export default class CitiesPage extends React.Component {
   render() {
      return (
         <main>
            <SearchBox />
            <Cities />
         </main>
      )
   }
}