import BackButton from "../components/BackButton";

export default function Alignment() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-dark">
      <div className="absolute top-4 left-4">
        <BackButton href="/" />
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex flex-col">
        <div className="flex flex-col space-y-8">
          {/* Botón de Alineamiento por Pares */}
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
            <path d="M12 3V11M12 11L9 8M12 11L15 8M2.5 14.5L3.11612 15.1161C3.68206 15.6821 4.44964 16 5.25 16C6.05036 16 6.81794 15.6821 7.38388 15.1161L7.61612 14.8839C8.18206 14.3179 8.94964 14 9.75 14C10.5504 14 11.3179 14.3179 11.8839 14.8839L12.1161 15.1161C12.6821 15.6821 13.4496 16 14.25 16C15.0504 16 15.8179 15.6821 16.3839 15.1161L16.6161 14.8839C17.1821 14.3179 17.9496 14 18.75 14C19.5504 14 20.3179 14.3179 20.8839 14.8839L21.5 15.5M2.5 19.5L3.11612 20.1161C3.68206 20.6821 4.44964 21 5.25 21C6.05036 21 6.81794 20.6821 7.38388 20.1161L7.61612 19.8839C8.18206 19.3179 8.94964 19 9.75 19C10.5504 19 11.3179 19.3179 11.8839 19.8839L12.1161 20.1161C12.6821 20.6821 13.4496 21 14.25 21C15.0504 21 15.8179 20.6821 16.3839 20.1161L16.6161 19.8839C17.1821 19.3179 17.9496 19 18.75 19C19.5504 19 20.3179 19.3179 20.8839 19.8839L21.5 20.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <h2 className="text-2xl font-semibold">ALINEAMIENTO POR PARES</h2>
          </a>
          
          {/* Botón de Alineamiento Múltiple */}
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
            <path d="M2.5 5.5L3.11612 6.11612C3.68206 6.68206 4.44964 7 5.25 7C6.05036 7 6.81794 6.68206 7.38388 6.11612L7.61612 5.88388C8.18206 5.31794 8.94964 5 9.75 5C10.5504 5 11.3179 5.31794 11.8839 5.88388L12.1161 6.11612C12.6821 6.68206 13.4496 7 14.25 7C15.0504 7 15.8179 6.68206 16.3839 6.11612L16.6161 5.88388C17.1821 5.31794 17.9496 5 18.75 5C19.5504 5 20.3179 5.31794 20.8839 5.88388L21.5 6.5M2.5 11.5L3.11612 12.1161C3.68206 12.6821 4.44964 13 5.25 13C6.05036 13 6.81794 12.6821 7.38388 12.1161L7.61612 11.8839C8.18206 11.3179 8.94964 11 9.75 11C10.5504 11 11.3179 11.3179 11.8839 11.8839L12.1161 12.1161C12.6821 12.6821 13.4496 13 14.25 13C15.0504 13 15.8179 12.6821 16.3839 12.1161L16.6161 11.8839C17.1821 11.3179 17.9496 11 18.75 11C19.5504 11 20.3179 11.3179 20.8839 11.8839L21.5 12.5M2.5 17.5L3.11612 18.1161C3.68206 18.6821 4.44964 19 5.25 19C6.05036 19 6.81794 18.6821 7.38388 18.1161L7.61612 17.8839C8.18206 17.3179 8.94964 17 9.75 17C10.5504 17 11.3179 17.3179 11.8839 17.8839L12.1161 18.1161C12.6821 18.6821 13.4496 19 14.25 19C15.0504 19 15.8179 18.6821 16.3839 18.1161L16.6161 17.8839C17.1821 17.3179 17.9496 17 18.75 17C19.5504 17 20.3179 17.3179 20.8839 17.8839L21.5 18.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <h2 className="text-2xl font-semibold">ALINEAMIENTO MÚLTIPLE</h2>
          </a>
        </div>
      </div>
    </main>
  );
}
