package me.AntonKruzh.adbackend.web.endpoint;

import me.AntonKruzh.adbackend.data.entity.Product;
import me.AntonKruzh.adbackend.data.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class GetAllProductsEndpoint {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/api/getAllProducts")
    @CrossOrigin(origins = "*")
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

}
