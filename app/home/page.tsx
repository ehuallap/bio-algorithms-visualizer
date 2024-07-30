import BackButton from "../../components/BackButton";

export default function Home() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-dark">
        <div className="absolute top-4 left-4">
          <BackButton href="/" />
        </div>
        <div className="max-w-5xl w-full flex flex-col font-mono text-sm items-center justify-center text-center">
          <h1 className="text-4xl font-bold mb-12 text-light">SELECCIONA EL TIPO DE ALGORITMO</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <a
              href="/alignment"
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
              href="/clustering"
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
              href="/phylogeny"
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
            <a
              href="/alignment"
              className="flex flex-col items-center justify-center p-8 rounded-lg bg-light text-dark transition-transform hover:scale-110 hover:bg-dark hover:text-light hover:fill-light"
            >
            <svg
              version="1.0" xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 mb-4 group-hover:fill-light fill-dark transition-colors"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)">
                <path d="M3370 5113 c-114 -19 -247 -89 -332 -175 -194 -196 -229 -498 -86
                -736 43 -71 131 -161 193 -196 28 -16 51 -30 52 -30 1 -1 -51 -200 -115 -442
                l-118 -439 -120 -6 c-233 -12 -417 -90 -570 -243 -153 -154 -232 -338 -243
                -570 l-6 -120 -439 -118 c-242 -64 -441 -116 -442 -115 0 1 -14 24 -29 51 -34
                59 -110 136 -179 181 -384 255 -903 -4 -933 -465 -21 -332 231 -617 563 -637
                333 -20 609 221 641 561 l8 79 440 118 c242 65 440 117 441 116 1 -1 12 -22
                24 -47 74 -148 210 -283 362 -359 137 -68 232 -92 373 -92 173 -1 336 45 457
                128 l51 35 324 -324 324 -324 -36 -75 c-74 -156 -83 -312 -27 -466 85 -233
                287 -385 531 -400 177 -11 334 49 461 177 314 314 199 834 -220 992 -76 28
                -96 32 -195 32 -122 0 -187 -15 -289 -66 l-59 -30 -325 325 -325 325 30 43
                c58 85 103 193 124 303 17 88 12 261 -11 351 -60 234 -223 441 -430 545 -25
                12 -46 23 -47 24 -1 1 51 199 116 441 l118 440 74 7 c345 32 587 306 566 642
                -16 269 -211 495 -474 551 -64 14 -167 17 -223 8z m200 -249 c99 -29 181 -99
                228 -193 24 -50 27 -67 27 -156 0 -89 -3 -106 -28 -157 -17 -34 -51 -78 -86
                -111 -186 -171 -489 -102 -583 133 -34 84 -31 205 7 284 81 171 259 252 435
                200z m-511 -2044 c137 -48 266 -162 331 -290 49 -97 64 -164 63 -280 -1 -171
                -51 -290 -177 -416 -52 -52 -91 -81 -148 -108 -78 -37 -196 -66 -271 -66 -119
                1 -278 61 -379 143 -68 56 -147 171 -178 258 -30 88 -38 240 -16 333 49 207
                227 389 432 441 87 21 260 14 343 -15z m-2319 -829 c234 -89 304 -396 133
                -582 -33 -35 -77 -69 -111 -86 -51 -25 -68 -28 -157 -28 -89 0 -106 3 -156 28
                -70 34 -138 103 -175 176 -25 49 -28 67 -29 151 0 82 4 103 27 152 48 103 151
                187 257 209 56 12 151 3 211 -20z m3925 -1055 c78 -35 146 -103 182 -180 24
                -53 28 -73 28 -151 0 -78 -4 -98 -28 -151 -36 -77 -104 -145 -182 -181 -87
                -41 -213 -41 -300 0 -78 36 -146 104 -182 181 -24 53 -28 73 -28 151 0 76 4
                99 26 146 47 99 128 171 232 205 67 22 181 13 252 -20z"/>
                <path d="M2745 2656 c-191 -61 -310 -229 -229 -325 27 -33 76 -48 119 -37 14
                4 52 33 83 65 54 56 102 81 155 81 53 0 107 59 107 115 0 34 -24 80 -52 99
                -27 19 -125 20 -183 2z"/>
              </g>
              </svg>
              <h2 className="text-2xl font-semibold">ESTRUCTURA SECUNDARIA</h2>
            </a>
          </div>
        </div>
      </main>
    );
  }
