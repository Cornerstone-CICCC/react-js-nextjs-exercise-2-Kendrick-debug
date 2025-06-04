import { Metadata } from "next"

export const metadata: Metadata = {
  title: "My Awesome Home Page",
  description: "This is My Most Amazing Home Page"
}


const Home = () => {
  return (
    <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-xl max-w-2xl mx-auto my-10">
      <h1 className="text-4xl font-bold mb-4 text-center">WELCOME FAMILY</h1>
      <p className="text-lg leading-relaxed text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis quos aliquid repudiandae, pariatur amet cupiditate! Fuga est soluta deleniti distinctio molestias sapiente, eaque excepturi labore minima nobis, officiis iure! Ullam!</p>
    </div>
  )
}

export default Home