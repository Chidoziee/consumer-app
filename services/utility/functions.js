// filter through _array to obtain input value
export const inputSearchHandler = (search, _array) => {
  const _filter = _array.filter((v) =>
    v.title.toLowerCase().includes(search.toLowerCase())
  );
  return _filter;
};


// get date in string
export const convertToNormalDate = (timestamp) => {
    const convert = new Date(timestamp);
    const getDate = `${convert.toDateString()}`;

    return getDate;
}