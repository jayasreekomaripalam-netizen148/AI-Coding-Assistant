function showLoading(id){

let element=document.getElementById(id);

if(element){

element.innerHTML =
`
<div class="loading-box">
<div class="loader"></div>
</div>
`;

}

}


function showEmpty(id,message){

let element=document.getElementById(id);

if(element){

element.innerHTML =
`
<div class="empty-state">
<h2>📭 No Data</h2>
<p>${message}</p>
</div>
`;

}

}

