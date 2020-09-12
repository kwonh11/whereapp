const KakaoStrategy = require("passport-kakao").Strategy;
const User = require("../schemas/user");

module.exports = (passport) => {
  passport.use(
    new KakaoStrategy(
      {
        clientID: process.env.KAKAO_ID,
        callbackURL: "http://localhost:9000/auth/kakao/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        console.log(profile);
        try {
          const exUser = await User.findOne({
            email: profile.id,
            provider: "kakao",
          });
          if (exUser) {
            done(null, exUser);
          } else {
            const newUser = new User({
              email: profile.id,
              provider: "kakao",
            });

            newUser.save();
            done(null, newUser);
          }
        } catch (error) {
          console.error(error);
          done(error);
        }
      }
    )
  );
};
