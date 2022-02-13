export default function Character({ character }) {
  return (
    <div>
      <img src={character.photoUrl} alt="" />
      <div>
        <h1>{character.name}</h1>
        <p>Affiliation: {character.affiliation}</p>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const characters = await fetch(
    "https://last-airbender-api.herokuapp.com/api/v1/characters"
  ).then((res) => res.json());
  return {
    paths: characters.map((character) => {
      const characterId = character._id;
      return {
        params: {
          characterId,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const characterId = params.characterId
  const results = await fetch(
    `https://last-airbender-api.herokuapp.com/api/v1/characters/${characterId}`
  ).then((res) => res.json());
  return {
    props: {
      character: results,
    },
  };
}
