'use client'; // 需要客户端交互的组件
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';  // 使用相对路径
import 'swiper/css';

export default function Home() {
  const [language, setLanguage] = useState('zh');
  const [selectedImage, setSelectedImage] = useState(null);

  // 轮播图数据
  const banners = [
    '/images/美瞳/banner1.jpg',
    '/images/美瞳/banner2.jpg',
    '/images/美瞳/banner3.jpg',
  ];

  // 内容数据
  const contentData = {
    zh: {
      sections: [
        { 
          title: '热门美瞳推荐',
          images: Array.from({ length: 8 }, (_, i) => `/images/contact-lenses/${i + 1}.jpg`)
        },
        {
          title: '当季流行服饰',
          images: Array.from({ length: 8 }, (_, i) => `/images/clothing/${i + 1}.jpg`)
        },
        {
          title: '精选鞋款',
          images: Array.from({ length: 8 }, (_, i) => `/images/shoes/${i + 1}.jpg`)
        }
      ]
    },
    en: {
      sections: [
        { 
          title: 'Top Contact Lenses',
          images: Array.from({ length: 8 }, (_, i) => `/images/美瞳/banner${i + 1}.jpg`)
        },
        {
          title: 'Fashion Clothing',
          images: Array.from({ length: 8 }, (_, i) => `/images/clothing/${i + 1}.jpg`)
        },
        {
          title: 'Featured Shoes',
          images: Array.from({ length: 8 }, (_, i) => `/images/shoes/${i + 1}.jpg`)
        }
      ]
    }
  };

  return (
    <>
      <Navbar language={language} setLanguage={setLanguage} />
      
      {/* 轮播图 */}
      <div className="w-full h-[600px]">
        <Swiper
          autoplay={{ delay: 3000 }}
          modules={[Autoplay]}
          className="h-full"
        >
          {banners.map((banner, index) => (
            <SwiperSlide key={index}>
              <img 
                src={banner}
                alt={`Banner ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 内容区域 */}
      <main className="flex-1 container mx-auto px-4 py-12">
        {contentData[language].sections.map((section, index) => (
          <section key={index} className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {section.title}
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {section.images.map((img, imgIndex) => (
                <div 
                  key={imgIndex}
                  className="group relative cursor-zoom-in"
                  onClick={() => setSelectedImage(img)}
                >
                  <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={img}
                      alt={`Product ${imgIndex + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* 图片查看模态框 */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
             onClick={() => setSelectedImage(null)}>
          <img 
            src={selectedImage} 
            className="max-w-[90vw] max-h-[90vh] object-contain"
            alt="Enlarged view" 
          />
        </div>
      )}

      <Footer language={language} />
    </>
  )
}