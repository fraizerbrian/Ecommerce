var updateBtns = document.getElementByClassName('update-cart')

for (var i=0; i < updateBtns.length; i++){
  updateBtns[i].addEventListener('click',function(){
    var productId = this.dataset.product
    var action = this.dataset.action
    console.Log('productId:',productId, 'Action:',action)

    console.Log('USER:', user)
    if (user == 'AnonymousUser'){
      console.Log('User is not authenticated')
    }
    else{
      updateUserOrder(productId,action)
    }
  })
}

function updateUserOrder(productId, action){
  console.Log('User is authenticated, sending data...')
    var url = '/update_item/'

    fetch(url,{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'X-CSRFToken': 'csrftoken',
      },
      body:JSON.stringify({'productId':productId, 'action':action})
    })
    .then((response) =>{
      return response.json();
    })
    .then((data) =>{
      console.Log('data:',data)
      location.reload()
    });
}
