import React, { useState, useEffect } from 'react';
import { VideoParallax } from './components/VideoParallax';
import { ChuggingText } from './components/ChuggingText';
import { CtaButton } from './components/CtaButton';
import { RouteMap } from './components/RouteMap';
import { Countdown } from './components/Countdown';
import { TrainTicket } from './components/TrainTicket';
import { UserAvatars } from './components/UserAvatars';
import { IntroSequence } from './components/IntroSequence';
import { ParadoxInfo } from './components/ParadoxInfo';
import { ParticlesBackground } from './components/ParticlesBackground';
import { motion, AnimatePresence } from 'framer-motion';
import { Info } from 'lucide-react';

const VIDEO_URL = "https://your-video-url.mp4";
const PARADOX_URL = "https://paradox.iitm.ac.in";
const REGISTRATION_URL = "https://your-registration-form-url";

function App() {
  const [showContent, setShowContent] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <IntroSequence />
      <AnimatePresence>
        {showContent && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative min-h-screen bg-midnight text-white overflow-hidden"
          >
            <VideoParallax videoUrl={VIDEO_URL} />
            <ParticlesBackground />
            
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 py-12 overflow-y-auto">
              <ChuggingText />
              
              <div className="mt-8 w-full max-w-6xl mx-auto">
                <ParadoxInfo />
              </div>
              
              <Countdown />
              
              <div className="w-full max-w-6xl mx-auto mt-12">
                <RouteMap />
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center justify-center w-full max-w-6xl mx-auto px-4 mt-12">
                <TrainTicket />
                <div className="flex flex-col items-center">
                  <UserAvatars />
                  <div className="mt-16 space-y-4">
                    <CtaButton formUrl={REGISTRATION_URL} />
                    <motion.a
                      href={PARADOX_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center text-cyan underline font-space hover:text-white transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      Visit Paradox Website
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Floating Info Button with Pulse Effect */}
              <motion.div
                className="fixed bottom-4 right-4 animate-pulse"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2 }}
              >
                <motion.button
                  onClick={() => setShowTerms(true)}
                  className="bg-midnight/90 p-3 rounded-full hover:bg-cyan/20 transition-colors relative group"
                  whileHover={{ scale: 1.1 }}
                >
                  <Info className="w-6 h-6 text-cyan" />
                  <span className="absolute -top-8 right-0 bg-midnight/90 text-cyan text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Journey Details
                  </span>
                </motion.button>
              </motion.div>

              {/* Terms Modal */}
              <AnimatePresence>
                {showTerms && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                    onClick={() => setShowTerms(false)}
                  >
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      className="bg-midnight/90 backdrop-blur-sm p-8 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                      onClick={e => e.stopPropagation()}
                    >
                      <h2 className="text-2xl font-orbitron text-cyan mb-6">Journey Information</h2>
                      <div className="space-y-6 font-space text-white/80">
                        <section>
                          <h3 className="text-xl text-white mb-3">About This Journey</h3>
                          <p>Join fellow tech enthusiasts on an exciting train journey from Bhubaneswar to IIT Madras for Paradox 2024!</p>
                        </section>

                        <section>
                          <h3 className="text-xl text-white mb-3">What's Included</h3>
                          <ul className="list-disc pl-6 space-y-2">
                            <li>20-hour journey with tech discussions</li>
                            <li>Network with fellow participants</li>
                            <li>Group activities during stops</li>
                            <li>Travel companion support</li>
                          </ul>
                        </section>

                        <section>
                          <h3 className="text-xl text-white mb-3">Important Notes</h3>
                          <ul className="list-disc pl-6 space-y-2">
                            <li>This is a student-led initiative, not officially organized by IIT Madras</li>
                            <li>Each participant is responsible for their own safety and belongings</li>
                            <li>Train tickets must be booked individually</li>
                            <li>The organizers are not liable for any delays or changes in travel plans</li>
                            <li>Participants must follow all railway and safety guidelines</li>
                            <li>Registration for Paradox 2024 is separate from this journey</li>
                          </ul>
                        </section>

                        <section>
                          <h3 className="text-xl text-white mb-3">Preparation Tips</h3>
                          <ul className="list-disc pl-6 space-y-2">
                            <li>Book your train tickets early</li>
                            <li>Join the WhatsApp group for updates</li>
                            <li>Pack light and bring essentials</li>
                            <li>Keep your laptop and devices charged</li>
                          </ul>
                        </section>

                        <p className="text-cyan mt-6">For any queries, contact the student coordinators through the registration form.</p>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;