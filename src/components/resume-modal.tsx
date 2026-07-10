import { useEffect, useCallback } from "react";

type ResumeModalProps = {
  englishUrl: string;
  frenchUrl: string;
  onClose: () => void;
};

export function ResumeModal({ englishUrl, frenchUrl, onClose }: ResumeModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm animate-[fade-in_0.2s_ease-out]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Select resume language"
    >
      {/* Grain overlay for modal */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden opacity-[0.04]">
        <div className="absolute inset-[-200%] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] animate-[grain_1s_steps(2)_infinite]" />
      </div>

      <button
        type="button"
        onClick={onClose}
        className="absolute top-6 right-6 z-20 font-mono text-[10px] uppercase tracking-widest text-white/70 hover:text-white transition-colors border border-white/20 px-4 py-2 cursor-pointer"
        aria-label="Close"
      >
        Close ✕
      </button>

      <p className="absolute top-6 left-6 z-20 font-mono text-[10px] uppercase tracking-widest text-white/50">
        Resume Selection / Sélection du CV
      </p>

      <div
        className="relative z-20 max-w-xl w-full mx-6 bg-secondary border border-border p-8 md:p-12 shadow-2xl flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-4 animate-pulse">
          ● Select Language
        </span>
        <h3 className="font-display text-4xl md:text-5xl uppercase tracking-tighter text-center mb-8">
          Download Resume / CV
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          <a
            href={englishUrl}
            target="_blank"
            rel="noreferrer"
            onClick={onClose}
            className="group w-full border border-border hover:border-primary p-6 transition-all duration-300 flex flex-col items-center justify-center bg-background/50 hover:bg-secondary/40 text-center"
          >
            <span className="font-mono text-[10px] tracking-widest text-muted uppercase group-hover:text-primary transition-colors">
              [ EN ]
            </span>
            <h4 className="font-display text-3xl uppercase mt-2 group-hover:text-primary transition-colors">
              English
            </h4>
            <p className="font-mono text-[9px] text-muted opacity-60 mt-1 uppercase tracking-wider">
              English version ↗
            </p>
          </a>

          <a
            href={frenchUrl}
            target="_blank"
            rel="noreferrer"
            onClick={onClose}
            className="group w-full border border-border hover:border-primary p-6 transition-all duration-300 flex flex-col items-center justify-center bg-background/50 hover:bg-secondary/40 text-center"
          >
            <span className="font-mono text-[10px] tracking-widest text-muted uppercase group-hover:text-primary transition-colors">
              [ FR ]
            </span>
            <h4 className="font-display text-3xl uppercase mt-2 group-hover:text-primary transition-colors">
              Français
            </h4>
            <p className="font-mono text-[9px] text-muted opacity-60 mt-1 uppercase tracking-wider">
              Version française ↗
            </p>
          </a>
        </div>

        <p className="font-mono text-[10px] text-muted opacity-50 uppercase mt-8 text-center tracking-widest">
          Algiers — 2026
        </p>
      </div>
    </div>
  );
}
