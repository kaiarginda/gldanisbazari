// "use client";

// import React, { createContext, useContext } from "react";
// import ProductItem from "./ProductItem";
// import { useState, useEffect } from "react";
// import { FaCartPlus } from "react-icons/fa";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { Oval } from "react-loader-spinner";
// const ProductsList = () => {
//   const router = useRouter();
//   // const product1 = {
//   //   name: "Iphone 15",
//   //   description: "Mobile Phone",
//   //   image:
//   //     "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBEPEREQDxIPERIPEA8RDw8QEREPEQ8RGBQZGhgUGBgcITAlHCEtHxgYJjgmLS8xNTY1GiQ7QDs2Py40NT8BDAwMEA8QHhISHjQhJCE0NDE0MTExMTExNDE0NT8xNDExMTQ0MTQxNj8xNDQxNDQxMTE0NDQ0MTQ0P0A0ND8/Mf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAECAwUGBwj/xABKEAACAQICBQQOBgcHBQAAAAAAAQIDEQQSBQYhMVFBkbGyExYiNDVSVGFxc3SBodEHI3KTwdIXMjNCgpLwFSRTYqKjwhRjg4Tx/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAEDBAIFBv/EACURAQACAgEDAwUBAAAAAAAAAAABAgMRMQQSIRMyYSIjM1HBcf/aAAwDAQACEQMRAD8A9mAAAAoBbKSSbbSS2tvYkjU4jWfA024yxFNyW+Mc1R/6UzhNZtYJYypOnCTjh6cpRjFPL2Vxe2cnwOTqaepwlkhZ5djy9zGPwfxsRtL17tywN7dkqbEn+xq258tivbhgf8Sf3NX5HCYTJWhnpVJTjZXcZQllvxsthIWHfjz/ANPyI2adp234Lx6n3NX8o7b8F49T7mr+U42GFqTu4Sqyy77RUkuZGJ1509s7ThyyStKPna4DZp3HbdgvHqfc1fyjttwfj1fuKv5Tl6clJJrczPEbNOi7bcH41X7it+Up22YPxqv3Fb8poUgkNmm+lrdg1vnUXppVF0oi1tfNGU2lUr9jvfLnhUhmS5VdbV50a2xrtKaHo4mE4ThB51t2bG+S9uneuRobNOg/SJojyul8R+kTRHldL4nztrDomWBrypvNbbKEnvtdqzfK1x5VZ2VzV9klxfOdIfTv6RNEeV0viP0iaI8rpnzDKTe9t+8QjdpcWhEbH09+kTRHldL4hfSJohu3/V0+TbaVuex83LDx4fFlyw0eD52W+jZZ6cvqHR+tOj8S7UMVQm+CnbpNyfJCwlmpQbjJbU09z48T0/6Ldeayrx0djZOan3NCpJ3lGXit8qf9bd/Nsdq8ubVmvL2kAHDkAAAAAAAANZrFXdLCYmot8KM38DZmj1xv/Z+Lta/YJ7+HKB4rpau6dCSi9srQT8ysumSfuOKhnqzcYJu2ZqN+RJtvb5k2djpqGeCXLeq16U4NHG1KM4SbgnZ3ultaT5GRBLqdXNIzoQSWydFqUL/vQn3WSXFPbs86PQ5VItvL+q1GUeKjKKklzNHkOi1UnVTqOSU9k5Su5Nea+1s9B/tFJOc+5ikm0trjFJKMVxdrIW1vwmPl2miNMU6NPJUi01KUlJRcs6fo3M1OJr55zmo5VOcpKPBN7jl56y1E/q4UYR5FKmqsn9qUt/uSNpozSscTeEoxhWjGU45L5K0Yq8kov9WSW217NJkduvKd7bPR7yucOSE+580Wk0uZmwiarAy+sqfwdSJs4yIGZAtTKpgXoqURUDzn6T8NF9inZXUor054yu/9uJ5+qS4I9G+k++Wlutnhfje1S34/A89SNWGsTVZWI0tVGPBGSFJLcki6KMkYl9aR+ncVhSMTJCBdCBnhAurVZELIQMdaboVsNWjvhVi9my+WUXb4s2FOmQ9OU8qo/bf4DPX7UmSv0S+o8LPPThN7XKEJN8bxTM5D0Vf/AKehe1+wUr23XyLcTDy2IAAAAAAAANJrj4OxfqJ9BuzSa4+DsZ7PU6APFNIvZD01f+BocTKn+8rtcLbH79lzb6anlhFre3UinwbdNXOSpwlWc3dKMIyntbsox/r4kRBM6bfDZE7wVnv5L/DYbXSFZyoqS3dzKXubT+LOWlGeHlBu6zxhOz2PLJXR0+AmpxlB28ZXWzarSVuBMxqfJHlAhiaby5lK6lJ5o23WWXZy7ns85ttX6+bG0XHZGE51Jf5KcYycr+7Z7yLPQtNu8ZVYLxYqM4+5tpr3mxwNCGHi4wTWe2ec2pTmltUXbZGN9tlvttJm240iI8um0dPupvjk6kTaQmaTRc75nxy9VGzjMrdpkZmSMiJGZljMCSpF1zBGZepAcL9Jn6lP7dPq1Tz+KPQ/pFpucFJWtDsUpehucemSPP4o2YPatpwuijNCBbCJJpwNdarohWECVTplaVMn4egaKUW0qtoUDX61UsscO+NSX/E6jC4XcafX2mowwquszqTduW3c7SOqiIwSszY9YZl9B6L73oeppdREsiaL73oeppdREs8R5IAAAAAAAAaTXHwdjPZ6nQbs0eucktHYu9lehNK+zbwA8T0rh3UpyjH9aLzwW9vZ3SXn2J+442ph5xk3BXUr3intV9686O/lFP8AB8qIeI0bTm25RTb3yi8jfpW58xCXGUqMpSi5qyja0Xv2bl5kbvC1Mkot+/0Gzhoamtyqfzw/KZFoeH/c/nh+UTI1elMVOM7XaVlks2lu+ZPw1Sc4U1JXm1y7+XbzE+GjlsTU3bjOP5SbhsJCG5Jcdrk372BN0dDLBX5SbGZFjIyxkcpSozL4zIqkXqYEuMzJGZDUy+NQDlvpAqtU8q/f7DF+ZKU5f8UcLCJ2+vMVOm34nYWvfKa/E42nE3dPH0r8UeGWnAmUaZjowNnhqFz0KVaa12uw1C5t8LhtwwuG3EvHYynhIZpWlOSeSHF8XwRfa1cdZtadRDdixbUx2MhhIZpWlOS7iHK/O+CPPNPYmdacZzlmlKW18N1klyIm47FzqzlOcs0pb3yJciS5EajHu7h9r5HhZ+ptnvviI4j+o6yYrhmsPq3Rfe9D1NLqIlkPRMk8PQaaf1NLatv7iJhU8AAAAAAAAAOc1+8HYj7KOjOc198HYj7KA8nTLjHFl9yEr0zJFmFMviwM8ZGWMiNFmWMglIjIyRkR4yL4yAkKRcpGBSLsxyM6mXKZHzBTA0mt7vTn6KHXmcjRidNranKF1ujKi5ej6xdLRzmHN/S+1rwR4bLCU72N7g8NuNdo2GZo3uJxVPC01KVpTku4hx874I9Pvrjp3WnUQ9LDj2uxmKp4SGaVpTku4h43nfBHFY7FzqzlUnLNKW98OCS5EXY7FzqzlOcs0pb3w8y4IgTmeH1HUWz2/URxH9lptaKRqFs5EPFvbD7XyM8mRsS9sPtL8CuK6eX1V+6svqnVzvPD+qibM1mrneeH9VE2ZLywAAAAAAAA53XuLejsTZXtC78yW9nRGj1z8G4z2ep0AeNxZkTMEWXpkJZLlyZjTK3AzRkZFIjKRepASVIvUiPFt7ru2/zFVMCSpl2YjqRcpBLPmGYw5ymYDVazO9Kp/wCv15nMU52Oh1kqPsbS/enRT9Fqj6UjmGX4r9sNmCs9m/lsaOlZUmsqTfJfd7xidISqyc5u8pb3w8y4I1mUZjnNe2SIiZ8Q248lqxpnnO5hlIscy1yK610ryZdqtkau9sPtL8DK2Yaz2x9J1MeGPLbdZfVur0XHCYdSTT7FDY/OrmzImiu96HqaXVRLOWQAAAAAAAANHrn4Nxns9ToN4aPXPwbjPZ6nQB4si9FqLkQlcmVLUVAuuY44mLmoJ7W8vmT4XFWTUZNb1FtcxqFK27k3AdTGMlDIlZu+Zt7/AEWME4uLs/8A6ZsNXzwjPxkr+Z8q5yPWm3J35HZegC9SLlIwKRepAZcxRyLMxRyA1WsG2H8dLq1Tn8h11fASxN4QcIuPY5tzbSss65E+Jg7V6vj0P5p/lOoxZbRusTMPa6HHFsO5/blZQMU0dbPVucU3KpR2cJT/ACnK4uEoSacbWb5bnVcOWPNomDqKxSNo7ZRyLHJ8ClzrtYJsubMVR7Y+lF9zHPfH0oi0eFV58PrjRXe9D1NLqolkTRXe9D1NLqollagAAAAAAAANHrn4Nxns9ToN4aPXPwbjPZ6nQB4uipQXISuK3LLi4F727OJqKsHCTi+Tc+K4m1uWzhGW9J23XVwGha+yUHyd1H0bn+HOS8TJXXHlZFjsd1sa5UVuBkTLlIw3LlIDLcpmLMxTMBno1cjk+KguuXzx3nNfiqmWLf8Ampr4VCBPEHr9Hftxa+Xo9NkmuPTY4nHNrec9jZZmzPVq3IVWVy3Lfuh3kyTaPKFOJikjPMxSMNqsloY2Y5719pGRmOe9elFN48K78PrnRXe9D1NLqolkTRXe9D1NLqollCkAAAAAAAANHrn4Nxns9ToN4aPXPwbjPZ6nQB4rcXMdxchLJcXMdytwL7i5ZcpcDJcXLLi4F9xmLLi4GTMUzFlylwMWkpfV/wAdPq1DTyqG10jtp/x0urUNT2GTnFJN5nb4XN2C2oiG3DWZpuCTMM0T54dx3kWpA1WrLu1ZhDmjDJEicTDJFFoVTDCzFPevSjNJGKe9elFGSPplVbh9caK73oeppdVEsiaK73oeppdVEszKAAAAAAAAA0eufg3Gez1Og3ho9c/BuM9nqdAHh1xctuLkJXXFy24uBdcXLbi4F1xctuLgXXFy24uBdcXLbi4FmNf1f8dLq1CTqxaVez/w59BDxz+rfrKXVqEnVN3xP/jqdCLsM/crHzD2ugiPTSdJ0Em7GhrwOo0pHaznsTE9vJBnjy1dSJHmiZVRFmjFeGG0I8kYJ74+lEiRgqb4+lfgZsntlTfh9b6K73oeppdVEsiaK73oeppdVEsyqAAAAAAAAA0eung3Gez1Og3ho9dPBuM9nqdAHhSFy1MXISuuLltxcC64uUuUAuuLltxcC64uW3FwLri5aVuBhx7+qfrKPVqkrVF/3lerqdCIuP8A2T9ZR6tUlao98r1dToR3hn7tf9h7XQfjbnSa2s53Eo6TSS3nO4lbz378Gflq6qIsyXWIkzHdisjyMFXfH7XyM8jBV3x+18jLl9sqL8S+t9Fd70PU0uqiWRNFd70PU0uqiWZFAAAAAAAAAaPXTwbjPZ6nQbw0eung3Gez1OgDwdAoipCQAABcAAAAAuAAAAGLH/sn6yj1apL1R76Xq6nQiHj/ANk/WUerVJeqD/vK9XU6EdYfzV/2HtdB+NvdJcpzmK5TodJy3nOYqR9Bfgz8tbWIkyVWZDmzFeWGzDIw1N8fSjNIw1N8fSjNl9sqb8PrfRXe9D1NLqolkTRXe9D1NLqolmRQAAAAAAAAGi10TejcZbZ/d58lzemu09huz4TEUltz0akbcdm4D56QG1bHsa2NcHyoEJAAAAAAAAXFoAAAAYcffsTd9nZKV1be8tSzv7nzkjVavCGITnJRThOKu7XbWxETS1RRpQjyzqZvdCLSf+4+Z8DSdmacWuRlmKNWi36l6HTZ/To7bSOKUm7M0WIqXI6xba2swzq3PWtlizq+Tu8qVJkebLpzMUmZ7WZ5lSTMNT9aP2l+Be2ZdHYZ4jE0KMU26lWEbR2uzkr/AAuZ8k/TKq8+H1bolNYbD32vsFG7ta7yImmHD08kIR8WEY7N2xWMxmUgAAAAAAAAAA8p131JqRqTxODg5wqNyqUoruqcn+tKK5Vy85wNSEou0k4vhJZXzM+kzX19C4Wo3KdGE5O95STbfvI0PnvK+DGV8D37tbwPk1H+Up2tYHyalzMaS8CyvgMr4Hvva1gfJqXM/mO1rA+TUuZ/MaQ8CyvgMr4Hvva1gfJqXM/mO1rA+TUuZ/MaS8CyvgxkfBnvva3gfJqXMyktWMA008LRaas043TXAaHgTTGIlGis1aWSNrpPbOa/yR3y9O7i0e/LVvArYsPTXmV1+JZDVTR8W3HCUE27tqNm3xY0h8v43SHZp5mnFJKMI3vlgm2lfld223ytvcRXV8x9W9rWB8mpcz+Y7WsD5NS5n8zuLTDrunh8rRxNuQq8UuB9UdrWB8mpcz+Y7WsD5NS5n8zr1bJ77PlV4hcCjrLgfVfa1gfJqXM/mXdrmC8mo/yj1bHfL5YwuGrV5KNGlUqSbsskZS3vzbj2X6MPo8nhJxx2OjaslejRe+m3+9Lz/wBbt/pOH0Th6TzU6UIS8aN0+cnHM2m3LmZmVQAcoAAAAAAAAAAAAAAAAAAAAAAAAAABQFQBQAAVAAAoABUAAAAAAAH/2Q==",
//   //   price: "$2000",
//   //   productId: `${Date.now() + Math.floor(Math.random() * 213)}`,
//   // };
//   const [productData, setProductData] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [items, setItems] = useState("");
//   const [loading, setLoading] = useState(false);

