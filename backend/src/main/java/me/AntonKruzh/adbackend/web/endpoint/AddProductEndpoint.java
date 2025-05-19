package me.AntonKruzh.adbackend.web.endpoint;

import me.AntonKruzh.adbackend.data.entity.Product;
import me.AntonKruzh.adbackend.data.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AddProductEndpoint {

    @Autowired
    private ProductRepository productRepository;

    @PostMapping("/api/addProduct")
    @CrossOrigin(origins = "*")
    public void addProduct(@RequestBody Product product) {
        productRepository.save(product);
    }

}
