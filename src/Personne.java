public class Personne {
    private String nom;
    private String prenom;
    private int age;
    private String codepostal;
    private String ville;

    public Personne(String nom,String prenom,int age, String codepostal,String ville)
{
this.nom=nom;
this.prenom=prenom;
this.age=age;
this.codepostal=codepostal;
this.ville=ville;
}
public String getNom(){

    return nom;
}    
public String getPrenom(){

    return prenom;
}  
public String getCodepostal(){

    return codepostal;
}    
public String getVille(){

    return ville;
}   
public int getAge(){

    return age;
}   
}
