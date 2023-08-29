export default function createBadge() {
  const img = document.createElement('img');
  img.setAttribute('alt', 'GitHub Workflow Status (with event)');
  img.setAttribute(
    'src',
    'https://img.shields.io/github/actions/workflow/status/iIgor2022/ahj_forms_popovers/web.yml',
  );
  return img;
}
