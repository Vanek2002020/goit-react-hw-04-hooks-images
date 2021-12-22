import "./App.css";
import React, { useState, useEffect } from "react";

import { Searchbar } from "components/Searchbar/Searchbar";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { ToastContainer } from "react-toastify";
import { Button } from "components/Button/Button";
import AppLoader from "components/Loader/AppLoader";

const API_KEY = "23531219-4793e7ad626a6d166b9f03b8c";

function App() {
  const [hits, setHits] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(1);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);

      let url = `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
      console.log(url);

      return await fetch(url)
        .then((response) => {
          if (response.ok) {
            // console.log('response', response);
            return response.json();
          }
        })
        .then((data) => data)
        .catch((error) => console.log(error));
    };

    if (!query) {
      return;
    }

    setQuery(query);

    fetchImages({ query, page })
      .then(({ total, hits }) => {
        setHits((prevHits) => [...prevHits, ...hits]);
        setTotal(total);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [page, query]);

  const onQueryChange = (query) => {
    setQuery(query);
    setPage(1);
    setHits([]);
    setError(null);
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={onQueryChange} />

      {error && <p>Oops, error... Try again</p>}

      {loading && <AppLoader />}

      {total === 0 && <div>Nothing was found on {query}</div>}

      <ImageGallery images={hits} />

      {total > 12 && (
        <Button id="loadmore" onClick={loadMore}>
          Load more
        </Button>
      )}

      <ToastContainer />
    </div>
  );
}

export default App;
