import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  BadgeCheck,
  Bluetooth,
  Cpu,
  Gauge,
  Layers3,
  Mail,
  MapPin,
  Microscope,
  Phone,
  RadioTower,
  ShieldCheck,
  Signal,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import BorderGlow from "./components/BorderGlow";

const contacts = [
  { icon: Phone, label: "15964825058", href: "tel:15964825058" },
  { icon: Mail, label: "gyn16130107@163.com", href: "mailto:gyn16130107@163.com" },
  { icon: MapPin, label: "东南大学 · 电子信息", href: "#experience" },
];

const stats = [
  { value: "1/76", label: "本科专业排名" },
  { value: "4 层", label: "PCB 设计经验" },
  { value: "2+", label: "完整硬件项目" },
  { value: "2025", label: "东南大学研究生" },
];

const projects = [
  {
    title: "柔性传感器微弱信号采集硬件系统",
    time: "2026.03 - 2026.05",
    image: "/assets/project-flex-sensor.svg",
    tags: ["nRF52832", "OPA333", "BLE", "ADC 偏置"],
    description:
      "围绕交流微弱信号的负压特性，使用 VCC/2 直流偏置网络将信号抬升至 ADC 线性区间，并完成低功耗蓝牙透传。",
  },
  {
    title: "STC89C52RC 多功能嵌入式开发平台",
    time: "2025.11 - 2025.12",
    image: "/assets/project-devboard.svg",
    tags: ["51 单片机", "Type-C", "串口", "外设接口"],
    description:
      "完成从原理图、器件选型、PCB 布局到功能验证的开发板设计，覆盖电源、时钟、复位与基础外设扩展。",
  },
  {
    title: "高可靠 PCB Layout 与 EMC 优化",
    time: "硬件设计能力沉淀",
    image: "/assets/project-pcb.svg",
    tags: ["PCB Layout", "GND 缝合", "射频净空", "EMC"],
    description:
      "基于嘉立创 EDA / AD 完成多层板布局布线，关注地回流、射频天线净空、过孔缝合与调试可达性。",
  },
];

const strengths = [
  {
    icon: Cpu,
    title: "嵌入式硬件设计",
    text: "熟悉 STM32、51 单片机与 nRF52832 等平台，能从需求拆解到原理图、PCB、调试验证完整推进。",
  },
  {
    icon: Signal,
    title: "微弱信号采集",
    text: "理解传感器前端、运放选型、直流偏置与 ADC 动态范围，能围绕信噪比和稳定性做硬件取舍。",
  },
  {
    icon: Layers3,
    title: "PCB Layout",
    text: "具备 4 层 PCB 设计经验，关注电源完整性、地平面、射频区域净空、走线约束与可制造性。",
  },
  {
    icon: Workflow,
    title: "工程闭环能力",
    text: "能够使用嘉立创 EDA、Keil5、Multisim、AD、示波器、万用表、电烙铁完成设计与验证闭环。",
  },
];

const glowProps = {
  edgeSensitivity: 24,
  glowColor: "186 96 72",
  backgroundColor: "#080d13",
  borderRadius: 8,
  glowRadius: 26,
  glowIntensity: 0.85,
  coneSpread: 20,
  animated: false,
  colors: ["#7df9ff", "#543ac5", "#baf7d0"],
  fillOpacity: 0.26,
};

function ContactLink({ item }) {
  const Icon = item.icon;

  return (
    <a className="contact-link" href={item.href}>
      <Icon size={18} />
      <span>{item.label}</span>
    </a>
  );
}

