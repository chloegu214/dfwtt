import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-blue-50">
      <header className="bg-blue-200 py-4 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-blue-800">My Portfolio</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 flex-grow">
        <section className="mb-8 p-6 bg-blue-100 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">About Me</h2>
          <p className="text-blue-600">
            Welcome to my portfolio! I am a passionate developer with experience in building web applications.
          </p>
        </section>

        <section className="mb-8 p-6 bg-blue-100 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">Project 1</h3>
              <p className="text-blue-600">Description of Project 1.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">Project 2</h3>
              <p className="text-blue-600">Description of Project 2.</p>
            </div>
          </div>
        </section>

        <section className="p-6 bg-blue-100 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">Contact</h2>
          <p className="text-blue-600">Feel free to reach out to me at example@email.com.</p>
        </section>
      </main>

      <Footer />
    </div>
  )
}
