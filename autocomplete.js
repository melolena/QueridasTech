const input = document.getElementById('myInput');
const button = document.querySelector('button');
const suggestionsContainer = document.querySelector('.suggestions-container');

const suggestions = [
  'Opção 1',
  'Opção 2',
  'Opção 3',
  // ... mais opções
];

button.addEventListener('click', () => {
  const inputValue = input.value.toLowerCase();
  const filteredSuggestions = suggestions.filter(suggestion => 
    suggestion.toLowerCase().startsWith(inputValue)
  );

  const suggestionsList = document.createElement('ul');
  filteredSuggestions.forEach(suggestion => {
    const listItem = document.createElement('li');
    listItem.textContent = suggestion;
    suggestionsList.appendChild(listItem);
  });

  suggestionsContainer.innerHTML = ''; // Limpa a lista anterior
  suggestionsContainer.appendChild(suggestionsList);
});     