var Form=document.getElementById('addForm');
var itemList=document.getElementById('items');
Form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);
var filter=document.getElementById('filter');
filter.addEventListener('keyup',filterItems);
function addItem(e)
{
  e.preventDefault();
  console.log(1);
  var newItem=document.getElementById('item').value;
  var li=document.createElement('li');
  li.className='list-group-item';
li.appendChild(document.createTextNode(newItem));
//create delete buttn element
var dltbutton=document.createElement('button');
dltbutton.className='btn btn-danger btn-sm float-right delete';
dltbutton.appendChild(document.createTextNode('X'));
//
li.appendChild(dltbutton);
itemList.appendChild(li);
}
function removeItem(e)
{
  if(e.target.classList.contains('delete'))
  {
    if(confirm('are u sure?'))
    {
      var li=e.target.parentElement;
      itemList.removeChild(li);
    }
  
  }

}
function filterItems(e)
{
  var text=e.target.value.toLowerCase();
  var items=itemList.getElementsByTagName('li');
  Array.from(items).forEach(function(item)
  {
    var itemname=item.firstChild.textContent;
    if(itemname.toLowerCase().indexOf(text)!=-1)
    {
      item.style.display='block';
    }
    else{
      item.style.display='none';
    }
  })
}