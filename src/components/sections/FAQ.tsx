import React, { useEffect, useRef, useState } from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 py-5">
      <button
        className="flex w-full justify-between items-center text-left font-medium text-gray-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg">{question}</span>
        <span className="ml-6 flex-shrink-0 text-emerald-500">
          {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </span>
      </button>
      {isOpen && (
        <div className="mt-3">
          <p className="text-base text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

export const FAQ: React.FC = () => {
  const faqRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        }
      },
      { threshold: 0.1 }
    );

    if (faqRef.current) {
      observer.observe(faqRef.current);
    }

    return () => {
      if (faqRef.current) {
        observer.unobserve(faqRef.current);
      }
    };
  }, []);

  const faqs = [
    {
      question: "効果はいつから実感できますか？",
      answer: "個人差はありますが、多くの方が1週間程度で初期の効果を実感し始めます。2週間以上継続することで、より顕著な効果を感じられる方が多いです。"
    },
    {
      question: "副作用はありますか？",
      answer: "木漏れ日サプリは自然由来成分のみを使用しており、一般的に副作用のリスクは低いとされています。ただし、アレルギー体質の方は原材料をご確認ください。妊娠中や授乳中の方、特定の疾患をお持ちの方は、医師にご相談の上ご使用ください。"
    },
    {
      question: "1日の摂取量と摂取タイミングは？",
      answer: "基本的には朝食後に1粒を目安にお飲みください。特に集中力を必要とする日は、昼食後にもう1粒追加していただくことも可能です（1日2粒まで）。夕方以降の摂取は、就寝に影響する可能性があるため避けることをおすすめします。"
    },
    {
      question: "定期購入は簡単に解約できますか？",
      answer: "はい、次回お届け予定日の10日前までにマイページまたはお電話にてご連絡いただければ、いつでも簡単に解約・一時停止が可能です。解約金や違約金は一切かかりません。"
    },
    {
      question: "海外への発送は対応していますか？",
      answer: "現在、国内（日本国内）へのお届けのみ対応しております。海外発送については、今後のサービス拡大に合わせて検討してまいります。"
    }
  ];

  return (
    <section 
      ref={faqRef}
      className="py-20 bg-white opacity-0 transition-opacity duration-1000"
    >
      <Container>
        <SectionHeading 
          title="よくある質問" 
          subtitle="木漏れ日サプリについてのご質問にお答えします"
          centered
        />
        
        <div className="max-w-3xl mx-auto">
          <div className="divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};