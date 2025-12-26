"use client";

import { useEffect, useState } from "react";

export default function FloatingTerminal() {
  const sequences = [
    // ATLA BANNER - Shows first on page load
    {
      command: "atla --banner",
      output: [
        "",
        "     █████╗ ████████╗██╗      █████╗ ",
        "    ██╔══██╗╚══██╔══╝██║     ██╔══██╗",
        "    ███████║   ██║   ██║     ███████║",
        "    ██╔══██║   ██║   ██║     ██╔══██║",
        "    ██║  ██║   ██║   ███████╗██║  ██║",
        "    ╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═╝",
        "",
        "    Digital Solutions & IT Education",
        "    Status: All systems operational",
        "    Version: 2.0.1",
        "",
      ],
    },
    
    // SHORT COMMANDS
    {
      command: "git status",
      output: [
        "On branch main",
        "Your branch is up to date with 'origin/main'.",
        "",
        "nothing to commit, working tree clean",
      ],
    },
    {
      command: "curl -I https://api.atla.com/health",
      output: [
        "HTTP/2 200",
        "server: atla-gateway",
        "x-latency: 12ms",
        "content-type: application/json",
      ],
    },

    // MEDIUM COMMANDS
    {
      command: "docker ps --format 'table {{.Names}}\\\\t{{.Status}}'",
      output: [
        "NAMES               STATUS",
        "atla-core           Up 19 minutes",
        "atla-ai             Up 19 minutes",
        "atla-automation     Up 19 minutes",
      ],
    },
    {
      command: "kubectl get pods -n atla",
      output: [
        "NAME                           READY   STATUS    RESTARTS   AGE",
        "core-deployment-5f9c4c87f8     1/1     Running   0          4h",
        "ai-engine-6bcd9f7d9f           1/1     Running   0          4h",
        "automation-worker-848cc4c59    3/3     Running   0          4h",
      ],
    },
    {
      command: "python3 scripts/sync_users.py --apply",
      output: [
        "[INFO] Loading user records...",
        "[INFO] Comparing local and remote entries...",
        "Updated:     12",
        "Removed:      3",
        "Unchanged: 1420",
        "[OK] Sync complete.",
      ],
    },

    // LONG COMMANDS
    {
      command: "atla-ai eval --model transformer-v4 --benchmark full",
      output: [
        "Loading model: transformer-v4...",
        "Running full benchmark suite...",
        "",
        "EVALUATION METRICS:",
        "   Accuracy:         97.23%",
        "   F1 Score:         0.958",
        "   Precision:        0.961",
        "   Recall:           0.955",
        "",
        "LATENCY:",
        "   p50:              7.3ms",
        "   p90:              10.1ms",
        "   p99:              13.9ms",
        "",
        "THROUGHPUT:",
        "   2,910 req/s",
        "",
        "GPU UTILIZATION:",
        "   72% (RTX 4090)",
        "",
        "Status: Benchmark complete.",
      ],
    },
    {
      command: 'journalctl -u atla-core --since "30 min ago"',
      output: [
        "Jan 17 10:41:14 atla-core[2871]: Worker heartbeat OK",
        "Jan 17 10:42:03 atla-core[2871]: Queue size: 5",
        "Jan 17 10:42:44 atla-core[2871]: Pipeline #444 started",
        "Jan 17 10:43:12 atla-core[2871]: Pipeline #444 finished successfully",
        "Jan 17 10:45:01 atla-core[2871]: Worker heartbeat OK",
        "Jan 17 10:45:33 atla-core[2871]: Cache warmup complete (1.3s)",
        "Jan 17 10:46:14 atla-core[2871]: Optimizing memory usage...",
        "Jan 17 10:46:16 atla-core[2871]: Memory usage reduced by 9%",
        "Jan 17 10:47:21 atla-core[2871]: No errors detected",
      ],
    },
  ];

  const [typed, setTyped] = useState("");
  const [output, setOutput] = useState<string[]>([]);
  const [phase, setPhase] = useState("typing");
  const [current, setCurrent] = useState(sequences[0]); // Always start with ATLA banner

  function getRandomSequence() {
    let newSequence;
    do {
      newSequence = sequences[Math.floor(Math.random() * sequences.length)];
    } while (newSequence.command === current.command && sequences.length > 1);
    return newSequence;
  }

  /** Typing with realistic typo + backspace */
  useEffect(() => {
    if (phase !== "typing") return;

    const command = current.command;
    let i = 0;
    let typoIndex =
      Math.random() < 0.45
        ? Math.floor(Math.random() * (command.length - 2))
        : -1;
    let madeTypo = false;

    const typeChar = () => {
      if (i === typoIndex && !madeTypo) {
        setTyped((prev) => prev + randomChar());
        madeTypo = true;

        return setTimeout(() => {
          setTyped((prev) => prev.slice(0, -1));
          setTimeout(() => {
            i++;
            typeChar();
          }, 220);
        }, 300);
      }

      setTyped(command.slice(0, i));
      i++;

      if (i <= command.length) {
        return setTimeout(typeChar, 55);
      }

      setTimeout(() => setPhase("running"), 300);
    };

    typeChar();
  }, [phase, current]);

  function randomChar() {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    return chars[Math.floor(Math.random() * chars.length)];
  }

  /** Output printing */
  useEffect(() => {
    if (phase !== "running") return;

    let i = 0;
    const lines = current.output;

    const interval = setInterval(() => {
      setOutput((prev) => [...prev, lines[i]]);
      i++;

      if (i >= lines.length) {
        clearInterval(interval);
        return setTimeout(() => setPhase("reset"), 1400);
      }
    }, 130);
  }, [phase, current]);

  /** Reset + random next command */
  useEffect(() => {
    if (phase !== "reset") return;

    setTimeout(() => {
      setTyped("");
      setOutput([]);
      setCurrent(getRandomSequence());
      setPhase("typing");
    }, 600);
  }, [phase]);

  return (
    <div
      className="
        w-full h-[470px]
        rounded-xl overflow-hidden
        bg-[#1a1a1a] border border-blue-500/30
        shadow-[0_0_80px_rgba(59,130,246,0.2)]
      "
    >
      <div className="flex items-center gap-2 px-4 py-2 bg-[#242424] border-b border-blue-500/20">
        <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-400/70"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
      </div>

      <div className="bg-[#1a1a1a] text-white font-mono text-[15px] p-4 leading-[1.4] overflow-hidden">
        {/* Command */}
        <div className="mb-2">
          <span>atla@system:~$ </span>
          <span>{typed}</span>
          <span className="inline-block w-2 h-5 bg-white animate-cursor ml-1"></span>
        </div>

        {/* Output */}
        <div>
          {output.map((line, i) => (
            <div key={i} className="whitespace-pre">
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
