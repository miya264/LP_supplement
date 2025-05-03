import React, { useEffect, useRef } from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Shield, Truck, RefreshCcw } from 'lucide-react';

export const CTA: React.FC = () => {
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        }
      },
      { threshold: 0.1 }
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={ctaRef}
      className="py-20 bg-gradient-to-b from-emerald-50 to-white relative overflow-hidden opacity-0 transition-opacity duration-1000"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20">
          <div className="h-64 w-64 rounded-full bg-emerald-200 opacity-20 blur-3xl"></div>
        </div>
        <div className="absolute right-0 bottom-0 translate-x-1/3 translate-y-1/3">
          <div className="h-96 w-96 rounded-full bg-blue-100 opacity-20 blur-3xl"></div>
        </div>
      </div>
      
      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 mb-6">
            <span className="text-sm font-medium">初回限定特別価格</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            今だけ！初回<span className="text-emerald-600">980円</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            通常価格3,980円のところ、初めての方限定で<br className="hidden sm:block" />
            <span className="font-semibold">75%OFF</span>の特別価格でお試しいただけます。
          </p>
          
          <div className="w-full max-w-md mx-auto mb-10">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm text-gray-500">30日分</span>
              <div className="flex items-center gap-2">
                <span className="text-sm line-through text-gray-400">3,980円</span>
                <span className="bg-red-100 text-red-600 text-xs font-medium px-2 py-1 rounded">75%OFF</span>
              </div>
            </div>
            <div className="w-full h-3 bg-gray-200 rounded-full">
              <div className="h-3 bg-emerald-500 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
          
          <Button primary large className="w-full max-w-md mx-auto text-lg shadow-lg">
            <span>今すぐ980円で試す</span>
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex justify-center mb-4 text-emerald-500">
              <Truck className="h-10 w-10" />
            </div>
            <h3 className="text-lg font-semibold text-center text-gray-900 mb-2">
              24時間以内に発送
            </h3>
            <p className="text-gray-600 text-center">
              ご注文確定後、24時間以内に発送。最短翌日からエネルギッシュな毎日をスタート。
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex justify-center mb-4 text-emerald-500">
              <RefreshCcw className="h-10 w-10" />
            </div>
            <h3 className="text-lg font-semibold text-center text-gray-900 mb-2">
              30日間返金保証
            </h3>
            <p className="text-gray-600 text-center">
              効果を実感できなければ30日以内に全額返金。安心してお試しいただけます。
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex justify-center mb-4 text-emerald-500">
              <Shield className="h-10 w-10" />
            </div>
            <h3 className="text-lg font-semibold text-center text-gray-900 mb-2">
              安全性へのこだわり
            </h3>
            <p className="text-gray-600 text-center">
              GMP認定工場で製造。重金属検査、残留農薬検査をクリアした安全な製品です。
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};