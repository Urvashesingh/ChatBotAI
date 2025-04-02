const messageInput = document.querySelector("#user-input");
const handleOutgoingMessage = (userMessage) => {
 const messageContent = ``;
} 
 messageInput.addEventListener("keydown", (e) => {
  const userMessage = e.target.value.trim();
  if(e.key === "Enter" && userMessage){
    handleOutgoingMessage(userMessage); 
  }
 })