package me.AntonKruzh.adbackend.data.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import me.AntonKruzh.adbackend.data.ProductCategory;

@Entity
@Data
@Table(name = "Product")
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String description;
    private String image;
    private float price;
    private String releaseForm;
    @Enumerated(EnumType.STRING) // обязательно!
    @Column(name = "category")
    private ProductCategory category;

}
