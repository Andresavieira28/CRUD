import GlobalStyle from "./styles/global";
import styled from "styled-components";
import Form from "./components/Form.js";
import Grid from "./components/Grid";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import itauLogo from "./assets/itau-logo.png";
import SearchBar from "./components/SearchBar"; // 👈 novo import

const Container = styled.div`
  width: 100%;
  max-width: 1800px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  gap: 10px;
  color: blue;
`;

function App() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  return (
    <>
      <Container>
      <Title><img src={itauLogo} alt="Logo Itaú" style={{ width: "60px", height: "auto" }} />CADASTRO DE FUNCIONÁRIOS</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Grid setOnEdit={setOnEdit}users={users.filter(user =>user.nome.toLowerCase().includes(searchTerm.toLowerCase()))}setUsers={setUsers}/>
      </Container>
      <ToastContainer autoClose={3000} />
      <GlobalStyle />
    </>
  );
}

export default App;