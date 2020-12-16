package modelos;

import javax.persistence.Id;

public class Empresa{

	private String nombre;
	private String NIF;
	private String provincia;
	private String municipio;
	private int cp;
	private String calle;
	private String email;
	private String imagen;
	
	public Empresa(){
		
	}
	
	public Empresa(String nombre, String nIF, String provincia, String municipio, int cp, String calle, String email,
			String imagen) {
		this.nombre = nombre;
		NIF = nIF;
		this.provincia = provincia;
		this.municipio = municipio;
		this.cp = cp;
		this.calle = calle;
		this.email = email;
		this.imagen = imagen;
	}



	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getNIF() {
		return NIF;
	}

	public void setNIF(String nIF) {
		NIF = nIF;
	}

	public String getProvincia() {
		return provincia;
	}

	public void setProvincia(String provincia) {
		this.provincia = provincia;
	}

	public String getMunicipio() {
		return municipio;
	}

	public void setMunicipio(String municipio) {
		this.municipio = municipio;
	}

	public int getCp() {
		return cp;
	}

	public void setCp(int cp) {
		this.cp = cp;
	}

	public String getCalle() {
		return calle;
	}

	public void setCalle(String calle) {
		this.calle = calle;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getImagen() {
		return imagen;
	}

	public void setImagen(String imagen) {
		this.imagen = imagen;
	}
	
		
}
