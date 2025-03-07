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
          title: '👟·𝐊𝐞𝐞𝐧户外运动鞋- 𝐫𝐦𝐛 288包邮',
          description: `小众球鞋推荐未融化的冰块色系,本身就超喜欢蓝色
深浅蓝撞色后更讨巧啦! 粉色 
无法拒绝的多巴胺！
`,
          images: Array.from({length: 14}, (_, i) => `/images/shoes/KEEN/${i+1}.png`)
        },
   
      ]
    },
    en: {
      sections: [
        { 
          title: '👟·𝐊𝐞𝐞𝐧 Outdoor sneakers - 𝐫𝐦𝐛 288 free shipping',
          description:` 'Niche sneakers recommend unmelted ice cube colors, which are super fond of blue 
Deep light blue color after more flattering! pink 
Can't say no to dopamine!`,
images: Array.from({length: 14}, (_, i) => `/images/shoes/KEEN/${i+1}.png`)
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