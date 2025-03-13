'use client'; // 需要客户端交互的组件
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';  // 使用相对路径
import 'swiper/css';
import { Description } from '@headlessui/react';

export default function Home() {
  const [language, setLanguage] = useState('zh');
  const [selectedImage, setSelectedImage] = useState(null);

  // 轮播图数据
  const banners = [
    '/images/banner/2.jpg',
    '/images/banner/3.jpg',
    '/images/banner/4.jpg',
  ];

  // 内容数据
  const contentData = {
    zh: {
      sections: [
        { 
          title: 'Puff Girl-甜宠排队系列',
          images: Array.from({ length: 16 }, (_, i) => `/images/美瞳/pullgirl/${i + 1}.png`)
        },
        {
          title: '𝗣𝘂𝗳𝗳 𝗚𝗶𝗿𝗹寓言系列 ',
          description:`👛单副88 两副158 三副198`,
          images: Array.from({ length: 9 }, (_, i) => `/images/美瞳/puff/${i + 1}.png`)
        },
        {
          title: '𝐒𝐈𝐍𝐂𝐄𝐂𝐎𝐍早春心动信号',
          description:`舒适度Max💧精选含硅半年抛
多风格自由切换的敏感眼刚需

活动价格: 78/1副
98/2副138/4副178/6副（每单赠滴眼液1瓶）`,
          images: Array.from({ length: 1 }, (_, i) => `/images/美瞳/心动信号/${i + 1}.png`)
        }
      ]
    },
    en: {
      sections: [
        { 
          title: 'Puff Girl- Sweet pet line series',
          images: Array.from({ length: 16 }, (_, i) => `/images/美瞳/pullgirl/${i + 1}.png`)
        },
        {
          title: '𝗣𝘂𝗳𝗳 𝗚𝗶𝗿𝗹 Fable series',
          description:`👛 Single crew 88, two crew 158, three crew 198`,
          images: Array.from({ length: 9 }, (_, i) => `/images/美瞳/puff/${i + 1}.png`)
        },
        {
          title: '𝐒𝐈𝐍𝐂𝐄𝐂𝐎𝐍-Early spring heart signals',
          description:`Comfort Max💧 Selected silicon half year toss 
Multi-style free switching for sensitive eyes just as needed 
 
Activity price: 78/1 pair 
98/2 pairs 138/4 pairs 178/6 pairs (complimentary 1 bottle of eye drops per pair)`,
          images: Array.from({ length: 1 }, (_, i) => `/images/美瞳/心动信号/${i + 1}.png`)
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