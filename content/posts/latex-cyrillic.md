---
layout: post
title: Cyrillic fonts in LaTeX
createdAt: 2014-07-08
---

If you want to install TeX on your Mac you can do it either by downloading a full TeX Live distribution (2.4 Gb) or by getting BasicTeX (95 Mb), which is 24 times smaller. BasicTeX is a subset of TeX Live and supports standard TeX typesetting functions. Cyrillic fonts aren't included, but it's easy to install them.

To view all installed collections use the following command: `$ tlmgr info collections`.

![LaTeX collections](/images/2014/latex-cyrillic/latex-collections.png)

Two collections are recommended for cyrillic documents: `collection-fontsrecommended` (collection of widely used fonts) and `collection-langcyrillic` for cyrillic typesetting.

Now creating a document with following code will result working russian characters in output file.

```latex
\documentclass[12pt,a4paper]{article}
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage[russian]{babel}

\begin{document}
Привет!
\end{document}
```

Compile with XeLaTeX and enjoy!
