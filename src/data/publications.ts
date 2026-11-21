import type { Manuscript, Publication } from "@/types";

/**
 * Publication records.
 *
 * Source of truth: the official ACL Anthology entries (titles, authors, pages,
 * DOIs, BibTeX copied verbatim) and arXiv listing pages. Summaries are short
 * paraphrases of each abstract. Roles come from your Academic CV.
 *
 * Add a new paper by appending an object. Mark `selected: true` to feature it
 * on the homepage. Never fill in a field you cannot verify; leave it out.
 */

const culturalRiddlesAuthors = [
  "My Chiffon Nguyen", "Tianyi Hu", "Vinod Anbalagan", "Henry Gagnier", "Pouya Sadeghi", "Farah Abdou",
  "Tidor-Vlad Pricope", "Diego MMS Oliveira", "Jocelyn K D'Arcy", "Madeline Smith", "Oluwaseun A Ajayi",
  "Yusser Al Ghussin", "Zena Al-Khalili", "Micol Altomare", "Shayan Amir", "Ahanaf Aziz", "Bryan Chen",
  "Ruchira Dhar", "Abdellah El Mekki", "Rawan Mohammed Elframawy", "Akhil Eppa", "Silvia Fernandez",
  "Alex Gimei", "Arya Hariharan", "Christian Hoang", "RamMohanRao Kadiyala", "Diana Kozachek",
  "Peerat Limkonchotiwat", "Ankita Maity", "Di Mo", "Ayush Munot", "Aylin Naebzadeh", "Anastasiia Nikitina",
  "Dina Pisarevskaya", "Divas Poudel", "Jebish Purbey", "Md Rabius Sany Apu", "Ahmad Mufli Ramadhan",
  "Ralitza Nikolova Rizova", "Diogo M. Serrano-Miranda", "Vivek Gopalkrishna Silimkhan",
  "Luis Fernando Solis Navarro", "Kaiser Sun", "Arya Suneesh", "Manaswitha Sunkara", "Tejaswi Sunkara",
  "Jonathan E Swindell", "Hanna Yukhymenko", "Jingyi Zheng", "Weihua Zheng", "Esther Adenuga",
  "Ilia Afanasev", "Amit Agarwal", "Wafa Aissa", "Lisa Alazraki", "Lauren C Altomare",
  "Priscilla Amondi Amuok", "Emile Anand", "Vivek Anbalagan", "Gabriel Assis", "José Matías Avalos",
  "Silvia Lorena Avila", "Zakaria Baannou", "Niyati Bafna", "Yash Bagla", "Sarah Bahrami", "Bontu F Balcha",
  "Vanya Bannihatti Kumar", "Irene Baucells", "Abdumutalib Begmuratov", "Ceren Berk", "Naman Bhatia",
  "Souvik Bhattacharyya", "Nabilah Binte Md Johan", "Isabel Blanco Ferreiro", "Felipe Bochini",
  "Sayuru Bopitiya", "Angana Borah", "Tulika Bose", "Olena Bugaiova", "Juliana Carvalho", "Nancy F Chen",
  "Stephy Chen", "Rochelle Choenni", "Jayanth Krishna Chundru", "Leandro A Cossio", "Nebojša Damnjanović",
  "Ona de Gibert", "Marco De Santis", "Pedro Delgado", "Kaustubh Dholé", "Adnan El Assadi", "Wesam El-Sayed",
  "Nadine M Elframawy", "Oumayma Essarhi", "Naome A Etori", "Reuben Chagas Fernandes",
  "Saanidhi Pravin Gade", "Javier García Gilabert", "Álvaro González-Escapa", "Bin Hu", "Kaiyu Huang",
  "Fenal Ashokbhai Ilasariya", "Abderrahmane Issam", "Danka Jokić", "Ulugbek Khalilov", "Dominik Krzemiński",
  "Roy Ka-Wei Lee", "Haichang Li", "Chen Cecilia Liu", "Zhengyuan Liu", "Cedric Lothritz", "Houman Mehrafarin",
  "Antonio Miranda-Escalada", "Fengran Mo", "Mehrnaz Mofakhami", "Wafaa Mohammed", "Felipe Moreno-Vera",
  "Prahitha Movva", "Jannatul Nayem", "Van Ngo", "Joy Olusanya", "Marc Pàmies", "Avinash Kumar Pandey",
  "Yurii Paniv", "Hitesh Laxmichand Patel", "Fred Philippy", "Vladislav Poritski", "Dikshya Poudel",
  "Joanna Radoła", "Sara Rajaee", "Swati Rajwal", "Prerana Rane", "Muhammad Ravi Shulthan Habibi",
  "Lucas Resck", "Shubhashis Roy Dipta", "Ananya Sahu", "Eduardo Sánchez", "Borja Sánchez Clemente",
  "Aleix Sant", "Nobin Sarwar", "Istiak Shihab", "Santhoshini Pranathi Singaraju", "Jane Smith", "David Stap",
  "Emily Z Su", "Ananth K Suresh", "Sajag Swami", "Ruiyang Tan", "Nazia Tasnim", "Khalid Tounoussi",
  "Patteera Triamamornwooth", "Muhammad Saad Umar", "Shankar Venkitachalam", "Oksana Volchek", "Lingbo Wang",
  "Debela Desalegn Yadeta", "Rushikesh Zawar", "Jinghan Zhang", "Mike Zhang", "Marzieh Fadaee", "Akhil Arora",
  "Károly Boczka", "Julia Kreutzer",
];