//   // fetch("http://localhost:3000/api/getproducts")
//   //   .then((res) => {
//   //     setLoading(true);
//   //     return res.json();
//   //   })
//   //   .then((data) => {
//   //     setLoading(false);
//   //     setProductData(data);
//   //   })
//   //   .catch((error) => {
//   //     // Handle any potential errors
//   //     console.error("Error fetching products:", error);
//   //   });

//   useEffect(() => {
//     setLoading(true);

//     fetch("http://localhost:3000/api/getproducts")
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         setLoading(false);
//         setProductData(data);
//       })
//       .catch((error) => {
//         // Handle any potential errors
//         console.error("Error fetching products:", error);
//         setLoading(false);
//       });
//   }, []); // Empty dependency array ensures it runs once on component mount

//   const [visibleProducts, setVisibleProducts] = useState(6); // Initially show 2 rows
//   // console.log(cart, "cart");
//   const loadMoreProducts = () => {
//     setVisibleProducts((prevVisible) => prevVisible + 3); // Show 3 more products
//   };

//   const plusClickHandler = (product) => {
//     // setCart([...cart, product.productId]);
//     // setItems(cart.length);
//     setCart((prevCart) => {
//       const updatedCart = [...prevCart, product];
//       setItems(updatedCart.length);
//       return updatedCart;
//     });
//   };

