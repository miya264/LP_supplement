import React, { useEffect, useRef } from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Star, UserCheck, Award, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const Evidence: React.FC = () => {
  const evidenceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        }
      },
      { threshold: 0.1 }
    );

    if (evidenceRef.current) {
      observer.observe(evidenceRef.current);
    }

    return () => {
      if (evidenceRef.current) {
        observer.unobserve(evidenceRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={evidenceRef}
      className="py-20 bg-gradient-to-b from-white to-natural-50 opacity-0 transition-opacity duration-1000"
    >
      <Container>
        <SectionHeading 
          title="自然の恵みを科学で実証" 
          subtitle="医師監修・自然由来成分で体に優しい"
          centered
        />
        
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-10">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-natural-100 text-natural-500 mb-6">
                  <Award className="h-4 w-4 mr-2" />
                  <span>専門家監修</span>
                </div>
                <h3 className="text-2xl font-bold text-natural-600 mb-4">医師が厳選した成分配合</h3>
                <p className="text-natural-400 mb-6">
                  木漏れ日サプリは、疲労回復と集中力向上に特化した成分を、医師と栄養士の協力のもと厳選しています。すべての原料は高品質な自然由来成分のみを使用し、科学的根拠に基づいて配合されています。
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border border-natural-200 rounded-lg p-4">
                    <p className="font-medium text-natural-600">高麗人参</p>
                    <p className="text-sm text-natural-400">脳血流改善</p>
                  </div>
                  <div className="border border-natural-200 rounded-lg p-4">
                    <p className="font-medium text-natural-600">ロディオラ</p>
                    <p className="text-sm text-natural-400">疲労軽減</p>
                  </div>
                  <div className="border border-natural-200 rounded-lg p-4">
                    <p className="font-medium text-natural-600">L-テアニン</p>
                    <p className="text-sm text-natural-400">リラックス効果</p>
                  </div>
                  <div className="border border-natural-200 rounded-lg p-4">
                    <p className="font-medium text-natural-600">ビタミンB群</p>
                    <p className="text-sm text-natural-400">エネルギー代謝</p>
                  </div>
                </div>
              </div>
              <div className="relative h-full">
                <img
                  src="https://images.pexels.com/photos/6692132/pexels-photo-6692132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="木漏れ日サプリの製品"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-center text-natural-600 mb-8">
            実際に使用された方の声
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
            {[
              {
                name: "田中 一郎",
                profession: "Webデザイナー / 34歳",
                period: "使用期間：3週間",
                testimonial: "午後の眠気が減り、デザイン作業での集中力が持続するようになりました。クライアントとの打ち合わせでも頭がクリアで、より良いアイデアが出せています。",
                rating: 5
              },
              {
                name: "佐藤 健太",
                profession: "営業職 / 31歳",
                period: "使用期間：2ヶ月",
                testimonial: "外回りが多い仕事ですが、1日中安定したパフォーマンスを維持できるようになりました。自然由来なので、長期的な健康面でも安心です。",
                rating: 4
              },
              {
                name: "鈴木 大輔",
                profession: "フリーランスエンジニア / 36歳",
                period: "使用期間：1ヶ月",
                testimonial: "在宅での長時間作業でも集中力が続くようになり、納期までの作業効率が格段に上がりました。夜も良く眠れるようになって、生活リズムも改善。",
                rating: 5
              }
            ].map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <UserCheck className="h-5 w-5 text-natural-500 mr-2" />
                  <span className="text-sm text-natural-400">検証済みレビュー</span>
                </div>
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5" fill={i < review.rating ? "currentColor" : "none"} />
                  ))}
                </div>
                <p className="text-natural-400 mb-4">"{review.testimonial}"</p>
                <div className="text-sm">
                  <p className="font-medium text-natural-600">{review.name}</p>
                  <p className="text-natural-400">{review.profession}</p>
                  <p className="text-natural-400 mt-1">{review.period}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button primary large className="inline-flex items-center">
              <span>初回限定1,480円で試す</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};