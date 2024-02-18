import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PersonneController {
    @GetMapping("/personne/{id}")
    public ResponseEntity<Personne> getPersonne(@PathVariable int id){

        Personne result= new Personne("tsinda","estelle",27,"7043","colfontaine");
        return ResponseEntity.ok().body(resultt);
    }
    
}
