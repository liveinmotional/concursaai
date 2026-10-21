$htmlContent = @"
<!DOCTYPE html>
<html lang="pt-BR" data-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ConcursaAI - Plataforma Inteligente de Estudos</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        /* CSS VARIABLES & RESET */
        :root {
            --primary: #6C5CE7;
            --primary-light: #a29bfe;
            --primary-dark: #5a4bd1;
            --secondary: #00CEC9;
            --success: #00B894;
            --warning: #FDCB6E;
            --danger: #E17055;
            --info: #0984E3;
            --bg-primary: #0a0a1a;
            --bg-secondary: #12122a;
            --bg-card: #1a1a3e;
            --bg-card-hover: #22224a;
            --bg-input: #151535;
            --bg-modal: #1a1a3e;
            --text-primary: #ffffff;
            --text-secondary: #b0b0d0;
            --text-muted: #6c6c8a;
            --border: #2a2a50;
            --border-light: #3a3a60;
            --shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
            --shadow-lg: 0 10px 40px rgba(0, 0, 0, 0.4);
            --shadow-glow: 0 0 20px rgba(108, 92, 231, 0.3);
            --sidebar-width: 260px;
            --sidebar-collapsed: 70px;
            --topbar-height: 65px;
            --radius: 12px;
            --radius-sm: 8px;
            --radius-lg: 16px;
            --radius-xl: 24px;
            --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        [data-theme="light"] {
            --bg-primary: #f5f6fa;
            --bg-secondary: #ffffff;
            --bg-card: #ffffff;
            --bg-card-hover: #f0f0f8;
            --bg-input: #f0f0f8;
            --bg-modal: #ffffff;
            --text-primary: #1a1a2e;
            --text-secondary: #555577;
            --text-muted: #8888aa;
            --border: #e0e0f0;
            --border-light: #d0d0e0;
            --shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            --shadow-lg: 0 10px 40px rgba(0, 0, 0, 0.12);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: var(--bg-primary);
            color: var(--text-primary);
            line-height: 1.6;
            overflow-x: hidden;
        }

        /* SIDEBAR */
        .sidebar {
            position: fixed;
            left: 0;
            top: 0;
            width: var(--sidebar-width);
            height: 100vh;
            background: var(--bg-secondary);
            border-right: 1px solid var(--border);
            z-index: 1000;
            display: flex;
            flex-direction: column;
            transition: var(--transition);
            overflow-y: auto;
            overflow-x: hidden;
        }
        .sidebar-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px;
            border-bottom: 1px solid var(--border);
        }
        .logo {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 1.3rem;
            font-weight: 800;
            color: var(--primary);
        }
        .sidebar-toggle {
            background: none;
            border: none;
            color: var(--text-secondary);
            cursor: pointer;
            font-size: 1.2rem;
            padding: 5px;
            border-radius: var(--radius-sm);
        }
        .user-profile-mini {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 16px 20px;
            border-bottom: 1px solid var(--border);
        }
        .user-avatar {
            width: 38px;
            height: 38px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 600;
            flex-shrink: 0;
        }
        .user-info-mini {
            display: flex;
            flex-direction: column;
        }
        .user-name {
            font-weight: 600;
            font-size: 0.9rem;
        }
        .user-level {
            font-size: 0.75rem;
            color: var(--text-muted);
        }
        .nav-menu {
            list-style: none;
            padding: 10px;
            flex: 1;
        }
        .nav-item {
            margin-bottom: 2px;
        }
        .nav-item a {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px 16px;
            color: var(--text-secondary);
            text-decoration: none;
            border-radius: var(--radius-sm);
            transition: var(--transition);
            font-size: 0.9rem;
            font-weight: 500;
        }
        .nav-item a:hover {
            background: var(--bg-card);
            color: var(--text-primary);
        }
        .nav-item.active a {
            background: linear-gradient(135deg, var(--primary), var(--primary-dark));
            color: white;
            box-shadow: var(--shadow-glow);
        }
        .sidebar-footer {
            padding: 16px 20px;
            border-top: 1px solid var(--border);
        }
        .study-streak {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 0.85rem;
            color: var(--warning);
            font-weight: 600;
        }

        /* MAIN CONTENT */
        .main-content {
            margin-left: var(--sidebar-width);
            min-height: 100vh;
            transition: var(--transition);
        }
        .top-bar {
            position: sticky;
            top: 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 24px;
            height: var(--topbar-height);
            background: var(--bg-secondary);
            border-bottom: 1px solid var(--border);
            z-index: 500;
        }
        .top-bar-left, .top-bar-right {
            display: flex;
            align-items: center;
            gap: 16px;
        }
        .menu-btn {
            display: none;
            background: none;
            border: none;
            color: var(--text-primary);
            font-size: 1.3rem;
            cursor: pointer;
        }
        .breadcrumb {
            font-size: 0.9rem;
            color: var(--text-secondary);
        }
        .breadcrumb span {
            font-weight: 600;
            color: var(--text-primary);
        }
        .search-box {
            display: flex;
            align-items: center;
            background: var(--bg-input);
            border: 1px solid var(--border);
            border-radius: var(--radius-xl);
            padding: 8px 16px;
            gap: 8px;
            width: 280px;
        }
        .search-box input {
            background: none;
            border: none;
            color: var(--text-primary);
            outline: none;
            width: 100%;
            font-size: 0.85rem;
        }
        .pomodoro-mini {
            display: flex;
            align-items: center;
            gap: 6px;
            padding: 6px 14px;
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: var(--radius-xl);
            cursor: pointer;
            font-size: 0.85rem;
            font-weight: 600;
            color: var(--text-secondary);
        }
        .notif-btn {
            position: relative;
            background: none;
            border: none;
            color: var(--text-secondary);
            font-size: 1.2rem;
            cursor: pointer;
            padding: 8px;
        }
        .notif-badge {
            position: absolute;
            top: 2px;
            right: 2px;
            background: var(--danger);
            color: white;
            font-size: 0.65rem;
            font-weight: 700;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        /* PAGES */
        .page {
            display: none;
            padding: 24px;
        }
        .page.active {
            display: block;
            animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .page-header {
            margin-bottom: 24px;
        }
        .page-header h1 {
            font-size: 1.8rem;
            font-weight: 800;
        }
        .page-subtitle {
            color: var(--text-secondary);
            margin-top: 4px;
        }

        /* STATS GRID */
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 16px;
            margin-bottom: 24px;
        }
        .stat-card {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            padding: 20px;
            display: flex;
            align-items: center;
            gap: 16px;
            position: relative;
            overflow: hidden;
        }
        .stat-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 4px;
            height: 100%;
        }
        .stat-primary::before { background: var(--primary); }
        .stat-success::before { background: var(--success); }
        .stat-warning::before { background: var(--warning); }
        .stat-icon {
            width: 48px;
            height: 48px;
            border-radius: var(--radius);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.3rem;
        }
        .stat-primary .stat-icon { background: rgba(108,92,231,0.15); color: var(--primary); }
        .stat-success .stat-icon { background: rgba(0,184,148,0.15); color: var(--success); }
        .stat-warning .stat-icon { background: rgba(253,203,110,0.15); color: var(--warning); }
        .stat-value {
            display: block;
            font-size: 1.5rem;
            font-weight: 800;
        }
        .stat-label {
            display: block;
            font-size: 0.8rem;
            color: var(--text-muted);
        }

        /* CARDS & FORMS */
        .card {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: var(--radius-lg);
            overflow: hidden;
        }
        .card-header {
            padding: 16px 20px;
            border-bottom: 1px solid var(--border);
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .card-body {
            padding: 20px;
        }
        .form-group {
            margin-bottom: 16px;
        }
        .form-group label {
            display: block;
            font-size: 0.85rem;
            font-weight: 600;
            margin-bottom: 6px;
            color: var(--text-secondary);
        }
        input[type="password"], input[type="text"] {
            width: 100%;
            padding: 10px 14px;
            background: var(--bg-input);
            border: 1px solid var(--border);
            border-radius: var(--radius-sm);
            color: var(--text-primary);
            font-size: 0.9rem;
            outline: none;
        }
        .btn {
            padding: 10px 20px;
            border: none;
            border-radius: var(--radius-sm);
            font-weight: 600;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 8px;
        }
        .btn-primary {
            background: linear-gradient(135deg, var(--primary), var(--primary-dark));
            color: white;
        }
        .empty-state-large {
            text-align: center;
            padding: 48px;
            color: var(--text-muted);
        }
        .empty-state-large i {
            font-size: 3rem;
            margin-bottom: 12px;
            display: block;
            opacity: 0.4;
        }
    </style>
</head>
<body>

    <!-- SIDEBAR -->
    <aside class="sidebar" id="sidebar">
        <div class="sidebar-header">
            <div class="logo">
                <i class="fa-solid fa-brain"></i>
                <span>ConcursaAI</span>
            </div>
            <button class="sidebar-toggle" onclick="toggleSidebar()">
                <i class="fa-solid fa-bars"></i>
            </button>
        </div>

        <div class="user-profile-mini">
            <div class="user-avatar">CD</div>
            <div class="user-info-mini">
                <span class="user-name">Estudante</span>
                <span class="user-level">Nível 1 • Foco Total</span>
            </div>
        </div>

        <ul class="nav-menu">
            <li class="nav-item active"><a href="#" data-page="dashboard"><i class="fa-solid fa-chart-pie"></i><span>Dashboard</span></a></li>
            <li class="nav-item"><a href="#" data-page="concursos"><i class="fa-solid fa-bullseye"></i><span>Concursos</span></a></li>
            <li class="nav-item"><a href="#" data-page="cronograma"><i class="fa-solid fa-calendar-days"></i><span>Cronograma</span></a></li>
            <li class="nav-item"><a href="#" data-page="disciplinas"><i class="fa-solid fa-book-open"></i><span>Disciplinas</span></a></li>
            <li class="nav-item"><a href="#" data-page="professores"><i class="fa-solid fa-robot"></i><span>Professores IA</span></a></li>
            <li class="nav-item"><a href="#" data-page="simulados"><i class="fa-solid fa-file-lines"></i><span>Simulados</span></a></li>
            <li class="nav-item"><a href="#" data-page="revisao"><i class="fa-solid fa-rotate"></i><span>Revisão</span></a></li>
            <li class="nav-item"><a href="#" data-page="desempenho"><i class="fa-solid fa-chart-line"></i><span>Desempenho</span></a></li>
            <li class="nav-item"><a href="#" data-page="legislacao"><i class="fa-solid fa-scale-balanced"></i><span>Legislação</span></a></li>
            <li class="nav-item"><a href="#" data-page="configuracoes"><i class="fa-solid fa-gear"></i><span>Configurações</span></a></li>
        </ul>

        <div class="sidebar-footer">
            <div class="study-streak">
                <i class="fa-solid fa-fire"></i>
                <span>Sequência: 1 dia</span>
            </div>
        </div>
    </aside>

    <!-- MAIN CONTENT -->
    <main class="main-content">
        <!-- TOP BAR -->
        <header class="top-bar">
            <div class="top-bar-left">
                <button class="menu-btn" onclick="toggleSidebar()"><i class="fa-solid fa-bars"></i></button>
                <div class="breadcrumb" id="breadcrumb"><span>Dashboard</span></div>
            </div>
            <div class="top-bar-right">
                <div class="search-box">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="Pesquisar edital, aula...">
                </div>
                <button class="pomodoro-mini" onclick="openPomodoroModal()">
                    <i class="fa-solid fa-clock"></i> <span id="pomodoro-mini-timer">25:00</span>
                </button>
                <button class="notif-btn" onclick="toggleNotifications()">
                    <i class="fa-solid fa-bell"></i>
                    <span class="notif-badge" id="notif-badge">1</span>
                </button>
            </div>
        </header>

        <!-- PÁGINA: DASHBOARD -->
        <section id="page-dashboard" class="page active">
            <div class="page-header">
                <h1><i class="fa-solid fa-chart-pie"></i> Visão Geral</h1>
                <p class="page-subtitle">Acompanhe seu progresso rumo à aprovação nos concursos.</p>
            </div>
            <div class="stats-grid">
                <div class="stat-card stat-primary">
                    <div class="stat-icon"><i class="fa-solid fa-clock"></i></div>
                    <div>
                        <span class="stat-value" id="stat-hours">0h</span>
                        <span class="stat-label">Horas Estudadas</span>
                    </div>
                </div>
                <div class="stat-card stat-success">
                    <div class="stat-icon"><i class="fa-solid fa-circle-check"></i></div>
                    <div>
                        <span class="stat-value" id="stat-questions">0</span>
                        <span class="stat-label">Questões Resolvidas</span>
                    </div>
                </div>
                <div class="stat-card stat-warning">
                    <div class="stat-icon"><i class="fa-solid fa-bullseye"></i></div>
                    <div>
                        <span class="stat-value" id="stat-accuracy">0%</span>
                        <span class="stat-label">Aproveitamento</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- PÁGINA: CONCURSOS -->
        <section id="page-concursos" class="page">
            <div class="page-header">
                <h1><i class="fa-solid fa-bullseye"></i> Concursos</h1>
                <p class="page-subtitle">Gerencie os editais e acompanhe seus focos de estudo.</p>
            </div>
            <div class="empty-state-large">
                <i class="fa-solid fa-folder-open"></i>
                <h3>Nenhum concurso cadastrado</h3>
                <p>Cadastre seu edital para começar a planejar os estudos.</p>
            </div>
        </section>

        <!-- PÁGINA: CRONOGRAMA -->
        <section id="page-cronograma" class="page">
            <div class="page-header">
                <h1><i class="fa-solid fa-calendar-days"></i> Cronograma</h1>
                <p class="page-subtitle">Planeje suas semanas e sessões diárias de estudo.</p>
            </div>
        </section>

        <!-- PÁGINA: DISCIPLINAS -->
        <section id="page-disciplinas" class="page">
            <div class="page-header">
                <h1><i class="fa-solid fa-book-open"></i> Disciplinas</h1>
                <p class="page-subtitle">Matérias e conteúdos programáticos do edital.</p>
            </div>
        </section>

        <!-- PÁGINA: PROFESSORES -->
        <section id="page-professores" class="page">
            <div class="page-header">
                <h1><i class="fa-solid fa-robot"></i> Professores IA</h1>
                <p class="page-subtitle">Tire dúvidas especializadas com inteligência artificial.</p>
            </div>
        </section>

        <!-- PÁGINA: SIMULADOS -->
        <section id="page-simulados" class="page">
            <div class="page-header">
                <h1><i class="fa-solid fa-file-lines"></i> Simulados</h1>
                <p class="page-subtitle">Teste seus conhecimentos com questões estilo banca examinadora.</p>
            </div>
        </section>

        <!-- PÁGINA: REVISÃO -->
        <section id="page-revisao" class="page">
            <div class="page-header">
                <h1><i class="fa-solid fa-rotate"></i> Revisão Espaçada</h1>
                <p class="page-subtitle">Memorize o conteúdo de longo prazo com flashcards inteligentes.</p>
            </div>
        </section>

        <!-- PÁGINA: DESEMPENHO -->
        <section id="page-desempenho" class="page">
            <div class="page-header">
                <h1><i class="fa-solid fa-chart-line"></i> Desempenho</h1>
                <p class="page-subtitle">Métricas detalhadas de evolução e estatísticas de acerto.</p>
            </div>
        </section>

        <!-- PÁGINA: LEGISLAÇÃO -->
        <section id="page-legislacao" class="page">
            <div class="page-header">
                <h1><i class="fa-solid fa-scale-balanced"></i> Legislação</h1>
                <p class="page-subtitle">Leis secas e principais códigos comentados.</p>
            </div>
        </section>

        <!-- PÁGINA: CONFIGURAÇÕES -->
        <section id="page-configuracoes" class="page">
            <div class="page-header">
                <h1><i class="fa-solid fa-gear"></i> Configurações</h1>
                <p class="page-subtitle">Personalize sua experiência e insira suas chaves de acesso.</p>
            </div>
            <div class="card" style="max-width: 500px;">
                <div class="card-header"><i class="fa-solid fa-key"></i> Chave da API Gemini</div>
                <div class="card-body">
                    <div class="form-group">
                        <label>Chave da API</label>
                        <input type="password" id="config-api-key" placeholder="Cole sua chave aqui">
                    </div>
                    <button class="btn btn-primary" onclick="saveApiKey()">Salvar Chave</button>
                </div>
            </div>
        </section>
    </main>

    <!-- SCRIPTS -->
    <script>
        // Storage Manager Helper
        const StorageManager = {
            getStats: () => JSON.parse(localStorage.getItem('concursaai_stats')) || { hoursStudied: 0, questionsAnswered: 0, simulatedScore: 0 },
            getApiKey: () => localStorage.getItem('concursaai_api_key') || '',
            saveApiKey: (key) => localStorage.setItem('concursaai_api_key', key)
        };

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
            // Escuta os cliques diretamente nos links do menu lateral
            const navLinks = document.querySelectorAll('.nav-menu a');
            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const pageName = link.getAttribute('data-page');
                    if (!pageName) return;

                    // Remove active de todos os itens do menu e páginas
                    document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
                    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));

                    // Ativa o item clicado e a página correspondente
                    link.parentElement.classList.add('active');
                    const targetPage = document.getElementById('page-' + pageName);
                    if (targetPage) targetPage.classList.add('active');

                    // Atualiza o breadcrumb com o texto do span
                    const breadcrumb = document.getElementById('breadcrumb');
                    if (breadcrumb) {
                        const spanText = link.querySelector('span');
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
            alert('Nenhuma notificação nova no momento.');
        }

        function openPomodoroModal() {
            alert('Timer Pomodoro (25:00) iniciado!');
        }
    </script>
</body>
</html>
"@
[System.IO.File]::WriteAllText("index.html", $htmlContent, [System.Text.Encoding]::UTF8)