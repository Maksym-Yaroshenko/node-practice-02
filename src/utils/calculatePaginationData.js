export const calculatePaginationData = (count, page, perPage) => {
  const totalPages = Math.ceil(count / perPage);
  const hasNextPage = page < totalPages;

  // console.log(hasNextPage);
  //   const hasNextPage = Boolean(totalPage === page);
  const hasPreviousPage = page !== 1;

  return {
    page,
    perPage,
    totalItems: count,
    totalPages,
    hasNextPage,
    hasPreviousPage,
  };
};

// count = 170;
// page = 1;
// perPage = 80;

// totalPages = 3;
