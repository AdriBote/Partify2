package hibernate;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class HibernateUtil2{ 
  private static final SessionFactory sessionFactory = buildSessionFactory();
                                         
  private static SessionFactory buildSessionFactory() {
     try {
        //Create the SessionFactory from hibernate.cfg.xml
    	 SessionFactory sesionF = new Configuration().configure().buildSessionFactory();
        return sesionF;
     }
     catch (Throwable ex) {
        // Make sure you log the exception, as it might be swallowed
        System.out.println("ALGUN ERROR OCURRE CON HIBERNATE." + ex);
        throw new ExceptionInInitializerError(ex);
     }
  }

  public static SessionFactory getSessionFactory() {
        return sessionFactory;
  }
}

 //OTRA MANERA DE INICIALIZAR EL SESSIONFACTORY