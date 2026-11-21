import type { Contribution, ResearchInterest } from "@/types";

/** Research interests. Edit titles and descriptions freely. */
export const researchInterests: ResearchInterest[] = [
  {
    id: "xai",
    title: "Explainable AI",
    description:
      "Understanding how machine learning models make predictions through attribution methods, feature importance, local explanations, and model behavior analysis.",
  },
  {
    id: "african-nlp",
    title: "Multilingual NLP and African language AI",
    description:
      "Developing and evaluating language technologies for multilingual and underrepresented African languages, including language resources, evaluation benchmarks, and model adaptation.",
    publications: ["afri-mcqa-2026", "proverbeval-2025", "cammt-2025", "ethio-asr-2026", "vexmlm-2026"],
  },
  {
    id: "graph-ml",
    title: "Graph machine learning",
    description:
      "Investigating graph neural networks, graph representation learning, and methods for understanding structured data.",
  },
  {
    id: "gen-multimodal",
    title: "Generative and multimodal AI",
    description:
      "Exploring generative models, multimodal representation learning, and the interaction between language, vision, and other modalities.",
    publications: ["afri-mcqa-2026", "cammt-2025"],
  },
  {
    id: "trustworthy",
    title: "Trustworthy machine learning",
    description: "Studying model reliability, robustness, interpretability, and responsible deployment.",
  },
];

/**
 * Selected research contributions. Each entry is grounded in a paper, preprint,
 * manuscript or the MSc thesis. Do not add claims that are not in those sources.
 */
export const contributions: Contribution[] = [
  {
    id: "hybrid-attribution",
    title: "Hybrid attribution methods for predictive and generative models",
    question:
      "How can we obtain explanations that are faithful to what a model actually computes, for both tabular predictors and text-to-image diffusion models?",
    motivation:
      "Attribution methods are widely used to justify model decisions, yet their explanations can be unfaithful or unstable. Generative diffusion models add a further difficulty: relating what appears in a generated image back to the words of the prompt.",
    methodology:
      "FIFA (Firefly-Inspired Feature Attribution) searches for sparse, faithful attributions for tabular models. DiffuSAGE (Diffusion Shapley Attribution with Gradient Explanations) combines Shapley-style attribution with gradient explanations to attribute generated image content to prompt tokens in Stable Diffusion v1.5. Explanations are assessed quantitatively for faithfulness and stability, and DiffuSAGE is validated with user studies.",
    contribution:
      "Two attribution methods developed in the MSc thesis, one for predictive and one for generative models, together with their evaluation. Three first-author manuscripts on this work are under review at IEEE Access.",
    publications: [],
    projectSlug: "explainable-machine-learning",
    code: null,
  },
  {
    id: "llm-eval-low-resource",
    title: "Reliable LLM evaluation for low-resource languages",
    question: "How should benchmarks be built so that they measure language understanding in low-resource languages rather than artefacts of the evaluation setup?",
    motivation:
      "Benchmarks for low-resource languages are scarce, and their results can depend on choices such as prompt language or answer order that have nothing to do with linguistic competence.",
    methodology:
      "Build culturally grounded evaluation data with native speakers (proverbs for ProverbEval, community-written riddles for CulturalRiddles) and systematically vary the evaluation setup across many LLMs.",
    contribution:
      "ProverbEval showed performance swings of up to 50% from answer-choice order alone, and argued for explicit control of choice order, prompt language and task variability. I led the Afaan Oromo component.",
    publications: ["proverbeval-2025", "culturalriddles-2026"],
    projectSlug: "african-language-nlp",
    code: "https://github.com/EthioNLP/EthioProverbEval",
  },
  {
    id: "multimodal-cultural",
    title: "Multimodal and speech benchmarks for African cultures",
    question: "Do multimodal models understand African cultural knowledge when it is presented through images, native languages and speech?",
    motivation:
      "Africa is home to over a third of the world's languages but is barely represented in multimodal training and evaluation data, and many of these languages are primarily spoken.",
    methodology:
      "Native-speaker-created datasets pairing culturally relevant images with parallel text and speech (Afri-MCQA) and with parallel captions for translation (CaMMT), evaluated across text-only, text+image and speech settings.",
    contribution:
      "Afri-MCQA (ACL 2026, Best Social Impact Paper) found near-zero accuracy on open-ended visual QA when models are queried in native languages or speech. CaMMT showed that images generally improve culturally aware translation. I led the Afaan Oromo components of both.",
    publications: ["afri-mcqa-2026", "cammt-2025"],
    projectSlug: "generative-multimodal-ai",
  },
  {
    id: "ethiopian-language-models",
    title: "Speech and tokenization for Ethiopian languages",
    question: "How can speech recognition and pretrained language models be adapted to the scripts, phonology and morphology of Ethiopian languages?",
    motivation:
      "Existing speech and language models give little support to Ethiopian languages, whose features include rare phonological contrasts, rich morphology and the Ge'ez script.",
    methodology:
      "Joint multilingual CTC models for speech recognition and language identification across five languages (Ethio-ASR), and vocabulary extension of XLM-R with Ge'ez-script subwords plus continued pretraining (VEXMLM).",
    contribution:
      "Ethio-ASR reached an average WER of 30.48% on WAXAL, outperforming the best OmniASR model with fewer parameters. VEXMLM reduced tokenizer fertility by 28.0% (Amharic) and 45.9% (Tigrinya), with mixed downstream effects.",
    publications: ["ethio-asr-2026", "vexmlm-2026"],
    projectSlug: "african-language-nlp",
    code: "https://github.com/hailaykidu/VEXMLM",
  },
];