//   const cartSubmitHandler = () => {
//     const data = localStorage.getItem("products");
//     const productData = JSON.parse(data);
//     localStorage.setItem("products", JSON.stringify([...cart, ...productData]));
//   };

//   const [search, setSearch] = useState("");
//   return (
//     <div className="mb-4">
//       <div className="bg-gray-800 p-4 rounded-lg shadow-md max-w-xs mx-auto mb-4 m-8">
//         <div className="mb-4">
//           <input
//             value={search}
//             onChange={(e) => setSearch(e.target.value.toLowerCase())}
//             type="text"
//             className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
//             placeholder="Search for products..."
//           />
//         </div>

//         <button
//           className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
//           onClick={(e) => setSearch(search)}
//           // onChange={(e) => setSearch(e.target.value)}
//         >
//           Search
//         </button>

//         <div className="mt-4 flex justify-center items-center">
//           <Link href={"/cart"} className="flex gap-3 items-center">
//             <FaCartPlus
//               className="text-4xl text-blue-500 hover:text-blue-600 cursor-pointer"
//               onClick={cartSubmitHandler}
//             />
//             <span className="text-white text-3xl">{items}</span>
//           </Link>
//         </div>
//       </div>{" "}
//       {/*  */}
//       <div className="flex items-center justify-center">
//         {loading ? (
//           <Oval
//             height={80}
//             width={80}
//             color="#4fa94d"
//             wrapperStyle={{}}
//             wrapperClass=""
//             visible={true}
//             ariaLabel="oval-loading"
//             secondaryColor="#4fa94d"
//             strokeWidth={2}
//             strokeWidthSecondary={2}
//           />
//         ) : null}
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-8">
//         {productData?.slice(0, visibleProducts).map((product, index) => {
//           if (!product.name.toLowerCase().includes(search)) return;

