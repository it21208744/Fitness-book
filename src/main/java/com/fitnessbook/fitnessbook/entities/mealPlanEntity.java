package com.fitnessbook.fitnessbook.entities;

import lombok.*;
import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@NoArgsConstructor
@AllArgsConstructor
public class mealPlanEntity {

    @Id
    private String id;

    private String planName;
    private String category;
    private String recipes;
    private String nutritions;
    private String instructions;
    private byte[] imageData;
    private String userEmail;
}
