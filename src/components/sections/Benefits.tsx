import React, { useEffect, useRef } from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Brain, Zap, Clock, Sprout } from 'lucide-react';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Benefit: React.FC<BenefitProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export const Benefits: React.FC = () => {
  const benefitsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        }
      },
      { threshold: 0.1 }
    );

    if (benefitsRef.current) {
      observer.observe(benefitsRef.current);
    }

    return () => {
      if (benefitsRef.current) {
        observer.unobserve(benefitsRef.current);
      }
    };
  }, []);

  const benefits = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "集中力向上",
      description: "天然由来成分が脳機能をサポートし、長時間の作業でも集中力を維持します。"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "疲労回復",
      description: "疲労物質の除去を促進し、日々の疲れを効率的に解消します。"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "持続するエネルギー",
      description: "速効性と持続性を両立。朝から夕方まで安定したパフォーマンスを発揮できます。"
    },
    {
      icon: <Sprout className="h-8 w-8" />,
      title: "100％自然由来",
      description: "合成添加物不使用。天然素材だけで作られた体に優しいサプリメントです。"
    }
  ];

  return (
    <section 
      ref={benefitsRef}
      className="py-20 bg-white opacity-0 transition-opacity duration-1000"
    >
      <Container>
        <SectionHeading 
          title="疲れ知らずの毎日へ" 
          subtitle="木漏れ日サプリがあなたの体と心に与える4つの効果"
          centered
        />
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <Benefit
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};