export const publications: Publication[] = [
  {
    id: "afri-mcqa-2026",
    title: "Afri-MCQA: Multimodal Cultural Question Answering for African Languages",
    authors: [
      "Atnafu Lambebo Tonja", "Srija Anand", "Emilio Villa-Cueva", "Israel Abebe Azime",
      "Jesujoba Oluwadara Alabi", "Muhidin A. Mohamed", "Debela Desalegn Yadeta", "Negasi Haile Abadi",
      "Abigail Oppong", "Nnaemeka Casmir Obiefuna", "Idris Abdulmumin", "Naome A Etori", "Eric Peter Wairagala",
      "Kanda Patrick Tshinu", "Imanigirimbabazi Emmanuel", "Gabofetswe Malema", "Alham Fikri Aji",
      "David Ifeoluwa Adelani", "Thamar Solorio",
    ],
    venue: "Proceedings of the 64th Annual Meeting of the Association for Computational Linguistics (ACL 2026), Volume 1: Long Papers",
    venueShort: "ACL",
    year: 2026,
    status: "published",
    topics: ["Multilingual NLP", "Multimodal AI", "LLM Evaluation", "Speech"],
    summary:
      "A benchmark of 7.5k culturally grounded question–answer pairs across 15 African languages from 12 countries, with parallel text and speech in English and native languages, created entirely by native speakers. Evaluated multimodal LLMs perform poorly across cultures, with near-zero accuracy on open-ended visual QA when queried in a native language or through speech.",
    role: "Led the Afaan Oromo component.",
    awards: ["Best Social Impact Paper", "Senior Area Chair Award"],
    pages: "40249–40282",
    links: {
      paper: "https://aclanthology.org/2026.acl-long.1869/",
      pdf: "https://aclanthology.org/2026.acl-long.1869.pdf",
      arxiv: "https://arxiv.org/abs/2601.05699",
      data: "https://huggingface.co/datasets/Atnafu/Afri-MCQA",
      doi: "https://doi.org/10.18653/v1/2026.acl-long.1869",
    },
    selected: true,
    bibtex: `@inproceedings{tonja-etal-2026-afri,
    title = "Afri-{MCQA}: Multimodal Cultural Question Answering for {A}frican Languages",
    author = "Tonja, Atnafu Lambebo  and
      Anand, Srija  and
      Villa-Cueva, Emilio  and
      Azime, Israel Abebe  and
      Alabi, Jesujoba Oluwadara  and
      Mohamed, Muhidin A.  and
      Yadeta, Debela Desalegn  and
      Abadi, Negasi Haile  and
      Oppong, Abigail  and
      Obiefuna, Nnaemeka Casmir  and
      Abdulmumin, Idris  and
      Etori, Naome A  and
      Wairagala, Eric Peter  and
      Tshinu, Kanda Patrick  and
      Emmanuel, Imanigirimbabazi  and
      Malema, Gabofetswe  and
      Aji, Alham Fikri  and
      Adelani, David Ifeoluwa  and
      Solorio, Thamar",
    editor = "Liakata, Maria  and
      Moreira, Viviane P.  and
      Zhang, Jiajun  and
      Jurgens, David",
    booktitle = "Proceedings of the 64th Annual Meeting of the {A}ssociation for {C}omputational {L}inguistics (Volume 1: Long Papers)",
    month = jul,
    year = "2026",
    address = "San Diego, California, United States",
    publisher = "Association for Computational Linguistics",
    url = "https://aclanthology.org/2026.acl-long.1869/",
    doi = "10.18653/v1/2026.acl-long.1869",
    pages = "40249--40282",
    ISBN = "979-8-89176-390-6"
}`,
  },
  {
    id: "cammt-2025",
    title: "CaMMT: Benchmarking Culturally Aware Multimodal Machine Translation",
    authors: [
      "Emilio Villa-Cueva", "Sholpan Bolatzhanova", "Diana Turmakhan", "Kareem Elzeky", "Henok Biadglign Ademtew",
      "Alham Fikri Aji", "Vladimir Araujo", "Israel Abebe Azime", "Jinheon Baek", "Frederico Belcavello",
      "Fermin Cristobal", "Jan Christian Blaise Cruz", "Mary Dabre", "Raj Dabre", "Toqeer Ehsan", "Naome A Etori",
      "Fauzan Farooqui", "Jiahui Geng", "Guido Ivetta", "Thanmay Jayakumar", "Soyeong Jeong", "Zheng Wei Lim",
      "Aishik Mandal", "Sofía Martinelli", "Mihail Minkov Mihaylov", "Daniil Orel", "Aniket Pramanick",
      "Sukannya Purkayastha", "Israfel Salazar", "Haiyue Song", "Tiago Timponi Torrent", "Debela Desalegn Yadeta",
      "Injy Hamed", "Atnafu Lambebo Tonja", "Thamar Solorio",
    ],
    venue: "Findings of the Association for Computational Linguistics: EMNLP 2025",
    venueShort: "EMNLP",
    year: 2025,
    status: "published",
    topics: ["Multimodal AI", "Machine Translation", "Multilingual NLP"],
    summary:
      "Asks whether images can supply the cultural context that text alone lacks in translation. Introduces a human-curated benchmark of over 5,800 image–caption triples with parallel English and regional-language captions, and evaluates five vision–language models with and without the image. Visual context generally improves translation, especially for culturally specific items, disambiguation and gender marking.",
    role: "Led the Afaan Oromo component.",
    pages: "22423–22441",
    links: {
      paper: "https://aclanthology.org/2025.findings-emnlp.1220/",
      pdf: "https://aclanthology.org/2025.findings-emnlp.1220.pdf",
      arxiv: "https://arxiv.org/abs/2505.24456",
      data: "https://huggingface.co/datasets/villacu/cammt",
      doi: "https://doi.org/10.18653/v1/2025.findings-emnlp.1220",
    },
    selected: true,
    bibtex: `@inproceedings{villa-cueva-etal-2025-cammt,
    title = "{C}a{MMT}: Benchmarking Culturally Aware Multimodal Machine Translation",
    author = "Villa-Cueva, Emilio  and
      Bolatzhanova, Sholpan  and
      Turmakhan, Diana  and
      Elzeky, Kareem  and
      Ademtew, Henok Biadglign  and
      Aji, Alham Fikri  and
      Araujo, Vladimir  and
      Azime, Israel Abebe  and
      Baek, Jinheon  and
      Belcavello, Frederico  and
      Cristobal, Fermin  and
      Cruz, Jan Christian Blaise  and
      Dabre, Mary  and
      Dabre, Raj  and
      Ehsan, Toqeer  and
      Etori, Naome A  and
      Farooqui, Fauzan  and
      Geng, Jiahui  and
      Ivetta, Guido  and
      Jayakumar, Thanmay  and
      Jeong, Soyeong  and
      Lim, Zheng Wei  and
      Mandal, Aishik  and
      Martinelli, Sof{\\'i}a  and
      Mihaylov, Mihail Minkov  and
      Orel, Daniil  and
      Pramanick, Aniket  and
      Purkayastha, Sukannya  and
      Salazar, Israfel  and
      Song, Haiyue  and
      Torrent, Tiago Timponi  and
      Yadeta, Debela Desalegn  and
      Hamed, Injy  and
      Tonja, Atnafu Lambebo  and
      Solorio, Thamar",
    editor = "Christodoulopoulos, Christos  and
      Chakraborty, Tanmoy  and
      Rose, Carolyn  and
      Peng, Violet",
    booktitle = "Findings of the {A}ssociation for {C}omputational {L}inguistics: {EMNLP} 2025",
    month = nov,
    year = "2025",
    address = "Suzhou, China",
    publisher = "Association for Computational Linguistics",
    url = "https://aclanthology.org/2025.findings-emnlp.1220/",
    doi = "10.18653/v1/2025.findings-emnlp.1220",
    pages = "22423--22441",
    ISBN = "979-8-89176-335-7"
}`,
  },
  {
    id: "proverbeval-2025",
    title: "ProverbEval: Exploring LLM Evaluation Challenges for Low-resource Language Understanding",
    authors: [
      "Israel Abebe Azime", "Atnafu Lambebo Tonja", "Tadesse Destaw Belay", "Yonas Chanie", "Bontu Fufa Balcha",
      "Negasi Haile Abadi", "Henok Biadglign Ademtew", "Mulubrhan Abebe Nerea", "Debela Desalegn Yadeta",
      "Derartu Dagne Geremew", "Assefa Atsbiha Tesfu", "Philipp Slusallek", "Thamar Solorio", "Dietrich Klakow",
    ],
    venue: "Findings of the Association for Computational Linguistics: NAACL 2025",
    venueShort: "NAACL",
    year: 2025,
    status: "published",
    topics: ["LLM Evaluation", "Multilingual NLP"],
    summary:
      "A proverb-based benchmark for evaluating LLM understanding of low-resource languages in culture-specific settings, covering Ethiopian languages and English. Benchmarking shows performance swings of up to 50% depending only on answer-choice order, and that native-language proverb descriptions help generation, motivating closer attention to choice order, prompt language and task variability when building benchmarks.",
    role: "Led the Afaan Oromo component.",
    pages: "6265–6281",
    links: {
      paper: "https://aclanthology.org/2025.findings-naacl.350/",
      pdf: "https://aclanthology.org/2025.findings-naacl.350.pdf",
      arxiv: "https://arxiv.org/abs/2411.05049",
      code: "https://github.com/EthioNLP/EthioProverbEval",
      data: "https://huggingface.co/datasets/israel/ProverbEval",
      doi: "https://doi.org/10.18653/v1/2025.findings-naacl.350",
    },
    selected: true,
    bibtex: `@inproceedings{azime-etal-2025-proverbeval,
    title = "{P}roverb{E}val: Exploring {LLM} Evaluation Challenges for Low-resource Language Understanding",
    author = "Azime, Israel Abebe  and
      Tonja, Atnafu Lambebo  and
      Belay, Tadesse Destaw  and
      Chanie, Yonas  and
      Balcha, Bontu Fufa  and
      Abadi, Negasi Haile  and
      Ademtew, Henok Biadglign  and
      Nerea, Mulubrhan Abebe  and
      Yadeta, Debela Desalegn  and
      Geremew, Derartu Dagne  and
      Tesfu, Assefa Atsbiha  and
      Slusallek, Philipp  and
      Solorio, Thamar  and
      Klakow, Dietrich",
    editor = "Chiruzzo, Luis  and
      Ritter, Alan  and
      Wang, Lu",
    booktitle = "Findings of the Association for Computational Linguistics: NAACL 2025",
    month = apr,
    year = "2025",
    address = "Albuquerque, New Mexico",
    publisher = "Association for Computational Linguistics",
    url = "https://aclanthology.org/2025.findings-naacl.350/",
    doi = "10.18653/v1/2025.findings-naacl.350",
    pages = "6265--6281",
    ISBN = "979-8-89176-195-7"
}`,
  },
  {
    id: "culturalriddles-2026",
    title: "CulturalRiddles: A Multicultural Benchmark of Riddles",
    authors: culturalRiddlesAuthors,
    venue: "arXiv preprint arXiv:2610.29968",
    venueShort: "arXiv",
    year: 2026,
    status: "preprint",
    topics: ["LLM Evaluation", "Multilingual NLP"],
    summary:
      "A benchmark of original riddles written by people through a community effort, covering 62 cultures, 45 countries and 51 languages. Solving them requires inference, cultural and social knowledge, and familiarity with local associations. Across 28 model configurations, judged automatically and by humans, the strongest models reach only about 22% accuracy for some communities.",
    links: { arxiv: "https://arxiv.org/abs/2610.29968", pdf: "https://arxiv.org/pdf/2610.29968" },
    bibtex: `@misc{nguyen2026culturalriddles,
    title = {CulturalRiddles: A Multicultural Benchmark of Riddles},
    author = {Nguyen, My Chiffon and Hu, Tianyi and Anbalagan, Vinod and others},
    year = {2026},
    eprint = {2610.29968},
    archivePrefix = {arXiv},
    primaryClass = {cs.CL},
    url = {https://arxiv.org/abs/2610.29968}
}`,
  },
  {
    id: "vexmlm-2026",
    title: "Expanding the Lexicon of Ge'ez Based African Languages: A Comparative Study of Amharic and Tigrinya",
    authors: ["Hailay Kidu Teklehaymanot", "Debela Desalegn Yadeta", "Wolfgang Nejdl"],
    venue: "arXiv preprint arXiv:2607.15209",
    venueShort: "arXiv",
    year: 2026,
    status: "preprint",
    topics: ["Multilingual NLP", "Tokenization"],
    summary:
      "Introduces VEXMLM, which extends XLM-R's vocabulary with 30,000 Ge'ez-script subwords for Amharic and Tigrinya and adds continued pretraining. Tokenizer fertility drops by 28.0% for Amharic and 45.9% for Tigrinya relative to XLM-R; downstream effects are mixed (modest NER gains, weaker extractive QA, comparable sentiment analysis), and an ablation shows continued pretraining is needed for the expanded vocabulary to help.",
    links: {
      arxiv: "https://arxiv.org/abs/2607.15209",
      pdf: "https://arxiv.org/pdf/2607.15209",
      code: "https://github.com/hailaykidu/VEXMLM",
    },
    bibtex: `@misc{teklehaymanot2026expanding,
    title = {Expanding the Lexicon of Ge'ez Based African Languages: A Comparative Study of Amharic and Tigrinya},
    author = {Teklehaymanot, Hailay Kidu and Yadeta, Debela Desalegn and Nejdl, Wolfgang},
    year = {2026},
    eprint = {2607.15209},
    archivePrefix = {arXiv},
    primaryClass = {cs.CL},
    url = {https://arxiv.org/abs/2607.15209}
}`,
  },
  {
    id: "ethio-asr-2026",
    title: "Ethio-ASR: Joint Multilingual Speech Recognition and Language Identification for Ethiopian Languages",
    authors: [
      "Badr M. Abdullah", "Israel Abebe Azime", "Atnafu Lambebo Tonja", "Jesujoba O. Alabi", "Abel Mulat Alemu",
      "Eyob G. Hagos", "Bontu Fufa Balcha", "Mulubrhan A. Nerea", "Debela Desalegn Yadeta",
      "Dagnachew Mekonnen Marilign", "Amanuel Temesgen Fentahun", "Tadesse Kebede", "Israel D. Gebru",
      "Michael Melese Woldeyohannis", "Walelign Tewabe Sewunetie", "Bernd Möbius", "Dietrich Klakow",
    ],
    venue: "arXiv preprint arXiv:2603.23654",
    venueShort: "arXiv",
    year: 2026,
    status: "preprint",
    topics: ["Speech", "Multilingual NLP"],
    summary:
      "A suite of multilingual CTC-based models that jointly perform speech recognition and language identification for Amharic, Tigrinya, Oromo, Sidaama and Wolaytta, trained on the WAXAL corpus. The best model reaches an average WER of 30.48% on the WAXAL test set, outperforming the strongest OmniASR model with far fewer parameters. Includes analyses of gender bias, vowel length and gemination errors, and training dynamics.",
    links: {
      arxiv: "https://arxiv.org/abs/2603.23654",
      pdf: "https://arxiv.org/pdf/2603.23654",
      code: "https://github.com/badrex/Ethio-ASR",
    },
    bibtex: `@misc{abdullah2026ethioasr,
    title = {Ethio-ASR: Joint Multilingual Speech Recognition and Language Identification for Ethiopian Languages},
    author = {Abdullah, Badr M. and Azime, Israel Abebe and Tonja, Atnafu Lambebo and Alabi, Jesujoba O. and Alemu, Abel Mulat and Hagos, Eyob G. and Balcha, Bontu Fufa and Nerea, Mulubrhan A. and Yadeta, Debela Desalegn and Marilign, Dagnachew Mekonnen and Fentahun, Amanuel Temesgen and Kebede, Tadesse and Gebru, Israel D. and Woldeyohannis, Michael Melese and Sewunetie, Walelign Tewabe and M{\\"o}bius, Bernd and Klakow, Dietrich},
    year = {2026},
    eprint = {2603.23654},
    archivePrefix = {arXiv},
    primaryClass = {cs.CL},
    url = {https://arxiv.org/abs/2603.23654}
}`,
  },
  {
    id: "hri-review-2023",
    title: "Human-Robot Interaction: A State of the Art Review",
    authors: ["Debela Desalegn Yadeta", "Adisu B. Bedane", "Wesagn D. Chemma"],
    venue: "Journal of Artificial Intelligence, Machine Learning and Data Science, 1(3):109–118",
    venueShort: "Journal",
    year: 2023,
    status: "published",
    topics: ["Survey", "Robotics"],
    summary:
      "A review of human–robot interaction built on an analysis of 89 papers. It surveys how humans and robots interact across sectors such as healthcare, industry, the military, education and entertainment, the challenges and opportunities each presents, and how AI is being used to improve the interaction.",
    pages: "109–118",
    links: {
      paper: "https://doi.org/10.51219/JAIMLD/Debela-D-Yadeta/14",
      pdf: "https://urfjournals.org/open-access/human-robot-interaction-a-state-of-the-art-review.pdf",
      doi: "https://doi.org/10.51219/JAIMLD/Debela-D-Yadeta/14",
    },
    bibtex: `@article{yadeta2023hri,
    title = {Human-Robot Interaction: A State of the Art Review},
    author = {Yadeta, Debela Desalegn and Bedane, Adisu B. and Chemma, Wesagn D.},
    journal = {Journal of Artificial Intelligence, Machine Learning and Data Science},
    volume = {1},
    number = {3},
    pages = {109--118},
    year = {2023},
    doi = {10.51219/JAIMLD/Debela-D-Yadeta/14},
    url = {https://doi.org/10.51219/JAIMLD/Debela-D-Yadeta/14}
}`,
  },
];

