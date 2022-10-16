function manageHtml(manager){
    return `  <div class="col-sm-4 my-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Manger</h5>
        <ul class="list-group">
          <li class="list-group-item">name: ${manager.name}</li>
          <li class="list-group-item">id:  ${manager.id}</li>
          <li class="list-group-item">email: ploy3_98@yahoo.com</li>
          <li class="list-group-item">OfficeNumber: 123</li>
           
        </ul>
      </div>
    </div>
  </div>`
}

module.exports=manageHtml