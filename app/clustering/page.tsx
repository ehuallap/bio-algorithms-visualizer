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
            <path d="M6 12L5 11M18 12L19 11M3 18H21M5 21H19M7 18C7 15.2386 9.23858 13 12 13C14.7614 13 17 15.2386 17 18M12 3V10M12 10L15 7M12 10L9 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <h2 className="text-2xl font-semibold">AGLOMERATIVO MINIMO</h2>
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
              <path d="M12 10V3M12 3L9 6M12 3L15 6M6 12L5 11M18 12L19 11M3 18H21M5 21H19M7 18C7 15.2386 9.23858 13 12 13C14.7614 13 17 15.2386 17 18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <h2 className="text-2xl font-semibold">AGLOMERATIVO MAXIMO</h2>
          </a>
        </div>
      </div>
    </main>
  );
}
