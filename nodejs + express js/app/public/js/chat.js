var socket = io();
socket.on('connect', function(){
  var chatForm = document.forms.chatForm;
  if(chatForm){
    var chatUsername = document.querySelector('#chat-username');
    var chatMessage = document.querySelector('#chat-message');

    chatForm.addEventListener('submit', function(e){
      e.preventDefault();
      socket.emit('postMessage',{
        username: chatUsername.value,
        message: chatMessage.value,
      });
      chatMessage.value='';
      chatMessage.focus();
    });
    socket.on('updateMessages', function(data){
      showMessage(data);
    });

  }


});


function showMessage(data){
  var chatDisplay = document.querySelector('.chat-display');
  var newMessage =document.createElement('p');
  newMessage.className='bg-success chat-text';
  newMessage.innerHTML ='<strong>'+ data.username +'</strong>:' + data.message;
  chatDisplay.insertBefore(newMessage, chatDisplay.firstChild);
}
