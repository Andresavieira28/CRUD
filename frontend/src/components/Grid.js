import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import * as XLSX from "xlsx";

const Table = styled.table`
  width: 100%;
  max-width: 2000px;
  background-color: orange;
  padding: 10px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  margin: 5px auto;
  word-break: break-word;
`;

const formatDate = (isoDate) => {
  if (!isoDate) return "";
  const [year, month, day] = isoDate.split("-");
  return `${day}/${month}/${year}`;
};

export const Thead = styled.thead``;
export const Tbody = styled.tbody``;
export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;

  @media (max-width: 500px) {
    ${(props) => props.$onlyWeb && "display: none"}
  }
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.$alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

  @media (max-width: 500px) {
    ${(props) => props.$onlyWeb && "display: none"}
  }
`;

const ButtonExport = styled.button`
  background-color: #008000;
  color: white;
  border: none;
  padding: 10px 15px;
  margin: 10px auto;
  display: block;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #006400;
  }
`;

const Grid = ({ users, setUsers, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8800/" + id)
      .then(({ data }) => {
        const newArray = users.filter((user) => user.id !== id);
        setUsers(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };

  const exportToExcel = () => {
    const worksheetData = users.map(user => ({
      Nome: user.nome,
      Email: user.email,
      Fone: user.fone,
      "Data de Contrato": formatDate(user.data_contratacao),
      Cargo: user.cargo,
      Salário: Number(user.salario).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      }),
      Gerente: user.gerente,
    }));

    const worksheet = XLSX.utils.json_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Funcionários");

    XLSX.writeFile(workbook, "funcionarios.xlsx");
  };

  return (
    <>
      <ButtonExport onClick={exportToExcel}>Exportar para Excel</ButtonExport>

      <Table>
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>Email</Th>
            <Th $onlyWeb>Fone</Th>
            <Th>Dta. Contrato</Th>
            <Th>Cargo</Th>
            <Th>Salário</Th>
            <Th>Gerente</Th>
            <Th></Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {[...users]
            .sort((a, b) => new Date(a.data_contratacao) - new Date(b.data_contratacao))
            .map((item, i) => (
              <Tr key={i}>
                <Td width="15%">{item.nome}</Td>
                <Td width="20%">{item.email}</Td>
                <Td width="11%" $onlyWeb>{item.fone}</Td>
                <Td width="11%">{formatDate(item.data_contratacao)}</Td>
                <Td width="20%">{item.cargo}</Td>
                <Td width="10%">
                  {Number(item.salario).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </Td>
                <Td width="20%">{item.gerente}</Td>
                <Td $alignCenter width="5%">
                  <div style={{ marginLeft: '10px' }}>
                    <FaEdit onClick={() => handleEdit(item)} />
                  </div>
                </Td>
                <Td $alignCenter width="5%">
                  <FaTrash onClick={() => handleDelete(item.id)} />
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </>
  );
};

export default Grid;
