import AnimatedSection from '../components/AnimatedSection';
import Card from '../components/Card';
import Button from '../components/Button';
import { useNavigation } from '../context/NavigationContext';

export default function Achievements() {
  const { navigate } = useNavigation();

  return (
    <div className="bg-white">
      <section className="min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="max-w-4xl text-center">
          <AnimatedSection>
            <h1 className="text-7xl font-bold mb-6 tracking-tight">Achievements</h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-2xl text-gray-600">
              Building Sustainable Ventures That Create Lasting Impact
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-5xl font-bold mb-12 text-center">Entrepreneurial Overview</h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="prose prose-lg max-w-none text-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                My entrepreneurial journey is driven by a commitment to creating sustainable businesses
                that serve humanity. Through strategic investments and innovative ventures, I've built
                a diverse portfolio spanning technology, real estate, healthcare, and agriculture—all
                unified by a vision of meaningful impact and zero-debt sustainability.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-5xl font-bold mb-12 text-center">Ruhil Holdings</h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <Card>
              <h3 className="text-3xl font-bold mb-6">The Foundation of Innovation</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>Ruhil Holdings</strong> is the umbrella organization that brings together all
                my entrepreneurial ventures. Founded on principles of sustainable growth, ethical business
                practices, and zero-debt philosophy, the holding company represents a new model of
                entrepreneurship—one that prioritizes long-term value over short-term gains.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#15E0FB] mb-2">Zero</div>
                  <p className="text-gray-700">Debt Model</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#15E0FB] mb-2">8+</div>
                  <p className="text-gray-700">Active Ventures</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#15E0FB] mb-2">100%</div>
                  <p className="text-gray-700">Sustainable Focus</p>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-5xl font-bold mb-12 text-center">Halo Homes</h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <Card>
              <h3 className="text-2xl font-bold mb-4">Sustainable Real Estate Development</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>Halo Homes</strong> represents our commitment to sustainable real estate development
                in Canada. We're not just building houses—we're creating eco-friendly, energy-efficient
                communities that enhance quality of life while minimizing environmental impact.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#15E0FB] mr-3 mt-1">•</span>
                  <span>Net-zero energy homes with advanced solar integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#15E0FB] mr-3 mt-1">•</span>
                  <span>Smart home technology for optimal energy management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#15E0FB] mr-3 mt-1">•</span>
                  <span>Sustainable materials and green building certifications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#15E0FB] mr-3 mt-1">•</span>
                  <span>Community-focused design with shared green spaces</span>
                </li>
              </ul>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-5xl font-bold mb-12 text-center">Gyansetu & HealthSync</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection delay={0}>
              <Card>
                <h3 className="text-2xl font-bold mb-4">Gyansetu</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Gyansetu</strong> is our education technology initiative focused on democratizing
                  access to quality education. Through innovative digital platforms, we connect learners
                  with educators, breaking down geographical and economic barriers.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our mission is to empower the next generation with knowledge, skills, and opportunities
                  to succeed in a rapidly evolving world.
                </p>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <Card>
                <h3 className="text-2xl font-bold mb-4">HealthSync</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>HealthSync</strong> leverages technology to improve healthcare accessibility and
                  efficiency. Our platform connects patients with healthcare providers, streamlines medical
                  records, and enables data-driven healthcare decisions.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We're committed to making quality healthcare more accessible, affordable, and effective
                  for everyone.
                </p>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-5xl font-bold mb-12 text-center">YogSetu</h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <Card>
              <h3 className="text-2xl font-bold mb-4">Wellness Through Ancient Wisdom</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>YogSetu</strong> brings the ancient practice of yoga to modern audiences through
                digital platforms and community programs. We believe that holistic wellness is essential
                for personal and professional success.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our programs combine traditional yoga teachings with contemporary wellness science,
                offering comprehensive solutions for physical, mental, and spiritual well-being. YogSetu
                serves thousands of practitioners worldwide, creating a global community committed to
                health and harmony.
              </p>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-5xl font-bold mb-12 text-center">Land 2 Lavish & Alumni Setu</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection delay={0}>
              <Card>
                <h3 className="text-2xl font-bold mb-4">Land 2 Lavish</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Land 2 Lavish</strong> specializes in premium real estate development, transforming
                  raw land into luxurious, sustainable living spaces. We focus on strategic locations that
                  offer both investment value and quality of life.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Each project reflects our commitment to architectural excellence, environmental
                  responsibility, and creating spaces where families thrive.
                </p>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <Card>
                <h3 className="text-2xl font-bold mb-4">Alumni Setu</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Alumni Setu</strong> is a networking platform that connects alumni across
                  institutions, geographies, and industries. We facilitate meaningful connections that
                  lead to collaborations, mentorship, and mutual growth.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  By strengthening alumni networks, we're creating communities of support that extend
                  far beyond graduation.
                </p>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-5xl font-bold mb-8">Ready to Collaborate?</h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-xl text-gray-700 mb-12">
              Let's explore opportunities to create meaningful impact together
            </p>
          </AnimatedSection>
          <AnimatedSection delay={400}>
            <Button onClick={() => navigate('home')}>
              Get In Touch
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
