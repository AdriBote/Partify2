package correo;

import javax.mail.*;

public class Autentificacion extends Authenticator {
	
	protected PasswordAuthentication getPasswordAuthentication()
	{
		return new PasswordAuthentication ("correoElectronico","contraseña");
	}
	

}
