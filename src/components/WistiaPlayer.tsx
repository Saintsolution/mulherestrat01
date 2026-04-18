import { useEffect } from "react";
import { Play } from "lucide-react";

interface WistiaPlayerProps {
  /** Wistia media ID, e.g. "abcd1234". When empty, an elegant placeholder is shown. */
  mediaId?: string;
  /** Aspect ratio: "4:3" (VSL) or "9:16" (vertical lifestyle). */
  aspect?: "4:3" | "9:16" | "16:9";
  className?: string;
  caption?: string;
}

declare global {
  interface Window {
    _wq?: unknown[];
  }
}

const aspectClass = {
  "4:3": "aspect-[4/3]",
  "9:16": "aspect-[9/16]",
  "16:9": "aspect-video",
} as const;

/**
 * Wistia player wrapper. Drop in a `mediaId` to activate; otherwise an editorial placeholder renders.
 * Loads Wistia scripts on demand only when an ID is provided.
 */
export const WistiaPlayer = ({ mediaId, aspect = "4:3", className = "", caption }: WistiaPlayerProps) => {
  useEffect(() => {
    if (!mediaId) return;
    const ensure = (src: string, id: string) => {
      if (document.getElementById(id)) return;
      const s = document.createElement("script");
      s.src = src;
      s.async = true;
      s.id = id;
      document.body.appendChild(s);
    };
    ensure("https://fast.wistia.com/assets/external/E-v1.js", "wistia-e-v1");
    ensure(`https://fast.wistia.com/embed/medias/${mediaId}.jsonp`, `wistia-media-${mediaId}`);
  }, [mediaId]);

  return (
    <figure className={`relative ${className}`}>
      <div
        className={`relative w-full ${aspectClass[aspect]} overflow-hidden rounded-md bg-ink/5 shadow-editorial`}
      >
        {/* hairline frame */}
        <div className="pointer-events-none absolute inset-0 z-20 rounded-md ring-1 ring-inset ring-gold/20" />

        {mediaId ? (
          <div
            className={`wistia_embed wistia_async_${mediaId} videoFoam=true playerColor=B8860B absolute inset-0 h-full w-full`}
          >
            &nbsp;
          </div>
        ) : (
          <PlaceholderPoster aspect={aspect} />
        )}
      </div>

      {caption && (
        <figcaption className="mt-4 text-center label-meta">{caption}</figcaption>
      )}
    </figure>
  );
};

const PlaceholderPoster = ({ aspect }: { aspect: "4:3" | "9:16" | "16:9" }) => (
  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-ink/90 via-ink to-ink/95">
    {/* subtle texture */}
    <div
      className="absolute inset-0 opacity-[0.06]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 30%, hsl(var(--gold)) 0, transparent 40%), radial-gradient(circle at 80% 70%, hsl(var(--gold)) 0, transparent 45%)",
      }}
    />
    <div className="relative z-10 flex flex-col items-center gap-5 text-paper">
      <button
        type="button"
        aria-label="Reproduzir vídeo"
        className="group flex h-20 w-20 items-center justify-center rounded-full border border-gold/50 bg-paper/5 backdrop-blur-md transition-all duration-500 hover:border-gold hover:bg-gold hover:text-ink"
      >
        <Play className="h-7 w-7 translate-x-0.5 transition-transform group-hover:scale-110" strokeWidth={1.5} />
      </button>
      <div className="text-center">
        <div className="font-serif text-lg italic text-paper/90">
          {aspect === "9:16" ? "Lifestyle" : "Vídeo de Vendas"}
        </div>
        <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-paper/50">
          Conecte o ID Wistia
        </div>
      </div>
    </div>
  </div>
);

export default WistiaPlayer;
