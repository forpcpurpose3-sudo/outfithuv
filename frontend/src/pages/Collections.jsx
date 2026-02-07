import React, { useContext, useEffect, useState } from 'react'
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import Title from '../component/Title';
import { shopDataContext } from '../context/ShopContext';
import Card from '../component/Card';

function Collections() {

    let [showFilter,setShowFilter] = useState(false)
    let {products,search,showSearch} = useContext(shopDataContext)
    let [filterProduct,setFilterProduct] = useState([])
    let [category,setCaterory] = useState([])
    let [subCategory,setSubCaterory] = useState([])
    let [sortType,SetSortType] = useState("relavent")

    const toggleCategory = (e) =>{
        if(category.includes(e.target.value)){
            setCaterory(prev => prev.filter(item => item !== e.target.value))
        }else
         {
            setCaterory(prev => [...prev,e.target.value])
         }
    }

    const toggleSubCategory = (e) =>{
         if(subCategory.includes(e.target.value)){
            setSubCaterory(prev => prev.filter(item => item !== e.target.value))
        }else
         {
            setSubCaterory(prev => [...prev,e.target.value])
         }
    }

    const applyFilter = ()=>{
        let productCopy = products.slice()

        if(showSearch && search){
            productCopy = productCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
        }
        if(category.length > 0)
        {
            productCopy = productCopy.filter(item => category.includes(item.category))
        }
        if(subCategory.length > 0)
        {
            productCopy = productCopy.filter(item => subCategory.includes(item.subCategory))
        }
        setFilterProduct(productCopy)

    }


    const sortProducts = (e)=>{
        let fbCopy = filterProduct.slice()

        switch(sortType){
         case 'low-high':
            setFilterProduct(fbCopy.sort((a,b)=>(a.price - b.price)))
        break;

         case 'high-low':
            setFilterProduct(fbCopy.sort((a,b)=>(b.price - a.price)))
        break;
        default:
            applyFilter()
        break;
        }

    }

    useEffect(()=>{
        sortProducts()
    },[sortType])


    useEffect(()=>{
    setFilterProduct(products)
    },[products])

    useEffect(()=>{
        applyFilter()
    },[category,subCategory,search ,showSearch])






  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-white via-gray-50 to-white pt-24 pb-20'>
      <div className='flex flex-col lg:flex-row gap-8 px-4 md:px-8 max-w-7xl mx-auto'>
        
        {/* Sidebar Filters */}
        <div className='lg:w-64'>
          <div className='bg-white/50 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 sticky top-24'>
            <button
              onClick={() => setShowFilter(!showFilter)}
              className='lg:hidden w-full text-left text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2'
            >
              Filters
              {!showFilter ? <FaChevronRight /> : <FaChevronDown />}
            </button>

            <div className={`space-y-6 ${showFilter ? 'block' : 'hidden lg:block'}`}>
              {/* Category Filter */}
              <div>
                <h3 className='text-lg font-bold text-gray-900 mb-4'>Category</h3>
                <div className='space-y-3'>
                  {['Men'].map((cat) => (
                    <label key={cat} className='flex items-center gap-3 cursor-pointer'>
                      <input
                        type="checkbox"
                        value={cat}
                        onChange={toggleCategory}
                        className='w-4 h-4 rounded border-gray-300'
                      />
                      <span className='text-gray-700 font-light'>{cat}</span>
                    </label>
                  ))}
                </div>
              </div>


            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className='flex-1'>
          {/* Header & Sort */}
          <div className='mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
            <div>
              <h1 className='text-5xl md:text-6xl font-black text-gray-900 tracking-tight'>
                Collections
              </h1>
              <p className='text-gray-600 font-light text-lg mt-2'>
                {filterProduct.length} items found
              </p>
            </div>
            <select
              value={sortType}
              onChange={(e) => SetSortType(e.target.value)}
              className='px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 font-medium'
            >
              <option value="relavent">Sort: Relevant</option>
              <option value="low-high">Sort: Low to High</option>
              <option value="high-low">Sort: High to Low</option>
            </select>
          </div>

          {/* Products Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {filterProduct.length > 0 ? (
              filterProduct.map((item, index) => (
                <Card
                  key={index}
                  id={item._id}
                  name={item.name}
                  price={item.price}
                  image={item.image1}
                />
              ))
            ) : (
              <div className='col-span-full text-center py-16'>
                <p className='text-2xl text-gray-700 font-light'>No products found</p>
                <p className='text-gray-600 font-light mt-2'>Try adjusting your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collections