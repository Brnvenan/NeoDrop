import './Jj.css';

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  // More products...
]

export default function Circle() {
  return (
    <div>
      <div className="align-items: center, mx-auto w-max">

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="rounded-full aspect-h-1 aspect-w-1 overflow-hidden lg:aspect-none group-hover:opacity-75 lg:h-40 w-40">
                <img
                className="align-items: center, mx-auto w-max, rounded-xl"
                src="7.png"
                />
              </div>
              <h5 className='ll'>Saúde</h5>
            </div>
          ))}
        </div>

        <div class="nn">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="rounded-full aspect-h-1 aspect-w-1 overflow-hidden lg:aspect-none group-hover:opacity-75 lg:h-40 w-40">
                <img
                className="align-items: center"
                src="8.png"
                />
              </div>
              <h5 className='kk'>Perfumaria</h5>
            </div>
          ))}
        </div>

        <div class="mm">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="rounded-full aspect-h-1 aspect-w-1 overflow-hidden lg:aspect-none group-hover:opacity-75 lg:h-40 w-40">
               <img
                className="align-items: center, mx-auto w-max, rounded-xl"
                src="9.png"
                />
              </div>
              <h5 className='bb'>Eletrônicos</h5>
            </div>
          ))}
        </div>

        <div class="pp">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="rounded-full aspect-h-1 aspect-w-1 overflow-hidden lg:aspect-none group-hover:opacity-75 lg:h-40 w-40">
                <img
                className="align-items: center, mx-auto w-max, rounded-xl"
                src="10.png"
                />
              </div>
              <h5 className='ss'>Feminino</h5>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

  