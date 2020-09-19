
exports.logger = (req,res,next) => {
    if(req.url) console.log(`request  :  ${req.url} ${req.method}`);
    if(req.body) console.log(`body  :  ${JSON.stringify(req.body)}`);
    if(req.cookies) console.log(`cookies  :  ${JSON.stringify(req.cookies)}`);
    next();
}
exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(403).send("로그인 필요");
  }
};

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/");
  }
};
