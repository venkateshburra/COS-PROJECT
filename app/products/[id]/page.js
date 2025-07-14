// app/products/[id]/page.js

import Link from "next/link";
const products = [
  {
    id: 1,
    name: 'hand bag',
    price: '₹799',
    image: 'https://samsara-bucket-1.s3.ap-south-1.amazonaws.com/1751453498531-cc0002121b8c2143c79a7c6ab8152ffe.jpg',
    hoverImage: 'https://samsara-bucket-1.s3.ap-south-1.amazonaws.com/1751450521747-f478c9616720010a07ddbdab244c5c51.jpg',
  },
  {
    id: 2,
    name: 'T-shirt S24',
    price: '₹999',
    image: 'https://samsara-bucket-1.s3.ap-south-1.amazonaws.com/1744805214451-5d790d730a094e90ad0ae74d8bbda5bb.png',
    hoverImage: 'https://samsara-bucket-1.s3.ap-south-1.amazonaws.com/1744805215805-f7144c09c93ca8be991350b328ee36e3.png',
  },
  {
    id: 3,
    name: 'dress 12',
    price: '₹59,999',
    image: 'https://samsara-bucket-1.s3.ap-south-1.amazonaws.com/1746083587096-25759703b0e4a3c70cb7f39d7cdda1a6.jpeg',
    hoverImage: 'https://samsara-bucket-1.s3.ap-south-1.amazonaws.com/1746083607313-21f3049d53f8ed86df0151fff670d598.jpeg',
  },
  {
    id: 4,
    name: 'dress 15',
    price: '₹79,999',
    image: 'https://samsara-bucket-1.s3.ap-south-1.amazonaws.com/1751276758451-da79c4a83c233910210963dff54f92a5.png',
    hoverImage: 'https://samsara-bucket-1.s3.ap-south-1.amazonaws.com/1751276773799-94edfcb112774dcab854d595286945aa.png',
  },
  {
    id: 5,
    name: 'shirt',
    price: '₹69,999',
    image: 'https://samsara-bucket-1.s3.ap-south-1.amazonaws.com/1744805214451-5d790d730a094e90ad0ae74d8bbda5bb.png',
    hoverImage: 'https://samsara-bucket-1.s3.ap-south-1.amazonaws.com/1744805215805-f7144c09c93ca8be991350b328ee36e3.png',
  },
  {
    id: 6,
    name: 'black dress',
    price: '₹59,999',
    image: 'https://samsara-bucket-1.s3.ap-south-1.amazonaws.com/1746083587096-25759703b0e4a3c70cb7f39d7cdda1a6.jpeg',
    hoverImage: 'https://samsara-bucket-1.s3.ap-south-1.amazonaws.com/1746083607313-21f3049d53f8ed86df0151fff670d598.jpeg',
  },
];

export default function ProductDetails({ params }) {
  const id = parseInt(params.id);
  const product = products.find((p) => p.id === id);

  // Show other products as related (excluding current)
  const related = products.filter((p) => p.id !== id);

  if (!product) return <p className="p-6 text-white">Product not found.</p>;

  return (
    <>
      <div className="p-6 text-white w-full text-center max-w-[500px] mx-auto">
        <h1 className="text-4xl text-center font-bold mb-4">{product.name}</h1>
        <img
          src={product.image}
          alt={product.name}
          className="w-[400px] h-64 object-cover mb-4"
        />
        <p className="text-xl mb-2">{product.price}</p>
        <Link href="/contact">
          <button className="px-4 py-2 cursor-pointer bg-green-600 rounded hover:bg-green-700">
            Buy Now
          </button>
        </Link>
        <Link href="/contact">
          <button className="px-4 py-2 cursor-pointer fixed right-[200px] top-1/2 bg-green-600 rounded hover:bg-green-700">
            Buy Now
          </button>
        </Link>
      </div>

      <h1 className="text-3xl text-amber-300 relative top-[70px]">
        realted products
      </h1>
      <div className="grid mt-[100px] max-w-[700px] grid-cols-1 sm:grid-cols-2 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="border text-center p-4 rounded-lg shadow-md bg-white"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-lg text-gray-600">{product.price}</p>
            <Link
              href={`/products/${product.id}`}
              className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Buy Now
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
