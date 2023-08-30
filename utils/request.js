import baseUrl from './env';
function request({ url, ...options }) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${baseUrl}${url}`, //仅为示例，并非真实的接口地址
      header: {},
      ...options,
      success(res) {
        console.log(res.data);
        resolve(res);
      },
      fail(error) {
        reject(error);
      },
    });
  });
}

export default request;
