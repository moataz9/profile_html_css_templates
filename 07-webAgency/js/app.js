const btn = document.getElementById('logo')
const listItems = [...document.getElementsByClassName('list-item')]

btn.onclick = () => {
  listItems.forEach(el => {
    el.classList.toggle('d-none')
  })
  const btnStyle = btn.classList
  if (btnStyle.contains('fa-arrow-down')) {
    btnStyle.remove('fa-arrow-down')
    btnStyle.add('fa-arrow-up')
  } else {
    btnStyle.add('fa-arrow-down')
    btnStyle.remove('fa-arrow-up')
  }
}
