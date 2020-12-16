package servicios;

import java.util.Date;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import com.google.gson.Gson;

import correo.Correo;
import hibernate.HibernateUtil2;
import modelos.Usuarios;

@Path("/usuarios/")
public class ControlUsuarios {

	@GET
	@Path("agregar")
	@Produces(MediaType.APPLICATION_JSON)
	public boolean CrearCuenta(@QueryParam("correo") String correo, @QueryParam("nombre") String nombre, 
			@QueryParam("contra") String contraseña,
			@QueryParam("primApe") String primApe, @QueryParam("segApe") String segApe,
			@QueryParam("DNI") String DNI, @QueryParam("fecha") String fecha){
		System.out.println("ENTRA");
		Usuarios usu = new Usuarios(nombre, correo, contraseña, primApe, segApe, DNI, fecha);
		Session ses = ses();
		Correo co = new Correo();
		try{
			ses.save(usu);
			comitar(ses);
			
			
		}catch(Exception e){
			System.out.println(e.getMessage());
			return false;
		}
		String mensaje = "Hola "+nombre+" has sido agregado a Partify correctamente, ya puedes iniciar sesion y que comience la fiesta";
		String asunto = "USUARIO CREADO";
		co.enviarUsu(correo, mensaje, asunto);
		return true;
	}
	 	
	@GET
	@Path("loguear")
	@Produces(MediaType.APPLICATION_JSON)
	public String Log(@QueryParam("correo") String correo, @QueryParam("contrasena") String contraseña){
		Session ses = ses();
		Gson gson = new Gson();
		try{
			System.out.println("llamada recibida: "+correo+" ---------- "+contraseña);
			//Usuarios usu = (Usuarios) ses.createQuery("SELECT u.nombre FROM Usuarios u WHERE u.correo='"+correo+"'AND u.contrasena='"+contraseña+"'").uniqueResult();
			Usuarios usu = new Usuarios();
			usu = (Usuarios) ses.get(Usuarios.class, correo);
            if (usu!=null && usu.getContrasena().equals(contraseña)){
            	String devolver = gson.toJson(usu);
    			System.out.println(devolver);
    			System.out.println("USUARIO: "+usu);
    			return devolver;
            }
            else{
            	return "NO ENCONTRADO";
            }
		}catch(Exception ex){
			System.out.println("usuario fallido--->"+ex.getMessage());
			return "ERROR";
		}
	}
	
	
	private Session ses(){
		SessionFactory sesionF = HibernateUtil2.getSessionFactory();
		Session sesion = sesionF.openSession();
		sesion.beginTransaction();
		
		return sesion;
	}
	
	private void comitar(Session ses){
		Transaction tx = ses.getTransaction();
		tx.commit();
		
	}
}
