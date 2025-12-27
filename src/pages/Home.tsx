import { Users, DoorOpen, Target, Building2, Sprout, Laptop } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Card from '../components/Card';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <div className="text-gray-800">
      <section 
        className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-gray-900"
        style={{
          backgroundImage: 'url("https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image_variant/dd739265cae5_w480.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="max-w-4xl text-center z-40 relative">
          <div className="[perspective:800px]">
            <h1 
              className="text-7xl md:text-8xl font-bold mb-6 tracking-tight opacity-0 animate-fadeInUp text-white"
              style={{ animationDuration: '0.8s', animationFillMode: 'forwards', animationDelay: '0.2s' }}
            >
              Anshul Ruhil
            </h1>
          </div>
          <div className="[perspective:800px]">
            <p 
              className="text-2xl md:text-3xl text-white mb-4 opacity-0 animate-fadeInUp"
              style={{ animationDuration: '0.8s', animationFillMode: 'forwards', animationDelay: '0.5s' }}
            >
              Technologist & Entrepreneur
            </p>
          </div>
          <AnimatedSection delay={800}>
            <div className="inline-block">
              <p className="text-xl text-white relative">
                Experience The Visionary Difference: Empowerment, Innovation, Success
                <span className="absolute bottom-0 left-0 w-full h-1 bg-[#15E0FB] origin-left scale-x-0 animate-slideIn" style={{animationDuration: '1s', animationTimingFunction: 'ease-out', animationDelay: '1s', animationFillMode: 'forwards'}} />
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="relative py-24 px-6 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div>
                <h2 className="text-5xl font-bold mb-6">About Snapshot</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  I'm Anshul Ruhil, and I'm delighted to connect with you. With a passion for entrepreneurship,
                  real estate and innovation, I have embarked on a lifelong mission to make a meaningful impact.
                  Throughout my career, I have embraced the power of servant leadership and an open-door policy,
                  which have become the cornerstones of my approach.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="relative aspect-square group overflow-hidden rounded-lg">
                <img 
                  src="https://content.app-sources.com/s/18915691824879427/uploads/Images/about-about-6749270.jpg?format=webp"
                  alt="Anshul Ruhil"
                  className="w-full h-full object-cover transition-all duration-500 ease-in-out transform group-hover:scale-105"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(#15E0FB_1px,transparent_1px)] [background-size:24px_24px]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto z-10">
          <AnimatedSection>
            <h2 className="text-5xl font-bold mb-16 text-center">Leadership Philosophy</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0}>
              <Card>
                <div className="relative mb-6">
                  <div className="absolute -inset-2 rounded-full bg-[#15E0FB] opacity-10 blur-xl group-hover:opacity-20 transition-opacity duration-300"></div>
                  <Users className="relative w-12 h-12 text-[#15E0FB] transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Servant Leadership</h3>
                <p className="text-gray-700 leading-relaxed">
                  Prioritizing the growth and well-being of people and communities to build
                  sustainable, innovative organizations.
                </p>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <Card>
                <div className="relative mb-6">
                  <div className="absolute -inset-2 rounded-full bg-[#15E0FB] opacity-10 blur-xl group-hover:opacity-20 transition-opacity duration-300"></div>
                  <DoorOpen className="relative w-12 h-12 text-[#15E0FB] transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Open-Door Policy</h3>
                <p className="text-gray-700 leading-relaxed">
                  Creating accessible, transparent environments where collaboration and
                  innovation thrive through open communication.
                </p>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <Card>
                <div className="relative mb-6">
                  <div className="absolute -inset-2 rounded-full bg-[#15E0FB] opacity-10 blur-xl group-hover:opacity-20 transition-opacity duration-300"></div>
                  <Target className="relative w-12 h-12 text-[#15E0FB] transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Meaningful Impact</h3>
                <p className="text-gray-700 leading-relaxed">
                  Driving lasting change through strategic vision, entrepreneurial excellence,
                  and a commitment to sustainable growth.
                </p>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(#15E0FB_1px,transparent_1px)] [background-size:24px_24px]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto z-10">
          <AnimatedSection>
            <h2 className="text-5xl font-bold mb-16 text-center">Achievements Preview</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection delay={0}>
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold mb-4">Ruhil Holdings</h3>
                <p className="text-gray-700 leading-relaxed">
                  Founder and visionary behind Ruhil Holdings, driving strategic investments
                  in technology, real estate, and organic farming with a commitment to
                  zero-debt sustainable growth.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold mb-4">Global Leadership</h3>
                <p className="text-gray-700 leading-relaxed">
                  Head of Technology at LexisNexis, leading transformative initiatives
                  across global operations and mentoring 90+ startups to success.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(#15E0FB_1px,transparent_1px)] [background-size:24px_24px]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto z-10">
          <AnimatedSection>
            <h2 className="text-5xl font-bold mb-16 text-center">Focus Areas</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-12">
            <AnimatedSection delay={0}>
              <div className="text-center group">
                <div className="relative mb-6 inline-block">
                  <div className="absolute -inset-3 bg-[#15E0FB] rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300 transform group-hover:scale-110"></div>
                  <Laptop className="relative w-16 h-16 text-gray-800 transition-colors duration-300 group-hover:text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Technology</h3>
                <p className="text-gray-700">
                  Leading innovation in enterprise technology and digital transformation
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="text-center group">
                <div className="relative mb-6 inline-block">
                  <div className="absolute -inset-3 bg-[#15E0FB] rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300 transform group-hover:scale-110"></div>
                  <Building2 className="relative w-16 h-16 text-gray-800 transition-colors duration-300 group-hover:text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Real Estate</h3>
                <p className="text-gray-700">
                  Developing sustainable properties through Halo Homes and Land 2 Lavish
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <div className="text-center group">
                <div className="relative mb-6 inline-block">
                  <div className="absolute -inset-3 bg-[#15E0FB] rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300 transform group-hover:scale-110"></div>
                  <Sprout className="relative w-16 h-16 text-gray-800 transition-colors duration-300 group-hover:text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Organic Farming</h3>
                <p className="text-gray-700">
                  Pioneering sustainable agriculture practices for a healthier future
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        </div>
        <div className="relative max-w-4xl mx-auto z-10">
          <AnimatedSection>
            <h2 className="text-5xl font-bold mb-4 text-center">Connect With Me</h2>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-center text-gray-700 mb-12">
              Let's discuss how we can collaborate to create meaningful impact
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <AnimatedSection delay={300}>
              <Card>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <a
                  href="mailto:anshul.ruhil@ruhilholdings.com"
                  className="text-[#15E0FB] hover:underline"
                >
                  anshul.ruhil@ruhilholdings.com
                </a>
              </Card>
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <Card>
                <h3 className="text-xl font-bold mb-2">Location</h3>
                <p className="text-gray-700">Mississauga, Canada</p>
              </Card>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={500}>
            <Card>
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <ContactForm />
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}