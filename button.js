function insertButton() {
  if (document.querySelector('.cta-button')) return; // 重複防止

  const buttonHTML = `
    <div style="text-align:center; margin-top:40px;">
      <a href="#contact" class="cta-button" style="
        display:inline-block;
        background-color:#ff6b6b;
        color:#fff;
        font-size:18px;
        font-weight:bold;
        padding:16px 32px;
        border-radius:50px;
        text-decoration:none;
        box-shadow:0 4px 12px rgba(0,0,0,0.2);
        transition:all 0.3s ease;
      " 
      onmouseover="this.style.backgroundColor='#ff4e4e'; this.style.boxShadow='0 6px 16px rgba(0,0,0,0.25)'; this.style.transform='translateY(-2px)'" 
      onmouseout="this.style.backgroundColor='#ff6b6b'; this.style.boxShadow='0 4px 12px rgba(0,0,0,0.2)'; this.style.transform='none'">
        無料相談はこちら
      </a>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', buttonHTML);
}

// ページ読み込み時 & ページ遷移時に対応するよう繰り返しチェック
const observer = new MutationObserver(() => {
  insertButton();
});
observer.observe(document.body, { childList: true, subtree: true });