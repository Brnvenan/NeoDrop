import { Link } from "react-router-dom"

export default function Produtos() {
    return (
      <div className="mt-28">
        <h2 class="text-center">Feitos para você!</h2>
        <div class="bg-jj flex items-center mt-34">
            <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 class="sr-only">Products</h2>

                <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                <Link to="/pr" class="group">
                    <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img src="1g.webp" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75"></img>
                    </div>
                    <h3 class="mt-4 text-sm text-gray-700">Iphone 14 Pro Max</h3>
                    <p class="mt-1 text-lg font-medium text-gray-900">R$ 8056,98</p>
                </Link>
                <Link to="/tn">
                    <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img src="T.webp" alt="Olive drab green insulated bottle with flared screw lid and flat top." class="h-full w-full object-cover object-center group-hover:opacity-75"></img>
                    </div>
                    <h3 class="mt-4 text-sm text-gray-700">Tênis Adidas Runfalcon 3.0 Masculino</h3>
                    <p class="mt-1 text-lg font-medium text-gray-900">R$ 237,49</p>
                </Link>
                <Link to="/rn">
                    <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img src="p.webp" alt="Person using a pen to cross a task off a productivity paper card." class="h-full w-full object-cover object-center group-hover:opacity-75"></img>
                    </div>
                    <h3 class="mt-4 text-sm text-gray-700">Idôle Lancôme - Perfume Feminino Eau de Parfum</h3>
                    <p class="mt-1 text-lg font-medium text-gray-900">R$ 199,90</p>
                </Link>
                <Link to="/saude">
                    <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img src="C.webp" alt="Hand holding black machined steel mechanical pencil with brass tip and top." class="h-full w-full object-cover object-center group-hover:opacity-75"></img>
                    </div>
                    <h3 class="mt-4 text-sm text-gray-700">Cinta Postural</h3>
                    <p class="mt-1 text-lg font-medium text-gray-900">R$ 40,41</p>
                </Link>
                </div>
            </div>
        </div>  
      </div>
    )
  }



  