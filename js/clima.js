document.getElementById("obtenerClima").addEventListener("click", () => {
  const API_KEY = "ad6858df9810003049a6de7623a1ad2a"; 
  const lat = -34.6037;
  const lon = -58.3816;

  const url = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`;

  fetch(url)
      .then(response => response.json())
      .then(data => {
          mostrarClima(data); // Llama a la función para mostrar los datos
      })
      .catch(error => {
          console.error('Error al obtener los datos del clima:', error);
      });
});

const mostrarClima = (data) => {
  const { temp } = data.current;
  const { description } = data.current.weather[0];

  document.getElementById("resultadoClima").innerHTML = `
      <h2>Clima en Buenos Aires</h2>
      <p>Temperatura: ${temp}°C</p>
      <p>Descripción: ${description}</p>
  `;
};