// Since we are using CDN globals to avoid build steps:
const { useState, useEffect } = React;
// Lucide icons are available globally as 'lucide.icons' or we can just use <i data-lucide="..."></i> or standard SVG components if we mapped them
// But lucide-react is a library. We included 'lucide' script which processes DOM.
// To use React components for icons without a build step is hard (need lucide-react UMD).
// Easier: Use the global `lucide` object and `createIcons()` or just SVGs.
// Or, create a simple Icon component wrapper.

const Icon = ({ name, size = 24, className = "" }) => {
    const iconName = name.charAt(0).toLowerCase() + name.slice(1);
    // This is a placeholder. Lucide UMD doesn't give React components directly. 
    // It gives `lucide.icons` which are SVG strings or elements.
    // For a React portfolio without build, explicit SVGs are safest and most robust.

    // However, to supply the "modern React" feel, I will simplify and define the few icons we use as simple functional components here using standard SVG paths.
    // This removes the external dependency complexity.

    const icons = {
        Shield: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
        Lock: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>,
        FileText: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>,
        CheckCircle: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>,
        Database: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>,
        Mail: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
        Phone: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>,
        Linkedin: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>,
        Download: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
    };

    return icons[name] || null;
}

function App() {
    const [activeSection, setActiveSection] = useState('home');

    // Simple scroll spy logic
    useEffect(() => {
        const handleScroll = () => {
            // Logic could be added here to update active link
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-[#fafaf9]">
            {/* Navigation */}
            <nav className="fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#0c4a6e] text-[#cca43b] flex items-center justify-center font-serif text-xl font-bold rounded-sm">
                            DK
                        </div>
                        <div className="hidden md:block">
                            <h1 className="text-[#0c4a6e] font-serif font-bold text-lg leading-tight">Derrick Kibiwot</h1>
                            <p className="text-xs text-gray-500 uppercase tracking-wider">Data Protection & Privacy</p>
                        </div>
                    </div>
                    <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
                        {['Home', 'About', 'Services', 'Experience', 'Contact'].map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className="hover:text-[#0c4a6e] transition-colors uppercase tracking-wide text-xs"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a href="#contact" className="md:hidden text-[#0c4a6e]">
                        <Icon name="Mail" size={24} />
                    </a>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
                <div className="container mx-auto max-w-5xl">
                    <div className="max-w-3xl">
                        <div className="inline-block px-3 py-1 bg-[#0c4a6e]/10 text-[#0c4a6e] font-medium text-sm rounded-full mb-6 animate-fade-in">
                            Available for Data Protection Audits
                        </div>
                        <h1 className="text-5xl md:text-7xl font-serif text-[#0c4a6e] mb-8 leading-[1.1] animate-fade-in" style={{ animationDelay: '0.1s' }}>
                            Safeguarding Data. <br />
                            <span className="text-gray-400 italic font-light">Ensuring Compliance.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
                            I help organizations build trust through robust privacy governance,
                            risk management, and regulatory compliance.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                            <a href="#services" className="bg-[#0c4a6e] text-white px-8 py-3 rounded-sm font-medium hover:bg-[#08334c] transition-colors flex items-center justify-center gap-2">
                                Explore Services <Icon name="Shield" size={18} />
                            </a>
                            <a href="#contact" className="border border-[#0c4a6e] text-[#0c4a6e] px-8 py-3 rounded-sm font-medium hover:bg-[#0c4a6e]/5 transition-colors flex items-center justify-center gap-2">
                                Get in Touch
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif text-[#0c4a6e] mb-6 relative inline-block">
                                Professional Profile
                                <span className="absolute bottom-1 left-0 w-1/3 h-1 bg-[#cca43b]/40 -z-10"></span>
                            </h2>
                            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                                As a dedicated <strong className="text-[#0c4a6e]">Data Protection & Information Security Specialist</strong>,
                                I bridge the gap between complex regulatory requirements and practical business operations.
                            </p>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                My work focuses on helping organizations navigate the Kenya Data Protection Act (2019) and GDPR.
                                I specialize in developing Record of Processing Activities (ROPA), conducting Privacy Impact Assessments (DPIA),
                                and establishing comprehensive privacy governance frameworks.
                            </p>

                            <div className="grid grid-cols-3 gap-6 border-t border-gray-100 pt-8">
                                <div>
                                    <h3 className="text-3xl font-serif text-[#cca43b] font-bold">2+</h3>
                                    <p className="text-xs uppercase tracking-wider text-gray-500 mt-1">Years Compliance Exp.</p>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-serif text-[#cca43b] font-bold">3+</h3>
                                    <p className="text-xs uppercase tracking-wider text-gray-500 mt-1">Organizations Served</p>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-serif text-[#cca43b] font-bold">5+</h3>
                                    <p className="text-xs uppercase tracking-wider text-gray-500 mt-1">Frameworks Managed</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#fafaf9] p-8 md:p-12 relative">
                            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                            <h3 className="font-serif text-2xl text-[#0c4a6e] mb-6">Core Competencies</h3>
                            <ul className="space-y-4">
                                {[
                                    "Data Protection Act (2019) Compliance",
                                    "GDPR Implementation & Auditing",
                                    "Record of Processing Activities (ROPA)",
                                    "Data Privacy Impact Assessments (DPIA)",
                                    "Information Security Policy Drafting"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Icon name="CheckCircle" className="text-[#cca43b] shrink-0 mt-1" size={18} />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 bg-[#f4f4f5]">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif text-[#0c4a6e] mb-4">Strategic Advisory Services</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Delivering tailored solutions to ensure your organization remains compliant, secure, and trustworthy.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <ServiceCard
                            icon={<Icon name="Shield" size={32} />}
                            title="Data Protection Compliance"
                            desc="Full lifecycle compliance management including Kenya DPA & GDPR alignment, DPO advisory, and regulatory reporting."
                        />
                        <ServiceCard
                            icon={<Icon name="Lock" size={32} />}
                            title="Information Security"
                            desc="Drafting robust ISP policies, conducting risk assessments, and incident response planning to secure assets."
                        />
                        <ServiceCard
                            icon={<Icon name="Database" size={32} />}
                            title="Records Management"
                            desc="Comprehensive data mapping, retention scheduling, and classification to ensure organized data governance."
                        />
                        <ServiceCard
                            icon={<Icon name="FileText" size={32} />}
                            title="Audit Preparation"
                            desc="Internal compliance audits, gap analysis, and readiness assessments to prepare for external regulatory scrutiny."
                        />
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-serif text-[#0c4a6e] mb-12 text-center">Professional Timeline</h2>

                    <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">

                        <ExperienceItem
                            company="Green Planet"
                            role="Data Protection Officer (DPO)"
                            period="Current"
                            desc="Leading data privacy strategies, overseeing ROPA implementation, and ensuring continuous compliance with the Data Protection Act."
                        />

                        <ExperienceItem
                            company="MENTORTHON"
                            role="Information Security Consultant"
                            period="2023 - 2024"
                            desc="Conducted comprehensive security risk assessments and developed the organization's customized Information Security Policy."
                        />

                        <ExperienceItem
                            company="Kingdom Innovation Hub"
                            role="Privacy Compliance Associate"
                            period="2022 - 2023"
                            desc="Assisted in data mapping exercises and supported the rollout of privacy awareness training programs for staff."
                        />

                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 bg-[#0c4a6e] text-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-serif mb-8 border-l-4 border-[#cca43b] pl-6">Technical & Compliance <br />Proficiency</h2>
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-[#cca43b] font-medium mb-3 uppercase tracking-wider text-sm">Skills</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {['Data Protection Impact Assessments', 'Legal Compliance', 'Risk Management', 'Policy Drafting', 'Training & Awareness'].map(skill => (
                                            <span key={skill} className="bg-white/10 px-3 py-1 rounded text-sm hover:bg-white/20 transition-colors">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-[#cca43b] font-medium mb-3 uppercase tracking-wider text-sm">Tools & Governance</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {['OneTrust', 'Microsoft Compliance Manager', 'ISO 27001', 'NIST Framework', 'GDPR', 'Kenya DPA 2019'].map(skill => (
                                            <span key={skill} className="bg-white/10 px-3 py-1 rounded text-sm hover:bg-white/20 transition-colors">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white/5 p-8 border border-white/10 rounded-sm">
                            <h3 className="text-xl font-serif mb-6 flex items-center gap-2">
                                <Icon name="CheckCircle" className="text-[#cca43b]" /> Certification
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg" alt="Cisco" className="w-8" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Cisco Certified Network Associate (CCNA)</h4>
                                        <p className="text-white/60 text-sm">Network Fundamentals & IP Connectivity</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-serif text-[#0c4a6e] mb-6">Let's Connect</h2>
                    <p className="text-gray-600 mb-12 max-w-xl mx-auto">
                        Open to consulting opportunities, training engagements, and permanent roles in Data Protection and Information Security.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        <a href="mailto:contact@example.com" className="p-6 border border-gray-100 hover:border-[#0c4a6e] hover:shadow-lg transition-all group">
                            <div className="mx-auto text-[#0c4a6e] mb-4 group-hover:scale-110 transition-transform">
                                <Icon name="Mail" size={32} />
                            </div>
                            <h3 className="font-bold text-gray-800 mb-2">Email</h3>
                            <p className="text-gray-500 text-sm">contact@derrickkibiwot.com</p>
                        </a>
                        <a href="tel:+254700000000" className="p-6 border border-gray-100 hover:border-[#0c4a6e] hover:shadow-lg transition-all group">
                            <div className="mx-auto text-[#0c4a6e] mb-4 group-hover:scale-110 transition-transform">
                                <Icon name="Phone" size={32} />
                            </div>
                            <h3 className="font-bold text-gray-800 mb-2">Phone</h3>
                            <p className="text-gray-500 text-sm">+254 700 000 000</p>
                        </a>
                        <a href="#" className="p-6 border border-gray-100 hover:border-[#0c4a6e] hover:shadow-lg transition-all group">
                            <div className="mx-auto text-[#0c4a6e] mb-4 group-hover:scale-110 transition-transform">
                                <Icon name="Linkedin" size={32} />
                            </div>
                            <h3 className="font-bold text-gray-800 mb-2">LinkedIn</h3>
                            <p className="text-gray-500 text-sm">Connect with me</p>
                        </a>
                    </div>

                    <div className="mt-16">
                        <button className="bg-[#0c4a6e] text-white px-8 py-3 rounded-sm font-medium hover:bg-[#08334c] transition-colors inline-flex items-center gap-2">
                            <Icon name="Download" size={18} /> Download CV
                        </button>
                    </div>
                </div>
            </section>

            <footer className="bg-[#08334c] text-white/40 py-8 text-center text-sm">
                <div className="container mx-auto">
                    <p>&copy; 2026 Derrick Kibiwot. All rights reserved.</p>
                    <p className="mt-2 text-xs">Based in Nairobi, Kenya.</p>
                </div>
            </footer>
        </div>
    );
}

function ServiceCard({ icon, title, desc }) {
    return (
        <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow border-t-4 border-[#0c4a6e]">
            <div className="text-[#cca43b] mb-4">{icon}</div>
            <h3 className="font-serif text-xl text-[#0c4a6e] font-bold mb-3">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
        </div>
    )
}

function ExperienceItem({ company, role, period, desc }) {
    return (
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#cca43b] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-white font-bold">
                <Icon name="CheckCircle" size={16} />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h3 className="font-bold text-[#0c4a6e]">{company}</h3>
                    <span className="text-xs font-mono text-gray-400 bg-gray-50 px-2 py-1 rounded">{period}</span>
                </div>
                <div className="text-[#cca43b] text-sm font-medium mb-3">{role}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
            </div>
        </div>
    )
}

// Ensure App is available globally
window.App = App;
