import React, { useState, useEffect } from 'react';
import { 
  Rocket, 
  ShieldCheck, 
  TrendingUp, 
  Wallet, 
  Target, 
  Zap, 
  Clock, 
  Gavel, 
  Database,
  ChevronRight,
  BarChart3,
  Award,
  Users,
  Lightbulb,
  CheckCircle2,
  Briefcase,
  X,
  ArrowRight,
  PlayCircle,
  Mail,
  Copy,
  Info,
  HelpCircle
} from 'lucide-react';

const App = () => {
  const [hoveredModule, setHoveredModule] = useState(null);
  const [selectedModule, setSelectedModule] = useState(null);
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [showReadmeModal, setShowReadmeModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const emailAddress = "Tayara@live.nl";

  // Prevent background scrolling when any modal is open
  useEffect(() => {
    if (selectedModule || showContactPopup || showReadmeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedModule, showContactPopup, showReadmeModal]);

  const copyToClipboard = () => {
    const textArea = document.createElement("textarea");
    textArea.value = emailAddress;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed', err);
    }
    document.body.removeChild(textArea);
  };

  const pillars = [
    {
      title: "Financial Performance",
      description: "Optimize cash cycles and revenue flow.",
      color: "border-blue-500",
      textColor: "text-blue-600",
      bgColor: "bg-blue-50",
      modules: [
        { 
          id: 1, 
          name: "Onboarding & Connections", 
          impact: "Revenue Acceleration", 
          detail: "Eliminate connection bottlenecks to start the billing cycle faster.", 
          kpi: "Lead Time", 
          icon: <Rocket size={20} />,
          objectives: ["Standardizing digital intake", "GIS integration strategies", "Automated credit risk workflows"],
          roadmap: "Manual → Digital → Integrated → Predictable → Instant"
        },
        { 
          id: 3, 
          name: "Billing & Tariffs", 
          impact: "Cash Flow Velocity", 
          detail: "Reduce billing errors and disputes to speed up payment cycles.", 
          kpi: "Billing Accuracy", 
          icon: <TrendingUp size={20} />,
          objectives: ["Tariff workbench implementation", "Automated QA scripts", "Omnichannel bill delivery"],
          roadmap: "Spreadsheets → Core Engine → ERP Sync → Behavioral"
        },
        { 
          id: 4, 
          name: "Revenue & Collections", 
          impact: "Working Capital", 
          detail: "Recover aged debt and minimize bad debt write-offs.", 
          kpi: "DSO", 
          icon: <Wallet size={20} />,
          objectives: ["Automated dunning logic", "Risk-based customer segmentation", "AI autonomous nudges"],
          roadmap: "Reactive → Automated → Predictive → Autonomous"
        }
      ]
    },
    {
      title: "Operational Intelligence",
      description: "Data-driven accuracy and loss recovery.",
      color: "border-indigo-500",
      textColor: "text-indigo-600",
      bgColor: "bg-indigo-50",
      modules: [
        { 
          id: 2, 
          name: "Metering & Data", 
          impact: "Revenue Integrity", 
          detail: "Shift from estimates to 100% accurate consumption data.", 
          kpi: "Reading Coverage", 
          icon: <Zap size={20} />,
          objectives: ["Mobile handheld field apps", "AMI/Smart meter rollout", "AI-driven leak detection"],
          roadmap: "Manual Logs → Digital App → Full AMI → AI Analytics"
        },
        { 
          id: 9, 
          name: "Master Data Integrity", 
          impact: "Decision Quality", 
          detail: "Synchronize GIS, ERP, and Billing for a single source of truth.", 
          kpi: "Data Match Rate", 
          icon: <Database size={20} />,
          objectives: ["UPRN master ID architecture", "Automated cleansing bots", "360-degree customer MDM"],
          roadmap: "Siloed → Synchronized → Integrated → Self-Healing"
        },
        { 
          id: 5, 
          name: "Commercial Loss (NRW)", 
          impact: "Direct Profit Recovery", 
          detail: "Detect theft and meter inaccuracies to recover 'lost' water.", 
          kpi: "Apparent Loss %", 
          icon: <Target size={20} />,
          objectives: ["GIS-Billing gap analysis", "DMA zonal metering", "AI consumption profiling"],
          roadmap: "Undocumented → Managed → Data-Driven → Self-Healing"
        }
      ]
    },
    {
      title: "Trust & Governance",
      description: "Strategic engagement and compliance.",
      color: "border-slate-500",
      textColor: "text-slate-600",
      bgColor: "bg-slate-50",
      modules: [
        { 
          id: 6, 
          name: "Customer Experience", 
          impact: "Operational Efficiency", 
          detail: "Reduce service costs through self-service and proactive care.", 
          kpi: "FCR / CSAT", 
          icon: <Users size={20} />,
          objectives: ["Unified CRM integration", "Proactive outage notifications", "GenAI chatbot deployment"],
          roadmap: "Reactive Desk → Omnichannel → Proactive → AI-Driven"
        },
        { 
          id: 8, 
          name: "Regulatory Governance", 
          impact: "Risk Mitigation", 
          detail: "Automate compliance to avoid fines and legal risks.", 
          kpi: "Audit Score", 
          icon: <Gavel size={20} />,
          objectives: ["Standardized policy libraries", "Real-time risk dashboards", "Compliance-as-Code"],
          roadmap: "Fire-drills → Policy-Led → Predictive → Automated"
        },
        { 
          id: 7, 
          name: "Demand Management", 
          impact: "CAPEX Deferral", 
          detail: "Manage peak demand to delay expensive infrastructure builds.", 
          kpi: "LPCD", 
          icon: <Clock size={20} />,
          objectives: ["Behavioral nudge engines", "Targeted conservation rebates", "Real-time peak shifting"],
          roadmap: "Reactive Comms → Targeted Outreach → Behavioral → Real-Time"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-12 font-sans text-slate-800">
      {/* Branding Header */}
      <header className="max-w-6xl mx-auto mb-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="h-16 w-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-200 group-hover:scale-105 transition-transform duration-300 overflow-hidden relative">
             <Briefcase size={32} className="absolute opacity-20" />
             <img 
               src="/logo.png" 
               alt="Tayara Logo" 
               className="w-full h-full object-cover relative z-10 transition-opacity" 
               onError={(e) => {e.target.style.opacity='0';}} 
             />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900 tracking-tighter uppercase leading-none">Tayara</div>
            <div className="text-[10px] font-black text-blue-600 tracking-[0.3em] uppercase mt-1">Strategic Solutions</div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button 
            onClick={() => setShowReadmeModal(true)}
            className="flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold text-sm transition-colors group"
          >
            <HelpCircle size={18} className="group-hover:rotate-12 transition-transform" />
            Methodology
          </button>
          <div className="hidden md:block h-8 w-px bg-slate-200"></div>
          <div className="hidden md:block text-right">
            <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-2">Partner Excellence</div>
            <div className="h-1 w-12 bg-blue-600 ml-auto rounded-full"></div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto mb-12 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-2 text-blue-600 font-bold tracking-widest text-sm mb-4 uppercase">
          <Award size={18} />
          Commercial Excellence Curriculum
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-4 tracking-tight">
          Utility Transformation Training Modules
        </h1>
        <p className="text-xl text-slate-500 max-w-3xl leading-relaxed">
          Select a training focus area below to view learning objectives and maturity roadmap.
        </p>
      </div>

      {/* Main 3x3 Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {pillars.map((pillar, pIdx) => (
          <div key={pIdx} className="flex flex-col">
            <div className={`border-l-4 ${pillar.color} pl-4 mb-8`}>
              <h2 className="text-2xl font-bold text-slate-900">{pillar.title}</h2>
              <p className="text-slate-500 text-sm mt-1 leading-relaxed">{pillar.description}</p>
            </div>
            
            <div className="space-y-4 flex-grow">
              {pillar.modules.map((module) => (
                <div 
                  key={module.id}
                  onClick={() => setSelectedModule(module)}
                  className={`relative group p-6 rounded-2xl border transition-all duration-300 cursor-pointer h-full flex flex-col
                    ${hoveredModule === module.id 
                        ? 'bg-white border-blue-400 shadow-xl -translate-y-1' 
                        : 'bg-white border-slate-100 shadow-sm hover:border-slate-300'}
                  `}
                  onMouseEnter={() => setHoveredModule(module.id)}
                  onMouseLeave={() => setHoveredModule(null)}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2 rounded-lg transition-colors ${pillar.bgColor + ' ' + pillar.textColor}`}>
                      {module.icon}
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-slate-100 text-slate-500">
                      {module.impact}
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-lg mb-1">{module.name}</h3>
                  <p className="text-xs mb-4 leading-relaxed text-slate-500 flex-grow">
                    {module.detail}
                  </p>
                  
                  <div className="flex items-center gap-2 mt-auto">
                    <BarChart3 size={14} className={pillar.textColor} />
                    <span className="text-[10px] font-bold uppercase opacity-80">Primary KPI: {module.kpi}</span>
                  </div>

                  <ChevronRight size={16} className={`absolute right-4 bottom-4 transition-all duration-300 ${hoveredModule === module.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* SYLLABUS MODAL */}
      {selectedModule && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
          onClick={() => setSelectedModule(null)}
        >
          <div 
            className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto relative animate-in zoom-in-95 slide-in-from-bottom-4 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedModule(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors z-20"
            >
              <X size={24} />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 p-8 md:p-12">
                <div className="flex items-center gap-3 text-blue-600 font-bold mb-4">
                  <PlayCircle size={24} />
                  <span className="uppercase tracking-widest text-sm font-black">Syllabus Overview</span>
                </div>
                
                <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
                  {selectedModule.name}
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Learning Objectives</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedModule.objectives.map((obj, i) => (
                        <div key={i} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors">
                          <CheckCircle2 size={18} className="text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm font-semibold text-slate-700">{obj}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Evolutionary Roadmap</h4>
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-3xl shadow-lg relative overflow-hidden group">
                      <div className="relative z-10 text-white font-bold text-lg italic tracking-wide">
                        {selectedModule.roadmap}
                      </div>
                      <Rocket size={120} className="absolute -right-4 -bottom-4 text-white/10 -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-900 p-8 md:p-12 text-white flex flex-col justify-between">
                <div>
                  <div className="mb-10">
                    <h4 className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-3">Strategic Impact</h4>
                    <p className="text-3xl font-black leading-tight tracking-tight">{selectedModule.impact}</p>
                    <div className="h-1 w-16 bg-blue-600 mt-4 rounded-full"></div>
                  </div>

                  <div className="space-y-8">
                    <div className="flex items-start gap-4 group">
                      <div className="bg-white/10 p-3 rounded-xl group-hover:bg-blue-600 transition-colors duration-300">
                        <Target size={24} className="text-blue-400 group-hover:text-white" />
                      </div>
                      <div>
                        <div className="text-base font-bold text-white">KPI Goal Alignment</div>
                        <p className="text-sm text-slate-400 mt-1 leading-relaxed text-slate-300">Directly targets your <span className="text-white font-medium">{selectedModule.kpi}</span> metric.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 group">
                      <div className="bg-white/10 p-3 rounded-xl group-hover:bg-blue-600 transition-colors duration-300">
                        <Award size={24} className="text-blue-400 group-hover:text-white" />
                      </div>
                      <div>
                        <div className="text-base font-bold text-white">Certification</div>
                        <p className="text-sm text-slate-400 mt-1 leading-relaxed text-slate-300">Official Tayara Levels 1-5 maturity certificate included.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <button 
                    onClick={() => setShowContactPopup(true)}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-5 rounded-2xl shadow-xl shadow-blue-900/40 transition-all flex items-center justify-center gap-3 text-lg active:scale-95 text-center"
                  >
                    Schedule This Training 
                    <ArrowRight size={20} />
                  </button>
                  <p className="text-center text-[10px] text-slate-500 mt-4 uppercase tracking-[0.2em]">Tayara Strategic Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* METHODOLOGY MODAL */}
      {showReadmeModal && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setShowReadmeModal(false)}
        >
          <div 
            className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-3xl overflow-hidden relative animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowReadmeModal(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors"
            >
              <X size={24} />
            </button>
            <div className="p-10">
              <div className="flex items-center gap-3 text-blue-600 font-bold mb-6">
                <Info size={24} />
                <span className="uppercase tracking-widest text-sm font-black">Framework Methodology</span>
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">The Commercial Maturity Model</h3>
              
              <div className="space-y-6">
                <p className="text-slate-600 leading-relaxed">
                  The Tayara framework empower water utilities to evolve from reactive, manual systems to proactive, AI-optimized excellence across nine critical subprocesses.
                </p>
                
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { l: "Level 1: Ad-hoc", d: "Manual, paper-based, and reliant on 'tribal knowledge'." },
                    { l: "Level 2: Managed", d: "Documented workflows with basic digital tracking and SLAs." },
                    { l: "Level 3: Standardized", d: "Integrated systems (GIS/ERP) and unified digital platforms." },
                    { l: "Level 4: Predictable", d: "Data-driven insights, pattern recognition, and proactivity." },
                    { l: "Level 5: Optimized", d: "AI-driven autonomous loops and 'Self-Healing' data ecosystems." }
                  ].map((level, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="h-6 w-6 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-sm">{level.l}</div>
                        <div className="text-xs text-slate-500 mt-1">{level.d}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <button 
                onClick={() => setShowReadmeModal(false)}
                className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-colors mt-8"
              >
                Return to Curriculum
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CONTACT POPUP */}
      {showContactPopup && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setShowContactPopup(false)}
        >
          <div 
            className="bg-white rounded-[2rem] shadow-2xl w-full max-w-md overflow-hidden relative animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8 text-center">
              <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Mail size={40} />
              </div>
              
              <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">Connect With Us</h3>
              <p className="text-slate-500 mb-8 font-medium leading-relaxed text-sm">
                To schedule a <span className="text-blue-600 font-bold">{selectedModule?.name || 'training'}</span> session, please send an inquiry to:
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex items-center justify-between mb-8 group hover:border-blue-300 transition-colors">
                <span className="font-black text-slate-700">{emailAddress}</span>
                <button 
                  onClick={copyToClipboard}
                  className="p-2 hover:bg-white rounded-lg text-slate-400 hover:text-blue-600 transition-all"
                >
                  {copied ? <CheckCircle2 size={20} className="text-emerald-500" /> : <Copy size={20} />}
                </button>
              </div>

              <div className="space-y-3">
                <button 
                  onClick={() => setShowContactPopup(false)}
                  className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-colors"
                >
                  Close
                </button>
              </div>
              
              <p className="text-[10px] text-slate-400 mt-6 uppercase tracking-widest font-bold text-center">
                Tayara Strategic Solutions
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Main CTA Section */}
      {!selectedModule && !showReadmeModal && (
        <div className="max-w-6xl mx-auto">
          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl">
            <div className="relative z-10 max-w-2xl text-center lg:text-left">
              <h2 className="text-4xl font-black mb-6 leading-tight">Transformation at Scale</h2>
              <p className="text-slate-400 text-xl mb-8 leading-relaxed font-medium">
                Our training programs move your workforce from manual siloes to AI-optimized excellence.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {["Case-Study Driven", "Tech-Neutral", "Executive Ready"].map(tag => (
                  <div key={tag} className="flex items-center gap-2 bg-white/5 px-5 py-3 rounded-2xl border border-white/10 text-sm font-bold tracking-tight">
                    <CheckCircle2 size={18} className="text-emerald-400" /> {tag}
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={() => setShowContactPopup(true)}
              className="relative z-10 bg-blue-600 hover:bg-blue-500 transition-all px-12 py-6 rounded-2xl font-black text-2xl cursor-pointer shadow-2xl shadow-blue-600/40 active:scale-95 group text-white"
            >
              Get Started 
              <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -mr-40 -mt-40"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] -ml-40 -mb-40"></div>
          </div>
        </div>
      )}
      
      <footer className="mt-16 flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-slate-400 grayscale opacity-50 px-4 pb-12">
        <div className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-center"><Award size={20} /> Global Utility Standard</div>
        <div className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-center"><Lightbulb size={20} /> Innovation Lab</div>
        <div className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-center"><ShieldCheck size={20} /> Verified Framework</div>
      </footer>
    </div>
  );
};

export default App;
