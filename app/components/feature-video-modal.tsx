"use client";

import { Play, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";

const FEATURE_VIDEO_SRC = "/thalia-features.mp4";

export function FeatureVideoModal() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }

    if (open) {
      if (!dialog.open) {
        dialog.showModal();
      }
      return;
    }

    if (dialog.open) {
      dialog.close();
    }
  }, [open]);

  const stopVideo = () => {
    const video = videoRef.current;
    if (!video) {
      return;
    }
    video.pause();
    video.currentTime = 0;
  };

  const closeModal = () => {
    stopVideo();
    setOpen(false);
  };

  const openModal = () => {
    setOpen(true);
  };

  return (
    <>
      <Button
        type="button"
        variant="secondary"
        className="gap-2"
        aria-haspopup="dialog"
        onClick={openModal}
      >
        <Play className="h-4 w-4 fill-soft-black" aria-hidden />
        Ver vídeo (30 seg)
      </Button>

      <dialog
        ref={dialogRef}
        className="feature-video-dialog fixed z-[var(--z-dialog)] w-[min(90vw,960px)] max-w-none border-0 bg-surface-container-lowest p-0"
        aria-labelledby="feature-video-title"
        onClose={() => {
          stopVideo();
          setOpen(false);
        }}
        onClick={(event) => {
          if (event.target === dialogRef.current) {
            closeModal();
          }
        }}
      >
        <div className="flex items-center justify-between gap-4 border-b border-outline-variant px-4 py-3 sm:px-5">
          <h2
            id="feature-video-title"
            className="text-sm font-medium text-soft-black sm:text-base"
          >
            Funciones de Thalia
          </h2>
          <button
            type="button"
            className="pressable flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-container-low focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-soft-black"
            onClick={closeModal}
            aria-label="Cerrar vídeo"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>
        <div className="aspect-video overflow-hidden bg-soft-black">
          {open ? (
            <video
              ref={videoRef}
              src={FEATURE_VIDEO_SRC}
              controls
              playsInline
              preload="none"
              autoPlay
              className="h-full w-full"
            />
          ) : null}
        </div>
      </dialog>
    </>
  );
}
