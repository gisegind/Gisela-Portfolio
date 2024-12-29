const btn = document.getElementById('button');

document.getElementById('contactForm')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'service_4xsydbw';
        const templateID = 'template_npn76lu';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                alert('Correo Enviado Exitosamente');
                this.reset(); // limpiar el formulario
            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    });

