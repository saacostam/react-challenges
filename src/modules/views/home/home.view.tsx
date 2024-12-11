import { ChallengeCard, CHALLENGES } from "../../challenges";

export function HomeView() {
  return (
    <>
      <h1>Home</h1>
      <p>This is the home page!</p>
      <section className="flex">
      {
        CHALLENGES.map(challenge => (
          <ChallengeCard challenge={challenge}/>
        ))
      }
      </section>
    </>
  );
}
