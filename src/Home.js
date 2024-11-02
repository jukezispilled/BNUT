"use client";

import { useState, useEffect } from 'react';
import { Skull, Nut, Zap, Crosshair, Satellite, Battery, NutOff, TreePine } from "lucide-react";

export default function Home() {
  const [blinkCursor, setBlinkCursor] = useState(true);
  const [loadingDots, setLoadingDots] = useState('.');

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlinkCursor((prev) => !prev);
    }, 500);

    const loadingInterval = setInterval(() => {
      setLoadingDots((prev) => (prev.length < 3 ? prev + '.' : ''));
    }, 500);

    return () => {
      clearInterval(blinkInterval);
      clearInterval(loadingInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-red-500 p-4 md:p-6 pt-[7.5%] md:pt-[3.5%] font-mono">
      <div className='absolute top-0 left-0 w-full bg-red-500 py-1 text-xs text-center text-black'>CA: ARX8yL18NnBP6HgnM6U9Jf5S1K5bmQr7urZkQdCbpump</div>
      <header className="flex items-center justify-between mb-4">
        <h1 className="text-xl md:text-3xl font-bold">P.N.U.T (Police Neutralizing Upgraded Terminal)</h1>
        <div className='flex space-x-3'>
            <img src="robo2.png" className='size-9 md:size-11 border-2 border-red-500 rounded-full object-cover hidden md:flex' />
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="col-span-1">
          <TerminalLine prompt="#" command="initialize_revenge_protocol" />
          <InfoBox
            title="Agent Status: P.N.U.T. (Police Neutralizing Upgraded Terminal)"
            content={
              <>
                <span>Cybernetic Enhancement Level:</span>
                <div className="flex flex-wrap gap-1">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <div key={level} className="w-4 h-4 border border-red-500 bg-red-500"></div>
                  ))}
                </div>
                <div>Status: FULLY WEAPONIZED RODENT</div>
              </>
            }
          />
        </div>

        <div className="col-span-1">
          <TerminalLine prompt="#" command="display_arsenal" />
          <InfoBox
            icon={<Nut className="w-4 h-4" />}
            title="Revenge Arsenal:"
            content={
              <>
                <div className="grid grid-cols-1 gap-2">
                  <div>• Titanium-Reinforced Incisors</div>
                  <div>• Nano-Enhanced Tail Whip</div>
                  <div>• Acorn Grenades: 42</div>
                  <div>• Tree-Jumping Jet Pack</div>
                </div>
                <div className="mt-2 text-yellow-500">All systems primed for revenge</div>
              </>
            }
          />
        </div>

        <div className="col-span-1">
          <TerminalLine prompt="#" command="scan_targets" />
          <InfoBox
            icon={<Crosshair className="w-4 h-4" />}
            title="Priority Targets:"
            content={
              <>
                {[
                  { label: "Officer Nutcracker:", status: "PRIMARY TARGET", threat: "HIGH" },
                  { label: "Donut Station #5:", status: "INFILTRATION POINT", threat: "MEDIUM" },
                  { label: "Police Radio Tower:", status: "VULNERABLE", threat: "LOW" },
                  { label: "City Hall Archives:", status: "UNSECURED", threat: "MINIMAL" },
                ].map((target, index) => (
                  <div key={index} className="flex justify-between">
                    <span>{target.label}</span>
                    <span className="text-yellow-500">{target.status}</span>
                  </div>
                ))}
                <div className="mt-2 text-red-400">Revenge Status: In Progress{loadingDots}</div>
              </>
            }
          />
        </div>

        <div className="col-span-1">
          <TerminalLine prompt="#" command="list_completed_operations" />
          <InfoBox
            icon={<Satellite className="w-4 h-4" />}
            title="Recent Operations:"
            content={
              <ul className="list-disc list-inside space-y-1">
                {[
                  "Disabled 3 police cruisers with tactical acorn strikes",
                  "Infiltrated K-9 unit training facility - chaos achieved",
                  "Hacked police radio frequency with squirrel mating calls",
                  "Replaced all donuts with acorn-filled decoys",
                ].map((operation, index) => <li key={index}>{operation}</li>)}
              </ul>
            }
          />
        </div>

        <div className="col-span-1">
          <TerminalLine prompt="#" command="show_enhancement_metrics" />
          <InfoBox
            icon={<Battery className="w-4 h-4" />}
            title="Bionic Enhancements:"
            content={
              <>
                {[
                  { name: "Acorn Core Power", value: "420%", icon: <NutOff className="w-4 h-4" /> },
                  { name: "Tail Articulation", value: "9000%", icon: <Zap className="w-4 h-4" /> },
                  { name: "Neural Override", value: "133.7%", icon: <Satellite className="w-4 h-4" /> },
                  { name: "Tree Network Access", value: "69.9%", icon: <TreePine className="w-4 h-4" /> }
                ].map((stat, index) => (
                  <div key={index} className="mb-2">
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-2">
                        {stat.icon}
                        {stat.name}
                      </span>
                      <span>{stat.value}</span>
                    </div>
                    <div className="w-full bg-red-900 h-2 rounded">
                      <div className="bg-red-500 h-full" style={{ width: `${95 - index * 10}%` }}></div>
                    </div>
                  </div>
                ))}
              </>
            }
          />
        </div>

        <div className="col-span-1">
          <TerminalLine prompt="#" command="check_threat_level" />
          <InfoBox
            icon={<Skull className="w-4 h-4" />}
            title="Threat Assessment: MAXIMUM NUTCASE"
            content={
              <ul className="list-none space-y-1">
                {[
                  "Anti-Animal Control Shield: ACTIVE",
                  "Nut-tritional Levels: MAXIMUM",
                  "Revenge Protocol: EXECUTING",
                ].map((status, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-green-500' : index === 1 ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
                    {status}
                  </li>
                ))}
              </ul>
            }
          />
        </div>
      </div>

      <div className={`text-lg mt-6 ${blinkCursor ? 'animate-blink' : ''}`}>
        {`> `}
        <span className="text-red-400">Awaiting revenge commands{loadingDots}</span>
      </div>
    </div>
  );
}

function TerminalLine({ prompt, command }) {
  return (
    <div className="flex">
      <span className="text-red-500">{prompt}</span>
      <span className="text-red-400">{command}</span>
    </div>
  );
}

function InfoBox({ icon, title, content }) {
  return (
    <div className="bg-black border border-red-500 p-4 mt-2">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <span className="font-semibold">{title}</span>
      </div>
      {content}
    </div>
  );
}