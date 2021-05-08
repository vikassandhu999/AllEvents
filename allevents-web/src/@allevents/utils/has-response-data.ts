const hasResponseData = (error: any): boolean =>
  error.response && error.response.data;

export default hasResponseData;
