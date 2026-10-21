// ConcursaAI - Main Application Controller
document.addEventListener('DOMContentLoaded', () => {
    console.log('ConcursaAI Initialized.');
    initializeApp();
});

function initializeApp() {
    setupNavigation();
    loadDashboardData();
    setupEventListeners();
}

function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const pageName = item.getAttribute('data-page');
            if (!pageName) return;
            document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
            document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
            item.classList.add('active');
            const targetPage = document.getElementById('page-' + pageName);
            if (targetPage) targetPage.classList.add('active');
            const breadcrumb = document.getElementById('breadcrumb');
            if (breadcrumb) {
                const spanText = item.querySelector('span');
                if (spanText) breadcrumb.innerHTML = '<span>' + spanText.textContent + '</span>';
            }
        });
    });
}

function loadDashboardData() {
    const stats = StorageManager.getStats();
    const hoursEl = document.getElementById('stat-hours');
    const questionsEl = document.getElementById('stat-questions');
    const simEl = document.getElementById('stat-accuracy');
    if (hoursEl) hoursEl.textContent = (stats.hoursStudied || 0) + 'h';
    if (questionsEl) questionsEl.textContent = stats.questionsAnswered || 0;
    if (simEl) simEl.textContent = (stats.simulatedScore || 0) + '%';
}

function setupEventListeners() {
    const apiKeyInput = document.getElementById('config-api-key');
    if (apiKeyInput) apiKeyInput.value = StorageManager.getApiKey() || '';
}

function saveApiKey() {
    const apiKeyInput = document.getElementById('config-api-key');
    if (apiKeyInput) {
        StorageManager.saveApiKey(apiKeyInput.value.trim());
        alert('Chave da API salva com sucesso no navegador!');
    }
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.classList.toggle('collapsed');
}

function toggleNotifications() {
    const panel = document.getElementById('notifications-panel');
    if (panel) panel.classList.toggle('open');
}

function clearNotifications() {
    const list = document.getElementById('notif-list');
    const badge = document.getElementById('notif-badge');
    if (list) list.innerHTML = '<p class="empty-state">Nenhuma notificação</p>';
    if (badge) badge.style.display = 'none';
}