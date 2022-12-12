const items = document.querySelector('items')
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

function onAdd(){
//create
//빈 값일때 출력 x
const text = input.value;
if(text === ''){
  input.focus();
  return;
}
const item = createItem(text);
items.appendChild(item);
input.value='';
input.focus();
}

let id = 0;
function createItem(text){
  const itemRow = document.createElement('li');'
  itemRow.setAttribute('class','item__row');
  itemRow.setAttribute('data-id', id);
  itemRow.innerHTML = `
  <div class="item">
    <span class="item__name">${text}</span>
    <button class="item__delete" onclick="delList()">
      <i class="fas fa-trash-alt" data-id=${id}></i>
    </button>
  </div>
  <div class="item__divider"></div>`;
id++;
return itemRow;
}

addBtn.addEventListener('click',() => {
  onAdd();
});

input.addEventListener('keypress', event =>{
  if(event.key === 'Enter'){
    onAdd();
  }
})

items.addEventListener('click',event => {
  const id = event.target.dataset.id;
  if(id){
    const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
    toBeDeleted.remove();
  }
})