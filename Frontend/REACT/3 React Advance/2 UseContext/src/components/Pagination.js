import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Pagination = () => {
  const { page, totalPage, handlePageChange } = useContext(AppContext);

  return (
    <div className="flex fixed bottom-0 w-full bg-gray-100 p-2 shadow-lg">
      <div className="flex w-[650px] m-auto justify-between items-center">
        <div className="flex gap-5">
          {/* Previous Button */}
          {page > 1 && (
            <button
              onClick={() => handlePageChange(page - 1)}
              className="bg-white text-black p-1 rounded-lg "
            >
              Previous
            </button>
          )}

          {/* Next Button */}
          {page < totalPage && (
            <button
              onClick={() => handlePageChange(page + 1)}
              className="bg-white text-black p-1 rounded-lg "
            >
              Next
            </button>
          )}
        </div>

        {/* Page Indicator */}
        <div className="flex justify-center text-center items-center text-gray-600">
          <span className="text-lg font-semibold">
            Page {page} of {totalPage}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
