package modelos;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.ws.rs.QueryParam;


public class Usuarios {
	@Id
	private String correo;
	private String nombre;
	private String contrasena;
	private String primApe;
	private String segApe;
	private String DNI;
	private String fecha;
	
	public Usuarios(){
		
	}
	
	public Usuarios(String nombre, String correo, String contrasena, String primApe, String segApe, String dNI,
			String fecha) {
		this.nombre = nombre;
		this.correo = correo;
		this.contrasena = contrasena;
		this.primApe = primApe;
		this.segApe = segApe;
		this.DNI = dNI;
		this.fecha = fecha;
	}



	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getCorreo() {
		return correo;
	}

	public void setCorreo(String correo) {
		this.correo = correo;
	}

	public String getContrasena() {
		return contrasena;
	}

	public void setContrasena(String contrasena) {
		this.contrasena = contrasena;
	}

	public String getPrimApe() {
		return primApe;
	}

	public void setPrimApe(String primApe) {
		this.primApe = primApe;
	}

	public String getSegApe() {
		return segApe;
	}

	public void setSegApe(String segApe) {
		this.segApe = segApe;
	}

	public String getDNI() {
		return DNI;
	}

	public void setDNI(String dNI) {
		DNI = dNI;
	}

	public String getFecha() {
		return fecha;
	}

	public void setFecha(String fecha) {
		this.fecha = fecha;
	}

	
}
