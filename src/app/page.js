import Banner from '@/components/pages/Home/Banner/Banner';
import Subscription from '@/components/pages/Home/Subscription/Subscription';
import Footer from '@/components/reusable/Footer/Footer';
import ProductCard from '@/components/reusable/ProductCard/ProductCard';
import Image from 'next/image';

async function getData() {
  let res = await fetch(`https://dummyjson.com/products`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  return data.products;
}

export default async function Home() {
  // fetch data
  const products = await getData();

  return (
    <div>
      <Banner />

      <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">
          {products.slice(0, 12).map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </section>
      <Subscription />

      <Footer />
    </div>
  );
}
