
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Professional Background</h3>
                <p className="text-gray-600">
                  I am a B.Tech/B.E. graduate from Rajiv Gandhi Institute of Technology, Bangalore.
                  Currently working as a Full Stack Developer at Superzop, where I develop MERN stack
                  applications and create robust Node APIs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Technical Expertise</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-primary mb-2">Languages</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>Python</li>
                      <li>JavaScript</li>
                      <li>Core Java</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-2">Frameworks</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>React</li>
                      <li>Node.js</li>
                      <li>Express</li>
                      <li>Django</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Personal Interests</h3>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Beyond coding, I'm a multi-faceted individual with diverse interests:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Proficient guitarist with stage performance experience</li>
                    <li>Pro Badminton player with state-level tournament achievements</li>
                    <li>Passionate about cooking and exploring new cuisines</li>
                    <li>Dedicated to continuous learning and skill development</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Languages</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>English (Professional)</li>
                  <li>Hindi (Native)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
