import type { ReactNode } from "react";

/** Small building blocks for research diagrams that follow the site's palette and dark mode. */
function Box({ title, children, emphasis = false }: { title: string; children?: ReactNode; emphasis?: boolean }) {
  return (
    <div
      className={`min-w-0 flex-1 rounded-sm border px-3.5 py-3 ${
        emphasis ? "border-accent/50 bg-accent-tint" : "border-rule bg-paper"
      }`}
    >
      <p className="text-[0.88rem] font-semibold leading-snug text-ink">{title}</p>
      {children && <div className="mt-1 text-[0.8rem] leading-snug text-ink-2">{children}</div>}
    </div>
  );
}

function Arrow() {
  return (
    <div aria-hidden className="flex shrink-0 items-center justify-center text-ink-3 md:px-1">
      <svg width="22" height="22" viewBox="0 0 22 22" className="rotate-90 md:rotate-0">
        <path d="M3 11h14m-5-5 5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function Frame({ label, children, caption }: { label: string; children: ReactNode; caption: ReactNode }) {
  return (
    <figure className="not-prose my-8" aria-label={label}>
      <div className="border border-rule bg-shelf p-4 md:p-5">{children}</div>
      <figcaption className="mt-3 text-[0.9rem] leading-snug text-ink-2">{caption}</figcaption>
    </figure>
  );
}

/** Afri-MCQA construction and evaluation overview (facts from the ACL 2026 paper). */
export function AfriMcqaOverview() {
  return (
    <Frame
      label="Afri-MCQA benchmark overview"
      caption="Afri-MCQA overview: native speakers turn culturally relevant images into parallel text and speech question–answer pairs, which are used to test multimodal models across languages, modalities and answer formats."
    >
      <div className="flex flex-col gap-2 md:flex-row md:items-stretch">
        <Box title="Culturally relevant image">10 categories adapted from CVQA, mostly self-sourced by annotators</Box>
        <Arrow />
        <Box title="Native-speaker questions">Up to 3 per image; 1 correct answer and 3 distractors; written in the native language and English</Box>
        <Arrow />
        <Box title="Text and speech">Every question and answer also recorded as audio in both languages</Box>
        <Arrow />
        <Box title="Model evaluation" emphasis>
          Native language or English; text or speech; multiple choice or open-ended
        </Box>
      </div>
      <dl className="mt-4 grid grid-cols-3 gap-3 border-t border-rule pt-4 text-center">
        <div>
          <dt className="text-[0.78rem] text-ink-3">Languages</dt>
          <dd className="font-serif text-[1.4rem] text-ink">15</dd>
        </div>
        <div>
          <dt className="text-[0.78rem] text-ink-3">Countries</dt>
          <dd className="font-serif text-[1.4rem] text-ink">12</dd>
        </div>
        <div>
          <dt className="text-[0.78rem] text-ink-3">Q&amp;A pairs</dt>
          <dd className="font-serif text-[1.4rem] text-ink">~7.5k</dd>
        </div>
      </dl>
    </Frame>
  );
}

/** Ethio-ASR joint language identification and transcription pipeline (facts from arXiv:2603.23654). */
export function EthioAsrPipeline() {
  return (
    <Frame
      label="Ethio-ASR model pipeline"
      caption="Ethio-ASR pipeline: a pretrained speech encoder is fine-tuned with a CTC objective whose target sequence starts with a language-ID token, so one model both identifies the language and transcribes it, with no separate classification head."
    >
      <div className="flex flex-col gap-2 md:flex-row md:items-stretch">
        <Box title="Speech input">Amharic, Tigrinya, Oromo, Sidaama or Wolaytta (WAXAL corpus)</Box>
        <Arrow />
        <Box title="Pretrained speech encoder">AfriHuBERT (94M), MMS-300M, MMS-1B or w2v-BERT-2.0 (600M)</Box>
        <Arrow />
        <Box title="CTC output layer">Trained with a single CTC loss</Box>
        <Arrow />
        <Box title="[LANG] + graphemes" emphasis>
          First token gives the language (LID accuracy &gt;99.8%); the rest is the transcript (best average WER 30.48%)
        </Box>
      </div>
    </Frame>
  );
}
