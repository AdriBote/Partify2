package correo;

import java.util.Properties;
import javax.mail.Message;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;


public class Correo {

	/**
	 * @param args
	 */
	private String emisor="daw2avellaneda@gmail.com";
	private String asunto;
	private String texto;
	private Session sesion = null;
	
	public Correo() {
		// TODO Auto-generated constructor stub
		Properties propiedades = new Properties();
		propiedades.put("mail.smtp.host", "smtp.gmail.com");
		propiedades.put("mail.smtp.starttls.enable", "true");
		propiedades.put("mail.smtp.user", emisor);
		propiedades.put("mail.smtp.port", "587");
		propiedades.put("mail.smtp.auth", "true");
		
		Autentificacion visar = new Autentificacion();
		sesion = Session.getInstance(propiedades,visar);
		sesion.setDebug(true); // PARA VER TODO EL PROCESO DE CONEXION EN LA CONSOLA
		
	}
	
	public void enviarUsu(String destino, String mensaje, String asunto)
	{
		MimeMessage mensage = new MimeMessage(sesion);
		texto = mensaje;
		try {
			mensage.setFrom(new InternetAddress(emisor));
			mensage.addRecipient(Message.RecipientType.TO, new InternetAddress(destino));
			//mensage.addRecipients(Message.RecipientType.CC, "deleidades@gmail.com,modesmalos@outlook.es");
			
			mensage.setSubject(asunto);
			mensage.setText(texto);
			Transport.send(mensage);
			System.out.print("El correo a "+ destino + " ha sido enviado");
			
			
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("El correo a  "+destino+ " no se ha mandado.");
		} 
		
	}
	public void enviarLoc(String destino, String mensaje, String asunto)
	{
		MimeMessage mensage = new MimeMessage(sesion);
		texto = mensaje;
		try {
			mensage.setFrom(new InternetAddress(emisor));
			mensage.addRecipient(Message.RecipientType.TO, new InternetAddress(destino));
			//mensage.addRecipients(Message.RecipientType.CC, "deleidades@gmail.com,modesmalos@outlook.es");
			
			mensage.setSubject(asunto);
			mensage.setText(texto);
			Transport.send(mensage);
			System.out.print("El correo a "+ destino + " ha sido enviado");
			
			
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("El correo a  "+destino+ " no se ha mandado.");
		} 
		
	}

}