/**
 * First-author manuscripts under review. The venue is intentionally not shown.
 * Titles, authors and summaries come from the submitted manuscripts.
 */
export const manuscriptsUnderReview: Manuscript[] = [
  {
    id: "diffusage",
    title: "DiffuSAGE: Spatio-Temporal Token Attribution for Deep Generative Diffusion Models",
    authors: ["Debela Desalegn Yadeta", "Beakal Gizachew Assefa", "Azmeraw Bekele Yenew"],
    summary:
      "A hybrid attribution framework for text-to-image diffusion models that combines Aumann-Shapley values, Integrated Gradients and cross-attention maps to explain which prompt tokens matter, when in the denoising process they matter, and where in the image they act. On Stable Diffusion v1.5 it reaches an Insertion AUC of 0.82 and a Deletion AUC of 0.55, ahead of LIME, DF-RISE and DF-CAM, and a 51-participant user study finds strong agreement with human judgement.",
    topics: ["Explainable AI", "Generative AI"],
  },
  {
    id: "fifa",
    title: "FIFA: Firefly-Inspired Feature Attribution for Faithful and Sparse Explanations in Tabular Models",
    authors: ["Debela Desalegn Yadeta", "Beakal Gizachew Assefa"],
    summary:
      "A gradient-free, model-agnostic attribution method that uses a binary firefly algorithm to search for the smallest feature subset that preserves a model's prediction. Across Random Forest, XGBoost, CatBoost and TabNet on three benchmark datasets, it gives the most faithful and the sparsest explanations compared with LIME, KernelSHAP and TreeSHAP, and the most stable ones on TabNet.",
    topics: ["Explainable AI", "Tabular ML"],
  },
  {
    id: "explaingen",
    title: "ExplainGen: Explainability Techniques in Generative Models",
    authors: ["Debela Desalegn Yadeta", "Azmeraw Bekele Yenew", "Robbel Habtamu Yigzaw", "Beakal Gizachew Assefa"],
    summary:
      "A review of explainability for generative models (GANs, VAEs, energy-based, autoregressive and diffusion models) with a taxonomy by scope, method, data modality, problem type and architecture, a comparison of techniques and their trade-offs, and open challenges including robustness, consistency, ethics and regulation.",
    topics: ["Explainable AI", "Generative AI", "Survey"],
  },
];

export const OWNER_NAME = "Debela Desalegn Yadeta";

export function getPublication(id: string) {
  return publications.find((p) => p.id === id);
}

export function sortedPublications() {
  return [...publications].sort((a, b) => b.year - a.year);
}
