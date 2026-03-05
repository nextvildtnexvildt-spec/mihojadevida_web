function descargarPDF() {

    const elemento = document.getElementById("cv");

    const opciones = {
        margin: 0.5,
        filename: 'Hoja_de_Vida_Andrey_Paez.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opciones).from(elemento).save();
}