import { getData } from '../../modules';
import { GameConfigType, ToyItem } from '../../types';

export default async function gameHTML(gameConfig: GameConfigType) {
  const data = await getData();
  const notSelected = data
    .filter((item: ToyItem, index: number) => index < 20)
    .map((item: ToyItem) => ({ number: item.num, count: item.count }));

  if (localStorage.getItem('selected') && localStorage.getItem('selected') !== '[]') {
    gameConfig.toys = JSON.parse(localStorage.getItem('selected'));
  } else {
    gameConfig.toys = notSelected;
  }

  let toysString: string = '<p>Вы ничего не выбрали...</p>';
  toysString = gameConfig.toys
    .map((item) => {
      let images: string = '';

      for (let i = 0; i < item.count; i += 1) {
        images += `<img id = "${item.number}.${i + 1}"
          class="toys-game-item-img"
          src="../../assets/toys/${item.number}.png"
          alt="toy" draggable="true">`;
      }

      return `
  <div  class="toys-game-item" data-number="${item.number}">
    <p class="toys-game-item-count">${item.count}</p>
    <div id="parent${item.number}" class="toys-img-container">${images}</div>

  </div>`;
    })
    .join('\n');

  const view = /* html */ `
  <div class="container game-container">

      <div class="left">
          <div class="toy-config-header">
              <button class="volume"></button>
              <button class="snow"></button>
          </div>

          <div class="tree-container">
              <p class="option-title">Выберите ёлку</p>
              <div class="tree-items">
                  <div data-number="1" class="tree-item tree-item1"></div>
                  <div data-number="2" class="tree-item tree-item2"></div>
                  <div data-number="3" class="tree-item tree-item3"></div>
                  <div data-number="4" class="tree-item tree-item4"></div>
              </div>
          </div>

          <div class="background-container">
              <p class="option-title">Выберите фон</p>
              <div class="background-items">
                  <div data-number="1" class="background-item background-item1"></div>
                  <div data-number="2" class="background-item background-item2"></div>
                  <div data-number="3" class="background-item background-item3"></div>
                  <div data-number="4" class="background-item background-item4"></div>
                  <div data-number="5" class="background-item background-item5"></div>
                  <div data-number="6" class="background-item background-item6"></div>
                  <div data-number="7" class="background-item background-item7"></div>
                  <div data-number="8" class="background-item background-item8"></div>
              </div>
          </div>

          <div class="garland-container">
              <div class="garland-container-head">
                <p class="option-title">Гирлянда</p>
                <label class="switch">
                        <input type="checkbox" name="garlandSwitch" id="garlandSwitch" />
                        <span class="slider round"></span>
                    </label>
                </div>
              <div class="garland-items">
                  <div data-color="multicolor" class="garland-item garland-yellow" style="background: linear-gradient(
                    124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8)"></div>
                  <div data-color="yellow" class="garland-item garland-yellow" style="background: rgba(253, 215, 0, 1)"></div>
                  <div data-color="red" class="garland-item garland-red" style="background: rgba(253, 0, 0, 1)"></div>
                  <div data-color="blue" class="garland-item garland-blue" style = "background: rgba(34, 153, 235, 1)"></div>
                  <div data-color="green" class="garland-item garland-green" style = "background: rgba(8, 170, 5, 1)"></div>
              </div>
          </div>

      </div>


<div class="center" style ="background-image: url('../../assets/bg/1.jpg')">
  <img src="assets/tree/1.png" class="main-tree" usemap="#tree-map">
  <map name="tree-map">
    <area shape="poly" coords="190 ,0, 0, 400, 100,500, 190,500, 280,500, 500, 400" >
  </map>

  <div class="garland"></div>
</div>

      <div class="right">
          <div class="save-button">сохранить</div>
          <div class="toys-game-container">
            <p class="option-title">Игрушки</p>
            <div class="toys-game-items">
                ${gameConfig.toys.length > 0 ? toysString : '*Вы ничего не выбрали...'}

            </div>
          </div>

          <div class="decorated-container">
            <div class="decorated-header">
              <p class="option-title">Вы нарядили</p>
            </div>
            <div class="decorated-items">
            </div>
          </div>
      </div>

  </div>
  `;
  return view;
}
