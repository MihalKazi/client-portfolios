"use client"
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Terminal() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([
    "MA-OS [Version 1.0.2]",
    "Secure terminal connection established.",
    "Type 'help' to see available commands."
  ]);
  const inputRef = useRef(null);
  const containerRef = useRef(null); // Changed to target the scrollable container

  // Only scroll the terminal window, not the whole website
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [output]);

  // Makes the entire box clickable to type
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevents the Enter key from causing any page jumps
      
      const rawCmd = input.trim();
      const cmd = rawCmd.toLowerCase();
      let response = [];

      // Handle 'echo' command which has variable text
      if (cmd.startsWith('echo ')) {
        const textToEcho = rawCmd.substring(5);
        response = [`> ${textToEcho}`];
      } 
      else {
        // Handle exact commands
        switch(cmd) {
          case 'help':
            response = [
              "> Available commands:",
              "  whoami    - Display researcher identity",
              "  projects  - List active case files",
              "  location  - Display current geospatial vector",
              "  contact   - Show secure comms channel",
              "  date      - Display system time",
              "  echo      - Print text (e.g., 'echo hello')",
              "  clear     - Clear terminal output",
              "  sudo      - Attempt system override"
            ];
            break;
          case 'whoami':
            response = ["> Minhaj Aman: Digital Rights & Information Integrity Researcher."];
            break;
          case 'projects':
            response = [
              "> ACTIVE FILES DETECTED:",
              "  [FILE-892] Disinformation Tracking Initiative",
              "  [FILE-404] Digital Authoritarianism Report",
              "  [FILE-771] Platform Accountability Framework",
              "> Scroll up to 'Investigations' section for full access."
            ];
            break;
          case 'location':
            response = [
              "> CURRENT GEOSPATIAL VECTOR:",
              "  Location: Ashulia, Dhaka Division, Bangladesh",
              "  Status: Active Monitoring"
            ];
            break;
          case 'date':
            response = [`> System Time: ${new Date().toLocaleString()}`];
            break;
          case 'contact':
            response = [
              "> SECURE CHANNELS:",
              "  Email: contact@minhajaman.com",
              "  Twitter: @minhajaman"
            ];
            break;
          case 'clear':
            setOutput([]);
            setInput('');
            return;
          case 'sudo':
            response = [
              "> ERROR: ROOT ACCESS DENIED.",
              "> This incident has been logged and reported to the system administrator."
            ];
            break;
          case 'hack':
          case 'bypass':
            response = [
              "> INITIATING MAINFRAME BYPASS...",
              "> WARNING: FIREWALL BREACH DETECTED.",
              "> DEPLOYING COUNTERMEASURES...",
              "> Nice try. Access completely denied."
            ];
            break;
          case '':
            response = [];
            break;
          default:
            response = [`> Command not found: ${cmd}. Type 'help' for a list of commands.`];
        }
      }

      // Add the executed command and the response to the output log
      if (cmd !== 'clear') {
        setOutput([...output, `guest@ma-01:~$ ${rawCmd}`, ...response]);
      }
      setInput('');
    }
  };

  return (
    <section className="py-20 border-b-2 border-ink relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onClick={focusInput} 
        className="bg-ink p-6 font-mono text-sm md:text-base border-4 border-ink shadow-[8px_8px_0px_0px_rgba(230,57,70,1)] max-w-4xl mx-auto cursor-text"
      >
        {/* Terminal Header */}
        <div className="flex gap-2 mb-4 pb-4 border-b border-paper/20 select-none">
          <div className="w-3 h-3 rounded-full bg-alert"></div>
          <div className="w-3 h-3 rounded-full bg-zinc hover:bg-zinc/80 cursor-pointer"></div>
          <div className="w-3 h-3 rounded-full bg-paper hover:bg-paper/80 cursor-pointer"></div>
          <span className="ml-4 text-xs uppercase tracking-widest text-paper/50">Terminal Access [Encrypted]</span>
        </div>

        {/* Output Area - Now has a ref to control its own scrolling */}
        <div 
          ref={containerRef}
          className="text-paper h-64 overflow-y-auto mb-4 space-y-1 custom-scrollbar scroll-smooth"
        >
          {output.map((line, i) => {
            const isError = line.includes("ERROR") || line.includes("WARNING") || line.includes("DENIED");
            const isOutput = line.startsWith('>');
            const isPrompt = line.startsWith('guest@ma-01:~$');
            
            return (
              <div key={i} className={`
                ${isError ? 'text-alert' : ''} 
                ${isOutput && !isError ? 'text-zinc' : ''}
              `}>
                {isPrompt ? (
                  <>
                    <span className="text-alert mr-2">guest@ma-01:~$</span>
                    <span className="text-paper">{line.replace('guest@ma-01:~$ ', '')}</span>
                  </>
                ) : (
                  line
                )}
              </div>
            );
          })}
        </div>

        {/* Input Area */}
        <div className="flex items-center mt-2">
          <span className="text-alert mr-2">guest@ma-01:~$</span>
          <input 
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            className="flex-1 bg-transparent border-none outline-none text-paper font-mono shadow-none focus:ring-0 p-0 m-0"
            autoComplete="off"
            spellCheck="false"
          />
        </div>
      </motion.div>
    </section>
  );
}