import Banner from '@/components/pages/Category/Banner/Banner';
import Subscription from '@/components/pages/Home/Subscription/Subscription';
import Footer from '@/components/reusable/Footer/Footer';
import ProductCard from '@/components/reusable/ProductCard/ProductCard';
import { products } from '@/data/data';
import Link from 'next/link';

function Category({ params }) {
  let categories = ['All'];
  products.map((product) => {
    if (!categories.includes(product.category))
      categories.push(product.category);
  });

  let filteredProduct = products.filter((singleProduct) => {
    if (params.categoryName.trim().toLowerCase() === 'all') {
      // console.log('all');
      return true;
    } else if (
      singleProduct.category.trim().toLowerCase() ===
      params.categoryName.trim().toLowerCase()
    ) {
      // console.log('yoo');
      return true;
    } else {
      return false;
    }
  });

  return (
    <div>
      <Banner />
      <div className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
        <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
          {categories.map((singleCategory, index) => (
            <button
              className={`hover:border-b border-black block h-6 box-border mt-4 ${
                index === 0 ? 'mt-4' : 'mt-5'
              } ${
                params.categoryName === singleCategory
                  ? 'bg-[#1B2850] text-white px-2 rounded-sm'
                  : ''
              }`}
              key={index}
            >
              <Link href={`/category/${singleCategory}`}>{`${singleCategory
                .charAt(0)
                .toUpperCase()}${singleCategory.slice(1)}`}</Link>
            </button>
          ))}
        </div>

        <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
          {filteredProduct.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
      <Subscription />
      <Footer />
    </div>
  );
}

export default Category;
