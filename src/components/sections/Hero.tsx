import React, { useEffect, useRef } from 'react';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { Leaf, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative bg-gradient-to-b from-natural-100 to-natural-50 py-16 sm:py-20 lg:py-28 opacity-0 transition-opacity duration-1000"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 -translate-y-1/4 translate-x-1/4 transform">
          <div className="h-96 w-96 rounded-full bg-natural-200 opacity-20 blur-3xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 transform">
          <div className="h-96 w-96 rounded-full bg-natural-300 opacity-20 blur-3xl"></div>
        </div>
      </div>
      
      <Container>
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="lg:pr-8 relative z-10">
            <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-natural-200 text-natural-500">
              <Leaf className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">カフェインに頼らない集中習慣を</span>
            </div>
            
            <h1 className="font-display text-4xl font-bold tracking-tight text-natural-600 sm:text-5xl md:text-6xl mb-6">
              朝から晩まで、
              <br />
              <span className="text-natural-500">パフォーマンスを保つ</span>
            </h1>
            
            <p className="mt-3 text-lg text-natural-400 sm:mt-5 sm:text-xl md:mt-5 md:text-2xl mb-8">
              植物由来成分100%配合。自然の力で集中力を高め、
              <br className="hidden lg:block" />
              一日中クリアな頭脳を維持する、あなたのための贅沢なサプリメント。
            </p>
            
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <Button primary large className="mb-4 sm:mb-0 shadow-lg inline-flex items-center">
                <span>初回限定1,480円で試す</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button large>
                詳しく見る
              </Button>
            </div>
            
            <div className="mt-8 flex items-center text-natural-400">
              <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-natural-200">
                <svg className="h-6 w-6 text-natural-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="ml-3 text-sm">国内GMP認定工場製造・30日間返金保証</span>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0 relative z-10">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-natural-200">
              <img
                src="https://images.pexels.com/photos/6692132/pexels-photo-6692132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="木漏れ日サプリの製品イメージ"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};