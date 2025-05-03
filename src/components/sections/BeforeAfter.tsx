import React, { useEffect, useRef } from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { AlertTriangle, CheckCircle, Frown, Smile } from 'lucide-react';

export const BeforeAfter: React.FC = () => {
  const beforeAfterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        }
      },
      { threshold: 0.1 }
    );

    if (beforeAfterRef.current) {
      observer.observe(beforeAfterRef.current);
    }

    return () => {
      if (beforeAfterRef.current) {
        observer.unobserve(beforeAfterRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={beforeAfterRef}
      className="py-20 bg-emerald-50 opacity-0 transition-opacity duration-1000"
    >
      <Container>
        <SectionHeading 
          title="変わる日常、変わる自分" 
          subtitle="木漏れ日サプリを取り入れる前と後の生活の違い"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          <div className="bg-white rounded-xl shadow-md p-8 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-2 rounded-full font-bold">
              BEFORE
            </div>
            <div className="flex justify-center mb-6 text-red-500">
              <Frown className="h-16 w-16" />
            </div>
            <h3 className="text-xl font-bold text-center text-gray-900 mb-6">
              疲れが取れない日々
            </h3>
            <ul className="space-y-4">
              {[
                "午後になると集中力が急激に低下",
                "デスクワークでの疲労感が夕方まで続く",
                "カフェインに頼るが効果は一時的",
                "帰宅後は疲れ切って何もできない",
                "睡眠をとっても翌朝スッキリしない"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-3 text-red-500 flex-shrink-0 mt-1">
                    <AlertTriangle className="h-5 w-5" />
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white px-6 py-2 rounded-full font-bold">
              AFTER
            </div>
            <div className="flex justify-center mb-6 text-emerald-500">
              <Smile className="h-16 w-16" />
            </div>
            <h3 className="text-xl font-bold text-center text-gray-900 mb-6">
              活力あふれる毎日
            </h3>
            <ul className="space-y-4">
              {[
                "1日中安定した集中力を維持",
                "長時間のデスクワークでも疲れにくい",
                "自然なエネルギーで無理なく活動できる",
                "仕事後の時間も充実した過ごし方ができる",
                "朝までぐっすり眠れ、スッキリとした目覚め"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-3 text-emerald-500 flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5" />
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};