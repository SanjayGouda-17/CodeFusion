
const htmlTab = document.getElementById('html-tab');
const cssTab = document.getElementById('css-tab');
const jsTab = document.getElementById('js-tab');
const htmlEditor = document.getElementById('html-editor');
const cssEditor = document.getElementById('css-editor');
const jsEditor = document.getElementById('js-editor');
const previewFrame = document.getElementById('preview-frame');
const runBtn = document.getElementById('run-btn');
const saveBtn = document.getElementById('save-btn');
const resetBtn = document.getElementById('reset-btn');

// Tab functionality
htmlTab.addEventListener('click', () => {
  htmlTab.classList.add('active');
  cssTab.classList.remove('active');
  jsTab.classList.remove('active');
  htmlEditor.style.display = 'block';
  cssEditor.style.display = 'none';
  jsEditor.style.display = 'none';
});

cssTab.addEventListener('click', () => {
  htmlTab.classList.remove('active');
  cssTab.classList.add('active');
  jsTab.classList.remove('active');
  htmlEditor.style.display = 'none';
  cssEditor.style.display = 'block';
  jsEditor.style.display = 'none';
});

jsTab.addEventListener('click', () => {
  htmlTab.classList.remove('active');
  cssTab.classList.remove('active');
  jsTab.classList.add('active');
  htmlEditor.style.display = 'none';
  cssEditor.style.display = 'none';
  jsEditor.style.display = 'block';
});

// Run button functionality
runBtn.addEventListener('click', () => {
  const html = htmlEditor.value;
  const css = cssEditor.value;
  const js = jsEditor.value;
  const doc = previewFrame.contentDocument || previewFrame.contentWindow.document;
  doc.open();
  doc.write(`
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${js}</script>
      </body>
    </html>
  `);
  doc.close();
});

saveBtn.addEventListener('click', () => {
  const data = {
    html: htmlEditor.value,
    css: cssEditor.value,
    js: jsEditor.value
  };
  localStorage.setItem('codefusion-data', JSON.stringify(data));
  alert('Project saved!');
});

// Reset button functionality
resetBtn.addEventListener('click', () => {
  htmlEditor.value = '';
  cssEditor.value = '';
  jsEditor.value = '';
  previewFrame.contentDocument.body.innerHTML = '';
});