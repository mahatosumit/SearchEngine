
    document.addEventListener("DOMContentLoaded", function () {
        // Get the select element
        var engineSelect = document.querySelector('.select-box');

        // Get the text areas
        var textAreaChatGPT = document.getElementById('text-area');
        var textAreaGemini = document.getElementById('text-area1');

        // Set "ChatGPT 3.5" as the default selected option
        document.getElementById('chat').selected = true;

        // Toggle visibility based on the default selected value
        textAreaChatGPT.style.display = 'block';
        textAreaGemini.style.display = 'none';

        // Add event listener to the select element
        engineSelect.addEventListener('change', function () {
            // Check the selected value
            var selectedValue = engineSelect.value;

            // Toggle visibility based on the selected value
            textAreaChatGPT.style.display = (selectedValue === 'first') ? 'block' : 'none';
            textAreaGemini.style.display = (selectedValue === 'Second') ? 'block' : 'none';
        });
    });


    document.addEventListener('DOMContentLoaded', function () {
        const API_KEY = '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';
        const submitButton = document.getElementById('submit');
        const outPutElement = document.getElementById('output');
        const inputElement = document.getElementById('search-box');
    
        async function getMessage() {
            console.log('clicked');
            const options = {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo",
                    messages: [{
                        role: "user",
                        content: inputElement.value
                    }]
                })
            };
    
            try {
                const response = await fetch('https://api.openai.com/v1/chat/completions', options);
                const data = await response.json();
                console.log(data);
                outPutElement.textContent = data.choices[0].message.content;
    
                if (data.choices[0].message.content) {
                    const pElement = document.createElement('p');
                    pElement.textContent = inputElement.value;
                    document.querySelector('.container').appendChild(pElement);
                }
            } catch (error) {
                console.error(error);
            }
        }
    
        submitButton.addEventListener('click', getMessage);
    });
    