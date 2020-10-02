import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  // const startIndex = (pageNumber - 1) * pageSize;
  const startIndex = 0;
  const takeSize = pageNumber * pageSize;
  return _(items)
    .slice(startIndex)
    .take(takeSize)
    .value();
}

// export function paginate(items, pageNumber, pageSize) {
//   // const startIndex = (pageNumber - 1) * pageSize;
//   const startIndex = items.length;
//   const takeSize = pageNumber * pageSize;
//   return _(items)
//     .slice(startIndex)
//     .take(takeSize)
//     .value();
// }
