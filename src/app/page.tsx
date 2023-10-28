"use client";

import { useAtom } from "jotai"
import countAtom from "@/lib/jotai/test-atom"
import { useEffect, useState } from "react"

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_BACKEND_URL

export default function Home() {
  const [count, setCount] = useAtom(countAtom);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async() => {
      const res = await fetch(`${strapiUrl}/api/blogs`)
      const data = await res.json()
      setData(data);
    }
    getData();
  }, [])

  const handleChange = () => {
    setCount(count + 1)
    console.log(count);
  }

  console.log(data);


  return (
    <main className="max-w-screen-xl mx-auto">
      <h1>hello world</h1>
      <button onClick={() => handleChange()}>count button</button>
    </main>
  )
}
