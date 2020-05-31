import styled from "styled-components";

export const TableStyles = styled.div`
    table {
    width: 100%;
    border-spacing: 20px 0px;
    border-top: 2px solid black;
    box-sizing:border-box;
    /* padding: 20px; */
    thead{
      border-bottom: 1px solid black;
      box-sizing:border-box;
      padding: 10px 0px;
      th{
        border-bottom:1px solid black;
        text-align:center;
        padding-left:0px;
        :first-child{
          text-align:center;
        }
      }
    }
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th,
    td {
      margin: 0;
      box-sizing:border-box;
      padding: 0.5rem;
      :first-child{
        font-weight:bold;
        text-align:left;
      }
      }
    }
  }
`;

export const PaginationStyles = styled.div`
  ul {
    list-style: none;
    margin: 10px 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    box-sizing: border-box;
    padding: 0px 20px;
    text-align: center;
    li {
      a {
        box-sizing: border-box;
        padding: 0px 10px;
        cursor: pointer;
      }
      &.selected {
        font-weight: bold;
      }
    }
  }
`;
