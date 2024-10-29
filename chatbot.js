document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    function addMessage(message, isUser) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.classList.add(isUser ? 'user' : 'bot');
        messageDiv.textContent = message;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function getBotResponse(userMessage) {
        // Simple response logic for demo purposes
        if (userMessage.toLowerCase().includes('hello')) {
            return 'Hi there! How can I help you today?';
        }
		else if (userMessage.toLowerCase().includes('how are you')) {
            return 'I am just a bot, but I am doing fine! How can I assist you?';
        }
            
			else if (userMessage.toLowerCase().includes('where is mahakal')) {
            return 'mahakal is mahadev temple which is situated in ujjain';
        }
		
		
		else if (userMessage.toLowerCase().includes('where is omkareshwar')) {
            return 'Omkareshwar is a temple in the Mandhata city of Khandwa district in Madhya Pradesh, India. Its located on an island  the Narmada River';
        }
		
		
		else if (userMessage.toLowerCase().includes('where is omkareshwar')) {
            return 'Omkareshwar is a temple in the Mandhata city of Khandwa district in Madhya Pradesh, India. Its located on an island  the Narmada River';
        }
		
		
		else if (userMessage.toLowerCase().includes('waterfalls around indore')) {
            return 'Tincha Falls,Mohadi Falls,Hatyari Khoh Falls,Patalpani Falls,Bamniya Kund Falls,Gidiya Khoh Falls Bhairav Kund Falls';
        }
		
		
		else if (userMessage.toLowerCase().includes('waterfalls in mp')) {
            return "Dhuandhar Falls,Raneh Falls,Pandav Falls,Bahuti Falls,Tincha Falls";
        }
		
		
		else if (userMessage.toLowerCase().includes('why mp is famous for')) {
            return 'Madhya Pradesh is known for its rich culture, spiritual heritage, and traditions, and is home to many famous monuments, temples, forts, and wildlife sanctuaries';
        
		}
		
		else if (userMessage.toLowerCase().includes('famous food of mp')) {
            return 'indori poha,malpua,Daal bafle,mawa bati,palak puri,ratlami sev etc';
        }
		
		
		else if (userMessage.toLowerCase().includes('tribes in mp')) {
            return 'Bhil, Gond, Kol, Korku, Sahariya, and Baiga';
			
        }
		
	
	  else if (userMessage.toLowerCase().includes('distance between omkareshwar to mahakaleshwar')) {
            return '3 hr 39 min (143.8 km) via NH 347BG';
        }
		
		
		else if (userMessage.toLowerCase().includes('distance between mahakaleshwar to omkareshwar')) {
            return '3 hr 39 min (143.8 km) via NH 347BG';
	
		}
		
		else if (userMessage.toLowerCase().includes('places to visit in mp')) {
            return 'mahakaleshwar, Omkareshwar,khajurao,bhimbetka,indore,bhopal,panchmani,etc';
        }
		
		else if (userMessage.toLowerCase().includes('how many national park in mp')) {
            return 'There are 12 national parks in Madhya Pradesh';
        }
		
		else if (userMessage.toLowerCase().includes('mountains location in mp')) {
            return 'you can visit dhoopgarh, chauragarh,jatashankar,bee falls,doongrai,priyadarshini point etc';
        }
		else if (userMessage.toLowerCase().includes('rivers in mp')) {
            return 'narmada river,chambal river, kalisindh river, sone river,tapi river,kshipra river etc';
        }
		
		else if (userMessage.toLowerCase().includes('forts in mp')) {
            return 'ajaigarh fort ,orchha fort, gwalior fort,tapi river,kshipra river etc';
        }

		else {
            return 'I am not sure how to respond to that. Can you ask something else?';
        }
    }

    sendButton.addEventListener('click', () => {
        const message = userInput.value.trim();
        if (message) {
            addMessage(message, true); // User message
            const botResponse = getBotResponse(message);
            setTimeout(() => addMessage(botResponse, false), 500); // Bot response with a delay
            userInput.value = '';
        }
    });

      userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendButton.click();
        }
    });
});
