"use client";

import { useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import Modal from "./Modal";

export default function QRSheet({ onClose }: { onClose: () => void }) {
  const wrap = useRef<HTMLDivElement>(null);
  const url = window.location.href.split("#")[0];

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
      <h2 className="sheet-title">Comparte esta carta</h2>
      <p className="sheet-text">Escanea el código con la cámara del celular para abrir el menú.</p>
      <div className="qr" ref={wrap}>
        <QRCodeCanvas value={url} size={512} level="M" marginSize={2} fgColor="#132A8E" bgColor="#FFFFFF" />
      </div>
      <p className="qr-url">{url}</p>
      <button className="btn btn-primary" onClick={download}>
        Descargar QR
      </button>
    </Modal>
  );
}
