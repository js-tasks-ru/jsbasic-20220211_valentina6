function ucFirst(str) {
  let result;
  if ( str.length > 0 ) {
    result = str[0].toUpperCase() + str.slice(1);
    return result;
  } else {
    result = str;
    return result;
  }

}
