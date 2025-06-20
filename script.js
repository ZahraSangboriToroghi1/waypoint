function updatePageTitle() {
  const currentPath = window.location.pathname;
  const currentPage = currentPath.split('/').pop() || 'dashboard.html';

  const translations = {
    'page-title': {
      'index.html': 'Login/Signup',
      'dashboard.html': 'Dashboard',
      'editor.html': 'Frontend Editor',
      'gallery.html': 'Frontend Generator',
      'integrations.html': 'Email Integrations',
      'settings.html': 'Settings',
      'profile.html': 'Profile',
    },
    'dashboard-title': 'Dashboard',
    'editor-title': 'Frontend Editor',
    'gallery-title': 'Frontend Generator',
    'integrations-title': 'Email Integrations',
    'settings-title': 'Settings',
    'profile-title': 'Profile',
    'dashboard-menu': 'Dashboard',
    'editor-menu': 'Frontend Editor',
    'gallery-menu': 'Frontend Generator',
    'integrations-menu': 'Email Integrations',
    'settings-menu': 'Settings',
    'profile-link': 'Profile',
    'logout-link': 'Logout',
    'stats-frontends': 'Number of Frontends: 10',
    'stats-emails': 'Emails Sent: 150',
    'stats-open-rate': 'Open Rate: 65%',
    'create-frontend-btn': 'Create New Frontend',
    'view-gallery-btn': 'View Gallery',
    'connect-service-btn': 'Connect New Service',
    'recent-activity-title': 'Recent Activity',
    'campaign-reports-title': 'Campaign Reports',
    'select-frontend-btn': 'Select Frontend',
    'integrations-desc': 'Connect to email services',
    'settings-font-title': 'Custom Fonts',
    'upload-font': 'Upload Font',
    'settings-colors-label': 'Color Palette',
    'settings-email-notifications-label': 'Email Notifications',
    'settings-campaign-notifications-label': 'Campaign Notifications',
    'settings-api-key-label': 'Default API Key',
    'elements-title': 'Elements',
    'drag-here': 'Drag elements here',
    'preview-title': 'Preview',
    'search-frontend': 'Search frontends...',
    'category-filter-all': 'All',
    'category-filter-promotional': 'Promotional',
    'category-filter-onboarding': 'Onboarding',
    'category-filter-newsletter': 'Newsletter',
    'category-filter-event': 'Event',
    'category-filter-transactional': 'Transactional',
    'sort-filter-newest': 'Newest',
    'sort-filter-popular': 'Popular',
    'sort-filter-alphabetical': 'Alphabetical',
    'generate-frontend-btn': 'Smart Frontend Generation',
    'suggest-content-btn': 'Content Suggestions',
    'spam-analysis-btn': 'Spam Analysis',
    'image-edit-btn': 'Advanced Image Editing',
    'branding-btn': 'Smart Branding',
    'layout-btn': 'Layout Suggestions',
    'save-btn': 'Save',
    'export-html-btn': 'Export HTML',
    'preview-mode-desktop': 'Desktop',
    'preview-mode-tablet': 'Tablet',
    'preview-mode-mobile': 'Mobile',
    'preview-mode-gmail': 'Email',
    'multi-preview-btn': 'Multi-Device Preview',
    'header-menu-dashboard': 'Dashboard',
    'header-menu-editor': 'Frontend Editor',
    'header-menu-gallery': 'Frontend Generator',
    'header-menu-integrations': 'Email Integrations',
    'header-menu-settings': 'Settings'
  };

  const pageTitle = translations['page-title'][currentPage] || 'Dashboard';
  const pageTitleElement = document.getElementById('page-title');
  if (pageTitleElement) {
    pageTitleElement.textContent = pageTitle;
  }

  const elements = document.querySelectorAll('[id]');
  elements.forEach(el => {
    const id = el.id;
    if (translations[id]) {
      el.textContent = translations[id];
    }
    if (id === 'search-frontend') {
      el.placeholder = translations[id];
    }
  });

  const headerMenuItems = document.querySelectorAll('.header-menu-item');
  headerMenuItems.forEach(item => {
    const href = item.getAttribute('href').split('/').pop();
    const pageKey = href || 'dashboard.html';
    const menuId = `header-menu-${pageKey.split('.')[0]}`;
    item.textContent = translations[menuId] || item.textContent;
  });

  const categoryFilter = document.getElementById('category-filter');
  if (categoryFilter) {
    categoryFilter.innerHTML = `
      <option value="all">${translations['category-filter-all']}</option>
      <option value="promotional">${translations['category-filter-promotional']}</option>
      <option value="onboarding">${translations['category-filter-onboarding']}</option>
      <option value="newsletter">${translations['category-filter-newsletter']}</option>
      <option value="event">${translations['category-filter-event']}</option>
      <option value="transactional">${translations['category-filter-transactional']}</option>
    `;
  }

  const sortFilter = document.getElementById('sort-filter');
  if (sortFilter) {
    sortFilter.innerHTML = `
      <option value="newest">${translations['sort-filter-newest']}</option>
      <option value="popular">${translations['sort-filter-popular']}</option>
      <option value="alphabetical">${translations['sort-filter-alphabetical']}</option>
    `;
  }

  const previewMode = document.getElementById('preview-mode');
  if (previewMode) {
    previewMode.innerHTML = `
      <option value="desktop">${translations['preview-mode-desktop']}</option>
      <option value="tablet">${translations['preview-mode-tablet']}</option>
      <option value="mobile">${translations['preview-mode-mobile']}</option>
      <option value="gmail">${translations['preview-mode-gmail']}</option>
    `;
  }

  if (document.getElementById('upload-font')) {
    document.getElementById('upload-font').value = '';
    document.getElementById('upload-font').nextElementSibling.textContent = translations['upload-font'];
  }
}

