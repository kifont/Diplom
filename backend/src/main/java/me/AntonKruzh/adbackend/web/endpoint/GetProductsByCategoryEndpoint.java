package me.AntonKruzh.adbackend.web.endpoint;

import me.AntonKruzh.adbackend.data.ProductCategory;
import me.AntonKruzh.adbackend.data.entity.Product;
import me.AntonKruzh.adbackend.data.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class GetProductsByCategoryEndpoint {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/api/getProductsByCategory")
    @CrossOrigin(origins = "*")
    public List<Product> getProductsByCategory(@RequestParam ProductCategory category) {
        return productRepository.findAllByCategory(category);
    }

}
