'use client';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import 'swiper/css';
import { Description } from '@headlessui/react';

export default function ClothingPage() {
  const [language, setLanguage] = useState('zh');
  const [selectedImage, setSelectedImage] = useState(null);
  const banners = [
    '/images/banner/2.jpg',
    '/images/banner/3.jpg',
    '/images/banner/4.jpg',
  ];
  // 服装页专属数据
  const contentData = {
    zh: {
      sections: [
        { 
          title: ' 𝐌𝐋𝐁暗纹毛衣外套-rmb 139',
          description:`羊毛40+包芯纱60
原版一致含量
面料真的牛逼炸了
软软糯糯 亲肤不扎 巨细腻`,
          images: Array.from({length: 7}, (_, i) => `/images/clothing/wt1/${i+1}.png`)
        },
   
      ]
    },
    en: {
      sections: [
        { 
          title: '𝐌𝐋𝐁 Dark print sweater coat -rmb 139',
          description:`Wool 40+ core-spun yarn 60 
Original consistent content 
The fabric really blew up 
Soft waxy waxy skin do not tie giant fine`,
          images: Array.from({length: 7}, (_, i) => `/images/clothing/wt1/${i+1}.png`)
        },
   
      ]
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar language={language} setLanguage={setLanguage} />
      
     {/* 轮播图 */}
     <div className="w-full h-[600px]">
        <Swiper
          autoplay={{ delay: 3000 }}
          modules={[Autoplay]}
          className="h-full"
        >
          {banners.map((banner, index) => (
            <SwiperSlide key={index} className="relative">
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
            <p className="text-center mb-4">{section.description}</p>
            
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