
import { useEffect, useState } from "react";
import { assets } from "../../../assets/assets"
import ProductCard from "../../components/ProductCard";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import { useParams } from "next/navigation"; // useParams is Client-only
import Loading from "../../components/Loading"
import { useAppContext } from "../../context/AppContext"; // custom hook using React context
import React from "react";

const Product = () => {
  // Get the dynamic route parameter (e.g., product ID)
  const { id } = useParams();

  // Get products, router, and addToCart function from context
  const { products, router, addToCart } = useAppContext();

  // Local state for main image and product data
  const [mainImage, setMainImage] = useState(null);
  const [productData, setProductData] = useState(null);

  // Find the product by ID and set the state
  const fetchProductData = async () => {
    const product = products.find((product) => product._id === id);
    setProductData(product);
  };

  // When the component mounts or when the ID/product changes, fetch the product data
  useEffect(() => {
    if (!id || !products.length) return;
    fetchProductData();
  }, [id, products]);
 return productData ? (
    <>
      <Navbar />
      <div className="px-6 md:px-16 lg:px-32 pt-14 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="px-6 lg:px-16 xl:px-28">
            <div className="rounded-lg overflow-hidden bg-gray-50 mb-4">
              <Image
                src={mainImage || productData.image[0]}
                alt=""
                className="w-full h-auto object-cover mix-blend-multiply"
                width={1280}
                height={720}
              />
            </div>
  <div className="grid grid-cols-4 gap-4">
              {productData.image.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setMainImage(image)}
                  className="cursor-pointer rounded-lg overflow-hidden bg-gray-50/10"
                >
                  <Image
                    src={image}
                    alt=""
                    className="w-full h-auto object-cover mix-blend-multiply"
                    width={1280}
                    height={720}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="text-3xl font-medium text-gray-800/90 mb-4">
              {productData.name}
            </h1>
       <div className="flex items-center gap-0.5">
              <Image className="w-4 h-4" src={assets.star_icon} alt="star_icon" />
              <Image className="w-4 h-4" src={assets.star_icon} alt="star_icon" />
              <Image className="w-4 h-4" src={assets.star_icon} alt="star_icon" />
              <Image className="w-4 h-4" src={assets.star_icon} alt="star_icon" />
              <Image className="w-4 h-4" src={assets.star_dull_icon} alt="star_dull_icon" />
              <p className="ml-2 text-sm">(4.5)</p>
            </div>

            <p className="text-gray-600 mt-3">{productData.description}</p>

            <h1 className="text-xl font-medium mt-6">
              ${productData.offerPrice}
              <span className="text-base font-normal text-gray-600 line-through ml-2">
                ${productData.price}
              </span>
            </h1>

            <hr className="bg-gray-600 my-6" />
  <div className="overflow-x-auto">
              <table className="table-auto border-collapse w-full max-w-72">
                <tbody>
                  <tr>
                    <td className="text-gray-600 font-medium">Brand:</td>
                    <td className="text-gray-800/50">{productData.brand}</td>
                  </tr>
                  <tr>
                    <td className="text-gray-600 font-medium">Color:</td>
                    <td className="text-gray-800/50">{productData.color}</td>
                  </tr>
                  <tr>
                    <td className="text-gray-600 font-medium">Category:</td>
                    <td className="text-gray-800/50">{productData.category}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex items-center mt-10 gap-4">
              <button
                onClick={() => addToCart(productData._id)}
                className="w-full py-3.5 bg-gray-100 text-gray-800 hover:bg-gray-200 transition"
              >
                Add to cart
              </button>
              <button
                onClick={() => {
                  addToCart(productData._id);
                  router.push("/cart");
                }}
                className="w-full py-3.5 bg-orange-600 text-white hover:bg-orange-600 transition"
              >
                Buy now
              </button>
            </div>
          </div>
       </div>
      {/* Featured Products Section */}
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center mb-4 mt-16">
            <h1 className="text-3xl font-medium">
              Featured{" "}
              <span className="font-medium text-orange-600">Products</span>
            </h1>
            <hr className="mb-5 h-0.5 bg-orange-600 w-20" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-6 pb-14 w-full">
            {products.slice(0, 5).map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
         </div>
                   <button className="px-8 py-2 mb-16 border rounded text-gray-500/70 hover:bg-slate-50/90 transition">
            See more
          </button>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <Loading />
  );
};

export default Product;


