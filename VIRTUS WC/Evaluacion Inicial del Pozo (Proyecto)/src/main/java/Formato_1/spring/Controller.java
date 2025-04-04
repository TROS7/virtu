package Formato_1.spring;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/evaluaciones")
public class Controller {

    @Autowired
    private EvaluacionRepository repository;

    // Obtener todas las evaluaciones
    @GetMapping
    public List<Evaluacion> getAllEvaluaciones() {
        return repository.findAll();
    }

    // Guardar una nueva evaluación
    @PostMapping
    public Evaluacion createEvaluacion(@RequestBody Evaluacion evaluacion) {
        return repository.save(evaluacion);
    }

    // Obtener una evaluación por ID
    @GetMapping("/{id}")
    public Evaluacion getEvaluacionById(@PathVariable Long id) {
        return repository.findById(id).orElse(null);
    }

    // Eliminar una evaluación
    @DeleteMapping("/{id}")
    public void deleteEvaluacion(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
