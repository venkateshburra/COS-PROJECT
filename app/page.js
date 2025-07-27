// app/page.js
import Image from "next/image";
import Link from "next/link";
import womens from "../app/womens.png";
import mens from "../app/mens.png";
import kids from "../app/kids.png";
import accesstries from "../app/accesstries.png";

import eliteImg from "../app/elite.png";

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

const categories = [
  {
    id: 1,
    src: womens,
    alt: "women dresses",
    className: "col-span-2 row-span-4",
    description: "Women"
  },
  {
    id: 2,
    src: mens,
    alt: "men dresses",
    className: "row-span-2",
    description: "Mens"

  },
  {
    id: 3,
    src: kids,
    alt: "kids dresses",
    className: "row-span-2",
    description: "Kids"

  },
  {
    id: 4,
    src: accesstries,
    alt: "accessories",
    className: "col-span-2 row-span-2",
    description: "accesstries"
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen -mt-6 flex flex-col items-center justify-center text-center p-6 text-white">
      {/* Hero Section */}
      <h1 className="text-4xl sm:text-5xl font-bold mb-12">Shop by Category</h1>
      <div className="grid h-[450px] md:grid-cols-3 gap-4 lg:gap-8 lg:grid-cols-4 lg:grid-rows-4">

        {categories.map((item) => (
          <div
            key={item.id}
            className={`cursor-pointer rounded-3xl transform overflow-hidden transition duration-500 ease-in-out 
              hover:scale-103 hover:-translate-y-1 hover:border-4  border-amber-300
              ${item.className}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              className="w-full h-full overflow-hidden object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>

      <p className="text-lg sm:text-xl mt-12 mb-6">
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
