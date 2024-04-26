import star from '../../../../public/assets/svg/star.svg';
import img1 from '../../../../public/assets/products/iphone.jpg';
import Image from 'next/image';
import { products } from '@/data/data';
import Link from 'next/link';

async function getData(id) {
  let res = await fetch(`https://dummyjson.com/products/${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  return data;
}

async function Product({ params }) {
  const product = await getData(params.id);

  return (
    <main className="h-screen">
      <section className="bg-[#fafaf2] h-full py-20">
        <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
          <div className="w-full lg:w-7/12 border border-slate-500/20 p-4">
            {product?.images[0] ? (
              <Image
                src={product.images[0]}
                className="mx-auto object-cover"
                width={400}
                height={500}
                quality={100}
                alt={product.title}
              />
            ) : (
              <></>
            )}

            <div className="flex gap-4 mt-4">
              {product?.images ? (
                product.images.map((image, index) => (
                  <div
                    className="w-[100px] h-[100px] mx-auto border relative cursor-pointer"
                    key={index}
                  >
                    <Image
                      src={image}
                      className="fill object-cover"
                      fill
                      quality={100}
                      alt=""
                    />
                  </div>
                ))
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="w-full lg:w-5/12">
            <h1 className="italic text-xl lg:text-3xl font-serif font-semibold">
              {product.title}
            </h1>
            <span className="text-[#919090] my-3">
              <Link href={`/category/${product.category}`}>
                {product.category}
              </Link>
            </span>
            <div className="mt-3 flex items-center justify-start gap-1">
              <Image src={star} className="w-[20px] h-[20px]" alt="" />
              <Image src={star} className="w-[20px] h-[20px]" alt="" />
              <Image src={star} className="w-[20px] h-[20px]" alt="" />
              <Image src={star} className="w-[20px] h-[20px]" alt="" />
              <Image src={star} className="w-[20px] h-[20px]" alt="" />
            </div>
            <hr className="my-5 bg-black" />

            <div>
              <p className="my-3">
                <span className="text-rose-600 opacity-60 line-through">
                  {`$${product.price}`}
                </span>
                <span className="font-bold text-2xl">
                  {` $${(
                    product.price -
                    product.price * (product.discountPercentage / 100)
                  ).toFixed(2)}`}
                </span>
              </p>
            </div>
            <div>
              <p className="leading-7">{product.description}</p>

              <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
                Add To Cart -{' '}
                {` $${(
                  product.price -
                  product.price * (product.discountPercentage / 100)
                ).toFixed(2)}`}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Product;
