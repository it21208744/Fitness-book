package com.fitnessbook.fitnessbook.entities;



import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor


public class Workouts {
    @Id
    private String id;
    private String title;

    private String description;

    private String frequency;

    private String type;

    private String tmg;

    private String exerciseName;

    private String sets;

    private String reps;

    private String rest;


}
