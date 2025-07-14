// app/page.js
import Image from "next/image";
import Link from "next/link";
import shirtImg from "../app/shirt.jpg";
import eliteImg from '../app/elite.png'

const brands = [
  {
    name: "Bagify",
    logo: "https://img.icons8.com/ios-filled/100/shopping-bag.png",
  },
  {
    name: "WearMax",
    logo: "https://img.icons8.com/ios-filled/100/t-shirt.png",
  },
  {
    name: "StyleNest",
    logo: "https://img.icons8.com/ios-filled/100/dress-front-view.png",
  },
  {
    name: "EliteWear",
    logo: eliteImg,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen -mt-18 flex flex-col items-center justify-center text-center p-6 text-white">
      {/* Hero Section */}
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">
        Welcome to My Store
      </h1>
      <p className="text-lg sm:text-xl mb-6">
        Discover the latest fashion at unbeatable prices.
      </p>

      {/* <Image
        src={shirtImg}
        alt="Banner"
        className="w-full max-w-4xl h-[500px] mx-auto object-contain mb-6 rounded shadow-lg"
      /> */}

      <Link href="/products">
        <button className="px-6 cursor-pointer py-3 bg-blue-600 text-white text-lg rounded-md hover:bg-blue-700 transition">
          Shop Now
        </button>
      </Link>

      {/* Brand Logos Section */}
      <div className="mt-16 w-full max-w-5xl">
        <h2 className="text-3xl font-semibold mb-12 text-white">Our Brands</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 justify-items-center">
          {brands.map((brand) => (
            <Link
              key={brand.name}
              href={`/products?brand=${encodeURIComponent(brand.name)}`}
              className="flex bg-white hover:bg-green-200 flex-col items-center p-2 rounded hover:shadow-lg transition"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={64}
                height={64}
                className="object-contain mb-2"
              />
              <span className="text-sm text-black">{brand.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
