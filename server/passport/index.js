const kakao = require("./kakaoStrategy");
const google = require("./googleStrategy");
const User = require("../schemas/user");

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id)
      .then((user) => done(null, user))
      .catch((err) => done(err));
  });
  kakao(passport);
  google(passport);
};
