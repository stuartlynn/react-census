import styled from "styled-components";

export const Style = styled.div`
  .table-browser {
    display: flex;
    flex-direction: row;
    height: 500px;
  }

  .concepts {
    height: 100%;
    max-width: 300px;
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    flex-direction: column;
  }

  .concepts input {
    box-sizing: border-box;
    padding: 10px 10px;
    width: 100%;
  }

  ul {
    list-style: none;
    margin: 0px;
    padding: 0px;
    overflow-y: auto;

    flex: 1;
    height: 100%;
  }

  li {
    text-align: left;
    word-wrap: break-word;
    border-bottom: 1px solid grey;
    box-sizing: border-box;
    padding: 10px 0px;
    cursor: pointer;
  }

  .table-browser table {
    width: 100%;
    height: 100%;
  }

  table thead tr {
    border: 1px solid grey;
  }

  table thead td {
    font-weight: bold;
  }

  .concept-variables {
    flex-grow: 1;
    height: 100%;
  }

  .table-browser tbody {
    overflow-y: auto;
  }

  table.paleBlueRows {
    font-family: "Times New Roman", Times, serif;
    border: 1px solid #ffffff;
    width: 350px;
    height: 200px;
    text-align: left;
    border-collapse: collapse;
  }

  table.paleBlueRows td,
  table.paleBlueRows th {
    border: 1px solid #ffffff;
    padding: 3px 2px;
  }

  tr {
    cursor: pointer;
  }

  tr.selected {
    font-weight: bold;
  }

  table.paleBlueRows tbody td {
    font-size: 13px;
  }

  table.paleBlueRows td:nth-child(even) {
    background: #ebebeb;
  }

  table.paleBlueRows thead {
    background: #0b6fa4;
    border-bottom: 5px solid #ffffff;
  }

  table.paleBlueRows thead th {
    font-size: 17px;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
    border-left: 2px solid #ffffff;
  }

  table.paleBlueRows thead th:first-child {
    border-left: none;
  }

  table.paleBlueRows tfoot td {
    font-size: 14px;
  }
`;
