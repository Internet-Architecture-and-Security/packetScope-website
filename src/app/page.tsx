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
  Lock,
  Terminal,
  Star,
  Users,
  Cpu,
  Server,
  Code,
  ArrowRight
} from 'lucide-react';
import Logo from 'root/public/logonew.svg'
import Image from 'next/image';
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import FeatheredContainer from '@/components/FeatheredContainer';
import Vortex from '@/components/ui/Vortex';
import Link from 'next/link';


export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [stats, setStats] = useState({ stars: 0, users: 0, packets: 0 });

  useEffect(() => {
    setIsVisible(true);

    // Animate stats
    const animateStats = () => {
      const targetStats = { stars: 2847, users: 1250, packets: 98765432 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);

        setStats({
          stars: Math.floor(targetStats.stars * easeOut),
          users: Math.floor(targetStats.users * easeOut),
          packets: Math.floor(targetStats.packets * easeOut)
        });

        if (step >= steps) clearInterval(timer);
      }, stepDuration);
    };

    setTimeout(animateStats, 1000);

    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 4);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Eye,
      title: "Tracer",
      subtitle: "Traffic Monitoring & Fine-grained Tracing",
      description: "Track connection/packet interactions through the protocol stack and generate detailed visual path maps",
      color: "from-blue-500 to-cyan-500",
      highlight: "Real-time visibility",
      img: 'Tracer.png',
    },
    {
      icon: BarChart3,
      title: "Analyzer",
      subtitle: "Protocol Stack Analysis Engine",
      description: "Provide multi-dimensional statistics on packet movement including traffic, latency, and cross-layer interactions",
      color: "from-purple-500 to-pink-500",
      highlight: "Deep insights",
      img: 'Analyzer.png',
    },
    {
      icon: MapPin,
      title: "Locator",
      subtitle: "Network Path Mapping Module",
      description: "Map routes and latency from host to any global IP address, displaying data on global topology",
      color: "from-green-500 to-emerald-500",
      highlight: "Global mapping",
      img: 'locator.png',
    },
    {
      icon: ShieldCheck,
      title: "Guarder",
      subtitle: "Security Policy Engine",
      description: "Filter and control abnormal packets using customizable rules with LLM-powered contextual insights",
      color: "from-orange-500 to-red-500",
      highlight: "AI-powered defense",
      img: 'guarder.png',
    }
  ];

  const painPoints = [
    {
      icon: AlertTriangle,
      title: "Performance Bottlenecks",
      description: "Unclear packet paths through the protocol stack make bottlenecks and faults hard to diagnose",
      stat: "73%"
    },
    {
      icon: Network,
      title: "Transmission Blindspots",
      description: "Lack of fine-grained cross-domain transmission data makes routing risks invisible",
      stat: "65%"
    },
    {
      icon: Lock,
      title: "Stealthy Low-level Attacks",
      description: "Low-level protocol stack attacks are difficult to detect with traditional security tools",
      stat: "89%"
    }
  ];

  const capabilities = [
    {
      icon: Brain,
      title: "Intelligent Engine",
      description: "Combines eBPF with LLMs for low-level network behavior observation and smart security defense",
      metric: "99.9% accuracy"
    },
    {
      icon: Activity,
      title: "Multi-dimensional Analysis",
      description: "Real-time tracking of network paths, latency statistics, packet loss, and interaction frequency",
      metric: "< 1ms latency"
    },
    {
      icon: Globe,
      title: "Global Network Visualization",
      description: "Maps global paths and latency, presenting comprehensive network topology insights",
      metric: "200+ countries"
    },
    {
      icon: Shield,
      title: "Protocol Stack Defense",
      description: "Detects and intercepts low-level abnormal traffic, covering traditional WAF/IDS blind spots",
      metric: "24/7 protection"
    }
  ];

  const useCases = [
    { title: "Network Performance Optimization", desc: "Identify bottlenecks and improve transmission efficiency", icon: Zap, users: "DevOps Teams" },
    { title: "Threat Detection & Security", desc: "Detect and block potential attacks like DDoS and ARP spoofing", icon: Shield, users: "Security Teams" },
    { title: "Fault Diagnosis", desc: "Diagnose issues caused by latency, packet loss, or abnormal behavior", icon: AlertTriangle, users: "Network Engineers" },
    { title: "Topology Analysis", desc: "Analyze path latency and routing performance in multi-region deployments", icon: Globe, users: "Cloud Architects" },
    { title: "Industrial IoT Security", desc: "Monitor industrial control systems in real-time for safety and integrity", icon: Lock, users: "IoT Specialists" },
    { title: "Cloud-Native Monitoring", desc: "Deep network insights for containerized and microservice architectures", icon: Network, users: "Platform Teams" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center px-4">
      <Vortex
        // backgroundColor="black"
        rangeY={800}
        particleCount={100}
        baseHue={120}
        containerClassName="absolute"
        className="absolute flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      ></Vortex>
        {/* <div className="absolute inset-0 z-10 h-full w-full bg-black/80 dark:bg-black/40" >
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-full w-full"
        images={["/Tracer.png", "/Analyzer.png", "/Guarder.png", "/Locator.png", "/Guarder1.png",
          "/Guarder2.png",
          "/Guarder3.png",
          "/Guarder4.png",
          "/Guarder5.png",
          "/Tracer11.png",
          "/Guarder7.png",
          "/Guarder8.png",
          "/Tracer22.png",
          "/Guarder10.png",
          "/Tracer3.png",
          "/Guarder12.png",
          "/Tracer0.png",
          "/Tracer1.png",
          "/Tracer2.png",
          "/Tracer3.png",
          "/Tracer4.png",
          "/Tracer11.png",
          "/Tracer22.png",
          "/Tracer33.png",
          "/Tracer44.png",
          "Locator.png",
          "/Analyzer.png",
          "/Guarder.png",
          ]}
      /></div> */}

        {/* Enhanced Background Effects */}
        <div className="absolute z-10 inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-green-500/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900"></div>

          {/* Animated grid */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              animation: 'grid-move 20s linear infinite'
            }}></div>
          </div>
        </div>

        <div className={`max-w-6xl mx-auto text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Logo with enhanced design */}
          <div className="mb-8 flex justify-center">
            <Logo height="300" />
          </div>

          {/* Main Title with enhanced typography */}
          {/* <h1 className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent leading-tight tracking-tight">
            PacketScope
          </h1> */}


          <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light tracking-wide">
            A Smart Armor for Server-Side Defense
          </p>

          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-5xl mx-auto leading-relaxed">
            A general-purpose     <PointerHighlight
              rectangleClassName="bg-blue-100/10 dark:bg-blue-900 border-blue-300 dark:border-blue-700 leading-loose"
              pointerClassName="text-blue-500 h-3 w-3"
              containerClassName="inline-block mx-1"
            >
              <span className="relative z-10">protocol stack analysis and debugging tool</span>
            </PointerHighlight> based on eBPF.
            Integrates performance optimization, anomaly diagnosis, and security defense with
            fine-grained tracing and intelligent analysis capabilities.
          </p>

          {/* Enhanced Stats */}
          {/* <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12">
            <div className="flex items-center gap-2 text-yellow-400">
              <Star className="w-5 h-5 fill-current" />
              <span className="font-mono text-lg">{stats.stars.toLocaleString()}</span>
              <span className="text-gray-400">stars</span>
            </div>
            <div className="flex items-center gap-2 text-green-400">
              <Users className="w-5 h-5" />
              <span className="font-mono text-lg">{stats.users.toLocaleString()}</span>
              <span className="text-gray-400">users</span>
            </div>
            <div className="flex items-center gap-2 text-blue-400">
              <Activity className="w-5 h-5" />
              <span className="font-mono text-lg">{stats.packets.toLocaleString()}</span>
              <span className="text-gray-400">packets analyzed</span>
            </div>
          </div> */}

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href={"/docs/get-started"} className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 shadow-2xl hover:shadow-blue-500/25 hover:scale-105 hover:-translate-y-1 cursor-pointer">
              <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href={"https://github.com/Internet-Architecture-and-Security/PacketScope"} className="group border-2 border-gray-600 hover:border-gray-400 px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 hover:bg-gray-800/50 backdrop-blur-sm cursor-pointer">
              <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              View on GitHub
            </Link>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-transparent rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>

      </div>

      {/* Pain Points Section - Enhanced */}
      <section className="py-32 px-4 bg-gradient-to-b from-gray-900 to-gray-800 relative">
        <div className="absolute inset-0 bg-red-500/5"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-6 py-2 mb-6">
              <AlertTriangle className="w-4 h-4 text-red-400" />
              <span className="text-red-300 font-medium">Critical Challenges</span>
            </div>
            <h2 className="text-5xl  leading-14 font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Three Core Pain Points
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Traditional WAF and IDS tools have blind spots in protocol stack-level defense.
              PacketScope addresses these critical security gaps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {painPoints.map((point, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-700 hover:border-red-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10 hover:-translate-y-2">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <point.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-red-400">{point.stat}</div>
                    <div className="text-xs text-gray-500">affected systems</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-300">{point.title}</h3>
                <p className="text-gray-300 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities - Enhanced */}
      <section className="py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-6 py-2 mb-6">
              <Zap className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 font-medium">Core Capabilities</span>
            </div>
            <h2 className="text-5xl leading-14 font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Intelligent Defense System
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Through protocol tracing, path visualization, and intelligent analysis,
              we build smart armor for your servers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <capability.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-300">{capability.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{capability.description}</p>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-green-300 font-medium text-sm">{capability.metric}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Modules - Enhanced */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.1),transparent_50%)]"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* 标题区域 */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
              <Cpu className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 font-medium text-sm">Network Intelligence</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Comprehensive Monitoring Suite
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Four integrated modules providing end-to-end network visibility and protection
            </p>
          </div>

          {/* 主要内容区域 */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* 功能选择区域 */}
            <div className="lg:col-span-5 space-y-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`group cursor-pointer p-3 rounded-xl border transition-all duration-300 ${activeFeature === index
                    ? 'bg-white/5 border-white/20 shadow-lg'
                    : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.03] hover:border-white/10'
                    }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex items-center justify-center w-11 h-11 rounded-lg bg-gradient-to-r ${feature.color} shadow-lg`}>
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">

                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                        <span className="bg-blue-500/20 text-blue-300 text-xs font-medium px-2 py-1 rounded-full">
                          {feature.highlight}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mb-1">{feature.subtitle}</p>
                      <p className="text-blue-200 leading-relaxed text-[12px] transform ">
                    {feature.description}
                  </p>
                    </div>
                    
                    <div className={`w-2 h-2 rounded-full transition-all duration-300 ${activeFeature === index ? `bg-gradient-to-r ${feature.color}` : 'bg-gray-600'
                      }`}></div>
                  </div>
                </div>
              ))}

            </div>

            {/* 图片展示区域 */}
            <div className="lg:col-span-7">
              <div className="relative">
                {/* 主图片容器 */}
                <div className="relative h-130 rounded-xl overflow-hidden bg-gray-900/30">
                  <FeatheredContainer
                    src={features[activeFeature].img}
                    alt={`${features[activeFeature].title} interface`}
                    className="transition-all duration-500 ease-out"
                  />

                  {/* 底部标签 */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">

                    {/* 导航点 */}
                    {/* <div className="flex gap-2">
                      {features.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveFeature(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${activeFeature === index
                              ? 'bg-white scale-125'
                              : 'bg-white/40 hover:bg-white/60'
                            }`}
                        />
                      ))}
                    </div> */}

                  </div>

                </div>
                {/* <div className='absolute bottom-0 w-full h-16 bg-black/50 backdrop-blur-xs p-2 box-border rounded-b-xl'>
                  <p className="text-blue-200 leading-relaxed text-sm font-bold text-justify">
                    {features[activeFeature].description}
                  </p>
                </div> */}
                {/* 动态光效 */}
                <div className={`absolute -inset-4 bg-gradient-to-r ${features[activeFeature].color} opacity-20 blur-2xl rounded-2xl transition-all duration-500 -z-10`}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started - Enhanced */}
      <section className="py-32 px-4 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-green-900/20 relative">
        <div className="absolute inset-0 backdrop-blur-sm"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-6 py-2 mb-6">
            <Terminal className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 font-medium">Quick Start</span>
          </div>
          <h2 className="text-5xl leading-14 font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Deploy in Minutes
          </h2>
          <p className="text-xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
            Get PacketScope up and running in just a few minutes. Start protecting your servers today.
          </p>

          <div className="bg-gray-800/80 backdrop-blur-sm p-10 rounded-3xl border border-gray-700 text-left shadow-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex gap-2">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-400 font-medium">Terminal</span>
              <div className="ml-auto flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-300 text-sm">Connected</span>
              </div>
            </div>
            <div className="space-y-4 font-mono text-sm">
              <div className="flex items-center gap-4">
                <span className="text-green-400 font-bold">$</span>
                <span className="text-white">git clone https://github.com/your-org/packetscope.git</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-green-400 font-bold">$</span>
                <span className="text-white">cd packetscope && npm install</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-green-400 font-bold">$</span>
                <span className="text-white">npm run preview</span>
              </div>
              <div className="text-gray-400 ml-8 flex items-center gap-2">
                <Zap className="w-4 h-4 text-blue-400" />
                <span>Application running at http://localhost:4173/</span>
              </div>
            </div>
          </div>
{/* 
          <div className="mt-16 flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl hover:shadow-blue-500/25 hover:scale-105 hover:-translate-y-1 cursor-pointer">
              <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Download PacketScope
            </button>
            <button className="group border-2 border-gray-600 hover:border-gray-400 px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 hover:bg-gray-800/50 backdrop-blur-sm cursor-pointer">
              <Code className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              View Documentation
            </button>
          </div> */}
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-16 px-4 bg-gray-900 border-t border-gray-800 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-6 text-gray-400 mb-4 md:mb-0">
              <span className="flex items-center gap-2">
                <span>©</span>
                <span>2025 PacketScope</span>
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                <span>MIT License</span>
              </span>
            </div>
            {/* <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Contributing</a>
            </div> */}
          </div>
        </div>

        {/* Floating action button */}
        {/* <div className="fixed bottom-8 right-8 z-50">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 w-14 h-14 rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center group hover:scale-110">
            <ChevronRight className="w-6 h-6 text-white -rotate-90 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div> */}
      </footer>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes pattern-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 40px); }
        }
        
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
}