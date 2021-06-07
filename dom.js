
var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
//form submit event
form.addEventListener('submit', addItem);

//delete event
itemList.addEventListener('click',removeItem);

//add item
function addItem(e){
    e.preventDefault();
    console.log(1);
//get input value
    var newItem=document.getElementById('item').value;
    //create new li element
    var li=document.createElement('li');
    //add class
    li.className='list-group-item';
    //add text node with input value
    li.appendChild(document.createTextNode(newItem));
    //create delete button
    var deleteBtn=document.createElement('button');
    //add clases to delete button
    deleteBtn.className=' btn btn-danger btn-sm float-right delete';
    //append text node
    deleteBtn.appendChild(document.createTextNode('x'));
    ///append button to li
    li.appendChild(deleteBtn);
    //append li to the list
    itemList.appendChild(li);


}
//remove itemss
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }

}























