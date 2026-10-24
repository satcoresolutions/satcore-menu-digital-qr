"use client";

import { useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

import Modal from "./Modal";
import { ui } from "../lib/ui";

export default function QRSheet({
  onClose,
}: {
  onClose: () => void;
}) {
  const wrap = useRef<HTMLDivElement>(null);

  const url =
    typeof window !== "undefined"
      ? window.location.href.split("#")[0]
      : "";

  const download = () => {
    const canvas = wrap.current?.querySelector("canvas");
    if (!canvas) return;

    const a = document.createElement("a");
    a.href = canvas.toDataURL("image/png");
    a.download = "qr-menu.png";
    a.click();
  };

  return (
    <Modal title="Código QR del menú" onClose={onClose}>
      <h2 className="text-center text-lg font-bold tracking-tight text-foreground">
        Comparte esta carta
      </h2>

      <div className="mt-2 flex w-full justify-center">
        <p className="w-full max-w-xs text-center text-sm leading-5 text-text-muted">
          Escanea el código con la cámara del celular para abrir el menú.
        </p>
      </div>

      <div
        ref={wrap}
        className="mx-auto mt-4 flex w-fit items-center justify-center rounded-xl border border-border bg-white p-2.5"
      >
        <QRCodeCanvas
          value={url}
          size={220}
          level="M"
          marginSize={2}
          fgColor="#132A8E"
          bgColor="#FFFFFF"
        />
      </div>

      <p className="mt-3 max-h-14 overflow-y-auto break-all rounded-lg border border-border bg-surface-secondary px-2.5 py-2 text-center text-[11px] leading-4 text-text-muted">
        {url}
      </p>

      <button
        type="button"
        className={`${ui.btnPrimary} ${ui.block} mt-3`}
        onClick={download}
      >
        Descargar QR
      </button>
    </Modal>
  );
}