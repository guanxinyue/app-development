
const fakeAuth = {
    isAuthenticated: false, //开始是falae
    authenticate(cb) {
      this.isAuthenticated = true;//点击以后是t
      setTimeout(cb, 100); // fake async
    },
    signout(cb) { //退出
      this.isAuthenticated = false;
      setTimeout(cb, 100);
    }
  };
  export default fakeAuth