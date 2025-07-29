"use client"
import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Eye, 
  Zap, 
  Globe, 
  Brain, 
  BarChart3, 
  MapPin, 
  ShieldCheck,
  ChevronRight,
  Play,
  Github,
  Download,
  CheckCircle,
  AlertTriangle,
  Network,
  Activity,
  Lock
} from 'lucide-react';

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Eye,
      title: "Tracer",
      subtitle: "流量监控与精细化追踪",
      description: "跟踪连接/数据包在协议栈中的交互过程，生成详细的可视化路径图",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: BarChart3,
      title: "Analyzer", 
      subtitle: "协议栈分析模块",
      description: "提供协议栈中数据包移动的多维统计，包含流量、延迟、跨层交互频率等",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: MapPin,
      title: "Locator",
      subtitle: "网络路径映射模块", 
      description: "映射主机到全球任意IP地址的路由和延迟，在全球拓扑上显示数据",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: ShieldCheck,
      title: "Guarder",
      subtitle: "安全策略模块",
      description: "使用可定制规则过滤和控制异常数据包，结合LLM提供上下文洞察",
      color: "from-orange-500 to-red-500"
    }
  ];

  const painPoints = [
    {
      icon: AlertTriangle,
      title: "性能瓶颈难诊断",
      description: "数据包在协议栈中的路径不清晰，导致瓶颈和故障难以诊断"
    },
    {
      icon: Network,
      title: "传输路径不透明",
      description: "缺乏细粒度的跨域传输数据，使得路由风险不可见"
    },
    {
      icon: Lock,
      title: "底层攻击难检测",
      description: "底层协议栈攻击隐蔽性强，传统工具难以检测"
    }
  ];

  const capabilities = [
    {
      icon: Brain,
      title: "智能引擎",
      description: "结合eBPF与LLMs，实现底层网络行为观察和智能安全防护"
    },
    {
      icon: Activity,
      title: "多维分析", 
      description: "实时跟踪网络路径，统计延迟、丢包、交互频率等关键指标"
    },
    {
      icon: Globe,
      title: "全局网络可视化",
      description: "映射全球路径和延迟，在拓扑图上呈现网络状态"
    },
    {
      icon: Shield,
      title: "协议栈防护",
      description: "检测和拦截底层异常流量，覆盖传统WAF/IDS的盲区"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center px-4">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-green-500/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
        </div>

        <div className={`max-w-6xl mx-auto text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Logo */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-2xl">
              <Shield className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent leading-tight">
            PacketScope
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
            服务器端防护的"智能盔甲"
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            基于eBPF的通用协议栈分析调试工具，集性能优化、异常诊断、安全防护于一体，
            实现服务器端协议栈级别的网络数据包精细化追踪和智能分析
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-2 shadow-2xl hover:shadow-blue-500/25 hover:scale-105">
              <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              开始使用
            </button>
            <button className="group border border-gray-600 hover:border-gray-400 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-2 hover:bg-gray-800/50">
              <Github className="w-5 h-5" />
              查看源码
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-gray-400 rotate-90" />
        </div>
      </div>

      {/* Pain Points Section */}
      <section className="py-24 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              🚨 三大核心痛点
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              传统WAF和IDS工具在协议栈级别防护存在盲区，PacketScope针对性解决以下问题
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {painPoints.map((point, index) => (
              <div key={index} className="group bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/10 hover:-translate-y-2">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl mb-6 group-hover:scale-110 transition-transform">
                  <point.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-300">{point.title}</h3>
                <p className="text-gray-300 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              🚀 核心能力
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              通过协议追踪、路径可视化和智能分析，为服务器构建"智能盔甲"
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                  <capability.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-blue-300">{capability.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Modules */}
      <section className="py-24 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              ✨ 功能模块
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              四大核心模块协同工作，提供全方位的网络协议栈监控和防护能力
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Feature List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`group cursor-pointer p-6 rounded-2xl border transition-all duration-300 ${
                    activeFeature === index 
                      ? 'bg-gray-800 border-purple-500 shadow-2xl shadow-purple-500/20' 
                      : 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
                  }`}
                  onClick={() => setActiveFeature(index)}
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} group-hover:scale-110 transition-transform`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1 text-white">{feature.title}</h3>
                      <p className="text-sm text-gray-400 mb-2">{feature.subtitle}</p>
                      <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                    </div>
                    <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${activeFeature === index ? 'rotate-90' : ''}`} />
                  </div>
                </div>
              ))}
            </div>

            {/* Feature Visualization */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-700 shadow-2xl">
                <div className="aspect-square flex items-center justify-center">
                  <div className={`w-48 h-48 rounded-3xl bg-gradient-to-r ${features[activeFeature].color} flex items-center justify-center transition-all duration-500 hover:scale-105 shadow-2xl`}>
                    {React.createElement(features[activeFeature].icon, { 
                      className: "w-24 h-24 text-white" 
                    })}
                  </div>
                </div>
                <div className="text-center mt-6">
                  <h4 className="text-2xl font-bold text-white mb-2">{features[activeFeature].title}</h4>
                  <p className="text-gray-300">{features[activeFeature].subtitle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              🧰 应用场景
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "网络协议栈性能优化", desc: "识别瓶颈并提高传输效率", icon: Zap },
              { title: "威胁检测与安全防护", desc: "检测并阻断DDoS、ARP欺骗等潜在攻击", icon: Shield },
              { title: "故障诊断", desc: "诊断延迟、丢包或异常跨层行为引起的问题", icon: AlertTriangle },
              { title: "拓扑分析", desc: "分析跨区域部署中的路径延迟和路由性能", icon: Globe },
              { title: "工业互联网安全", desc: "实时监控工业控制系统，确保安全性和完整性", icon: Lock },
              { title: "云原生环境监控", desc: "为容器化和微服务架构提供深度网络洞察", icon: Network }
            ].map((useCase, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-green-300">{useCase.title}</h3>
                <p className="text-gray-400 leading-relaxed">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-24 px-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            ⚡ 快速开始
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            几分钟内部署PacketScope，开始保护您的服务器
          </p>

          <div className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 text-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-400 text-sm">终端</span>
            </div>
            <div className="space-y-4 font-mono text-sm">
              <div className="flex items-center gap-3">
                <span className="text-green-400">$</span>
                <span className="text-white">git clone https://github.com/your-org/packetscope.git</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400">$</span>
                <span className="text-white">cd packetscope && npm install</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400">$</span>
                <span className="text-white">npm run preview</span>
              </div>
              <div className="text-gray-400 ml-4">
                🚀 应用运行在 http://localhost:4173/
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-2xl hover:shadow-blue-500/25 hover:scale-105">
              <Download className="w-5 h-5" />
              下载 PacketScope
            </button>
            <button className="border border-gray-600 hover:border-gray-400 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 hover:bg-gray-800/50">
              查看文档
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">PacketScope</span>
            </div>
            <div className="flex items-center gap-6 text-gray-400">
              <span>MIT License</span>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Documentation</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Contributing</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>© 2024 PacketScope. 为服务器端安全防护而生。</p>
          </div>
        </div>
      </footer>
    </div>
  );
}