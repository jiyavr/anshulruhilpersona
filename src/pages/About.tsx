import AnimatedSection from '../components/AnimatedSection';
import Card from '../components/Card';
import ContactForm from '../components/ContactForm';

export default function About() {
  const awards = [
    'Top 100 Canadian Immigrant of the Year (2022)',
    'Entrepreneur of the Year Award',
    'Technology Leadership Excellence Award',
    'Innovation in Real Estate Development',
  ];

  const experiences = [
    { company: 'LexisNexis', role: 'Head of Technology', years: '2020 - Present' },
    { company: 'Merative (formerly IBM Watson Health)', role: 'Technology Lead', years: '2018 - 2020' },
    { company: 'DTCC', role: 'Senior Technology Architect', years: '2015 - 2018' },
    { company: 'NCR Corporation', role: 'Technology Consultant', years: '2012 - 2015' },
    { company: 'IBM', role: 'Software Engineer', years: '2008 - 2012' },
  ];

  const skills = [
    { name: 'Strategic Leadership', level: 95 },
    { name: 'Technology Innovation', level: 98 },
    { name: 'Entrepreneurship', level: 92 },
    { name: 'Real Estate Development', level: 88 },
    { name: 'Mentorship & Coaching', level: 94 },
    { name: 'Sustainable Business Practices', level: 90 },
  ];

  return (
    <div className="bg-white">
      <section className="min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="max-w-4xl text-center">
          <AnimatedSection>
            <h1 className="text-7xl font-bold mb-6 tracking-tight">About</h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-2xl text-gray-600">
              A Journey of Leadership, Innovation, and Impact
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-5xl font-bold mb-12 text-center">Foundational Vision</h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                My journey has been profoundly shaped by the extraordinary women in my life. My mother,
                <strong> Bala Devi Ruhil</strong>, and my wife, <strong>Deepika Ruhil</strong>, have been
                pillars of strength, wisdom, and inspiration. Their unwavering support and leadership have
                been instrumental in every success I've achieved.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                They embody the values of resilience, compassion, and strategic thinking that guide my
                approach to both business and life. Their influence is woven into every venture I've built
                and every decision I make.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-5xl font-bold mb-12 text-center">Corporate Leadership</h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <Card>
              <h3 className="text-3xl font-bold mb-6">Head of Technology, LexisNexis</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                As Head of Technology at LexisNexis, I lead transformative initiatives that drive
                innovation across global operations. My role encompasses strategic technology planning,
                digital transformation, and fostering a culture of continuous innovation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I've implemented cutting-edge solutions that have improved operational efficiency by 40%
                and enhanced customer experience across multiple markets. My leadership style emphasizes
                servant leadership, ensuring that technology serves people and creates meaningful impact.
              </p>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-5xl font-bold mb-12 text-center">Entrepreneurial Expansion</h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>Ruhil Holdings</strong> represents my commitment to building sustainable,
                zero-debt businesses that create lasting value. Founded on principles of financial
                prudence and strategic growth, the holding company encompasses ventures in technology,
                real estate, and organic farming.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our zero-debt philosophy isn't just about financial management—it's about building
                businesses that are resilient, sustainable, and positioned for long-term success. This
                approach has enabled us to weather economic challenges and pursue ambitious growth
                without compromising our values.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                My vision is to scale Ruhil Holdings into a globally recognized enterprise while
                maintaining our commitment to ethical business practices, environmental sustainability,
                and community impact.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-5xl font-bold mb-12 text-center">Governance & Mentorship</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection delay={0}>
              <Card>
                <h3 className="text-2xl font-bold mb-4">Board Leadership</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Proud member of the CIF (Canadian Innovation Foundation) Board and Canada India
                  Tech Council, where I contribute to shaping policies and initiatives that foster
                  innovation and international collaboration.
                </p>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <Card>
                <h3 className="text-2xl font-bold mb-4">Startup Mentorship</h3>
                <p className="text-gray-700 leading-relaxed">
                  Mentored 90+ startups across technology, healthcare, and social impact sectors.
                  My approach focuses on strategic guidance, connecting entrepreneurs with resources,
                  and helping them navigate challenges with practical wisdom.
                </p>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-5xl font-bold mb-12 text-center">Awards & Recognition</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card>
                  <div className="flex items-start">
                    <span className="text-[#15E0FB] text-4xl font-bold mr-4">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <p className="text-lg text-gray-700 pt-2">{award}</p>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-5xl font-bold mb-12 text-center">Work Experience Timeline</h2>
          </AnimatedSection>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300" />
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                      <Card>
                        <h3 className="text-2xl font-bold mb-2">{exp.company}</h3>
                        <p className="text-lg text-gray-700 mb-1">{exp.role}</p>
                        <p className="text-sm text-[#15E0FB]">{exp.years}</p>
                      </Card>
                    </div>
                    <div className="w-4 h-4 bg-[#15E0FB] rounded-full relative z-10" />
                    <div className="w-1/2" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-5xl font-bold mb-12 text-center">Skills & Expertise</h2>
          </AnimatedSection>
          <div className="max-w-4xl mx-auto space-y-8 mb-16">
            {skills.map((skill, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-lg font-medium">{skill.name}</span>
                    <span className="text-[#15E0FB] font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#15E0FB] transition-all duration-[1500ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={600}>
            <div className="max-w-2xl mx-auto">
              <Card>
                <h3 className="text-2xl font-bold mb-6 text-center">Let's Connect</h3>
                <ContactForm />
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
