import { useEffect } from "react"

export default function Home() {
  // useEffect( async ()=>{
  //   const res = await fetch()
  //   const data = await res.json();


  // }, [])
  return (
    <div>
     
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch("https://mockend.com/pucho/hire-me/groups")
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }
console.log(data);
  return {
    props: {}, // will be passed to the page component as props
  }
}
