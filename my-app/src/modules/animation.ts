export default () => {
  const content = document.getElementById('page_container');
  content!.classList.remove('run-animation');
  void content!.offsetWidth;
  content!.classList.add('run-animation');
};
