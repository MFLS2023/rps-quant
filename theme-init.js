(() => {
  // 1. 初始化主题
  const theme = localStorage.getItem('rps_theme') === 'light' ? 'light' : 'dark';
  document.documentElement.dataset.theme = theme;
  document.documentElement.classList.toggle('theme-light', theme === 'light');

  // 2. 全局动态无缝挂载【🔥 开盘啦】顶层导航入口
  function mountKaipanlaNav() {
    if (document.getElementById('nav-kaipanla-btn')) return;

    // 优先寻找包含市场概览或个股RPS的导航容器
    const navs = document.querySelectorAll('nav, header');
    for (const nav of navs) {
      const links = nav.querySelectorAll('a');
      let targetLink = null;
      for (const a of links) {
        const text = a.textContent.trim();
        if (text.includes('市场热点') || text.includes('个股RPS') || text.includes('市场概览')) {
          targetLink = a;
        }
      }

      if (targetLink && targetLink.parentElement) {
        const btn = document.createElement('a');
        btn.id = 'nav-kaipanla-btn';
        btn.href = '/kaipanla';
        btn.setAttribute('data-nav', 'kaipanla');
        btn.style.cssText = `
          display: inline-flex;
          align-items: center;
          gap: 5px;
          margin-left: 6px;
          padding: 5px 12px;
          border-radius: 8px;
          background: rgba(244, 63, 94, 0.18);
          border: 1px solid rgba(244, 63, 94, 0.45);
          color: #fb7185;
          font-weight: 600;
          font-size: 13px;
          text-decoration: none;
          transition: all 0.2s ease;
          box-shadow: 0 1px 4px rgba(244, 63, 94, 0.15);
        `;
        btn.innerHTML = `<span style="width: 7px; height: 7px; border-radius: 50%; background: #f43f5e; display: inline-block; box-shadow: 0 0 6px #f43f5e;"></span><span>🔥 开盘啦</span>`;
        btn.onmouseover = () => { btn.style.background = 'rgba(244, 63, 94, 0.28)'; btn.style.borderColor = 'rgba(244, 63, 94, 0.7)'; };
        btn.onmouseout = () => { btn.style.background = 'rgba(244, 63, 94, 0.18)'; btn.style.borderColor = 'rgba(244, 63, 94, 0.45)'; };

        // 插入在目标链接同级的后面
        targetLink.parentElement.insertBefore(btn, targetLink.nextSibling);
        break;
      }
    }
  }

  // 监听 DOM 变化，确保 SPA 页面路由切换后按钮依然存在
  const observer = new MutationObserver(() => {
    mountKaipanlaNav();
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      mountKaipanlaNav();
      observer.observe(document.body, { childList: true, subtree: true });
    });
  } else {
    mountKaipanlaNav();
    observer.observe(document.body, { childList: true, subtree: true });
  }
})();