function App() {
  const rootRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.set(".nav-shell", { y: -120, autoAlpha: 0 });
      gsap.set(".hero-video", { scale: 1.08 });
      gsap.set(".hero-kicker", {
        y: 34,
        autoAlpha: 0,
        clipPath: "inset(0% 0% 100% 0%)",
      });
      gsap.set(".hero h1 span", {
        yPercent: 120,
        scaleY: 0.58,
        autoAlpha: 0,
        clipPath: "inset(0% 0% 100% 0%)",
        transformOrigin: "50% 100%",
      });
      gsap.set([".hero-rule", ".hero p", ".hero-actions"], { y: 34, autoAlpha: 0 });

      const opening = gsap.timeline({ defaults: { ease: "expo.out" } });
      opening
        .fromTo(
          ".opening-mark span",
          { yPercent: 120, scaleY: 0.45, autoAlpha: 0 },
          { yPercent: 0, scaleY: 1, autoAlpha: 1, duration: 0.95, stagger: 0.08 },
        )
        .to(
          ".opening-slab",
          {
            xPercent: 102,
            duration: 1.25,
            stagger: 0.12,
            ease: "power4.inOut",
          },
          0.45,
        )
        .to(".opening-layer", { autoAlpha: 0, duration: 0.2, pointerEvents: "none" }, 1.55)
        .to(".nav-shell", { y: 0, autoAlpha: 1, duration: 1.05, ease: "power4.out" }, 1.05)
        .to(".hero-video", { scale: 1, duration: 2.2, ease: "power3.out" }, 0.75)
        .to(
          ".hero-kicker",
          { y: 0, autoAlpha: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 0.9 },
          1.35,
        )
        .to(
          ".hero h1 span",
          {
            yPercent: 0,
            scaleY: 1,
            autoAlpha: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.25,
            stagger: 0.13,
            ease: "expo.out",
          },
          1.52,
        )
        .to(".hero-rule", { y: 0, autoAlpha: 1, duration: 0.85, ease: "power3.out" }, 2.05)
        .to(".hero p", { y: 0, autoAlpha: 1, duration: 0.95, ease: "power3.out" }, 2.14)
        .to(".hero-actions", { y: 0, autoAlpha: 1, duration: 0.95, ease: "power3.out" }, 2.26);

      gsap.utils.toArray(".section, .closing-section").forEach((section) => {
        const english = section.querySelector(".eyebrow");
        const title = section.querySelector("h2");
        const cards = section.querySelectorAll(".border-glow-card, .contact-link");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 72%",
            once: true,
          },
          defaults: { ease: "expo.out" },
        });

        if (english) {
          tl.fromTo(
            english,
            {
              x: -180,
              y: 88,
              scale: 2.35,
              autoAlpha: 0,
              letterSpacing: "0.34em",
              filter: "blur(8px)",
            },
            {
              x: 0,
              y: 0,
              scale: 1,
              autoAlpha: 1,
              letterSpacing: "0.12em",
              filter: "blur(0px)",
              duration: 1.25,
            },
          );
        }

        if (title) {
          tl.fromTo(
            title,
            {
              yPercent: 85,
              scaleY: 0.72,
              autoAlpha: 0,
              clipPath: "inset(0% 0% 100% 0%)",
              transformOrigin: "50% 100%",
            },
            {
              yPercent: 0,
              scaleY: 1,
              autoAlpha: 1,
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 1.05,
            },
            "-=0.68",
          );
        }

        if (cards.length) {
          tl.fromTo(
            cards,
            {
              y: 108,
              autoAlpha: 0,
              clipPath: "inset(18% 0% 0% 0%)",
            },
            {
              y: 0,
              autoAlpha: 1,
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 1.1,
              stagger: 0.12,
            },
            "-=0.52",
          );
        }
      });

      gsap.utils.toArray(".project-card").forEach((card) => {
        const image = card.querySelector("img");
        if (!image) return;

        gsap.fromTo(
          image,
          {
            scale: 1.18,
            clipPath: "inset(0% 0% 24% 0%)",
          },
          {
            scale: 1.02,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.3,
            ease: "expo.out",
            scrollTrigger: {
              trigger: card,
              start: "top 78%",
              once: true,
            },
          },
        );

        gsap.to(image, {
          yPercent: -7,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
          },
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={rootRef}>
      <div className="site-aurora" aria-hidden="true" />
        <div className="opening-layer" aria-hidden="true">
          <div className="opening-mark">
          <span>GYN</span>
          <span>Hardware Portfolio</span>
        </div>
        <span className="opening-slab opening-slab-1" />
        <span className="opening-slab opening-slab-2" />
        <span className="opening-slab opening-slab-3" />
      </div>
      <nav className="nav-shell" aria-label="主导航">
        <a className="brand" href="#home">
          <span className="brand-mark">GYN</span>
          <span>巩亚楠</span>
        </a>
        <div className="nav-links">
          <a href="#experience">经历</a>
          <a href="#projects">项目</a>
          <a href="#strengths">优势</a>
          <a href="#contact">联系</a>
        </div>
        <a className="nav-cta" href="mailto:gyn16130107@163.com">
          <Mail size={18} />
          联系我
        </a>
      </nav>
      <section className="hero" id="home">
        <video
          className="hero-video"
          src="/assets/hero-background.mp4"
          poster="/assets/hero-poster.svg"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="hero-fallback" aria-hidden="true" />
        <div className="hero-shade" aria-hidden="true" />

        <div className="container hero-content">
          <div className="hero-copy">
            <div className="hero-kicker">
              <Sparkles size={18} />
              Portfolio 2026
            </div>
            <h1>
              <span>硬件设计师</span>
              <span>微弱信号采集</span>
              <span>嵌入式系统</span>
            </h1>
            <span className="hero-rule" aria-hidden="true" />
            <p>
              以严谨的电路分析、克制的 PCB Layout 和完整的工程验证，把传感器、模拟前端、主控与通信链路组织成稳定可靠的硬件系统。
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#projects">
                查看项目
                <ArrowUpRight size={20} />
              </a>
              <a className="ghost-button" href="tel:15964825058">
                <Phone size={18} />
                直接联系
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-section" id="experience">
        <div className="container about-grid">
          <BorderGlow className="portrait-card" {...glowProps} backgroundColor="#071017">
            <img src="/assets/profile-panel.svg" alt="硬件设计师巩亚楠的科技风人物占位图" />
          </BorderGlow>
          <div className="about-copy">
            <p className="eyebrow">Personal Profile</p>
            <h2>巩亚楠</h2>
            <p className="lead">
              东南大学电子信息专业研究生，本科毕业于临沂大学微电子科学与工程，专业排名 1/76。求职方向为硬件工程师，长期关注半导体器件、模拟电子、数字电子与嵌入式硬件设计。
            </p>
            <p>
              已完成基于 nRF52832 的柔性传感器微弱信号采集系统、基于 STC89C52RC 的多功能嵌入式开发平台等项目，具备原理图设计、器件选型、PCB Layout、嵌入式程序开发与硬件调试能力。
            </p>
            <div className="contact-row">
              {contacts.map((item) => (
                <ContactLink key={item.label} item={item} />
              ))}
            </div>
            <div className="stats-grid">
              {stats.map((stat) => (
                <BorderGlow
                  className="stat-card"
                  key={stat.label}
                  {...glowProps}
                  backgroundColor="#071017"
                  glowRadius={20}
                  fillOpacity={0.2}
                >
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </BorderGlow>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="container section-head">
          <h2>精选项目</h2>
          <p className="eyebrow">Selected Works</p>
        </div>
        <div className="container projects-grid">
          {projects.map((project, index) => (
            <BorderGlow
              className={`project-card project-card-${index + 1}`}
              key={project.title}
              {...glowProps}
              backgroundColor="#0a1117"
              glowRadius={34}
              fillOpacity={0.18}
            >
              <img src={project.image} alt={`${project.title} 作品图`} />
              <div className="project-content">
                <div className="project-meta">
                  <span>{project.time}</span>
                  <ArrowUpRight size={20} />
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </BorderGlow>
          ))}
        </div>
      </section>

      <section className="section strengths-section" id="strengths">
        <div className="container section-head">
          <h2>个人优势</h2>
          <p className="eyebrow">Core Strengths</p>
        </div>
        <div className="container strengths-grid">
          {strengths.map((item) => {
            const Icon = item.icon;
            return (
              <BorderGlow
                className="strength-card"
                key={item.title}
                {...glowProps}
                backgroundColor="#080d13"
                glowRadius={24}
              >
                <div className="strength-icon">
                  <Icon size={26} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </BorderGlow>
            );
          })}
        </div>
      </section>

      <section className="closing-section" id="contact">
        <div className="closing-grid" aria-hidden="true" />
        <div className="container closing-content">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>期待把可靠的硬件想法，落到一块真正能工作的板子上。</h2>
          </div>
          <BorderGlow className="closing-panel" {...glowProps} backgroundColor="rgba(8, 13, 19, 0.86)" glowRadius={34}>
            <div className="closing-item">
              <Phone size={22} />
              <a href="tel:15964825058">15964825058</a>
            </div>
            <div className="closing-item">
              <Mail size={22} />
              <a href="mailto:gyn16130107@163.com">gyn16130107@163.com</a>
            </div>
            <div className="closing-item">
              <BadgeCheck size={22} />
              <span>硬件工程师 / 硬件设计师</span>
            </div>
          </BorderGlow>
        </div>
      </section>
    </main>
  );
}

export default App;
