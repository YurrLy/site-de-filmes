import React, { useState } from "react";
import Form from "react-bootstrap/Form";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };


  return (
    <Form>
        <Form.Group controlId="searchForm" className="mx-2">
        <Form.Control
          type="text"
          placeholder="Pesquisar filmes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleSearch}
        />

      </Form.Group>
    </Form>
  );
}

export default SearchBar;