function handleLogin(event) {
  event.preventDefault();
  window.location.href = 'C:/Users/zahra/waypoint/editor.html';
}

function handleSignup(event) {
  event.preventDefault();
  window.location.href = 'C:/Users/zahra/waypoint/editor.html';
}

function toggleHeaderMenu() {
  const headerMenuContent = document.getElementById('header-menu-content');
  headerMenuContent.classList.toggle('active');
}

function showTab(tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  const buttons = document.querySelectorAll('.tab-button');
  tabs.forEach(tab => tab.classList.remove('active'));
  buttons.forEach(button => button.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  buttons[tabId === 'login' ? 0 : 1].classList.add('active');
}

function showModal(title, content) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-body').textContent = content;
  document.getElementById('modal-options').style.display = 'none';
  document.getElementById('modal-input').style.display = title.includes('Enter campaign') ? 'block' : 'none';
  document.getElementById('modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

function showAIGenerateModal() {
  document.getElementById('modal-title').textContent = 'Smart Frontend Generation';
  document.getElementById('modal-body').innerHTML = `
    <label>Campaign Goal:</label>
    <select id="campaign-goal">
      <option value="sales">Sales</option>
      <option value="welcome">Welcome</option>
      <option value="event">Event</option>
    </select>
  `;
  document.getElementById('modal-options').style.display = 'block';
  document.getElementById('modal-input').style.display = 'none';
  document.getElementById('modal').style.display = 'block';
}

function showAIContentModal() {
  document.getElementById('modal-title').textContent = 'Content Suggestions';
  document.getElementById('modal-body').innerHTML = `
    <label>Content Type:</label>
    <select id="content-type">
      <option value="header">Header</option>
      <option value="body">Body</option>
      <option value="cta">CTA</option>
    </select>
    <label>Tone:</label>
    <select id="content-tone">
      <option value="formal">Formal</option>
      <option value="friendly">Friendly</option>
    </select>
    <label>Grammar Check:</label>
    <input type="checkbox" id="grammar-check">
  `;
  document.getElementById('modal-options').style.display = 'block';
  document.getElementById('modal-input').style.display = 'none';
  document.getElementById('modal').style.display = 'block';
}

function showAISpamAnalysisModal() {
  document.getElementById('modal-title').textContent = 'Spam Analysis';
  document.getElementById('modal-body').innerHTML = `
    <p>Spam Score: 3/10</p>
    <p>Improvement Tips:</p>
    <ul>
      <li>Reduce the number of links</li>
      <li>Use fewer spammy words</li>
      <li>Shorten email length</li>
    </ul>
  `;
  document.getElementById('modal-options').style.display = 'none';
  document.getElementById('modal-input').style.display = 'none';
  document.getElementById('modal').style.display = 'block';
}

function showAIImageEditModal() {
  document.getElementById('modal-title').textContent = 'Advanced Image Editing';
  document.getElementById('modal-body').innerHTML = `
    <label>Upload Image:</label>
    <input type="file" id="image-upload">
    <label>Action:</label>
    <select id="image-action">
      <option value="crop">Crop</option>
      <option value="filter">Filter</option>
      <option value="add-text">Add Text</option>
      <option value="remove-bg">Remove Background</option>
    </select>
  `;
  document.getElementById('modal-options').style.display = 'block';
  document.getElementById('modal-input').style.display = 'none';
  document.getElementById('modal').style.display = 'block';
}

function showAIBrandingModal() {
  document.getElementById('modal-title').textContent = 'Smart Branding';
  document.getElementById('modal-body').innerHTML = `
    <label>Suggested Color Palette:</label>
    <input type="color" value="#52C41A">
    <input type="color" value="#FA8C16">
    <label>Suggested Font:</label>
    <select id="font-select">
      <option>Arial</option>
      <option>Helvetica</option>
    </select>
    <p>Preview:</p>
    <div style="background-color: #52C41A; color: #FFFFFF; padding: 10px;">Sample Text</div>
  `;
  document.getElementById('modal-options').style.display = 'block';
  document.getElementById('modal-input').style.display = 'none';
  document.getElementById('modal').style.display = 'block';
}

function showAILayoutModal() {
  document.getElementById('modal-title').textContent = 'Layout Suggestions';
  document.getElementById('modal-body').innerHTML = `
    <label>Email Type:</label>
    <select id="email-type">
      <option value="promotional">Promotional</option>
      <option value="welcome">Welcome</option>
      <option value="newsletter">Newsletter</option>
    </select>
    <p>Suggested Layout:</p>
    <ul>
      <li>Place CTA at the top</li>
      <li>Add hero image below CTA</li>
      <li>Include text content at the bottom</li>
    </ul>
  `;
  document.getElementById('modal-options').style.display = 'block';
  document.getElementById('modal-input').style.display = 'none';
  document.getElementById('modal').style.display = 'block';
}

function showMultiPreviewModal() {
  document.getElementById('modal-title').textContent = 'Multi-Device Preview';
  document.getElementById('modal-body').innerHTML = `
    <div style="display: flex; gap: 20px; flex-wrap: wrap;">
      <div style="width: 600px; border: 1px solid #E8E8E8; padding: 10px;">
        <h4>Desktop</h4>
        <div id="preview-desktop">${document.getElementById('canvas-content').innerHTML}</div>
      </div>
      <div style="width: 500px; border: 1px solid #E8E8E8; padding: 10px;">
        <h4>Tablet</h4>
        <div id="preview-tablet">${document.getElementById('canvas-content').innerHTML}</div>
      </div>
      <div style="width: 375px; border: 1px solid #E8E8E8; padding: 10px;">
        <h4>Mobile</h4>
        <div id="preview-mobile">${document.getElementById('canvas-content').innerHTML}</div>
      </div>
      <div style="width: 600px; border: 1px solid #E8E8E8; padding: 10px;">
        <h4>Email</h4>
        <div id="preview-gmail">${document.getElementById('canvas-content').innerHTML}</div>
      </div>
    </div>
  `;
  document.getElementById('modal-options').style.display = 'none';
  document.getElementById('modal-input').style.display = 'none';
  document.getElementById('modal').style.display = 'block';
}

function handleModalAction() {
  const title = document.getElementById('modal-title').textContent;
  const canvasContent = document.getElementById('canvas-content');
  const element = document.createElement('div');
  element.className = 'canvas-element';
  element.draggable = true;
  element.ondragstart = drag;

  if (title.includes('Smart Frontend Generation')) {
    const goal = document.getElementById('campaign-goal').value;
    element.innerHTML = `Suggested Element: ${
      goal === 'sales' ? 'Sales Button' :
      goal === 'welcome' ? 'Welcome Text' :
      'Event Invitation'
    }<button class="btn-remove" onclick="this.parentElement.remove()">Remove</button>`;
  } else if (title.includes('Content Suggestions')) {
    const type = document.getElementById('content-type').value;
    const tone = document.getElementById('content-tone').value;
    element.innerHTML = `Suggested Content: ${
      type === 'header' ? 'Catchy Header' :
      type === 'body' ? 'Body Text' :
      'Call to Action'
    } (${tone})<button class="btn-remove" onclick="this.parentElement.remove()">Remove</button>`;
  } else if (title.includes('Advanced Image Editing')) {
    const action = document.getElementById('image-action').value;
    element.innerHTML = `Image (${action})<button class="btn-remove" onclick="this.parentElement.remove()">Remove</button>`;
  } else if (title.includes('Smart Branding')) {
    const font = document.getElementById('font-select').value;
    element.style.fontFamily = font;
    element.innerHTML = `Branded Text (Font: ${font})<button class="btn-remove" onclick="this.parentElement.remove()">Remove</button>`;
  } else if (title.includes('Layout Suggestions')) {
    const type = document.getElementById('email-type').value;
    element.innerHTML = `Layout: ${type} (CTA at top)<button class="btn-remove" onclick="this.parentElement.remove()">Remove</button>`;
  }

  canvasContent.appendChild(element);
  document.getElementById('drag-here').style.display = 'none';
  updatePreviewContent();
  closeModal();
}

function showPreviewModal(title, content) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-body').textContent = content;
  document.getElementById('modal-options').style.display = 'block';
  document.getElementById('modal').style.display = 'block';
}

function closePreviewModal() {
  document.getElementById('modal').style.display = 'none';
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  const element = document.createElement('div');
  element.className = 'canvas-element';
  element.draggable = true;
  element.ondragstart = drag;

  if (data === 'slider') {
    element.innerHTML = `
      <div class="slider-container">
        <img src="https://via.placeholder.com/600x200?text=Slide+1" class="active">
        <img src="https://via.placeholder.com/600x200?text=Slide+2">
        <img src="https://via.placeholder.com/600x200?text=Slide+3">
      </div>
      <button class="btn-remove" onclick="this.parentElement.remove()">Remove</button>
    `;
    setInterval(() => {
      const slides = element.querySelectorAll('img');
      let activeIndex = 0;
      slides.forEach((slide, index) => {
        if (slide.classList.contains('active')) activeIndex = index;
        slide.classList.remove('active');
      });
      slides[(activeIndex + 1) % slides.length].classList.add('active');
    }, 3000);
  } else {
    element.innerHTML = document.getElementById(data).textContent + `<button class="btn-remove" onclick="this.parentElement.remove()">Remove</button>`;
  }

  document.getElementById('canvas-content').appendChild(element);
  document.getElementById('drag-here').style.display = 'none';
  updatePreviewContent();
}

function updatePreview() {
  const mode = document.getElementById('preview-mode').value;
  const previewSection = document.getElementById('preview-section');
  previewSection.style.maxWidth = mode === 'mobile' ? '375px' : mode === 'tablet' ? '500px' : mode === 'gmail' ? '600px' : '600px';
  if (mode === 'gmail') {
    previewSection.style.fontFamily = 'Arial, sans-serif';
    previewSection.style.padding = '10px';
    previewSection.style.backgroundColor = '#F5F5F5';
  }
  updatePreviewContent();
}

function updatePreviewContent() {
  const canvasContent = document.getElementById('canvas-content').innerHTML;
  document.getElementById('preview-content').innerHTML = canvasContent;
}

function filterFrontends() {
  const search = document.getElementById('search-frontend').value.toLowerCase();
  const category = document.getElementById('category-filter').value;
  const sort = document.getElementById('sort-filter').value;
  const cards = document.querySelectorAll('.gallery .card');

  let filteredCards = Array.from(cards).filter(card => {
    const title = card.querySelector('h4').textContent.toLowerCase();
    return (category === 'all' || card.querySelector('h4').textContent.includes(category)) && title.includes(search);
  });

  if (sort === 'alphabetical') {
    filteredCards.sort((a, b) => a.querySelector('h4').textContent.localeCompare(b.querySelector('h4').textContent));
  } else if (sort === 'popular') {
    filteredCards.sort((a, b) => b.querySelector('h4').textContent.length - a.querySelector('h4').textContent.length);
  }

  cards.forEach(card => card.style.display = 'none');
  filteredCards.forEach(card => card.style.display = 'block');
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
}

function saveCanvas() {
  const canvasContent = document.getElementById('canvas-content').innerHTML;
  localStorage.setItem('savedFrontend', canvasContent);
  alert('Frontend saved!');
}

function exportHTML() {
  const canvasContent = document.getElementById('canvas-content').innerHTML;
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Email Frontend</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
        .canvas-element { border: 1px solid #E8E8E8; padding: 15px; margin-bottom: 20px; }
        .slider-container img { width: 100%; }
      </style>
    </head>
    <body>
      ${canvasContent}
    </body>
    </html>
  `;
  const blob = new Blob([html], { type: 'text/html' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'frontend.html';
  link.click();
}

function editFrontend(frontendId) {
  localStorage.setItem('selectedFrontend', frontendId);
  window.location.href = 'editor.html';
}

function applyCustomFont(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const fontFace = new FontFace('CustomFont', e.target.result);
      fontFace.load().then(() => {
        document.fonts.add(fontFace);
        const canvasElements = document.querySelectorAll('.canvas-element');
        canvasElements.forEach(el => {
          el.style.fontFamily = 'CustomFont, Arial, sans-serif';
        });
      });
    };
    reader.readAsArrayBuffer(file);
  }
}

window.addEventListener('popstate', updatePageTitle);

window.onload = function() {
  updatePageTitle();
  if (document.getElementById('preview-mode')) {
    updatePreview();
  }

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
      .then(reg => console.log('Service Worker registered'))
      .catch(err => console.error('Service Worker registration failed:', err));
  }

  document.querySelectorAll('.menu-item, .header-link, .header-menu-item').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      window.location.href = href;
      setTimeout(updatePageTitle, 100);
    });
  });

  const fontInput = document.getElementById('upload-font');
  if (fontInput) {
    fontInput.addEventListener('change', applyCustomFont);
  }
};