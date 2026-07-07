"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

function imageTarget(index: number) {
  return `project-image-${index + 1}`;
}

function imageCaption(src: string, index: number, title: string) {
  if (src.includes("night")) {
    return "Night view with outdoor lighting visible.";
  }

  if (src.includes("day")) {
    return "Day view showing the form, finish, and garden placement.";
  }

  if (src.includes("angle") || src.includes("fence")) {
    return "Alternate angle to understand scale and detailing.";
  }

  if (src.includes("wide")) {
    return "Wider view showing how the feature sits in the landscape.";
  }

  if (src.includes("water") || src.includes("mist")) {
    return "Water and lighting view for the working fountain setup.";
  }

  return index === 0
    ? `Main view of ${title.toLowerCase()}.`
    : "Additional model view with practical installation details.";
}

function clampZoom(value: number) {
  return Math.min(4, Math.max(1, value));
}

function ZoomableImage({
  src,
  alt,
  priority,
}: {
  src: string;
  alt: string;
  priority: boolean;
}) {
  const stageRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ active: false, startX: 0, startY: 0, x: 0, y: 0 });
  const [view, setView] = useState({ scale: 1, x: 0, y: 0 });

  const zoomTo = useCallback((nextScale: number, clientX?: number, clientY?: number) => {
    setView((current) => {
      const scale = clampZoom(nextScale);

      if (!stageRef.current || clientX === undefined || clientY === undefined) {
        return scale === 1 ? { scale, x: 0, y: 0 } : { ...current, scale };
      }

      const rect = stageRef.current.getBoundingClientRect();
      const pointerX = clientX - rect.left - rect.width / 2;
      const pointerY = clientY - rect.top - rect.height / 2;
      const ratio = scale / current.scale;

      if (scale === 1) {
        return { scale, x: 0, y: 0 };
      }

      return {
        scale,
        x: pointerX - ratio * (pointerX - current.x),
        y: pointerY - ratio * (pointerY - current.y),
      };
    });
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      event.stopPropagation();

      const wheelDelta =
        Math.abs(event.deltaY) >= Math.abs(event.deltaX)
          ? event.deltaY
          : event.deltaX;
      const zoomStep = wheelDelta > 0 ? -0.22 : 0.22;

      zoomTo(view.scale + zoomStep, event.clientX, event.clientY);
    };

    stage.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      stage.removeEventListener("wheel", handleWheel);
    };
  }, [view.scale, zoomTo]);

  return (
    <div
      ref={stageRef}
      className={`gallery-pan-stage ${view.scale > 1 ? "is-zoomed" : ""}`}
      onDoubleClick={(event) => {
        event.preventDefault();
        zoomTo(view.scale > 1 ? 1 : 2, event.clientX, event.clientY);
      }}
      onPointerDown={(event) => {
        if (view.scale <= 1) return;
        dragRef.current = {
          active: true,
          startX: event.clientX,
          startY: event.clientY,
          x: view.x,
          y: view.y,
        };
        event.currentTarget.setPointerCapture(event.pointerId);
      }}
      onPointerMove={(event) => {
        if (!dragRef.current.active) return;
        const drag = dragRef.current;
        setView((current) => ({
          ...current,
          x: drag.x + event.clientX - drag.startX,
          y: drag.y + event.clientY - drag.startY,
        }));
      }}
      onPointerUp={(event) => {
        dragRef.current.active = false;
        event.currentTarget.releasePointerCapture(event.pointerId);
      }}
      onPointerCancel={() => {
        dragRef.current.active = false;
      }}
    >
      <div
        className="gallery-image-frame"
        style={{
          transform: `translate3d(${view.x}px, ${view.y}px, 0) scale(${view.scale})`,
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          unoptimized
          sizes="100vw"
          className="gallery-image object-contain"
          priority={priority}
          draggable={false}
        />
      </div>

      <div className="gallery-zoom-actions">
        <button
          type="button"
          className="gallery-tool"
          onClick={() => zoomTo(view.scale - 0.35)}
          aria-label="Zoom out"
        >
          <ZoomOut className="h-4 w-4" />
        </button>
        <button
          type="button"
          className="gallery-tool gallery-tool-wide"
          onClick={() => zoomTo(1)}
          aria-label="Reset zoom"
        >
          {Math.round(view.scale * 100)}%
        </button>
        <button
          type="button"
          className="gallery-tool"
          onClick={() => zoomTo(view.scale + 0.35)}
          aria-label="Zoom in"
        >
          <ZoomIn className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const imageHashes = new Set(images.map((_, index) => `#${imageTarget(index)}`));
    let lockedScrollY = 0;
    let isLocked = false;

    const syncScrollLock = () => {
      const shouldLock = imageHashes.has(window.location.hash);
      setActiveHash(window.location.hash);

      if (shouldLock && !isLocked) {
        lockedScrollY = window.scrollY;
        document.documentElement.classList.add("gallery-viewer-open");
        document.body.classList.add("gallery-viewer-open");
        document.body.style.position = "fixed";
        document.body.style.top = `-${lockedScrollY}px`;
        document.body.style.left = "0";
        document.body.style.right = "0";
        document.body.style.width = "100%";
        isLocked = true;
      }

      if (!shouldLock && isLocked) {
        document.documentElement.classList.remove("gallery-viewer-open");
        document.body.classList.remove("gallery-viewer-open");
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.width = "";
        window.scrollTo(0, lockedScrollY);
        isLocked = false;
      }
    };

    syncScrollLock();
    window.addEventListener("hashchange", syncScrollLock);

    return () => {
      window.removeEventListener("hashchange", syncScrollLock);
      document.documentElement.classList.remove("gallery-viewer-open");
      document.body.classList.remove("gallery-viewer-open");
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
    };
  }, [images]);

  return (
    <div id="gallery">
      <div className="project-masonry">
        {images.map((img, i) => {
          const isGiraffe = img.includes("giraffe");

          return (
            <a
              key={img}
              href={`#${imageTarget(i)}`}
              className="project-masonry-item group text-left"
              aria-label={`Open ${title} image ${i + 1}`}
            >
              <span className="project-gallery-frame relative block aspect-[4/5] overflow-hidden">
                <Image
                  src={img}
                  alt={`${title} - Image ${i + 1}`}
                  fill
                  unoptimized
                  loading={i === 0 ? undefined : "eager"}
                  sizes={i === 0 ? "100vw" : "50vw"}
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: isGiraffe ? "center top" : "center center" }}
                  priority={i === 0}
                />
                <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-black/45 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <Maximize2 className="h-4 w-4" />
                </span>
              </span>
              <span className="project-gallery-caption">
                {imageCaption(img, i, title)}
              </span>
            </a>
          );
        })}
      </div>

      {images.map((img, i) => {
        const previous = (i - 1 + images.length) % images.length;
        const next = (i + 1) % images.length;

        return (
          <div
            key={`${img}-viewer`}
            id={imageTarget(i)}
            className="gallery-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`${title} image ${i + 1} viewer`}
          >
            <div className="flex items-center justify-between gap-3 pb-4">
              <div className="min-w-0 text-white">
                <p className="truncate text-sm font-semibold">{title}</p>
                <p className="text-xs text-white/70">
                  Model {i + 1} of {images.length}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <a href="#gallery" className="gallery-tool" aria-label="Close image viewer">
                  <X className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="gallery-stage">
              <ZoomableImage
                key={`${img}-${activeHash === `#${imageTarget(i)}` ? "active" : "idle"}`}
                src={img}
                alt={`${title} enlarged image ${i + 1}`}
                priority={i === 0}
              />

              {images.length > 1 && (
                <>
                  <a className="gallery-nav left-3" href={`#${imageTarget(previous)}`} aria-label="Previous image">
                    <ChevronLeft className="h-6 w-6" />
                  </a>
                  <a className="gallery-nav right-3" href={`#${imageTarget(next)}`} aria-label="Next image">
                    <ChevronRight className="h-6 w-6" />
                  </a>
                </>
              )}
            </div>

            {images.length > 1 && (
              <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
                {images.map((thumb, thumbIndex) => (
                  <a
                    key={thumb}
                    href={`#${imageTarget(thumbIndex)}`}
                    className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-md border ${
                      thumbIndex === i ? "border-bronze-light" : "border-white/20"
                    }`}
                    aria-label={`Show similar model ${thumbIndex + 1}`}
                  >
                    <Image src={thumb} alt="" fill unoptimized sizes="96px" className="object-contain bg-black" />
                  </a>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
