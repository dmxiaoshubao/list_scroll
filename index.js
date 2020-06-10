const box = document.querySelector('.box')
const container = box.querySelector('.item-box')

let listArray = new Array(100).fill('').map((_, index) => index)

const renderFunction = (firstIndex, listSize) => {
  let list = ``
  for (let i = firstIndex; i < firstIndex + listSize; i++) {
    list += `<li>${i}</li>`
  }
  container.innerHTML = list
}

const listSize = 20
const itemHeight = 150

const listScroll = new ListScroll({
  firstItemClass: 'item-first',
  lastItemClass: 'item-last',
  box,  //  盒子
  container,  // 列表容器
  listSize, // 一次渲染的列表项
  itemHeight, // 一个 item  对应的高度
  renderFunction, // 渲染回调函数
  listLen: listArray.length // 列表项总数
})
listScroll.startObserver()