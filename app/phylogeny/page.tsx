import BackButton from "../components/BackButton";

export default function Phylogeny() {
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
              <g>
              <polygon points="14.069,5.304 14.069,0.16 8.926,0.16 8.926,2.533 5.143,4.861 5.143,4.064 0,4.064 0,9.208 
                5.143,9.208 5.143,8.26 8.926,11.069 8.926,13.91 14.069,13.91 14.069,8.766 8.926,8.766 8.926,9.939 5.143,7.128 5.143,5.927 
                8.926,3.599 8.926,5.304"/>
            </g>
            </svg>
            <h2 className="text-2xl font-semibold">ARBOL ENRAIZADO</h2>
          </a>
        </div>
      </div>
    </main>
  );
}
