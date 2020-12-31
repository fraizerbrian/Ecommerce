var updateBtns = document.getElementByClassName('update-cart')

for (i=0; i < updateBtn.length; i++){
  updateBtns[i].addEventListener('click',function(){
    var productId = this.dataset.product
    var action = this.dataset.action
    console.Log('productId:',productId, 'Action:',action)
  })
}
