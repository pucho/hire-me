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
  const res = await fetch("https://tryfamly.co/api/daycare/tablet/group?accessToken=234ffdb8-0889-4be3-b096-97ab1679752c&groupId=11fc220c-ebba-4e55-9346-cd1eed714620&institutionId=fb6c8114-387e-4051-8cf7-4e388a77b673")
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
