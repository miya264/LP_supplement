import React from 'react';
import { Container } from '../ui/Container';
import { Twitter, Facebook, Instagram, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-gray-700">
          <div>
            <h3 className="text-lg font-semibold mb-4">NATURGE</h3>
            <p className="text-gray-400 mb-4">
              自然の力で健康とパフォーマンスをサポートする、プレミアム自然派サプリメント
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">商品</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">木漏れ日サプリ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ひなたの粒</a></li>
              <li><a href="#" className="hover:text-white transition-colors">そよ風リズム</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">カスタマーサポート</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">会社概要</a></li>
              <li><a href="#" className="hover:text-white transition-colors">お問い合わせ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">よくある質問</a></li>
              <li><a href="#" className="hover:text-white transition-colors">特定商取引法に基づく表記</a></li>
            </ul>
          </div>
        </div>
        
        <div className="py-6">
          <div className="flex flex-col md:flex-row md:justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2025 木漏れ日サプリ. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                プライバシーポリシー
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                利用規約
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                特定商取引法
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};