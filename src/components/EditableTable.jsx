import React,{useState}from "react";
import{
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Input,
  IconButton,
}from '@chakra-ui/react'
function EditableTable() {
  const data = [
    { id: 1, deadline: '4月11日', tasuku: 'Todoアプリ完成', },
    { id: 2, deadline: '4月12日', tasuku: 'コードの説明会', },
  ];

  return(
    <>
    <Table varuant="simple">
      <Thead>
        <Th>ID</Th>
        <Th>期限</Th>
        <Th>タスク内容</Th>
        <Th></Th>
      </Thead>
      <Tbody>
        {data.map(row=>(
        <Tr key={row.id}>
          <Td>
            {row.id}
          </Td>
          <Td>
            {row.deadline}
          </Td>
          <Td>
            {row.tasuku}
          </Td>
        </Tr>
        ))}
      </Tbody>
    
    </Table>
  
  
  
  </>)
}
export default EditableTable;
