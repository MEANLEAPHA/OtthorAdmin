const {
  loginMember,
  createMember,
  verifyMember,
  resendPin,
  updateAccount,
  requestPasswordReset,
  verifyResetPin,
  resetPassword,
  updatePassword,
  resendResetPin,
  changePassword
  // fullRegister,
  // getFullRegisterData,
  // getFullRegisterDataByQid,
  // loadUser,
  // getUser

} = require('../../controller/Authentication/authenticationController');

const {authMiddleware} = require('../../middleware/authMiddleware');

// Define routes
const Authentication = (app) => {


    app.post('/register', createMember);
    app.post('/login', loginMember);

  // app.get('/getFullRegisterData', authMiddleware,  getFullRegisterData);
  // app.get('/getFullRegisterDataByQid/:memberQid',  getFullRegisterDataByQid);
  // app.post('/verify', authMiddleware, verifyMember);
  // app.post('/resend-pin', authMiddleware, resendPin);
  // app.get('/profile', authMiddleware, (req, res) => {
  //   res.json({ message: "This is a protected profile", user: req.user });
  // });
  

  // app.put('/updateAccount', authMiddleware, updateAccount);
  // app.post('/requestPasswordReset', requestPasswordReset);
  // app.post('/verifyResetPin', verifyResetPin);
  // app.put('/resetPassword', resetPassword);
  // app.put('/updatePassword', updatePassword);
  // app.post('/resendresetpin', resendResetPin);
  // app.put('/changepassword', authMiddleware, changePassword);

  // app.get('/userInfo/:userQid', loadUser);
  // app.get('/loadUserInfo', authMiddleware, getUser);

};


module.exports = {Authentication};
