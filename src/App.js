import React, {useState} from "react";
import client from "./gitClient";
import Search from './components/Search'
import {ApolloProvider} from '@apollo/react-hooks'
import RepositoriesList from "./components/RepositoriesList";
// import {ApolloProvider} from 'react-apollo'



const App = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
           <div className="main">
             <h1>Github Issue Tracker</h1>
               <Search value={searchTerm} onChange={setSearchTerm} />
               <RepositoriesList searchTerm={searchTerm}/>
           </div>
          </header>
        </div>
      </ApolloProvider>

  );
}

export default App;
