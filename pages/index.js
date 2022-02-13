import Link from 'next/link'
export default function Home({avatars}) {
  return (
    <ul>
  {avatars.map(avatar => {
    return (
      <li key={avatar.id}>
        <Link href={`/characters/${avatar.id}`}>
        { avatar.name }
        </Link>
      </li>
    )
  })}
</ul>
  )
}

export async function getStaticProps() {
  const avatars = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters').then(res => res.json());
  return {
    props: {
      avatars: avatars.map(av => ({name: av.name, id: av._id}))
    }
  }
}