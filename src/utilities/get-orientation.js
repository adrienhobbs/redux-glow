const getOrientation =  () => {
  if (window.innerHeight > window.innerWidth) {
    return 'portrait';
  } else if (window.innerHeight < window.innerWidth) {
    return 'landscape';
  }
};

export default getOrientation;
