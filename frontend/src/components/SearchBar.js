// src/components/SearchBar.js
import styled from "styled-components";

const SearchContainer = styled.div`
  width: 80%;
  max-width: 800px;
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 8px;
  border: 2px solid #FF6600;
  color:rgb(0, 0, 0);
  outline: none;

  ::placeholder {
    color: #FFA366; /* tom mais claro do laranja para contraste */
  }

  &:focus {
    border-color: #FFA366;
  }
`;

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <SearchContainer>
      <Input
        type="text"
        placeholder="Buscar funcionário por nome..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </SearchContainer>
  );
};

export default SearchBar;
