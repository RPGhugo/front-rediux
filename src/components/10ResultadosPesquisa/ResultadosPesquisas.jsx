import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("term");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/contents/search?term=${searchTerm}`)
      .then((response) => {
        setSearchResults(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchTerm]);

  return (
    <div>
      <h2>Resultados da pesquisa para: {searchTerm}</h2>
      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((result) => (
            <li key={result._id}>{result.titulo}</li>
          ))}
        </ul>
      ) : (
        <p>Nenhum resultado encontrado.</p>
      )}
    </div>
  );
};

export default SearchResults;
