// ConcursaAI - Main Application Controller
document.addEventListener('DOMContentLoaded', () => {
    console.log("ConcursaAI Initialized.");
    initializeApp();
});

function initializeApp() {
    setupNavigation();
    loadDashboardData();
    setupEventListeners();
}

function setupNavigation() {
    const navLinks = document.querySelectorAll('.sidebar-nav a, [data-target]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('data-target') || link.getAttribute('href').substring(1);
            
            // Remove active class from all pages and links (usando '.page' para bater com o CSS)
            document.querySelectorAll('.page').forEach(sec => sec.classList.remove('active'));
            document.querySelectorAll('.sidebar-nav li').forEach(li => li.classList.remove('active'));

            // Add active class to target section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
                if (link.parentElement) {
                    link.parentElement.classList.add('active');
                }
            }
        });
    });
}

function loadDashboardData() {
    const stats = StorageManager.getStats();
    const hoursEl = document.getElementById('stat-hours');
    const questionsEl = document.getElementById('stat-questions');
    const simEl = document.getElementById('stat-simulated');

    if (hoursEl) hoursEl.textContent = `${stats.hoursStudied || 0}h`;
    if (questionsEl) questionsEl.textContent = stats.questionsAnswered || 0;
    if (simEl) simEl.textContent = `${stats.simulatedScore || 0}%`;
}

function setupEventListeners() {
    const apiKeyInput = document.getElementById('openai-api-key');
    if (apiKeyInput) {
        apiKeyInput.value = StorageManager.getApiKey() || '';
        apiKeyInput.addEventListener('change', (e) => {
            StorageManager.saveApiKey(e.target.value.trim());
            alert('Chave da API salva com sucesso no navegador!');
        });
    }
}