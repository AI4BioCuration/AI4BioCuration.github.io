---
title: "Multi-label classification for biomedical literature: an overview of the BioCreative VII LitCovid Track for COVID-19 literature topic annotations"
date: 2022-08-31
venue: "Database"
paperurl: "https://academic.oup.com/database/article/doi/10.1093/database/baac069/6679392"
citation: "Chen, Q., Allot, A., Leaman, R., et al., 2022. Multi-label classification for biomedical literature: an overview of the BioCreative VII LitCovid Track for COVID-19 literature topic annotations. Database, 2022:baac069."
keywords:
  - Evaluation & Benchmarking
  - Data & Benchmarks
  - Text Mining & NLP
category: "Evaluation & Benchmarking"
---

The coronavirus disease 2019 (COVID-19) pandemic has been severely impacting global society since December 2019. The related findings such as vaccine and drug development have been reported in biomedical literature—at a rate of about 10 000 articles on COVID-19 per month. Such rapid growth significantly challenges manual curation and interpretation. For instance, LitCovid is a literature database of COVID-19-related articles in PubMed, which has accumulated more than 200 000 articles with millions of accesses each month by users worldwide. One primary curation task is to assign up to eight topics (e.g. Diagnosis and Treatment) to the articles in LitCovid. The annotated topics have been widely used for navigating the COVID literature, rapidly locating articles of interest and other downstream studies. However, annotating the topics has been the bottleneck of manual curation. Despite the continuing advances in biomedical text-mining methods, few have been dedicated to topic annotations in COVID-19 literature. To close the gap, we organized the BioCreative LitCovid track to call for a community effort to tackle automated topic annotation for COVID-19 literature. The BioCreative LitCovid dataset—consisting of over 30 000 articles with manually reviewed topics—was created for training and testing. It is one of the largest multi-label classification datasets in biomedical scientific literature. Nineteen teams worldwide participated and made 80 submissions in total. Most teams used hybrid systems based on transformers. The highest performing submissions achieved 0.8875, 0.9181 and 0.9394 for macro-F1-score, micro-F1-score and instance-based F1-score, respectively. Notably, these scores are substantially higher (e.g. 12%, higher for macro F1-score) than the corresponding scores of the state-of-art multi-label classification method. The level of participation and results demonstrate a successful track and help close the gap between dataset curation and method development. The dataset is publicly available via https://ftp.ncbi.nlm.nih.gov/pub/lu/LitCovid/biocreative/ for benchmarking and further development.
