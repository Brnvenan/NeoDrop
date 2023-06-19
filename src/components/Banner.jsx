import { Link } from "react-router-dom"

export default function Banner() {
    return (
      <div>
        <div className="bg-pink py-24 sm:py-32 mt-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-lg font-semibold leading-8 text-white">
              NeoDrop
            </h2>
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="d1.png"
                alt="Transistor"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="17.png"
                alt="Reform"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="d1.png"
                alt="Tuple"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                src="17.png"
                alt="SavvyCal"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                src="d1.png"
                alt="Statamic"
                width={158}
                height={48}
              />
              <div>
                <p className="ml-8 font-medium text-jj">Termos de uso</p>
                <Link to="/politica" className="ml-8 text-sm text-jj">
                  Politica de Privacidade
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  