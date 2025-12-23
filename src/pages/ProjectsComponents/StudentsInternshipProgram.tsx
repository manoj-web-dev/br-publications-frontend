import React from 'react';
import './StudentsInternshipProgram.css';

const StudentsInternshipProgram: React.FC = () => {
  const toggleFaq = (e: React.MouseEvent<HTMLDivElement>) => {
    const parent = e.currentTarget.parentElement;
    if (parent) {
      parent.classList.toggle('active');
    }
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Thank you for applying! We will contact you within 24 hours with further details about the internship program.');
    e.currentTarget.reset();
  };

  return (
    <section className="main-content" id="main-content">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>BR Publication Internship Program</h1>
          <p>30-Hour Hands-On Internship for B.Tech, B.Sc & BCA Students - Master ONE Domain, Build Real Projects
          </p>
          <a href="#contact" className="cta-button" onClick={(e) => scrollToSection(e, '#contact')}>Apply Now</a>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">About the Internship</h2>
          <p className="section-subtitle">The BR Publication Internship Program is a 30-hour hands-on internship
            designed
            for B. Tech, B. Sc, and BCA students. The program covers the fundamentals of multiple cutting-edge
            technologies, but each student will specialize in ONE domain of their choice for deeper learning and
            the
            capstone project.</p>

          <div className="highlight-box">
            <h3>Personalized Learning Approach</h3>
            <p>This ensures personalized learning, industry readiness, and project excellence. Students gain
              expertise in their chosen domain while understanding the broader technology landscape.</p>
          </div>
        </div>
      </section>

      {/* Domains Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Domains Students Can Choose From</h2>
          <p className="section-subtitle">Each student selects one of the following domains for specialized training
            and
            the final capstone project</p>

          <div className="domains-grid">
            <div className="domain-card">
              <span className="domain-number">1</span>
              <h4>Deep Learning</h4>
              <p>Master neural networks, model training, and deep learning frameworks for advanced AI
                applications.</p>
            </div>

            <div className="domain-card">
              <span className="domain-number">2</span>
              <h4>Computer Vision (CV)</h4>
              <p>Learn image processing, object detection, and visual recognition systems using modern CV
                techniques.</p>
            </div>

            <div className="domain-card">
              <span className="domain-number">3</span>
              <h4>Natural Language Processing (NLP)</h4>
              <p>Explore text analysis, sentiment analysis, and language models for intelligent text
                processing.
              </p>
            </div>

            <div className="domain-card">
              <span className="domain-number">4</span>
              <h4>Generative AI & LLMs</h4>
              <p>Work with cutting-edge generative models and large language models for content creation.</p>
            </div>

            <div className="domain-card">
              <span className="domain-number">5</span>
              <h4>Data Engineering</h4>
              <p>Build data pipelines, process big data, and create robust data infrastructure solutions.</p>
            </div>

            <div className="domain-card">
              <span className="domain-number">6</span>
              <h4>Web Development (Full Stack)</h4>
              <p>Create modern web applications with front-end and back-end technologies and frameworks.</p>
            </div>

            <div className="domain-card">
              <span className="domain-number">7</span>
              <h4>Internet of Things (IoT)</h4>
              <p>Develop smart connected devices and IoT solutions with sensor integration and automation.</p>
            </div>

            <div className="domain-card">
              <span className="domain-number">8</span>
              <h4>Responsible AI</h4>
              <p>Understand ethical AI development, bias mitigation, and responsible AI deployment practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Program Highlights</h2>

          <div className="overview-grid">
            <div className="overview-card">
              <h3>Specialized Training</h3>
              <ul>
                <li>Choose one domain to master</li>
                <li>30 hours of structured training</li>
                <li>Hands-on labs with real datasets</li>
                <li>100% practical capstone project</li>
              </ul>
            </div>

            <div className="overview-card">
              <h3>Expert Mentorship</h3>
              <ul>
                <li>Guidance from experienced faculty</li>
                <li>Industry expert mentorship</li>
                <li>Regular doubt clearing sessions</li>
                <li>One-on-one project support</li>
              </ul>
            </div>

            <div className="overview-card">
              <h3>Career Support</h3>
              <ul>
                <li>Internship certificate</li>
                <li>Resume building support</li>
                <li>LinkedIn portfolio guidance</li>
                <li>Affordable fee: ₹5000 only</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Benefits to Students</h2>
          <p className="section-subtitle">What you gain from this internship program</p>

          <div className="benefits-grid">
            <div className="benefit-card">
              <h4>Professional Growth</h4>
              <ul>
                <li>One specialized domain for strong profile</li>
                <li>Industry-recognized internship certificate</li>
                <li>Portfolio-ready capstone project</li>
              </ul>
            </div>

            <div className="benefit-card">
              <h4>Technical Skills</h4>
              <ul>
                <li>Hands-on practical experience</li>
                <li>Real-world project development</li>
                <li>GitHub code repository</li>
              </ul>
            </div>

            <div className="benefit-card">
              <h4>Career Advancement</h4>
              <ul>
                <li>Helps in placements</li>
                <li>Future internship opportunities</li>
                <li>Complete project report</li>
              </ul>
            </div>

            <div className="benefit-card">
              <h4>Continuous Support</h4>
              <ul>
                <li>Mentoring throughout the program</li>
                <li>Regular doubt clearing sessions</li>
                <li>Resume and LinkedIn profile support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Program Fee</h2>
          <p className="section-subtitle">Student-friendly pricing with maximum value</p>

          <div className="pricing-box">
            <h3 style={{ color: '#1e5292', marginBottom: '20px' }}>Complete Internship Package</h3>
            <div className="price">₹5,000</div>
            <p className="price-note">One-time payment for the entire 30-hour program</p>

            <div style={{ marginTop: '30px', textAlign: 'left' }}>
              <h4 style={{ color: '#1e5292', marginBottom: '15px', fontSize: '17px', paddingBottom: '10px', borderBottom: '2px solid #ffa726' }}>What's Included:</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '8px 0', paddingLeft: '25px', position: 'relative', fontSize: '14px', borderBottom: '1px solid #f0f0f0' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#ffa726', fontWeight: 'bold' }}>✓</span>
                  30 hours of specialized training
                </li>
                <li style={{ padding: '8px 0', paddingLeft: '25px', position: 'relative', fontSize: '14px', borderBottom: '1px solid #f0f0f0' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#ffa726', fontWeight: 'bold' }}>✓</span>
                  Complete capstone project
                </li>
                <li style={{ padding: '8px 0', paddingLeft: '25px', position: 'relative', fontSize: '14px', borderBottom: '1px solid #f0f0f0' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#ffa726', fontWeight: 'bold' }}>✓</span>
                  Internship certificate
                </li>
                <li style={{ padding: '8px 0', paddingLeft: '25px', position: 'relative', fontSize: '14px', borderBottom: '1px solid #f0f0f0' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#ffa726', fontWeight: 'bold' }}>✓</span>
                  Mentorship and support
                </li>
                <li style={{ padding: '8px 0', paddingLeft: '25px', position: 'relative', fontSize: '14px' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#ffa726', fontWeight: 'bold' }}>✓</span>
                  Resume and portfolio guidance
                </li>
              </ul>
            </div>

            <a href="#contact" className="cta-button" style={{ marginTop: '30px' }} onClick={(e) => scrollToSection(e, '#contact')}>Enroll Now</a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>

          <div className="faq-container">
            <div className="faq-item">
              <div className="faq-question" onClick={toggleFaq}>
                Who can apply for this internship program?
                <span className="faq-icon">▼</span>
              </div>
              <div className="faq-answer">
                This internship is designed for B.Tech, B.Sc, and BCA students who want to gain practical
                experience in cutting-edge technologies. Students from all years can apply, though the
                program
                is particularly beneficial for those looking to strengthen their technical skills and build
                a
                project portfolio.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question" onClick={toggleFaq}>
                How do I choose which domain to specialize in?
                <span className="faq-icon">▼</span>
              </div>
              <div className="faq-answer">
                You can choose based on your career interests, academic background, or future goals. During
                the
                initial program orientation, we provide an overview of all domains to help you make an
                informed
                decision. Our mentors are also available to guide you in selecting the domain that best
                aligns
                with your aspirations.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question" onClick={toggleFaq}>
                What is the duration and schedule of the internship?
                <span className="faq-icon">▼</span>
              </div>
              <div className="faq-answer">
                The internship comprises 30 hours of training, typically spread over 4-6 weeks. Sessions are
                conducted on weekends or evenings to accommodate students' academic schedules. The exact
                schedule will be shared upon enrollment, and we offer flexibility to ensure minimal conflict
                with your college classes.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question" onClick={toggleFaq}>
                Will I receive a certificate upon completion?
                <span className="faq-icon">▼</span>
              </div>
              <div className="faq-answer">
                Yes! Upon successful completion of the internship and submission of your capstone project,
                you
                will receive an internship certificate from BR Publication. This certificate validates your
                participation, skills acquired, and project completion, which can be added to your resume
                and
                LinkedIn profile.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question" onClick={toggleFaq}>
                What kind of capstone project will I work on?
                <span className="faq-icon">▼</span>
              </div>
              <div className="faq-answer">
                Your capstone project will be a practical, real-world application in your chosen domain. For
                example, if you choose Computer Vision, you might build an object detection system; for NLP,
                a
                sentiment analysis tool. Projects are designed to showcase your skills and can be added to
                your
                portfolio. You'll receive guidance throughout the project development process.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question" onClick={toggleFaq}>
                Do I need prior programming experience?
                <span className="faq-icon">▼</span>
              </div>
              <div className="faq-answer">
                Basic programming knowledge is recommended but not mandatory. We start with fundamentals and
                gradually progress to advanced concepts. If you're completely new to programming, we suggest
                familiarizing yourself with basic Python or any programming language before the program
                begins.
                Our mentors will support you throughout the learning journey.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question" onClick={toggleFaq}>
                Is the internship conducted online or offline?
                <span className="faq-icon">▼</span>
              </div>
              <div className="faq-answer">
                The internship is conducted online, allowing students from anywhere to participate. All
                sessions
                are live and interactive with hands-on labs. Recordings are provided for revision, and
                you'll
                have access to all learning materials throughout and after the program completion.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question" onClick={toggleFaq}>
                What support do I get for resume and LinkedIn profile?
                <span className="faq-icon">▼</span>
              </div>
              <div className="faq-answer">
                We provide guidance on how to showcase your internship experience and project on your resume
                and
                LinkedIn profile. This includes tips on writing impactful project descriptions, highlighting
                technical skills, and presenting your work professionally to attract recruiters and
                potential
                employers.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question" onClick={toggleFaq}>
                Can I interact with mentors and ask questions?
                <span className="faq-icon">▼</span>
              </div>
              <div className="faq-answer">
                Absolutely! We encourage active participation and questions. You'll have access to mentors
                during live sessions, dedicated doubt-clearing sessions, and through our communication
                platform.
                Personalized guidance is provided to ensure you understand concepts thoroughly and complete
                your
                project successfully.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question" onClick={toggleFaq}>
                What payment options are available?
                <span className="faq-icon">▼</span>
              </div>
              <div className="faq-answer">
                The program fee is ₹5,000 for the complete 30-hour internship. We accept payment through
                bank
                transfer, UPI, and online payment gateways. Payment details and options will be shared
                during
                the enrollment process. The fee covers all training materials, project guidance, and
                certification.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="container">
          <h2 style={{ fontSize: '25px', marginBottom: '20px' }}>Ready to Start Your Internship Journey?</h2>
          <p style={{ fontSize: '17px', marginBottom: '30px' }}>Apply now and take the first step towards industry
            readiness</p>

          <div className="contact-form">
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input type="text" id="name" name="name" required placeholder="e.g. John Doe" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input type="email" id="email" name="email" required placeholder="e.g. john@example.com" />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input type="tel" id="phone" name="phone" required placeholder="e.g. +1 (555) 000-0000" />
              </div>

              <div className="form-group">
                <label htmlFor="college">College/University Name *</label>
                <input type="text" id="college" name="college" required placeholder="e.g. University of Technology" />
              </div>

              <div className="form-group">
                <label htmlFor="course">Course (B.Tech/B.Sc/BCA) *</label>
                <input type="text" id="course" name="course" required placeholder="e.g. B.Tech Computer Science" />
              </div>

              <div className="form-group">
                <label htmlFor="year">Current Year of Study *</label>
                <select id="year" name="year" required>
                  <option value="">Select Year</option>
                  <option value="1st-year">1st Year</option>
                  <option value="2nd-year">2nd Year</option>
                  <option value="3rd-year">3rd Year</option>
                  <option value="4th-year">4th Year / Final Year</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="domain">Preferred Domain *</label>
                <select id="domain" name="domain" required>
                  <option value="">Select Domain</option>
                  <option value="deep-learning">Deep Learning</option>
                  <option value="computer-vision">Computer Vision (CV)</option>
                  <option value="nlp">Natural Language Processing (NLP)</option>
                  <option value="gen-ai">Generative AI & LLMs</option>
                  <option value="data-engineering">Data Engineering</option>
                  <option value="web-dev">Web Development (Full Stack)</option>
                  <option value="iot">Internet of Things (IoT)</option>
                  <option value="responsible-ai">Responsible AI</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Why do you want to join this internship? *</label>
                <textarea id="message" name="message" required
                  placeholder="Tell us about your interests, goals, and what you hope to achieve through this internship..."></textarea>
              </div>

              <button type="submit" className="submit-button">Submit Application</button>
            </form>
          </div>
        </div>
      </section>
    </section>
  );
};

export default StudentsInternshipProgram;