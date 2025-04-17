// 模拟登录（实际开发需要后端）
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    window.location.href = 'dashboard.html'; // 直接跳转（仅演示）
});

// 退出登录
function logout() {
    window.location.href = 'index.html';
}

// 模拟DeepSeek对话（需替换为真实API）
function sendMessage() {
    const input = document.getElementById('userInput');
    const chatWindow = document.getElementById('chatWindow');
    
    // 用户消息
    chatWindow.innerHTML += `<div class="user-message">👤 你：${input.value}</div>`;
    
    // 模拟AI回复（替换为API调用）
    setTimeout(() => {
        chatWindow.innerHTML += `<div class="ai-message">🤖 AI：已收到作业，批改中...</div>`;
        chatWindow.scrollTop = chatWindow.scrollHeight; // 滚动到底部
    }, 1000);
    
    input.value = '';
}