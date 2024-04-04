import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  // Function to handle click on previous page button
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  // Function to handle click on page button
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

   // Function to handle click on next page button

  const handleNextPage = () => {

    if (currentPage < totalPages) {

      onPageChange(currentPage + 1);

    }

  };
  

// Function to generate page buttons
const generatePageButtons = () => {
  const pageButtons = [];
  const maxPageButtons = 17; // Maximum number of page buttons to display

  let startPage = 1;
  let endPage = totalPages;

  // Calculate the start and end page numbers based on the current page
  if (totalPages > maxPageButtons) {
    const buffer = Math.floor(maxPageButtons / 2);

    startPage = Math.max(1, currentPage - buffer);
    endPage = Math.min(totalPages, currentPage + buffer);

    // Adjust start and end page numbers if currentPage is near the start or end
    if (endPage - startPage < maxPageButtons - 1) {
      startPage = Math.max(1, endPage - maxPageButtons + 1);
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pageButtons.push(
      <button
        key={i}
        className={`page-item ${i === currentPage ? 'active' : ''}`}
        onClick={() => handlePageChange(i)}
      >
        {i}
      </button>
    );
  }

  return pageButtons;
};


  return (
    <div className="pagination">
      <button onClick={handlePreviousPage} disabled={currentPage === 1}>
        Previous
      </button>
      {generatePageButtons()}
      <button
        className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;