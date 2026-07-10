import { useEffect, useCallback } from "react";

type ImageLightboxProps = {
  images: string[];
  title: string;
  scroll?: boolean;
  initialIndex?: number;
  onClose: () => void;
};

export function ImageLightbox({
  images,
  title,
  scroll = false,
  initialIndex = 0,
  onClose,
}: ImageLightboxProps) {
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
      aria-label={`${title} — full screen view`}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-6 right-6 z-10 font-mono text-[10px] uppercase tracking-widest text-white/70 hover:text-white transition-colors border border-white/20 px-4 py-2"
        aria-label="Close"
      >
        Close ✕
      </button>

      <p className="absolute top-6 left-6 z-10 font-mono text-[10px] uppercase tracking-widest text-white/50">
        {title}
        {scroll && images.length > 1 && (
          <span className="ml-3 text-white/30">← scroll →</span>
        )}
      </p>

      {scroll && images.length > 1 ? (
        <div
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-8 py-16 max-w-full max-h-full scrollbar-thin"
          onClick={(e) => e.stopPropagation()}
        >
          {images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`${title} ${i + 1}`}
              className="snap-center shrink-0 max-h-[85vh] max-w-[min(90vw,720px)] object-contain"
              style={{ scrollSnapAlign: "center" }}
            />
          ))}
        </div>
      ) : (
        <img
          src={images[initialIndex] ?? images[0]}
          alt={title}
          className="max-w-[95vw] max-h-[90vh] object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      )}
    </div>
  );
}
