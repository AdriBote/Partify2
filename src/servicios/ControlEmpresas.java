package servicios;

import java.util.List;

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
import modelos.Empresa;

@Path("/empresas/")
public class ControlEmpresas {
	
	@GET
	@Path("agregar")
	@Produces(MediaType.APPLICATION_JSON)
	public boolean CrearEmpresa(@QueryParam("Nombre") String nombre,
			@QueryParam("correo") String correo, @QueryParam("nif") String NIF, @QueryParam("provincia") String prov,
			@QueryParam("municipio") String mun, @QueryParam("CP") String cp, @QueryParam("calle") String calle){		
		Correo co = new Correo();
		String mensaje = "Hola "+nombre+" estamos investigando tu NIF para comprobar que la empresa existe."
				+ " Te avisareos proximamente por correo cuando estes registrado";
		String asunto = "GUARDANDO EMPRESA";
		co.enviarUsu(correo, mensaje, asunto);
		//
		return true;
	}
	
	@GET
	@Path("listaruna")
	@Produces(MediaType.APPLICATION_JSON)
	public String ListaEmpresaFija( @QueryParam("nif") String NIF){
		Session ses = ses();
		System.out.println(NIF);
		Empresa empre = (Empresa)ses.createQuery("SELECT e FROM Empresa e WHERE nif = '"+NIF+"'").uniqueResult();
		Gson gson = new Gson();
		String empresas = gson.toJson(empre);
		return empresas;
	}
	@GET
	@Path("listar")
	@Produces(MediaType.APPLICATION_JSON)
	public String ListaEmpresas(){
		Session ses = ses();
		Query query = ses.createQuery("SELECT e FROM Empresa e");
		List<Empresa> lEmpre = query.list();
		Gson gson = new Gson();
		String empresas = gson.toJson(lEmpre);
		return empresas;
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
