import './Bottombar.scss'
const Bottombar = {
  render: async () => {
    const view = /* html */ `
          <div class="footer container footer-container">
              <a href="https://github.com/alProkopov">
                  github: AlProkopov
              </a>
              <p>2021</p>
              <a class ="logo" href="https://rs.school/js/" target="_blank"></a>
          </div>
      `;
    return view;
  },
  after_render: async () => {},
};
export default Bottombar;
