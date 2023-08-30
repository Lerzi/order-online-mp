const {
  miniProgram: { envVersion },
} = wx.getAccountInfoSync();

const baseUrls = {
  develop: '',
  trial: '',
  release: '',
};

export default baseUrls[envVersion];
