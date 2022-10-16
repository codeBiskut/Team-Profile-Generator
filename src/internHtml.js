function internHtml(intern){
    return `  <div class="col-sm-4 my-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Intern</h5>
        <ul class="list-group">
          <li class="list-group-item">Name: ${intern.name}</li>
          <li class="list-group-item">ID:  ${intern.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
          <li class="list-group-item">School: ${intern.school}</li>
        </ul>
      </div>
    </div>
  </div>`
}

module.exports=internHtml