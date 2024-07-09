import BackButton from "../components/BackButton";

export default function Clustering() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-dark">
      <div className="absolute top-4 left-4">
        <BackButton href="/" />
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex flex-col">
        <div className="flex flex-col space-y-8">
          {/* Replicate the buttons from the home page here */}
          <a
            href="#"
            className="flex flex-col items-center justify-center p-8 rounded-lg bg-light text-dark transition-transform hover:scale-105 hover:bg-dark hover:text-light"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            <h2 className="text-2xl font-semibold">ALINEAMIENTO</h2>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center p-8 rounded-lg bg-light text-dark transition-transform hover:scale-105 hover:bg-dark hover:text-light"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
            <h2 className="text-2xl font-semibold">CLUSTERING</h2>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center p-8 rounded-lg bg-light text-dark transition-transform hover:scale-105 hover:bg-dark hover:text-light"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h2l2 2-2 2H3v4h4l2 2-2 2h4l2-2-2-2h4v-4h-2l-2-2 2-2h2V6h-4l-2-2-2 2H7l-2 2H3v2z" />
            </svg>
            <h2 className="text-2xl font-semibold">FILOGENIA</h2>
          </a>
        </div>
      </div>
    </main>
  );
}
