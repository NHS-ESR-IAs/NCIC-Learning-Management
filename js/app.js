/**
 * NCIC Learning & Development Management Hub - Application Script
 * ===============================================================
 * Handles dynamic rendering, instant live search, multi-filtering,
 * category accordions, bookmarking, modal guide viewer, and help drawers.
 */

(function () {
  'use strict';

  // --- State Management ---
  const state = {
    searchQuery: '',
    selectedFormat: 'all', // 'all' | 'Classroom' | 'Virtual Classroom' | 'e-Learning'
    selectedCategory: 'all',
    expandedCategories: new Set(),
    bookmarks: JSON.parse(localStorage.getItem('ncic_learning_bookmarks') || '[]'),
    theme: localStorage.getItem('ncic_theme') || 'light'
  };

  // --- DOM Elements ---
  const DOM = {
    // Search & Filters
    heroSearchInput: document.getElementById('heroSearchInput'),
    heroSearchClear: document.getElementById('heroSearchClear'),
    heroSearchBtn: document.getElementById('heroSearchBtn'),
    formatFilters: document.querySelectorAll('.format-filter-pill'),
    categoryJumpContainer: document.getElementById('categoryJumpContainer'),
    expandAllBtn: document.getElementById('expandAllBtn'),
    collapseAllBtn: document.getElementById('collapseAllBtn'),
    resultsStatusBar: document.getElementById('resultsStatusBar'),
    resultsCount: document.getElementById('resultsCount'),
    resultsResetBtn: document.getElementById('resultsResetBtn'),

    // Containers
    categoriesContainer: document.getElementById('categoriesContainer'),
    guidesContainer: document.getElementById('guidesContainer'),
    faqsContainer: document.getElementById('faqsContainer'),
    emptyState: document.getElementById('emptyState'),

    // Stats
    statTotalCourses: document.getElementById('statTotalCourses'),
    statTotalCategories: document.getElementById('statTotalCategories'),
    statTotalGuides: document.getElementById('statTotalGuides'),

    // Drawers & Modals
    helpDrawer: document.getElementById('helpDrawer'),
    helpDrawerBackdrop: document.getElementById('helpDrawerBackdrop'),
    btnHelpTrigger: document.getElementById('btnHelpTrigger'),
    btnHelpClose: document.getElementById('btnHelpClose'),
    waveClickTrigger: document.getElementById('waveClickTrigger'),

    bookmarksDrawer: document.getElementById('bookmarksDrawer'),
    bookmarksDrawerBackdrop: document.getElementById('bookmarksDrawerBackdrop'),
    btnBookmarksTrigger: document.getElementById('btnBookmarksTrigger'),
    btnBookmarksClose: document.getElementById('btnBookmarksClose'),
    bookmarksList: document.getElementById('bookmarksList'),
    bookmarkBadge: document.getElementById('bookmarkBadge'),
    btnClearBookmarks: document.getElementById('btnClearBookmarks'),

    guideModal: document.getElementById('guideModal'),
    guideModalBackdrop: document.getElementById('guideModalBackdrop'),
    guideModalTitle: document.getElementById('guideModalTitle'),
    guideModalIframe: document.getElementById('guideModalIframe'),
    btnGuideModalClose: document.getElementById('btnGuideModalClose'),

    themeToggleBtn: document.getElementById('themeToggleBtn'),
    toastNotification: document.getElementById('toastNotification')
  };

  // --- Initialization ---
  function init() {
    applyTheme(state.theme);
    updateStats();
    renderCategoryJumps();
    renderCategories();
    renderGuides();
    renderFaqs();
    updateBookmarkBadge();
    bindEvents();

    // Default: Expand first 2 categories on initial load
    if (CATEGORIES_DATA.length > 0) {
      state.expandedCategories.add(CATEGORIES_DATA[0].id);
      if (CATEGORIES_DATA.length > 1) {
        state.expandedCategories.add(CATEGORIES_DATA[1].id);
      }
      refreshCategoryExpansion();
    }
  }

  // --- Theme Management ---
  function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('ncic_theme', theme);
    if (DOM.themeToggleBtn) {
      DOM.themeToggleBtn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
      DOM.themeToggleBtn.setAttribute('title', theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
    }
  }

  function toggleTheme() {
    applyTheme(state.theme === 'dark' ? 'light' : 'dark');
  }

  // --- Stats Bar ---
  function updateStats() {
    const totalCourses = CATEGORIES_DATA.reduce((acc, cat) => acc + (cat.courses ? cat.courses.length : 0), 0);
    if (DOM.statTotalCourses) DOM.statTotalCourses.textContent = totalCourses;
    if (DOM.statTotalCategories) DOM.statTotalCategories.textContent = CATEGORIES_DATA.length;
    if (DOM.statTotalGuides) DOM.statTotalGuides.textContent = GUIDES_DATA.length;
  }

  // --- Category Quick Jump Bar ---
  function renderCategoryJumps() {
    if (!DOM.categoryJumpContainer) return;
    let html = `<a href="#catalogue" class="jump-pill active" data-cat-filter="all">All Categories</a>`;
    CATEGORIES_DATA.forEach(cat => {
      html += `<a href="#${cat.id}" class="jump-pill" data-cat-filter="${cat.id}">${cat.name} (${cat.courses.length})</a>`;
    });
    DOM.categoryJumpContainer.innerHTML = html;

    DOM.categoryJumpContainer.querySelectorAll('.jump-pill').forEach(pill => {
      pill.addEventListener('click', function (e) {
        const catFilter = this.getAttribute('data-cat-filter');
        DOM.categoryJumpContainer.querySelectorAll('.jump-pill').forEach(p => p.classList.remove('active'));
        this.classList.add('active');

        if (catFilter !== 'all') {
          // Open target category accordion and scroll
          state.expandedCategories.add(catFilter);
          refreshCategoryExpansion();
        }
      });
    });
  }

  // --- Render Categories & Courses ---
  function renderCategories() {
    if (!DOM.categoriesContainer) return;

    const query = state.searchQuery.toLowerCase().trim();
    let totalMatchingCourses = 0;
    let totalMatchingCategories = 0;

    let html = '';

    CATEGORIES_DATA.forEach(cat => {
      // Filter courses in this category
      const matchingCourses = cat.courses.filter(course => {
        // Format filter
        if (state.selectedFormat !== 'all') {
          if (course.delivery_type.toLowerCase() !== state.selectedFormat.toLowerCase()) {
            return false;
          }
        }
        // Search query filter
        if (query) {
          const matchTitle = course.title.toLowerCase().includes(query);
          const matchCat = cat.name.toLowerCase().includes(query);
          const matchType = course.delivery_type.toLowerCase().includes(query);
          return matchTitle || matchCat || matchType;
        }
        return true;
      });

      if (matchingCourses.length === 0 && (query || state.selectedFormat !== 'all')) {
        return; // Skip empty category when filtering
      }

      totalMatchingCategories++;
      totalMatchingCourses += matchingCourses.length;

      const isExpanded = state.expandedCategories.has(cat.id) || query.length > 0;
      const catColor = cat.color || '#005EB8';
      const catBg = hexToLightBg(catColor);

      html += `
        <div class="category-card ${isExpanded ? '' : 'collapsed'}" id="${cat.id}" style="--cat-color: ${catColor}; --cat-bg: ${catBg};">
          <div class="category-header" role="button" tabindex="0" data-cat-toggle="${cat.id}" aria-expanded="${isExpanded}">
            <div class="category-title-group">
              <span class="category-icon">${getCategoryEmoji(cat.name)}</span>
              <h3 class="category-title">${cat.name}</h3>
              <span class="category-count-badge">${matchingCourses.length} ${matchingCourses.length === 1 ? 'course' : 'courses'}</span>
            </div>
            <span class="category-toggle-icon">▼</span>
          </div>
          <div class="category-body">
            <div class="courses-grid">
              ${matchingCourses.map(course => renderCourseCard(course, cat)).join('')}
            </div>
          </div>
        </div>
      `;
    });

    DOM.categoriesContainer.innerHTML = html;

    // Update Results Bar
    if (query || state.selectedFormat !== 'all') {
      DOM.resultsStatusBar.style.display = 'flex';
      DOM.resultsCount.innerHTML = `Showing <span>${totalMatchingCourses}</span> courses across <span>${totalMatchingCategories}</span> categories`;
    } else {
      DOM.resultsStatusBar.style.display = 'none';
    }

    // Show Empty State if 0 matches
    if (totalMatchingCourses === 0) {
      DOM.emptyState.style.display = 'block';
    } else {
      DOM.emptyState.style.display = 'none';
    }

    bindCategoryHeaderEvents();
    bindCourseCardEvents();
  }

  function renderCourseCard(course, cat) {
    const isBookmarked = state.bookmarks.some(b => b.id === course.id);
    const formatClass = getFormatClass(course.delivery_type);
    const highlightedTitle = highlightMatch(course.title, state.searchQuery);

    return `
      <div class="course-card" id="${course.id}">
        <div class="course-card-top">
          <span class="format-badge ${formatClass}">
            ${getFormatIcon(course.delivery_type)} ${course.delivery_type}
          </span>
          <span class="course-code-tag">${cat.name.split(' ')[0]}</span>
        </div>
        <div class="course-title">${highlightedTitle}</div>
        <div class="course-card-actions">
          <a href="${course.url}" target="_blank" rel="noopener noreferrer" class="btn-book-esr" title="Launch course enrollment in ESR">
            <span>Book / Launch in ESR</span> ↗
          </a>
          <button class="btn-bookmark ${isBookmarked ? 'bookmarked' : ''}" data-bookmark-id="${course.id}" title="${isBookmarked ? 'Remove from My Bookmarks' : 'Save to My Bookmarks'}">
            ${isBookmarked ? '★' : '☆'}
          </button>
        </div>
      </div>
    `;
  }

  function getFormatClass(type) {
    const t = (type || '').toLowerCase();
    if (t.includes('virtual') || t.includes('teams')) return 'virtual';
    if (t.includes('e-learning') || t.includes('elearning')) return 'elearning';
    return 'classroom';
  }

  function getFormatIcon(type) {
    const t = (type || '').toLowerCase();
    if (t.includes('virtual') || t.includes('teams')) return '💻';
    if (t.includes('e-learning') || t.includes('elearning')) return '🖥️';
    return '👥';
  }

  function getCategoryEmoji(name) {
    const emojis = {
      'Clinical Skills': '🩺',
      'Equality, Diversity and Inclusion': '🤝',
      'Health and Safety': '🛡️',
      'People Management Courses': '👥',
      'Learning and Development': '🎓',
      'Leadership 3,2,1': '🏆',
      'Moving and Handling': '♿',
      'Preceptorship': '🧭',
      'Safeguarding': '🦺',
      'Wound Management': '🩹',
      'Governance': '📋',
      'Health and Wellbeing': '🧘',
      'Vaccination and Immunisation': '💉'
    };
    return emojis[name] || '📚';
  }

  function hexToLightBg(hex) {
    // Soft fallback background tint
    if (!hex || !hex.startsWith('#')) return '#F8FAFC';
    return hex + '12'; // 7% opacity
  }

  function highlightMatch(text, query) {
    if (!query || !query.trim()) return text;
    const cleanQuery = query.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${cleanQuery})`, 'gi');
    return text.replace(regex, '<mark style="background-color: #FEF08A; color: #854D0E; padding: 0 2px; border-radius: 2px;">$1</mark>');
  }

  // --- Render Guides ---
  function renderGuides() {
    if (!DOM.guidesContainer) return;
    let html = '';
    GUIDES_DATA.forEach((guide, index) => {
      const isPdf = guide.type === 'pdf' || guide.url.toLowerCase().includes('.pdf');
      html += `
        <div class="guide-card">
          <div class="guide-badge-row">
            <span class="guide-badge ${isPdf ? 'pdf' : 'interactive'}">
              ${isPdf ? '📄 PDF Document' : '⚡ Interactive Scribe Guide'}
            </span>
          </div>
          <div class="guide-title">${guide.title}</div>
          <div class="guide-actions">
            ${
              isPdf
                ? `<a href="${guide.url}" target="_blank" rel="noopener noreferrer" class="btn-guide-preview" style="background: var(--nhs-blue);">
                     <span>Open PDF Guide</span> ↗
                   </a>`
                : `<button class="btn-guide-preview" data-guide-url="${guide.url}" data-guide-title="${guide.title}">
                     <span>▶ Interactive Walkthrough</span>
                   </button>
                   <a href="${guide.url}" target="_blank" rel="noopener noreferrer" class="btn-guide-external" title="Open in new window">↗</a>`
            }
          </div>
        </div>
      `;
    });
    DOM.guidesContainer.innerHTML = html;

    // Attach click for interactive guide modal
    DOM.guidesContainer.querySelectorAll('.btn-guide-preview[data-guide-url]').forEach(btn => {
      btn.addEventListener('click', function () {
        const url = this.getAttribute('data-guide-url');
        const title = this.getAttribute('data-guide-title');
        openGuideModal(url, title);
      });
    });
  }

  // --- Render FAQs ---
  function renderFaqs() {
    if (!DOM.faqsContainer) return;
    let html = '';
    FAQS_DATA.forEach((faq, index) => {
      html += `
        <div class="faq-item" id="faq-${index + 1}">
          <button class="faq-question-btn" data-faq-toggle="faq-${index + 1}" aria-expanded="false">
            <span>${faq.question}</span>
            <span class="faq-icon">▼</span>
          </button>
          <div class="faq-answer">
            ${faq.answer}
          </div>
        </div>
      `;
    });
    DOM.faqsContainer.innerHTML = html;

    DOM.faqsContainer.querySelectorAll('.faq-question-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        const parent = this.closest('.faq-item');
        const isOpen = parent.classList.contains('open');
        // Toggle current
        parent.classList.toggle('open', !isOpen);
        this.setAttribute('aria-expanded', !isOpen);
      });
    });
  }

  // --- ScribeHow Modal ---
  function openGuideModal(url, title) {
    if (!DOM.guideModal) return;
    DOM.guideModalTitle.textContent = title || 'Interactive Guide';
    // Embed iframe
    const embedUrl = url.includes('/embed/') ? url : url.replace('/shared/', '/embed/');
    DOM.guideModalIframe.src = embedUrl;
    DOM.guideModal.classList.add('open');
    DOM.guideModalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeGuideModal() {
    if (!DOM.guideModal) return;
    DOM.guideModalIframe.src = 'about:blank';
    DOM.guideModal.classList.remove('open');
    DOM.guideModalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  // --- Sidenav Help Drawer ---
  function openHelpDrawer() {
    DOM.helpDrawer.classList.add('open');
    DOM.helpDrawerBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeHelpDrawer() {
    DOM.helpDrawer.classList.remove('open');
    DOM.helpDrawerBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  // --- Bookmarks Drawer ---
  function openBookmarksDrawer() {
    renderBookmarksList();
    DOM.bookmarksDrawer.classList.add('open');
    DOM.bookmarksDrawerBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeBookmarksDrawer() {
    DOM.bookmarksDrawer.classList.remove('open');
    DOM.bookmarksDrawerBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  function toggleBookmark(courseId) {
    // Find course across categories
    let targetCourse = null;
    let targetCategory = null;
    for (const cat of CATEGORIES_DATA) {
      const match = cat.courses.find(c => c.id === courseId);
      if (match) {
        targetCourse = match;
        targetCategory = cat;
        break;
      }
    }

    if (!targetCourse) return;

    const existingIndex = state.bookmarks.findIndex(b => b.id === courseId);
    if (existingIndex >= 0) {
      state.bookmarks.splice(existingIndex, 1);
      showToast(`Removed "${targetCourse.title.substring(0, 30)}..." from bookmarks`);
    } else {
      state.bookmarks.push({
        id: targetCourse.id,
        title: targetCourse.title,
        url: targetCourse.url,
        delivery_type: targetCourse.delivery_type,
        category: targetCategory.name
      });
      showToast(`Saved "${targetCourse.title.substring(0, 30)}..." to bookmarks!`);
    }

    localStorage.setItem('ncic_learning_bookmarks', JSON.stringify(state.bookmarks));
    updateBookmarkBadge();
    renderCategories();
    renderBookmarksList();
  }

  function updateBookmarkBadge() {
    if (DOM.bookmarkBadge) {
      DOM.bookmarkBadge.textContent = state.bookmarks.length;
      DOM.bookmarkBadge.style.display = state.bookmarks.length > 0 ? 'inline-flex' : 'none';
    }
  }

  function renderBookmarksList() {
    if (!DOM.bookmarksList) return;
    if (state.bookmarks.length === 0) {
      DOM.bookmarksList.innerHTML = `
        <div style="text-align:center; padding: 2rem 1rem; color: var(--text-muted);">
          <p style="font-size: 2rem; margin-bottom: 0.5rem;">☆</p>
          <p>You have not saved any courses yet.</p>
          <p style="font-size: 0.8rem; margin-top: 0.5rem;">Click the star icon next to any course in the catalogue to save it here for quick access.</p>
        </div>
      `;
      return;
    }

    let html = '';
    state.bookmarks.forEach(item => {
      html += `
        <li class="bookmark-item">
          <div>
            <span class="format-badge ${getFormatClass(item.delivery_type)}" style="font-size: 0.65rem; margin-bottom: 0.35rem;">
              ${getFormatIcon(item.delivery_type)} ${item.delivery_type}
            </span>
            <div class="bookmark-item-title">${item.title}</div>
            <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="btn-book-esr" style="margin-top: 0.5rem; display: inline-flex; padding: 0.35rem 0.75rem; font-size: 0.75rem;">
              Launch in ESR ↗
            </a>
          </div>
          <button class="bookmark-item-remove" data-remove-bookmark="${item.id}" title="Remove">✕</button>
        </li>
      `;
    });
    DOM.bookmarksList.innerHTML = html;

    DOM.bookmarksList.querySelectorAll('[data-remove-bookmark]').forEach(btn => {
      btn.addEventListener('click', function () {
        const id = this.getAttribute('data-remove-bookmark');
        toggleBookmark(id);
      });
    });
  }

  // --- Category Card Events ---
  function bindCategoryHeaderEvents() {
    document.querySelectorAll('[data-cat-toggle]').forEach(header => {
      header.addEventListener('click', function () {
        const catId = this.getAttribute('data-cat-toggle');
        const parent = document.getElementById(catId);
        if (!parent) return;

        if (state.expandedCategories.has(catId)) {
          state.expandedCategories.delete(catId);
          parent.classList.add('collapsed');
          this.setAttribute('aria-expanded', 'false');
        } else {
          state.expandedCategories.add(catId);
          parent.classList.remove('collapsed');
          this.setAttribute('aria-expanded', 'true');
        }
      });

      header.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.click();
        }
      });
    });
  }

  function bindCourseCardEvents() {
    document.querySelectorAll('.btn-bookmark[data-bookmark-id]').forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        const id = this.getAttribute('data-bookmark-id');
        toggleBookmark(id);
      });
    });
  }

  function refreshCategoryExpansion() {
    CATEGORIES_DATA.forEach(cat => {
      const el = document.getElementById(cat.id);
      if (!el) return;
      const isExp = state.expandedCategories.has(cat.id);
      el.classList.toggle('collapsed', !isExp);
      const hdr = el.querySelector('.category-header');
      if (hdr) hdr.setAttribute('aria-expanded', isExp ? 'true' : 'false');
    });
  }

  // --- Toast Notification ---
  let toastTimer = null;
  function showToast(message) {
    if (!DOM.toastNotification) return;
    DOM.toastNotification.textContent = message;
    DOM.toastNotification.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      DOM.toastNotification.classList.remove('show');
    }, 3200);
  }

  // --- Global Event Bindings ---
  function bindEvents() {
    // Live Search
    if (DOM.heroSearchInput) {
      let debounceTimer = null;
      DOM.heroSearchInput.addEventListener('input', function () {
        const val = this.value;
        state.searchQuery = val;
        if (DOM.heroSearchClear) {
          DOM.heroSearchClear.style.display = val.length > 0 ? 'inline-flex' : 'none';
        }
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          renderCategories();
        }, 150);
      });
    }

    if (DOM.heroSearchClear) {
      DOM.heroSearchClear.addEventListener('click', function () {
        DOM.heroSearchInput.value = '';
        state.searchQuery = '';
        this.style.display = 'none';
        renderCategories();
        DOM.heroSearchInput.focus();
      });
    }

    if (DOM.resultsResetBtn) {
      DOM.resultsResetBtn.addEventListener('click', function () {
        if (DOM.heroSearchInput) DOM.heroSearchInput.value = '';
        if (DOM.heroSearchClear) DOM.heroSearchClear.style.display = 'none';
        state.searchQuery = '';
        state.selectedFormat = 'all';
        DOM.formatFilters.forEach(pill => {
          pill.classList.toggle('active', pill.getAttribute('data-format') === 'all');
        });
        renderCategories();
      });
    }

    // Format Filter Pills
    DOM.formatFilters.forEach(pill => {
      pill.addEventListener('click', function () {
        const format = this.getAttribute('data-format');
        state.selectedFormat = format;
        DOM.formatFilters.forEach(p => p.classList.remove('active'));
        this.classList.add('active');
        renderCategories();
      });
    });

    // Expand All / Collapse All
    if (DOM.expandAllBtn) {
      DOM.expandAllBtn.addEventListener('click', function () {
        CATEGORIES_DATA.forEach(cat => state.expandedCategories.add(cat.id));
        refreshCategoryExpansion();
      });
    }

    if (DOM.collapseAllBtn) {
      DOM.collapseAllBtn.addEventListener('click', function () {
        state.expandedCategories.clear();
        refreshCategoryExpansion();
      });
    }

    // Drawer Triggers
    if (DOM.btnHelpTrigger) DOM.btnHelpTrigger.addEventListener('click', openHelpDrawer);
    if (DOM.btnHelpClose) DOM.btnHelpClose.addEventListener('click', closeHelpDrawer);
    if (DOM.helpDrawerBackdrop) DOM.helpDrawerBackdrop.addEventListener('click', closeHelpDrawer);
    if (DOM.waveClickTrigger) DOM.waveClickTrigger.addEventListener('click', openHelpDrawer);

    if (DOM.btnBookmarksTrigger) DOM.btnBookmarksTrigger.addEventListener('click', openBookmarksDrawer);
    if (DOM.btnBookmarksClose) DOM.btnBookmarksClose.addEventListener('click', closeBookmarksDrawer);
    if (DOM.bookmarksDrawerBackdrop) DOM.bookmarksDrawerBackdrop.addEventListener('click', closeBookmarksDrawer);

    if (DOM.btnClearBookmarks) {
      DOM.btnClearBookmarks.addEventListener('click', function () {
        if (confirm('Clear all saved bookmarks?')) {
          state.bookmarks = [];
          localStorage.removeItem('ncic_learning_bookmarks');
          updateBookmarkBadge();
          renderCategories();
          renderBookmarksList();
          showToast('Bookmarks cleared');
        }
      });
    }

    // Modal Triggers
    if (DOM.btnGuideModalClose) DOM.btnGuideModalClose.addEventListener('click', closeGuideModal);
    if (DOM.guideModalBackdrop) {
      DOM.guideModalBackdrop.addEventListener('click', function (e) {
        if (e.target === DOM.guideModalBackdrop) closeGuideModal();
      });
    }

    // Theme Toggle
    if (DOM.themeToggleBtn) DOM.themeToggleBtn.addEventListener('click', toggleTheme);

    // Keyboard ESC to close any drawer or modal
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeHelpDrawer();
        closeBookmarksDrawer();
        closeGuideModal();
      }
    });
  }

  // --- Expose for external access / debugging ---
  window.NCICApp = {
    state,
    openHelpDrawer,
    closeHelpDrawer,
    openBookmarksDrawer,
    closeBookmarksDrawer,
    openGuideModal,
    closeGuideModal
  };

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
