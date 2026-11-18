"use client";

import { useRef, useState } from "react";
import { CONTACT, SERVICES } from "@/data/site";
import { Cw, Hand } from "@/components/bits";

function useCopy() {
  const [label, setLabel] = useState<Record<string, string>>({});
  const copy = async (key: string, text: string, selectEl?: HTMLElement | null) => {
    let ok = true;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      ok = false;
      if (selectEl) {
        const r = document.createRange();
        r.selectNodeContents(selectEl);
        const s = window.getSelection();
        s?.removeAllRanges();
        s?.addRange(r);
      }
    }
    setLabel((l) => ({ ...l, [key]: ok ? "Copiado" : "Seleccioná y copiá" }));
    setTimeout(() => setLabel((l) => ({ ...l, [key]: "" })), 1800);
  };
  return { label, copy };
}

export function Contact({ brand, setBrand }: { brand: string; setBrand: (v: string) => void }) {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [needs, setNeeds] = useState<string[]>([]);
  const [error, setError] = useState("");
  const [sentUrl, setSentUrl] = useState("");
  const mailRef = useRef<HTMLSpanElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const brandRef = useRef<HTMLInputElement>(null);
  const { label, copy } = useCopy();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const n = name.trim(), b = brand.trim();
    if (!n || !b) {
      setError("Completá tu nombre y el de tu marca para mandar el mensaje.");
      (!n ? nameRef : brandRef).current?.focus();
      return;
    }
    setError("");
    const text =
      `Hola Chimba, soy ${n}, de ${b}.\n` +
      (needs.length ? `Necesitamos: ${needs.join(", ")}.\n` : "") +
      (msg.trim() ? `\n${msg.trim()}\n` : "") +
      `\n¿Hablamos?`;
    const url = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
    setSentUrl(url);
    const win = window.open(url, "_blank", "noopener");
    if (!win) window.location.href = url;
  };

  return (
    <section className="contact" id="contacto" aria-labelledby="contact-title">
      <div className="wrap">
        <h2 id="contact-title">
          ¿Arrancamos? <span className="mark">Escribinos.</span>
        </h2>
        <div className="contact__grid">
          <div>
            <p className="contact__lockup">
              <span className="who">{brand.trim() || "Tu marca"}</span>
              <Hand alt="y" />
              <Cw />
            </p>
            <dl className="contact__data">
              <div>
                <dt>Mail</dt>
                <dd>
                  <span ref={mailRef}>{CONTACT.email}</span>
                  <button className="copy" type="button" onClick={() => copy("mail", CONTACT.email, mailRef.current)}>
                    {label.mail || "Copiar"}
                  </button>
                </dd>
              </div>
              <div>
                <dt>WhatsApp</dt>
                <dd>
                  <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener">{CONTACT.whatsappLabel}</a>
                </dd>
              </div>
              <div>
                <dt>Instagram</dt>
                <dd>
                  <a href={CONTACT.instagram} target="_blank" rel="noopener">{CONTACT.instagramHandle}</a>
                </dd>
              </div>
            </dl>
          </div>
          <form className="form" noValidate onSubmit={submit}>
            <div className="row2">
              <div className="field">
                <label htmlFor="f-name">Tu nombre</label>
                <input id="f-name" ref={nameRef} type="text" autoComplete="name" placeholder="Cómo te llamás" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="field">
                <label htmlFor="f-brand">Tu marca</label>
                <input id="f-brand" ref={brandRef} type="text" autoComplete="organization" placeholder="Nombre de la empresa" maxLength={28} value={brand} onChange={(e) => setBrand(e.target.value)} />
              </div>
            </div>
            <fieldset className="field">
              <legend>¿Qué necesitás?</legend>
              <div className="chips">
                {SERVICES.map((s, i) => (
                  <label className="chip" key={s.name}>
                    <input
                      type="checkbox"
                      id={`chip-${i}`}
                      checked={needs.includes(s.name)}
                      onChange={(e) => setNeeds((v) => (e.target.checked ? [...v, s.name] : v.filter((x) => x !== s.name)))}
                    />
                    <span>{s.name}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <div className="field">
              <label htmlFor="f-msg">Contanos un poco</label>
              <textarea id="f-msg" placeholder="Qué hace tu marca, qué querés cambiar, para cuándo lo necesitás." value={msg} onChange={(e) => setMsg(e.target.value)} />
            </div>
            {error && <p className="form__error" role="alert">{error}</p>}
            <div>
              <button className="btn btn--green" type="submit">Enviar por WhatsApp</button>
            </div>
            <p className="form__note" role="status">
              {sentUrl ? (
                <>Abrimos WhatsApp con tu mensaje listo: solo tenés que tocar enviar. ¿No se abrió? <a href={sentUrl} target="_blank" rel="noopener">Abrilo acá</a>.</>
              ) : (
                <>Te abrimos WhatsApp con el mensaje armado para que lo envíes.</>
              )}
            </p>
          </form>
        </div>
        <footer className="footer">
          <span className="footer__brand"><Cw /><small>CREATIVE AGENCY</small></span>
          <span>somoschimba.com</span>
          <span className="footer__year">2025/2026</span>
        </footer>
      </div>
    </section>
  );
}
