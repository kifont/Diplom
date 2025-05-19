package me.AntonKruzh.adbackend.web.endpoint;

import lombok.Builder;
import lombok.Data;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RootEndpoint {

    @Data
    @Builder
    private static class Schema {
        private String status;
    }

    @GetMapping("/api/")
    public Schema root() {
        return Schema.builder()
                .status("OK!")
                .build();
    }

}
