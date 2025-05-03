import React, { useEffect, useRef } from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Sprout } from 'lucide-react';

export const Story: React.FC = () => {
  const storyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        }
      },
      { threshold: 0.1 }
    );

    if (storyRef.current) {
      observer.observe(storyRef.current);
    }

    return () => {
      if (storyRef.current) {
        observer.unobserve(storyRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={storyRef}
      className="py-20 bg-natural-50 opacity-0 transition-opacity duration-1000"
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="研究開発の様子"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
              <img
                src="https://images.pexels.com/photos/6692132/pexels-photo-6692132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="木漏れ日サプリの製品"
                className="w-32 h-32 object-cover rounded-lg"
              />
            </div>
          </div>

          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-natural-100 text-natural-500 mb-6">
              <Sprout className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">ブランドストーリー</span>
            </div>

            <h2 className="font-display text-3xl font-bold text-natural-600 mb-6">
              自然の力と科学の融合から生まれた、
              <br />
              新しい健康習慣。
            </h2>

            <div className="space-y-4 text-natural-400">
              <p>
                木漏れ日サプリは、私たち自身の経験から生まれました。長時間のデスク作業による疲労、締め切りに追われる毎日での集中力の低下—。そんな現代のワーカーが抱える悩みを、自然の力で解決できないかと考えたのです。
              </p>
              <p>
                2年の研究開発期間を経て、伝統的なハーブの知恵と最新の科学を組み合わせることで、心と体のバランスを整える理想的な配合にたどり着きました。
              </p>
              <p>
                自然由来成分100%、国内GMP認定工場での製造、そして徹底した品質管理。妥協のない製品づくりへのこだわりが、多くの方々の健康的な毎日をサポートしています。
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};