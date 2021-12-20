import animation from './animation'

export default function (array, config){
    const categories = config.category
    const parent = document.querySelector('.toy-card-container');

    let filterArray = array.filter((item, index)=>{

        const yearFilter = (item.dataset.year >= config.category.yearStart) && (item.dataset.year <= config.category.yearEnd)

        const numberFilter = (item.dataset.number >= config.category.numberStart) && (item.dataset.number <= config.category.numberEnd)
        const favoriteFilter =  !config.category.favorite? (item.dataset.favorite === 'true'? true: false): true;

        const shapeFilter = config.category.shape[item.dataset.shape]

        const colorFilter = config.category.color[item.dataset.color]

        const sizeFilter = config.category.size[item.dataset.size]

        const searchFilter = item.dataset.name.toLowerCase().search(config.search)!==-1

        return yearFilter && numberFilter && shapeFilter && colorFilter && sizeFilter && favoriteFilter && searchFilter
    })
    animation()

    parent!.innerHTML = '';
        if (filterArray.length===0) parent!.innerHTML =`<p style="font-size:20px; font-weight: lighter;color: white;text-align: center;width: 100%;"> &#10060; cовпадений нет...</p>`
    animation()
        filterArray.forEach(item=> parent?.appendChild(item))
}



