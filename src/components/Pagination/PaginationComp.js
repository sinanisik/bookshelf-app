import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { booksPerPage } from "../../constants/constants";

const PaginationComp = ({ books, paginate, currentPage, setCurrentPage }) => {
  console.log(Math.ceil(books.length / booksPerPage));
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(books.length / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination aria-label="Page navigation example">
      <PaginationItem disabled={currentPage === 1}>
        <PaginationLink
          previous
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage(currentPage - 1);
          }}
        />
      </PaginationItem>
      {pageNumbers.map((number) => {
        return (
          <PaginationItem active={number === currentPage}>
            <PaginationLink
              onClick={(e) => {
                e.preventDefault();
                paginate(number);
              }}
            >
              {number}
            </PaginationLink>
          </PaginationItem>
        );
      })}
      <PaginationItem disabled={currentPage === pageNumbers.length}>
        <PaginationLink
          next
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage(currentPage + 1);
          }}
        />
      </PaginationItem>
    </Pagination>
  );
};

export default PaginationComp;
