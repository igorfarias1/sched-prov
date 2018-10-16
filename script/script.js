// Instancia o ScrollReveal com alguns atributos básicos:
// Define que cada ícone sai de uma distância de 50px para baixo da posição original
// Define que cada elemento que utiliza o ScrollReveal
// deve resetar para que sua animação aconteça de novo
ScrollReveal({
    distance: '50px',
    reset: true
});

// Define a animação para todos os elementos que pertençam a classe icons
// Define o intervalo entre as animações de 200ms
ScrollReveal().reveal('.icons', {interval : 200});
