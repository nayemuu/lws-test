'use client';

import { useRouter } from 'next/navigation';

import Image from 'next/image';
import Link from 'next/link';

function ProductCard({ product }) {
  const router = useRouter();
  const handleNavigate = () => {
    router.push(`/products/${product.id}`);
    console.log("router.push method used");
  };
  
  return (
    <div>
      <div
        className="relative delay-150 w-180px lg:w-[270px] h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-center transition-all duration-3000 ease-in-out transform cursor-pointer"
        onClick={handleNavigate}
      >
        <Image
          src={product.images[0]}
          fill
          quality={100}
          alt="p"
          className="object-cover"
        />
      </div>
      <h2 className="text-sm lg:text-base mt-2">
        <div onClick={handleNavigate}>{product.title}</div>
        <span className="text-[#919090]">
          <Link href={`/category/${product.category}`}>
            {` (${product.category})`}
          </Link>
        </span>
      </h2>
      <p className="text-[#919090] text-sm ">{product.description}</p>

      <p className="text-rose-600 text-sm mt-4">
        <span className="text-[#919090] line-through">{`$${product.price}`}</span>
        {` $${(
          product.price -
          product.price * (product.discountPercentage / 100)
        ).toFixed(2)}`}
      </p>
    </div>
  );
}

export default ProductCard;
