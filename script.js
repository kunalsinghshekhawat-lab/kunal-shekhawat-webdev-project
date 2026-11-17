/* ==========================================================================
   KUNAL SINGH SHEKHAWAT — INTERACTIVE PORTFOLIO CONTROLLER (script.js)
   ========================================================================== */

(function() {
  // 1. Sticky Header Scroll Transformation & Active Section Spy
  const header = document.getElementById('siteHeader');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  function onScrollUpdate() {
    if (!header) return;
    if (window.scrollY > 36) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    let currentSection = '';
    const scrollPos = window.scrollY + 140;
    sections.forEach(function(sec) {
      if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
        currentSection = sec.getAttribute('id');
      }
    });

    navLinks.forEach(function(link) {
      link.classList.remove('active');
      if (currentSection && link.getAttribute('href') === '#' + currentSection) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', onScrollUpdate, { passive: true });
  onScrollUpdate();

  // 2. Mobile Navigation Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const primaryNav = document.getElementById('primaryNav');
  if (mobileMenuBtn && primaryNav) {
    mobileMenuBtn.addEventListener('click', function() {
      const isOpen = primaryNav.classList.toggle('open');
      mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
    });
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        primaryNav.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 3. Dual-Perspective Identity Lens Switcher
  const lensBtns = document.querySelectorAll('.lens-btn');
  const lensCaption = document.getElementById('lensStatusCaption');
  const lensDescriptions = {
    unified: 'Showing complete interdisciplinary synthesis — Analytical Strategy + Creative Expression.',
    analytical: 'Highlighting Research, Strategy, Governance, IIM Bangalore BBA-DBE & ICEP Academic Architecture.',
    creative: 'Highlighting Visual Arts, Musical Performance, Literary Sketching & Contemporary Gallery Exhibits.'
  };

  lensBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const mode = btn.getAttribute('data-lens-mode') || 'unified';
      lensBtns.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      document.body.setAttribute('data-lens', mode);
      if (lensCaption && lensDescriptions[mode]) {
        lensCaption.textContent = lensDescriptions[mode];
      }
    });
  });

  // 4. Static Geometric Monogram Identity (No Portrait Upload Required)

  // 5. ICEP Competitive Exam Research Matrix Inspector
  const examData = {
    CUET: {
      title: 'CUET (Common University Entrance Test)',
      focus: 'Domain & General Assessment Question Repositories',
      detail: 'Conducting chapter-wise syllabus alignment, reviewing question clarity and difficulty calibration, and structuring topic-wise practice repositories for undergraduate admissions preparation under the ICEP programme.'
    },
    CLAT: {
      title: 'CLAT (Common Law Admission Test)',
      focus: 'Comprehension-Based & Reasoning Assessment Structure',
      detail: 'Researching examination patterns, eligibility requirements, and structured passage-based analytical practice materials aligned with evolving national law entrance standards.'
    },
    IPMAT: {
      title: 'IPMAT (Integrated Programme in Management Aptitude Test)',
      focus: 'Quantitative & Verbal Ability Academic Resources',
      detail: 'Mapping integrated management entrance syllabi, difficulty tiers, and structured practice sets to support reusable academic preparation workflows.'
    },
    SAT: {
      title: 'SAT (Scholastic Assessment Test)',
      focus: 'Standardised Assessment Research & Content Structuring',
      detail: 'Organising examination-oriented academic material, verifying conceptual clarity, and documenting structured practice modules using Microsoft Excel, Google Workspace, and AI-assisted research workflows.'
    }
  };

  const examBtns = document.querySelectorAll('.exam-tab-btn');
  const examReadoutTitle = document.getElementById('examReadoutTitle');
  const examReadoutFocus = document.getElementById('examReadoutFocus');
  const examReadoutDetail = document.getElementById('examReadoutDetail');

  examBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const key = btn.getAttribute('data-exam');
      examBtns.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      if (examData[key] && examReadoutTitle && examReadoutFocus && examReadoutDetail) {
        examReadoutTitle.textContent = examData[key].title;
        examReadoutFocus.textContent = examData[key].focus;
        examReadoutDetail.textContent = examData[key].detail;
      }
    });
  });

  // 6. CDPG 2026 Track 3 Governance Pillar Explorer
  const pillarData = {
    dpi: {
      title: 'Digital Public Infrastructure (DPI)',
      detail: 'Examining how interoperable digital layers and public platforms function as foundational infrastructure for inclusive service delivery and ecosystem coordination.'
    },
    accountability: {
      title: 'Governance & Institutional Accountability',
      detail: 'Evaluating institutional oversight frameworks, transparency mechanisms, and governance structures that align public and private actors.'
    },
    ecosystem: {
      title: 'Ecosystem Management',
      detail: 'Analysing multi-stakeholder incentives, platform responsibilities, and collaborative operational rules across interconnected digital ecosystems.'
    },
    policy: {
      title: 'Policy & Regulatory Considerations',
      detail: 'Assessing regulatory guardrails, compliance structures, and policy trade-offs that balance innovation with systemic stability.'
    },
    citizens: {
      title: 'Citizen Interests & Rights',
      detail: 'Centring user trust, equitable access, grievance redressal, and citizen rights within digital governance frameworks.'
    },
    strategy: {
      title: 'Strategic Problem-Solving & Case Analysis',
      detail: 'Synthesising secondary research, policy documentation, and structured case methodologies into coherent governance recommendations.'
    }
  };

  const pillarBtns = document.querySelectorAll('.pillar-chip-btn');
  const pillarReadoutTitle = document.getElementById('pillarReadoutTitle');
  const pillarReadoutDetail = document.getElementById('pillarReadoutDetail');

  pillarBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const key = btn.getAttribute('data-pillar');
      pillarBtns.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      if (pillarData[key] && pillarReadoutTitle && pillarReadoutDetail) {
        pillarReadoutTitle.textContent = pillarData[key].title;
        pillarReadoutDetail.textContent = pillarData[key].detail;
      }
    });
  });

  // 7. Contemporary Achievement Gallery Filter
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const exhibitCards = document.querySelectorAll('.gallery-exhibit-card');

  filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const cat = btn.getAttribute('data-filter');
      filterBtns.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');

      exhibitCards.forEach(function(card) {
        const cardCat = card.getAttribute('data-category');
        if (cat === 'all' || cardCat === cat) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 8. Interactive Resume Modal & Custom Resume File Attachment
  const resumeModal = document.getElementById('resumeModal');
  const openResumeBtns = document.querySelectorAll('.js-open-resume');
  const closeResumeBtn = document.getElementById('closeResumeModal');
  const printResumeBtn = document.getElementById('printResumeBtn');
  const downloadResumeHtmlBtn = document.getElementById('downloadResumeHtmlBtn');
  const customResumeInput = document.getElementById('customResumeFileInput');
  const attachCustomResumeBtn = document.getElementById('attachCustomResumeBtn');
  let attachedResumeBlobUrl = null;
  let attachedResumeFileName = 'Kunal_Singh_Shekhawat_Resume.pdf';

  openResumeBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      if (resumeModal) resumeModal.classList.add('open');
    });
  });

  if (closeResumeBtn && resumeModal) {
    closeResumeBtn.addEventListener('click', function() {
      resumeModal.classList.remove('open');
    });
  }

  if (printResumeBtn) {
    printResumeBtn.addEventListener('click', function() {
      window.print();
    });
  }

  if (attachCustomResumeBtn && customResumeInput) {
    attachCustomResumeBtn.addEventListener('click', function() {
      customResumeInput.click();
    });
    customResumeInput.addEventListener('change', function(e) {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      if (attachedResumeBlobUrl) URL.revokeObjectURL(attachedResumeBlobUrl);
      attachedResumeBlobUrl = URL.createObjectURL(file);
      attachedResumeFileName = file.name;
      const statusEl = document.getElementById('customResumeStatus');
      if (statusEl) {
        statusEl.textContent = 'Attached custom file: ' + file.name + ' (Click Download to save)';
      }
    });
  }

  if (downloadResumeHtmlBtn) {
    downloadResumeHtmlBtn.addEventListener('click', function() {
      if (attachedResumeBlobUrl) {
        const a = document.createElement('a');
        a.href = attachedResumeBlobUrl;
        a.download = attachedResumeFileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        return;
      }
      const resumeContent = document.getElementById('printableResumeSheet');
      if (!resumeContent) return;
      const standaloneResumeHtml = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Kunal Singh Shekhawat — Resume</title><style>body{font-family:Georgia,serif;color:#142B45;background:#FAF7F0;max-width:840px;margin:32px auto;padding:32px;border:2px solid #142B45;line-height:1.55;}h1,h2,h3{color:#142B45;margin-bottom:6px;}hr{border:none;border-top:1px solid #142B45;margin:16px 0;}</style></head><body>' + resumeContent.innerHTML + '</body></html>';
      const blob = new Blob([standaloneResumeHtml], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Kunal_Singh_Shekhawat_Resume.html';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  }

  // 9. Source Code Studio Modal (View/Copy/Download index.html, style.css, editorial-style.css)
  const codeStudioModal = document.getElementById('codeStudioModal');
  const openCodeStudioBtns = document.querySelectorAll('.js-open-code-studio');
  const closeCodeStudioBtn = document.getElementById('closeCodeStudioModal');
  const codeTabBtns = document.querySelectorAll('.code-tab-btn');
  const codePreDisplay = document.getElementById('codePreDisplay');
  const copyCodeBtn = document.getElementById('copyCodeBtn');
  const downloadCurrentFileBtn = document.getElementById('downloadCurrentFileBtn');

  let activeCodeFile = 'index.html';

  function getEmbeddedSource(fileKey) {
    const scriptEl = document.getElementById('source-' + fileKey);
    return scriptEl ? scriptEl.textContent.trim() : '';
  }

  function renderCodeTab(fileKey) {
    activeCodeFile = fileKey;
    codeTabBtns.forEach(function(btn) {
      btn.classList.toggle('active', btn.getAttribute('data-file') === fileKey);
    });
    if (codePreDisplay) {
      codePreDisplay.textContent = getEmbeddedSource(fileKey);
    }
  }

  openCodeStudioBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      if (codeStudioModal) {
        codeStudioModal.classList.add('open');
        renderCodeTab(activeCodeFile);
      }
    });
  });

  if (closeCodeStudioBtn && codeStudioModal) {
    closeCodeStudioBtn.addEventListener('click', function() {
      codeStudioModal.classList.remove('open');
    });
  }

  codeTabBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      renderCodeTab(btn.getAttribute('data-file'));
    });
  });

  if (copyCodeBtn) {
    copyCodeBtn.addEventListener('click', function() {
      const text = getEmbeddedSource(activeCodeFile);
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        copyCodeBtn.textContent = 'Copied ' + activeCodeFile + '!';
        setTimeout(function() { copyCodeBtn.textContent = 'Copy File Code'; }, 2000);
      } catch (err) {
        copyCodeBtn.textContent = 'Copy Ready';
      }
      document.body.removeChild(textarea);
    });
  }

  if (downloadCurrentFileBtn) {
    downloadCurrentFileBtn.addEventListener('click', function() {
      const text = getEmbeddedSource(activeCodeFile);
      const mime = activeCodeFile.endsWith('.css') ? 'text/css' : 'text/html';
      const blob = new Blob([text], { type: mime });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = activeCodeFile;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  }

  // Close modals when clicking backdrop
  [resumeModal, codeStudioModal].forEach(function(modal) {
    if (!modal) return;
    modal.addEventListener('click', function(e) {
      if (e.target === modal) modal.classList.remove('open');
    });
  });
})();
