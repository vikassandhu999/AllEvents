import { BaseError } from '@app/@allevents/core/BaseError';

//https://www.intricatecloud.io/2020/03/how-to-handle-api-errors-in-your-web-app-using-axios/
const axiosErrorWrapper = (error: any) => {
  if (error.response) {
    if (error.response.data) {
      return error.response.data;
    }
    //throw new BaseError("Route not found error", 404);
  }
  //we can implement retry here
  throw new BaseError(
    'An unkown error has been occured, please check your internet connectiviy',
    503,
  );
};

export default axiosErrorWrapper;
