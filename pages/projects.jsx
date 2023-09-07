export async function getStaticProps() {
  return {
    props: {
      pageId: "projects",
      metadata: {
        title: "Projetos | Angel Policarpo",
        description: "Descubra os projetos anteriores e em andamento de Angel Policarpo.",
        openGraph: {
          image: "https://example.com/image.jpg",
          url: "https://example.com"
        }
      }
    }
  }
}

export default function Projects() {
  return (
    <ul className="parent">
      <li className="child1">

      </li>
    </ul>
  )
}