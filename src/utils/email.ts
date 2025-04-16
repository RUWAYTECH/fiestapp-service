module.exports = {
    sendServiceRequestConfirmation: async (user, service) => {
      console.log(user, service);
      try {
        const emailService = strapi.plugins.email.services.email;
  
        if (user && user.email) {
          await emailService.send({
            to: user.email,
            subject: `Confirmación de solicitud: ${service.name || 'Nuevo servicio'}`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                  <h2>¡Gracias por tu solicitud!</h2>
                  <p>Hemos recibido tu solicitud de servicio correctamente.</p>
                  <p><strong>Detalles de la solicitud:</strong></p>
                  <ul>
                      <li>ID de solicitud: ${service.id}</li>
                      <li>Servicio: ${service.name || 'N/A'}</li>
                      <li>Fecha de solicitud: ${new Date().toLocaleString()}</li>
                  </ul>
                  <p>Nos pondremos en contacto contigo a la brevedad para confirmar los detalles.</p>
                  <p>Saludos cordiales,<br>El equipo de servicios</p>
              </div>
            `
          });
        }
  
        return { success: true };
      } catch (error) {
        console.error('Error sending confirmation email:', error);
        return { success: false, error };
      }
    },
  
    sendAdminNotification: async (user, service) => {
      try {
        const emailService = strapi.plugins.email.services.email;
        const adminEmail = process.env.ADMIN_EMAIL;
  
        if (!adminEmail) {
          console.warn('Admin email not configured. Skipping notification.');
          return { success: false, message: 'Admin email not configured' };
        }
        
        await emailService.send({
          to: adminEmail,
          subject: `Nueva solicitud de servicio: ${service.name || 'Nuevo servicio'}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2>Nueva solicitud de servicio recibida</h2>
                <p><strong>Detalles de la solicitud:</strong></p>
                <ul>
                    <li>ID de solicitud: ${service.id}</li>
                    <li>Servicio: ${service.name || 'N/A'}</li>
                    <li>Usuario: ${user ? user.username : 'N/A'} (ID: ${user ? user.id : 'N/A'})</li>
                    <li>Email del usuario: ${user ? user.email : 'N/A'}</li>
                    <li>Fecha de solicitud: ${new Date().toLocaleString()}</li>
                </ul>
                <p>Por favor, revisa esta solicitud en el panel de administración.</p>
            </div>
          `
        });
  
        return { success: true };
      } catch (error) {
        console.error('Error sending admin notification:', error);
        return { success: false, error };
      }
    }
  };