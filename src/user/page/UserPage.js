import UserContainer from "../container/UserContainer";

export default function UserPage({ match }) {
  return (
    <section>
      <UserContainer tab={match.params.tab} />
    </section>
  );
}