//           return (
//             <div key={index} className="col-span-1 relative ">
//               <div>
//                 {/*  */}
//                 <div className="bg-gray-900 text-white p-2 rounded-lg shadow-md max-w-xs mx-auto mb-4">
//                   <div className="relative">
//                     {/* <img
//                       src={product.image}
//                       alt="Product"
//                       className="w-full h-64 object-fill  rounded-lg"
//                     /> */}
//                     <div className="aspect-w-16 aspect-h-9 flex justify-center items-center">
//                       <img
//                         src={product.image}
//                         alt="Product"
//                         className="object-cover rounded-lg"
//                       />
//                     </div>
//                     <div className="absolute top-2 right-2">
//                       <button
//                         className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full"
//                         onClick={() => {
//                           plusClickHandler(product);
//                         }}
//                       >
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="h-6 w-6"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M12 6v6m0 0v6m0-6h6m-6 0H6"
//                           />
//                         </svg>
//                       </button>
//                     </div>
//                   </div>
//                   <h4 className="text-lg text-gray-500 pt-2">
//                     Product Seller:{"    "}
//                     <Link href={`/user/${product.author}`}>
//                       {product.author}
//                     </Link>
//                   </h4>
//                   <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
//                   <p className="text-gray-400 text-sm">{product.description}</p>
//                   <div className="flex justify-between items-center mt-2">
//                     <span className="text-lg font-semibold">
//                       ${product.price}
//                     </span>
//                     <Link
//                       href={`/products/${product.productId}`}
//                       className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
//                     >
//                       View Item
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       {visibleProducts < productData.length && (
//         <div className="text-center mt-4 ">
//           <button
//             onClick={loadMoreProducts}
//             className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
//           >
//             Show More
//           </button>
//         </div>
//       )}
//       {/*  */}
//     </div>
//   );
// };

// export default ProductsList;

"use client";
import React, { createContext, useContext } from "react";
import ProductItem from "./ProductItem";
import { useState, useEffect } from "react";
import { FaCartPlus } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Oval } from "react-loader-spinner";

const ProductsList = () => {
  const router = useRouter();
  const [productData, setProductData] = useState([]);
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState("");
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      await fetch("/api/getproducts")
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          setProductData(data);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
          setLoading(false);
        });
    };
    fetchData;
  }, []);

  const [visibleProducts, setVisibleProducts] = useState(6);

  const loadMoreProducts = () => {
    setVisibleProducts((prevVisible) => prevVisible + 3);
  };

  const plusClickHandler = (product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      setItems(updatedCart.length);
      return updatedCart;
    });
  };

  const cartSubmitHandler = () => {
    const data = localStorage.getItem("products");
    const productData = JSON.parse(data) || [];
    // localStorage.setItem("products", JSON.stringify([...cart, ...productData]));

    if (Array.isArray(productData)) {
      // Update the local storage with the combined cart and productData
      localStorage.setItem(
        "products",
        JSON.stringify([...cart, ...productData])
      );
    } else {
      // If productData is not an array, handle it accordingly (e.g., set only the cart)
      localStorage.setItem("products", JSON.stringify(cart));
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-4">
        <div className="mb-4">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            type="text"
            className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
            placeholder="Search for products..."
          />
        </div>

        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
          onClick={(e) => setSearch(search)}
        >
          Search
        </button>

        <div className="mt-4 flex justify-center items-center">
          <Link href="/cart" className="flex gap-3 items-center">
            <FaCartPlus
              className="text-4xl text-blue-500 hover:text-blue-600 cursor-pointer"
              onClick={cartSubmitHandler}
            />
            <span className="text-white text-3xl">{items}</span>
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-center">
        {loading ? (
          <Oval height={80} width={80} color="#4fa94d" visible={true} />
        ) : null}
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-8">
        {productData
          .slice(0, visibleProducts)
          .filter((product) => product.name.toLowerCase().includes(search))
          .map((product, index) => (
            <div key={index} className="col-span-1 relative">
              <div className="bg-gray-900 text-white p-2 rounded-lg shadow-md">
                <div className="relative aspect-w-16 aspect-h-9">
                  <img
                    src={product.image}
                    alt="Product"
                    className="object-cover rounded-lg"
                  />
                  <div className="absolute top-2 right-2">
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full"
                      onClick={() => plusClickHandler(product)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <h4 className="text-lg text-gray-500 pt-2">
                  Product Seller:{" "}
                  <Link href={`/user/${product.author}`}>{product.author}</Link>
                </h4>
                <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                <p className="text-gray-400 text-sm">{product.description}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-lg font-semibold">
                    ${product.price}
                  </span>
                  <Link
                    href={`/products/${product.productId}`}
                    className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
                  >
                    View Item
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div> */}

      {/*  */}

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-8">
        {productData
          .slice(0, visibleProducts)
          .filter((product) => product.name.toLowerCase().includes(search))
          .map((product, index) => (
            <div key={index} className="col-span-1 relative">
              <div className="bg-gray-900 text-white p-2 rounded-lg shadow-md">
                <div
                  className="relative flex justify-center items-center overflow-hidden aspect-w-16 aspect-h-9"
                  style={{ minHeight: "200px" }}
                >
                  <img
                    src={product.image}
                    alt="Product"
                    className=" rounded-lg w-60 h-40"
                  />
                  <div className="absolute top-2 right-2">
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full"
                      onClick={() => plusClickHandler(product)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <h4 className="text-lg text-gray-500 pt-2">
                  Product Seller:{" "}
                  <Link href={`/user/${product.author}`}>{product.author}</Link>
                </h4>
                <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                <p className="text-gray-400 text-sm line-clamp-3 h-16">
                  {product.description}
                </p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-lg font-semibold">
                    ${product.price}
                  </span>
                  <a
                    href={`/products/${product.productId}`}
                    className="bg-blue-500 hover-bg-blue-600 text-white p-2 rounded"
                  >
                    View Item
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/*  */}
      {visibleProducts < productData.length && (
        <div className="text-center mt-4">
          <button
            onClick={loadMoreProducts}
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductsList;
