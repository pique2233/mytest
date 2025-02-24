'use client';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import 'swiper/css';

export default function ClothingPage() {
  const [language, setLanguage] = useState('zh');
  const [selectedImage, setSelectedImage] = useState(null);

  // 服装页专属数据
  const contentData = {
    zh: {
      sections: [
        { 
          title: '当季流行服饰',
          images: Array.from({length: 8}, (_, i) => `/images/clothing/${i+1}.jpg`)
        },
        {
          title: '设计师联名款',
          images: Array.from({length: 8}, (_, i) => `/images/clothing/designer-${i+1}.jpg`)
        }
      ]
    },
    en: {
      sections: [
        { 
          title: 'Fashion Collection',
          images: Array.from({length: 8}, (_, i) => `/images/clothing/${i+1}.jpg`)
        },
        {
          title: 'Designer Collaboration',
          images: Array.from({length: 8}, (_, i) => `/images/clothing/designer-${i+1}.jpg`)
        }
      ]
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar language={language} setLanguage={setLanguage} />
      
      {/* 专属轮播图 */}
      <div className="w-full h-[400px] bg-gradient-to-r from-purple-50 to-pink-50">
        <Swiper
          autoplay={{ delay: 3000 }}
          modules={[Autoplay]}
          className="h-full"
        >
          {[1, 2, 3].map((num) => (
            <SwiperSlide key={num}>
              <img 
                src={`/images/clothing/banner-${num}.jpg`}
                alt={`Fashion Banner ${num}`}
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
                  <div className="aspect-square overflow-hidden rounded-lg shadow-lg border border-gray-100">
                    <img
                      src={img}
                      alt={`Fashion Item ${imgIndex + 1}`}
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
    </div>
  )
}