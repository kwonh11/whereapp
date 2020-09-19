const KakaoStrategy = require("passport-kakao").Strategy;
const User = require("../schemas/user");

module.exports = (passport) => {
  passport.use(
    new KakaoStrategy(
      {
        clientID: process.env.KAKAO_ID,
        callbackURL: "/auth/kakao/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const exUser = await User.findOne({
            snsId: profile.id,
            provider: "kakao",
          });
          if (exUser) {
            done(null, exUser);
          } else {
            const newUser = new User({
              snsId: profile.id,
              nick: profile.displayName,
              provider: "kakao",
              image: profile._json.properties.profile_image,
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
