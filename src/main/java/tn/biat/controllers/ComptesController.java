package tn.biat.controllers;

//import java.awt.PageAttributes.MediaType;
import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import tn.biat.domain.Compte;
import tn.biat.repository.IComptesRepository;

@RestController
@CrossOrigin(origins="*")
public class ComptesController {

	private IComptesRepository repo;

	public ComptesController(IComptesRepository repo) { // le @Autorwired n'est pas nécessaire depuis v4.3
		this.repo = repo;
	}

	// @RequestMapping(path = "/comptes", method = RequestMethod.GET)
	@GetMapping(path = "/comptes")
	public List<Compte> getAllComptes() {
		return repo.findAll();
	}

	@GetMapping(path = "/comptes/{id}")
	public ResponseEntity<Compte> getCompteById(@PathVariable String id) {
		Optional<Compte> compte = repo.findById(id);
		if (!compte.isPresent()) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok().body(compte.get());
	}

	@PostMapping(path = "/comptes")
	public ResponseEntity<Compte> addCompte(@RequestBody Compte c) {
		repo.save(c);
		return new ResponseEntity<Compte>(c, HttpStatus.CREATED);
	}

	@PutMapping(path = "/comptes")
	public ResponseEntity<Compte> updateCompte(@RequestBody Compte c) {
		repo.save(c);
		return new ResponseEntity<Compte>(c, HttpStatus.ACCEPTED);
	}

	@DeleteMapping(path = "/comptes/{id}")
	public ResponseEntity<Compte> deleteCompteById(@PathVariable String id) {
		Optional<Compte> compte = repo.findById(id);
		if (!compte.isPresent()) {
			return ResponseEntity.notFound().build();
		}
		repo.deleteById(id);
		return new ResponseEntity<Compte>(HttpStatus.ACCEPTED);
	}

}
