package main.java.com.gdeb.ripout.app;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


/**
 * GET ripouts curl -X GET http://localhost:8080/ripout
 * 
 * @author admin
 *
 */

@CrossOrigin(maxAge = 3600) // CORS support
@RestController
class LDSController {

	private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(RipoutController.class);

	// root
	@GetMapping("/main")
	List<String> all() {
		List list = new ArrayList<String>();
		list.add("Page One");
		list.add("Page Two");
		list.add("Page Three");
		return list;
	}
}